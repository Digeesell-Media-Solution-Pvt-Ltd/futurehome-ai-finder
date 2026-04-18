"""
Upload a video to Instagram via the Meta Graph API (Reels / Video post).

Flow:
  1. POST /media  →  create a container (returns creation_id)
  2. Poll until container status == FINISHED
  3. POST /media_publish  →  publish the container
"""

from __future__ import annotations

import time
from pathlib import Path

import requests

from agents.config import settings
from agents.pipeline.state import CaptionsBundle
from agents.utils.logger import get_logger

logger = get_logger(__name__)

_BASE = "https://graph.facebook.com/v19.0"
_POLL_INTERVAL = 5   # seconds between status checks
_POLL_TIMEOUT = 300  # max seconds to wait for container


def _full_caption(captions: CaptionsBundle) -> str:
    hashtags = " ".join(f"#{h.lstrip('#')}" for h in captions.instagram_hashtags)
    return f"{captions.instagram_caption}\n\n{hashtags}".strip()


def upload_to_instagram(
    video_path: Path,
    captions: CaptionsBundle,
    video_url: str = "",      # publicly accessible URL; required by Meta API
    dry_run: bool = False,
) -> str:
    """
    Publish video to Instagram.
    `video_url` must be a publicly reachable HTTPS URL pointing to the MP4.
    Returns the Instagram media ID.
    """
    if dry_run:
        logger.info("[Instagram] DRY RUN — skipping upload of %s", video_path.name)
        return "dry-run-media-id"

    if not video_url:
        raise ValueError(
            "Instagram requires a publicly accessible video_url. "
            "Host the video on a CDN or public storage bucket first."
        )

    account_id = settings.instagram_account_id
    token = settings.instagram_access_token
    caption_text = _full_caption(captions)

    # Step 1: Create media container
    logger.info("[Instagram] Creating media container...")
    resp = requests.post(
        f"{_BASE}/{account_id}/media",
        params={
            "media_type": "REELS",
            "video_url": video_url,
            "caption": caption_text,
            "share_to_feed": "true",
            "access_token": token,
        },
        timeout=30,
    )
    resp.raise_for_status()
    creation_id = resp.json()["id"]
    logger.info("[Instagram] Container created: %s", creation_id)

    # Step 2: Poll until ready
    logger.info("[Instagram] Waiting for container to finish processing...")
    elapsed = 0
    while elapsed < _POLL_TIMEOUT:
        time.sleep(_POLL_INTERVAL)
        elapsed += _POLL_INTERVAL
        status_resp = requests.get(
            f"{_BASE}/{creation_id}",
            params={"fields": "status_code", "access_token": token},
            timeout=15,
        )
        status_resp.raise_for_status()
        status_code = status_resp.json().get("status_code", "")
        logger.debug("[Instagram] Container status: %s (%ds elapsed)", status_code, elapsed)
        if status_code == "FINISHED":
            break
        if status_code == "ERROR":
            raise RuntimeError("Instagram media container processing failed.")

    # Step 3: Publish
    logger.info("[Instagram] Publishing media container %s", creation_id)
    pub_resp = requests.post(
        f"{_BASE}/{account_id}/media_publish",
        params={"creation_id": creation_id, "access_token": token},
        timeout=30,
    )
    pub_resp.raise_for_status()
    media_id = pub_resp.json()["id"]
    logger.info("[Instagram] Published → media_id=%s", media_id)
    return media_id
