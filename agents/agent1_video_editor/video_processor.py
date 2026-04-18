"""
Core FFmpeg-based video processing: add fade transitions and render the final MP4.
"""

from __future__ import annotations

from pathlib import Path

import ffmpeg

from agents.utils.file_handler import tmp_path
from agents.utils.logger import get_logger

logger = get_logger(__name__)

# Duration (seconds) of fade-in and fade-out transitions
_FADE_DURATION = 0.5


def _get_duration(video_path: Path) -> float:
    """Return the duration of a video in seconds."""
    probe = ffmpeg.probe(str(video_path))
    video_streams = [s for s in probe["streams"] if s.get("codec_type") == "video"]
    if video_streams:
        return float(video_streams[0].get("duration", 0))
    return float(probe["format"].get("duration", 0))


def add_transitions(input_path: Path) -> Path:
    """
    Add a fade-in at the start and a fade-out at the end of the video.
    Returns the processed video path.
    """
    duration = _get_duration(input_path)
    fade_out_start = max(0, duration - _FADE_DURATION)
    out_path = tmp_path("with_transitions.mp4")

    logger.info(
        "Adding transitions (fade %.1fs in/out, total duration=%.1fs) → %s",
        _FADE_DURATION, duration, out_path,
    )

    (
        ffmpeg
        .input(str(input_path))
        .output(
            str(out_path),
            vf=(
                f"fade=t=in:st=0:d={_FADE_DURATION},"
                f"fade=t=out:st={fade_out_start:.3f}:d={_FADE_DURATION}"
            ),
            acodec="copy",
            **{"y": None},
        )
        .run(quiet=True)
    )

    logger.info("Transitions added → %s", out_path)
    return out_path


def render_final(input_path: Path) -> Path:
    """
    Re-encode the video to H.264/AAC MP4 at a social-media-ready quality.
    Returns the final output path.
    """
    out_path = tmp_path("final.mp4")
    logger.info("Rendering final MP4 → %s", out_path)

    (
        ffmpeg
        .input(str(input_path))
        .output(
            str(out_path),
            vcodec="libx264",
            acodec="aac",
            crf=23,                 # visually lossless quality
            preset="fast",
            movflags="+faststart",  # web-optimised: moov atom at front
            **{"y": None},
        )
        .run(quiet=True)
    )

    logger.info(
        "Render complete → %s (%.1f MB)",
        out_path, out_path.stat().st_size / 1e6,
    )
    return out_path
