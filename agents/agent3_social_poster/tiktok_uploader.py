"""
Upload a video to TikTok via the TikTok Content Posting API (v2).

Flow:
  1. POST /v2/post/publish/video/init/  →  get upload_url + publish_id
  2. PUT upload_url  →  upload the raw video bytes
  3. Poll GET /v2/post/publish/status/fetch/ until status == PUBLISH_COMPLETE
"""

from __future__ import annotations

import time
from pathlib import Path

import requests

from agents.config import settings
from agents.pipeline.state import CaptionsBundle
from agents.utils.logger import get_logger

logger = get_logger(__name__)

_BASE = "https://open.tiktokapis.com"
_POLL_INTERVAL = 5
_POLL_TIMEOUT = 300


def _full_caption(captions: CaptionsBundle) -> str:
    hashtags = " ".join(f"#{h.lstrip('#')}" for h in captions.tiktok_hashtags)
    return f"{captions.tiktok_caption} {hashtags}".strip()


def upload_to_tiktok(
    video_path: Path,
    captions: CaptionsBundle,
    dry_run: bool = False,
) -> str:
    """
    Upload and publish video to TikTok.
    Returns the publish_id (share ID).
    """
    if dry_run:
        logger.info("[TikTok] DRY RUN — skipping upload of %s", video_path.name)
        return "dry-run-share-id"

    token = settings.tiktok_access_token
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json; charset=UTF-8"}

    file_size = video_path.stat().st_size
    caption_text = _full_caption(captions)

    # Step 1: Init upload
    logger.info("[TikTok] Initialising video upload (%s, %.1f MB)...", video_path.name, file_size / 1e6)
    init_resp = requests.post(
        f"{_BASE}/v2/post/publish/video/init/",
        headers=headers,
        json={
            "post_info": {
                "title": caption_text[:2200],   # TikTok caption limit
                "privacy_level": "PUBLIC_TO_EVERYONE",
                "disable_duet": False,
                "disable_comment": False,
                "disable_stitch": False,
            },
            "source_info": {
                "source": "FILE_UPLOAD",
                "video_size": file_size,
                "chunk_size": file_size,
                "total_chunk_count": 1,
            },
        },
        timeout=30,
    )
    init_resp.raise_for_status()
    data = init_resp.json().get("data", {})
    publish_id = data["publish_id"]
    upload_url = data["upload_url"]
    logger.info("[TikTok] publish_id=%s", publish_id)

    # Step 2: Upload raw bytes
    logger.info("[TikTok] Uploading video bytes...")
    with open(video_path, "rb") as fh:
        video_bytes = fh.read()

    upload_resp = requests.put(
        upload_url,
        data=video_bytes,
        headers={
            "Content-Type": "video/mp4",
            "Content-Length": str(file_size),
            "Content-Range": f"bytes 0-{file_size - 1}/{file_size}",
        },
        timeout=300,
    )
    upload_resp.raise_for_status()
    logger.info("[TikTok] Video bytes uploaded.")

    # Step 3: Poll for publish status
    logger.info("[TikTok] Waiting for publish to complete...")
    elapsed = 0
    while elapsed < _POLL_TIMEOUT:
        time.sleep(_POLL_INTERVAL)
        elapsed += _POLL_INTERVAL
        status_resp = requests.post(
            f"{_BASE}/v2/post/publish/status/fetch/",
            headers=headers,
            json={"publish_id": publish_id},
            timeout=15,
        )
        status_resp.raise_for_status()
        status = status_resp.json().get("data", {}).get("status", "")
        logger.debug("[TikTok] Status: %s (%ds elapsed)", status, elapsed)
        if status == "PUBLISH_COMPLETE":
            break
        if status in ("FAILED", "CANCELLED"):
            raise RuntimeError(f"TikTok publish failed with status: {status}")

    logger.info("[TikTok] Published → publish_id=%s", publish_id)
    return publish_id
