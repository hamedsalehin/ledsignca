import { NextRequest, NextResponse } from "next/server";
import { calculateShippingRates } from "@/lib/shippingCalculator";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { items, zipCode, residential, liftgate } = json;

    if (!zipCode) {
      return NextResponse.json(
        { error: "ZIP/Postal code is required." },
        { status: 400 }
      );
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Cart items are required." },
        { status: 400 }
      );
    }

    const rates = calculateShippingRates(items, zipCode, {
      residential: residential !== false,
      liftgate: !!liftgate,
    });

    return NextResponse.json({ success: true, rates });
  } catch (error: any) {
    console.error("Error in shipping-rates endpoint:", error);
    return NextResponse.json(
      { error: error.message || "Failed to calculate shipping rates." },
      { status: 500 }
    );
  }
}
