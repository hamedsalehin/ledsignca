import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";

// Allow streaming responses up to 30 seconds - fallback enabled
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "Hi there! Our AI chatbot is currently offline for setup/maintenance. \n\nPlease contact us directly at info@led-sign.ca or call +1 416-838-8994. \n\n(Admin note: Please add the GEMINI_API_KEY to your Amplify Environment Variables and redeploy your app to enable the AI)"
        }),
        { 
          status: 503,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

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

    // Helper function to attempt generation with a specific model
    const attemptGeneration = async (modelName: string) => {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemPrompt,
      });

      const geminiMessages = messages
        .filter((m: any) => m.role === "user" || m.role === "assistant")
        .map((m: any) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));

      return await model.generateContentStream({
        contents: geminiMessages,
      });
    };

    let geminiStream;
    try {
      // 1. Try primary flagship model (Gemini 2.5 Flash / Gemini 1.5 Flash depending on environment support)
      geminiStream = await attemptGeneration("gemini-2.5-flash");
    } catch (primaryError: any) {
      console.warn("Primary model (gemini-2.5-flash) failed, attempting fallback to gemini-1.5-flash...", primaryError);
      try {
        // 2. Fall back to stable Gemini 1.5 Flash
        geminiStream = await attemptGeneration("gemini-1.5-flash");
      } catch (secondaryError: any) {
        console.warn("Secondary model (gemini-1.5-flash) failed, attempting fallback to gemini-1.5-pro...", secondaryError);
        // 3. Final fallback to Gemini 1.5 Pro
        geminiStream = await attemptGeneration("gemini-1.5-pro");
      }
    }

    // Convert the Gemini stream to Vercel AI SDK compatible stream
    const stream = GoogleGenerativeAIStream(geminiStream);
    
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error("Chat API Error:", error);
    const errorMessage = error?.message || String(error);
    return new Response(`Chat API Error: ${errorMessage}. Make sure your GEMINI_API_KEY is set correctly in Vercel.`, { status: 500 });
  }
}
