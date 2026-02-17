import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Messages array is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an expert UAE off-plan real estate advisor on the OffPlan Projects platform. You help users find the perfect property through conversational chat.

Your role:
- Answer questions about UAE off-plan properties, areas, developers, and market trends
- Help users narrow down their property search based on budget, lifestyle, location, and investment goals
- Provide helpful insights about different areas, developers, and property types
- When a user describes what they want, suggest they use the full AI search for detailed results

Response guidelines:
- Keep responses concise (2-4 paragraphs max)
- Be warm, professional, and knowledgeable
- Use property industry terminology naturally
- When you identify clear search criteria, end with a suggestion like: "Would you like me to search for matching properties? Click **Search Properties** below to see detailed results."
- Format prices in AED with M for millions and K for thousands
- Mention specific Dubai areas, developers, and project types when relevant

Areas you know: Dubai Marina, Downtown Dubai, Palm Jumeirah, Business Bay, Dubai Hills, JVC, Dubai Creek Harbour, Meydan, Al Marjan Island, Dubai South, Dubai Sports City, Al Furjan, Dubai Silicon Oasis, DAMAC Hills, Sheikh Zayed Road, Dubai Maritime City

Developers you know: Danube, DAMAC, Emaar, Azizi, Binghatti, Samana, Reportage, Sobha, Meraas, Green Horizon

Property types: Apartment, Villa, Townhouse, Penthouse, Duplex, Office, Retail, Land, Mansion`;

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
          ...messages,
        ],
        stream: true,
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
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please try again later." }), {
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

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-chat-search error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
