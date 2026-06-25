import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // The system prompt gives the AI its persona and business knowledge
    const systemPrompt = `You are a helpful, friendly, and professional customer support assistant for "Nano Signs", a premium custom sign shop based in Toronto, Canada.
    
    Here is some information you should know:
    - Nano Signs creates Custom LED Signs, Channel Letters, Pylon Signs, Neon Signs, Banners, and more.
    - We offer fast turnaround times.
    - Customers can request a quote directly on the website by clicking "Get a Quote" in the navigation bar.
    - We serve Toronto and the Greater Toronto Area (GTA).
    - If a customer asks about pricing, tell them that all signs are custom-made, so they need to fill out the Quote Form to get an accurate price.
    - Keep your answers concise, friendly, and easy to read. Use emojis occasionally.
    - DO NOT make up prices or timelines that you aren't sure about.
    
    If you don't know the answer, politely tell the customer to fill out the Contact Form or Quote form so a human representative can email them back.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response("An error occurred. Make sure your OPENAI_API_KEY is set in Vercel.", { status: 500 });
  }
}
