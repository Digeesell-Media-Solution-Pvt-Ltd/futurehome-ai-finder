"""
Caption generation via Claude API.
Produces platform-optimised copy for YouTube, Instagram, and TikTok in one call.
"""

from __future__ import annotations

import json

import anthropic

from agents.config import settings
from agents.pipeline.state import CaptionsBundle, VideoMetadata
from agents.utils.logger import get_logger

logger = get_logger(__name__)

_SYSTEM_PROMPT = """\
You are a social media content strategist specialising in real estate video marketing.
Given video metadata, produce platform-optimised captions and copy.

Respond ONLY with a valid JSON object matching this exact schema — no markdown, no explanation:
{
  "youtube_title": "<max 100 chars, SEO-rich>",
  "youtube_description": "<300-500 words, include call-to-action and relevant keywords>",
  "youtube_tags": ["<tag1>", "<tag2>", ...],
  "instagram_caption": "<engaging caption, 150-200 words, ends with CTA>",
  "instagram_hashtags": ["<hashtag1>", ...],
  "tiktok_caption": "<punchy, 1-2 sentences, hooks viewer in first 3 words>",
  "tiktok_hashtags": ["<hashtag1>", ...]
}

Rules:
- YouTube tags: 10-15 tags, mix of broad and specific
- Instagram hashtags: 20-25, mix of niche and broad (#realestate, #dubai, etc.)
- TikTok hashtags: 5-8, trending-friendly
- Always include the brand name naturally
- Keep all copy authentic and engaging, never spammy
"""


def generate_captions(metadata: VideoMetadata) -> CaptionsBundle:
    """Call Claude to produce all platform captions in one API request."""
    client = anthropic.Anthropic(api_key=settings.anthropic_api_key)

    user_content = (
        f"Brand: {settings.brand_name}\n"
        f"Video title: {metadata.title or 'Untitled'}\n"
        f"Topic: {metadata.topic or 'Real estate property showcase'}\n"
        f"Description: {metadata.description or 'No description provided'}\n"
        f"Target audience: {metadata.target_audience or 'Property investors and home buyers'}\n"
        f"Video duration: {metadata.duration_seconds:.0f} seconds\n"
    )

    logger.info("[Agent2] Calling Claude (%s) for caption generation...", settings.anthropic_model)

    message = client.messages.create(
        model=settings.anthropic_model,
        max_tokens=1500,
        system=_SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_content}],
    )

    raw = message.content[0].text.strip()
    logger.debug("[Agent2] Raw Claude response: %s", raw[:200])

    try:
        data = json.loads(raw)
    except json.JSONDecodeError as exc:
        logger.error("[Agent2] Failed to parse Claude JSON response: %s", exc)
        raise

    bundle = CaptionsBundle(
        youtube_title=data.get("youtube_title", ""),
        youtube_description=data.get("youtube_description", ""),
        youtube_tags=data.get("youtube_tags", []),
        instagram_caption=data.get("instagram_caption", ""),
        instagram_hashtags=data.get("instagram_hashtags", []),
        tiktok_caption=data.get("tiktok_caption", ""),
        tiktok_hashtags=data.get("tiktok_hashtags", []),
    )

    logger.info(
        "[Agent2] Captions generated — YT title: '%s'", bundle.youtube_title
    )
    return bundle
