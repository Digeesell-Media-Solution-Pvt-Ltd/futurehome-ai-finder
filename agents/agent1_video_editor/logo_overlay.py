"""
Overlay a PNG logo onto a video using FFmpeg.
Position and scale are controlled by settings.
"""

from __future__ import annotations

from pathlib import Path

import ffmpeg

from agents.config import settings
from agents.utils.file_handler import tmp_path
from agents.utils.logger import get_logger

logger = get_logger(__name__)

# Margin from edges in pixels
_MARGIN = 20

_POSITION_MAP = {
    "top-left":     (f"{_MARGIN}", f"{_MARGIN}"),
    "top-right":    (f"main_w-overlay_w-{_MARGIN}", f"{_MARGIN}"),
    "bottom-left":  (f"{_MARGIN}", f"main_h-overlay_h-{_MARGIN}"),
    "bottom-right": (f"main_w-overlay_w-{_MARGIN}", f"main_h-overlay_h-{_MARGIN}"),
}


def overlay_logo(input_path: Path) -> Path:
    """
    Burn the configured logo PNG into the video.
    Returns path to the new video file.
    """
    logo = Path(settings.logo_path)
    if not logo.exists():
        logger.warning("Logo file not found at %s — skipping overlay", logo)
        return input_path

    out_path = tmp_path("with_logo.mp4")
    x, y = _POSITION_MAP.get(settings.logo_position, _POSITION_MAP["bottom-right"])

    # Scale logo to a fraction of video width, then position it
    scale_filter = f"scale=iw*{settings.logo_scale}:-1"

    logger.info("Overlaying logo (%s, scale=%.0f%%) on %s", settings.logo_position, settings.logo_scale * 100, input_path)

    (
        ffmpeg
        .input(str(input_path))
        .output(
            str(out_path),
            vf=(
                f"movie={logo.as_posix()},"
                f"{scale_filter} [logo];"
                f"[in][logo] overlay={x}:{y} [out]"
            ),
            acodec="copy",
            **{"y": None},        # overwrite output
        )
        .run(quiet=True)
    )

    logger.info("Logo overlay complete → %s", out_path)
    return out_path
