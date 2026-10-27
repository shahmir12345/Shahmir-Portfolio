import { NextResponse } from "next/server";
import { Resend } from "resend";

// This runs on the SERVER only (never in the visitor's browser),
// so your API key stays secret.

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam trap: bots fill the hidden "website" field. Pretend success and do nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email);
  const type = str(body.type) || "Not specified";
  const service = str(body.service);
  const message = str(body.message);

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 150 || message.length > 3000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL in environment variables.");
    return NextResponse.json(
      { error: "The contact form is not set up yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Resend's free test sender
      to,
      replyTo: email, // pressing "Reply" in Gmail goes straight to the client
      subject: `New project enquiry from ${name} (${service})`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Contacting as:</b> ${escapeHtml(type)}</p>
        <p><b>Service:</b> ${escapeHtml(service)}</p>
        <p><b>Message:</b></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send the message. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not send the message. Please try again." }, { status: 500 });
  }
}
