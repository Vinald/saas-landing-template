import { NextResponse } from "next/server";
import { createWaitlistSignup } from "@/lib/sanity";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, company } = body as Record<string, string>;

  if (!email) {
    return NextResponse.json({ error: "missing email" }, { status: 400 });
  }

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.log("[waitlist signup, no SANITY_API_WRITE_TOKEN set]", { email, company });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  await createWaitlistSignup(email, company);

  return NextResponse.json({ ok: true, mode: "saved" });
}
