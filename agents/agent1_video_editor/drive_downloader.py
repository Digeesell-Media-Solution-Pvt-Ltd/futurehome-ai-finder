"""
Downloads a file from Google Drive using a Service Account.
The service account must have at least Viewer access to the file.
"""

from __future__ import annotations

from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

from agents.config import settings
from agents.utils.file_handler import tmp_path
from agents.utils.logger import get_logger

logger = get_logger(__name__)

_SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]


def _drive_service():
    creds = service_account.Credentials.from_service_account_file(
        str(settings.google_service_account_json), scopes=_SCOPES
    )
    return build("drive", "v3", credentials=creds, cache_discovery=False)


def download_from_drive(file_id: str) -> Path:
    """
    Download a Drive file by ID into the tmp directory.
    Returns the local Path of the downloaded file.
    """
    service = _drive_service()

    # Resolve real filename from Drive metadata
    meta = service.files().get(fileId=file_id, fields="name,mimeType").execute()
    filename: str = meta.get("name", f"{file_id}.mp4")
    dest = tmp_path(f"downloaded_{filename}")

    logger.info("Downloading Drive file '%s' → %s", filename, dest)

    request = service.files().get_media(fileId=file_id)
    with open(dest, "wb") as fh:
        downloader = MediaIoBaseDownload(fh, request, chunksize=8 * 1024 * 1024)
        done = False
        while not done:
            status, done = downloader.next_chunk()
            if status:
                logger.debug("  Download progress: %d%%", int(status.progress() * 100))

    logger.info("Download complete: %s (%.1f MB)", dest, dest.stat().st_size / 1e6)
    return dest
