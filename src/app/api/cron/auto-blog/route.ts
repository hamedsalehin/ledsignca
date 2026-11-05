import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// Sample trending news templates tailored to Toronto signage & print industry
const TRENDING_TOPICS = [
  {
    title: "Top Commercial Sign Trends for Toronto Storefronts in 2026",
    description: "Explore the latest trends in custom LED channel letters, neon signage, and eco-friendly vinyl banners driving retail foot traffic across Toronto.",
    image: "/uploads/2023/08/neon-led2-300x146.jpg",
    content: `
<h2>Elevating Toronto Retail Storefronts in 2026</h2>
<p>As competition grows across the Greater Toronto Area (GTA), local business owners are turning to innovative signage to capture attention and boost foot traffic. From Scarborough to Downtown Toronto, storefront visibility is key to retail success.</p>

<h3>1. Dynamic Waterproof Neon LED Signs</h3>
<p>Modern LED neon technology has replaced fragile glass tubing with energy-efficient, weather-resistant silicone. Designed for Canadian winter conditions, these vibrant displays allow businesses to shine 24/7 with minimal energy consumption.</p>

<h3>2. Dimensional Channel Letter Signs</h3>
<p>Illuminated 3D channel letters remain the gold standard for plaza storefronts and commercial buildings. They deliver high brand authority and clear visibility day or night.</p>

<h3>3. High-Impact Retractable Banners & Flags</h3>
<p>For trade shows and outdoor promotions, portable teardrop flags and heavy-duty vinyl banners offer versatile marketing options that can be set up in seconds.</p>

<p>Need custom signage for your Toronto business? Contact <strong>Nano Signs</strong> at <strong>416-838-8994</strong> or get in touch online.</p>
`
  },
  {
    title: "How LED Display Boards Help Toronto Businesses Stand Out",
    description: "Discover why programmable full-color LED screens and sign boards offer maximum return on investment for Ontario business owners.",
    image: "/uploads/2022/02/Custom-LED-Sign-Board.png",
    content: `
<h2>Maximizing Visibility with Full-Color LED Screens</h2>
<p>Programmable LED display boards give business owners total control over their message. Whether advertising daily promotions, operating hours, or special announcements, high-brightness LED signs ensure your business gets noticed.</p>

<h3>Key Benefits of LED Signs:</h3>
<ul>
  <li><strong>Instant Message Updates:</strong> Update your announcements on demand via remote or computer.</li>
  <li><strong>High Brightness & Clarity:</strong> Visible even under direct Canadian sunlight.</li>
  <li><strong>Low Energy Consumption:</strong> Energy-efficient diodes last over 60,000 hours.</li>
</ul>

<p>Ready to upgrade your store's front signage? Visit <strong>Nano Signs Toronto</strong> or order your custom sign online today.</p>
`
  }
];

export async function GET(req: Request) {
  // Check authorization header or secret query parameter
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const authHeader = req.headers.get("authorization");

  const expectedSecret = process.env.CRON_SECRET || "nanosigns_cron_2026";
  const isAuthorized =
    secret === expectedSecret ||
    authHeader === `Bearer ${expectedSecret}`;

  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized cron execution" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Missing Supabase configuration" }, { status: 500 });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Select a topic based on day of month
    const topicIndex = new Date().getDate() % TRENDING_TOPICS.length;
    const topic = TRENDING_TOPICS[topicIndex];

    const slug = topic.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const todayDate = new Date().toISOString().split("T")[0];

    // Insert or update auto-generated post into Supabase blog_posts table
    const { data, error } = await supabase
      .from("blog_posts")
      .upsert({
        slug,
        title: topic.title,
        description: topic.description,
        content: topic.content,
        image: topic.image,
        date: todayDate,
        updated_at: new Date().toISOString(),
      }, { onConflict: "slug" })
      .select();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: `Daily blog article published successfully: ${topic.title}`,
      data,
    });
  } catch (err: any) {
    console.error("Auto-blog cron error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
