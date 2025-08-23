import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
		apiVersion: "2023-10-16",
	});

	const sig = req.headers.get("stripe-signature") || "";
	const rawBody = await req.text();

	try {
		const event = stripe.webhooks.constructEvent(
			rawBody,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET || ""
		);

		// TODO: handle checkout.session.completed and customer.subscription.updated
		console.log("[stripe-webhook]", event.type);

		return NextResponse.json({ received: true });
	} catch (err: any) {
		console.error("[stripe-webhook] signature verification failed", err?.message);
		return new NextResponse("Signature verification failed", { status: 400 });
	}
}
