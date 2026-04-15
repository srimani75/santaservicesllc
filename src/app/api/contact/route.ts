import { Resend } from "resend";
import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/config/site";

const MAX_SUBJECT = 200;
const MAX_BODY = 12_000;

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const body = json as Record<string, unknown>;

  // Honeypot — bots often fill hidden fields
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const subject =
    typeof body.subject === "string" ? body.subject.trim() : "";
  const text = typeof body.body === "string" ? body.body.trim() : "";
  const replyToRaw =
    typeof body.replyTo === "string" ? body.replyTo.trim() : "";

  if (!subject || subject.length > MAX_SUBJECT) {
    return NextResponse.json(
      { error: "Subject is required and must be at most 200 characters." },
      { status: 400 },
    );
  }
  if (!text || text.length > MAX_BODY) {
    return NextResponse.json(
      { error: "Message is required and must be at most 12,000 characters." },
      { status: 400 },
    );
  }
  if (replyToRaw && !isValidEmail(replyToRaw)) {
    return NextResponse.json(
      { error: "Please enter a valid email address, or leave it blank." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "email_not_configured",
        message:
          "Email delivery is not configured. Use Open in email app below, or set RESEND_API_KEY.",
      },
      { status: 503 },
    );
  }

  const from =
    process.env.RESEND_FROM?.trim() ||
    "Santa Services Website <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to: CONTACT_EMAIL,
    replyTo: replyToRaw || undefined,
    subject: `[Website contact] ${subject}`,
    text: replyToRaw
      ? `Reply-To: ${replyToRaw}\n\n${text}`
      : text,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
