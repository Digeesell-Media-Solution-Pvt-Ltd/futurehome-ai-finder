"""
Utility helpers for managing temporary and output files during the pipeline run.
"""

from __future__ import annotations

import shutil
from pathlib import Path

from agents.config import settings
from agents.utils.logger import get_logger

logger = get_logger(__name__)


def ensure_tmp_dir() -> Path:
    """Create the tmp directory if it doesn't exist and return its path."""
    tmp = Path(settings.tmp_dir)
    tmp.mkdir(parents=True, exist_ok=True)
    return tmp


def tmp_path(filename: str) -> Path:
    """Return an absolute path inside the tmp directory."""
    return ensure_tmp_dir() / filename


def cleanup_tmp() -> None:
    """Remove all files in the tmp directory (keeps the directory itself)."""
    tmp = Path(settings.tmp_dir)
    if tmp.exists():
        for item in tmp.iterdir():
            if item.is_file():
                item.unlink()
            elif item.is_dir():
                shutil.rmtree(item)
        logger.info("Cleaned up tmp directory: %s", tmp)


def save_output(src: Path, dest_name: str) -> Path:
    """Copy a file from tmp to the project root output folder."""
    output_dir = Path("agents/output")
    output_dir.mkdir(parents=True, exist_ok=True)
    dest = output_dir / dest_name
    shutil.copy2(src, dest)
    logger.info("Saved output file: %s", dest)
    return dest
