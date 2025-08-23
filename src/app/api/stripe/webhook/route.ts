// Stripe webhook handler - Coming Soon!
// This will be implemented when billing features are added

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("[stripe-webhook] Webhook received - feature coming soon!");
  
  return NextResponse.json({ 
    message: "Stripe billing coming soon! 🚀",
    status: "under_development",
    received: true 
  });
}