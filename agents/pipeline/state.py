"""
PipelineState — the single data object passed between all three agents.
Each agent reads from and writes to this object.
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional


@dataclass
class VideoMetadata:
    """Metadata extracted / provided about the source video."""
    drive_file_id: str
    original_filename: str = ""
    title: str = ""
    description: str = ""
    duration_seconds: float = 0.0
    topic: str = ""          # e.g. "luxury apartment in Dubai Marina"
    target_audience: str = ""


@dataclass
class CaptionsBundle:
    """Platform-specific captions produced by Agent 2."""
    youtube_title: str = ""
    youtube_description: str = ""
    youtube_tags: list[str] = field(default_factory=list)

    instagram_caption: str = ""
    instagram_hashtags: list[str] = field(default_factory=list)

    tiktok_caption: str = ""
    tiktok_hashtags: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "youtube": {
                "title": self.youtube_title,
                "description": self.youtube_description,
                "tags": self.youtube_tags,
            },
            "instagram": {
                "caption": self.instagram_caption,
                "hashtags": self.instagram_hashtags,
            },
            "tiktok": {
                "caption": self.tiktok_caption,
                "hashtags": self.tiktok_hashtags,
            },
        }


@dataclass
class PostingResults:
    """URLs / IDs returned after Agent 3 posts to each platform."""
    youtube_url: str = ""
    youtube_video_id: str = ""
    instagram_media_id: str = ""
    instagram_permalink: str = ""
    tiktok_share_id: str = ""
    errors: list[str] = field(default_factory=list)


@dataclass
class PipelineState:
    """
    Shared state object threaded through the entire pipeline.

    Lifecycle:
        orchestrator creates it  →  agent1 fills video paths
        →  agent2 fills captions  →  agent3 fills posting results
    """

    # Input
    metadata: VideoMetadata

    # Agent 1 outputs
    downloaded_video_path: Optional[Path] = None
    edited_video_path: Optional[Path] = None     # final rendered MP4
    voiceover_path: Optional[Path] = None

    # Agent 2 outputs
    captions: CaptionsBundle = field(default_factory=CaptionsBundle)

    # Agent 3 outputs
    results: PostingResults = field(default_factory=PostingResults)

    # Pipeline control
    dry_run: bool = False

    def save_captions(self, path: Path) -> None:
        """Persist the captions bundle to a JSON file."""
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(self.captions.to_dict(), f, indent=2, ensure_ascii=False)

    def summary(self) -> str:
        lines = [
            "── Pipeline Summary ──────────────────────────",
            f"  Source file  : {self.metadata.original_filename}",
            f"  Edited video : {self.edited_video_path}",
            f"  Dry run      : {self.dry_run}",
            "",
            f"  YouTube      : {self.results.youtube_url or 'not posted'}",
            f"  Instagram    : {self.results.instagram_permalink or 'not posted'}",
            f"  TikTok       : {self.results.tiktok_share_id or 'not posted'}",
        ]
        if self.results.errors:
            lines.append("")
            lines.append("  Errors:")
            for err in self.results.errors:
                lines.append(f"    • {err}")
        lines.append("──────────────────────────────────────────────")
        return "\n".join(lines)
