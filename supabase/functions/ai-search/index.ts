import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { query } = await req.json();
    if (!query || typeof query !== "string") {
      return new Response(JSON.stringify({ error: "Query is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a structured data extraction engine for a UAE off-plan property search platform.

Your job is to parse a natural language property search query and extract structured filters.

Return a JSON object with ONLY these fields (omit any field that the user didn't mention):

{
  "areas": string[] — area names like "Business Bay", "Dubai Marina", "JVC", etc.
  "developers": string[] — developer names like "DAMAC", "Emaar", "Danube", etc.
  "property_types": string[] — from: Apartment, Villa, Townhouse, Penthouse, Duplex, Office, Retail, Land, Mansion
  "bedroom_types": string[] — from: Studio, 1BR, 2BR, 3BR, 4BR, 5BR+
  "max_price": number — maximum price in AED (convert M to millions, K to thousands)
  "min_price": number — minimum price in AED
  "handover_year": number — target handover year
  "investment_tags": string[] — from: High ROI, High Capital Appreciation, Rental Income Focused, Affordable Entry, Luxury Segment, Branded Residences, Limited Units, Investor Hotspot
  "lifestyle_tags": string[] — from: Waterfront, Beachfront, Golf Community, Family Friendly, Gated Community, Popular Location, Metro Access, Good Connectivity, Smart Home, Wellness Living, Resort Style, Island Living, City View, Skyline View
}

Rules:
- ONLY return valid JSON, nothing else
- Map "under 1.5M" → max_price: 1500000
- Map "above 2M" → min_price: 2000000
- Map "2 bedroom" or "2 bed" → bedroom_types: ["2BR"]
- Map "rental income" → investment_tags: ["Rental Income Focused"]
- Map "waterfront" → lifestyle_tags: ["Waterfront"]
- Map "family" → lifestyle_tags: ["Family Friendly"]
- Map "affordable" → investment_tags: ["Affordable Entry"]
- Map "luxury" → investment_tags: ["Luxury Segment"]
- Map "branded" → investment_tags: ["Branded Residences"]
- Be smart about variations (e.g., "by the water" = Waterfront, "good for rent" = Rental Income Focused)
- If user mentions a specific area or developer, include it even if slightly misspelled`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query },
        ],
        temperature: 0,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI processing failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiResult = await response.json();
    const content = aiResult.choices?.[0]?.message?.content || "{}";
    
    // Extract JSON from the response (handle markdown code blocks)
    let jsonStr = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }
    
    let filters;
    try {
      filters = JSON.parse(jsonStr);
    } catch {
      console.error("Failed to parse AI response:", content);
      filters = {};
    }

    return new Response(JSON.stringify({ filters, rawQuery: query }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-search error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
