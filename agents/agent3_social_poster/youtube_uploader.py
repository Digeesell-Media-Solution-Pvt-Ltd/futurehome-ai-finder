"""
Upload a video to YouTube using the YouTube Data API v3.
Uses OAuth2 user-consent flow (token cached after first run).
"""

from __future__ import annotations

import json
import os
from pathlib import Path

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

from agents.config import settings
from agents.pipeline.state import CaptionsBundle
from agents.utils.logger import get_logger

logger = get_logger(__name__)

_SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]


def _get_credentials() -> Credentials:
    token_path = Path(settings.google_oauth_token_path)

    if token_path.exists():
        with open(token_path) as f:
            creds = Credentials.from_authorized_user_info(json.load(f), _SCOPES)
        if creds and creds.valid:
            return creds

    # First-time / expired: run OAuth consent flow
    flow = InstalledAppFlow.from_client_secrets_file(
        str(settings.google_oauth_client_secret), _SCOPES
    )
    creds = flow.run_local_server(port=0)
    token_path.parent.mkdir(parents=True, exist_ok=True)
    with open(token_path, "w") as f:
        f.write(creds.to_json())

    return creds


def upload_to_youtube(video_path: Path, captions: CaptionsBundle, dry_run: bool = False) -> tuple[str, str]:
    """
    Upload video to YouTube.
    Returns (video_id, video_url).
    """
    if dry_run:
        logger.info("[YouTube] DRY RUN — skipping upload of %s", video_path.name)
        return ("dry-run-video-id", "https://youtu.be/dry-run-video-id")

    creds = _get_credentials()
    youtube = build("youtube", "v3", credentials=creds, cache_discovery=False)

    body = {
        "snippet": {
            "title": captions.youtube_title,
            "description": captions.youtube_description,
            "tags": captions.youtube_tags,
            "categoryId": "22",  # People & Blogs (suitable for real estate)
        },
        "status": {
            "privacyStatus": "public",
            "selfDeclaredMadeForKids": False,
        },
    }

    media = MediaFileUpload(
        str(video_path),
        mimetype="video/mp4",
        resumable=True,
        chunksize=8 * 1024 * 1024,
    )

    logger.info("[YouTube] Starting upload: '%s'", captions.youtube_title)
    request = youtube.videos().insert(part="snippet,status", body=body, media_body=media)

    response = None
    while response is None:
        status, response = request.next_chunk()
        if status:
            logger.debug("[YouTube] Upload progress: %d%%", int(status.progress() * 100))

    video_id = response["id"]
    url = f"https://youtu.be/{video_id}"
    logger.info("[YouTube] Upload complete → %s", url)
    return video_id, url
