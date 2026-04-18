"""
Generate a voiceover MP3 using OpenAI TTS, then merge it into the video.
If a script is provided in settings it is used verbatim; otherwise a short
script is auto-generated from the video metadata.
"""

from __future__ import annotations

from pathlib import Path

import openai

from agents.config import settings
from agents.pipeline.state import VideoMetadata
from agents.utils.file_handler import tmp_path
from agents.utils.logger import get_logger

logger = get_logger(__name__)


def _build_script(metadata: VideoMetadata) -> str:
    if settings.voiceover_script:
        return settings.voiceover_script

    topic = metadata.topic or metadata.title or "this amazing property"
    audience = metadata.target_audience or "property investors and home buyers"
    brand = settings.brand_name

    return (
        f"Welcome to {brand}. "
        f"Discover {topic} — the perfect opportunity for {audience}. "
        f"Explore stunning spaces, world-class amenities, and unbeatable investment potential. "
        f"Visit {brand} today to learn more."
    )


def generate_voiceover(metadata: VideoMetadata) -> Path:
    """
    Generate TTS audio from metadata/script.
    Returns path to the MP3 file.
    """
    script = _build_script(metadata)
    logger.info("Generating voiceover (%d chars, voice=%s)", len(script), settings.openai_tts_voice)

    client = openai.OpenAI(api_key=settings.openai_api_key)
    response = client.audio.speech.create(
        model="tts-1",
        voice=settings.openai_tts_voice,
        input=script,
    )

    audio_path = tmp_path("voiceover.mp3")
    response.stream_to_file(str(audio_path))
    logger.info("Voiceover saved → %s", audio_path)
    return audio_path


def merge_voiceover(video_path: Path, audio_path: Path) -> Path:
    """
    Mix the voiceover track into the video.
    The original audio is lowered to 30% and the voiceover sits on top.
    Returns the merged video path.
    """
    import ffmpeg

    out_path = tmp_path("with_voiceover.mp4")
    logger.info("Merging voiceover into video → %s", out_path)

    video = ffmpeg.input(str(video_path))
    voiceover = ffmpeg.input(str(audio_path))

    # Lower original audio volume, mix with voiceover
    mixed_audio = ffmpeg.filter(
        [video.audio, voiceover.audio],
        "amix",
        inputs=2,
        duration="first",
        dropout_transition=2,
        weights="0.3 1.0",
    )

    (
        ffmpeg
        .output(video.video, mixed_audio, str(out_path), vcodec="copy", acodec="aac", **{"y": None})
        .run(quiet=True)
    )

    logger.info("Voiceover merge complete → %s", out_path)
    return out_path
