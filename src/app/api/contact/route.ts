// Module: contact API route

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const HOST_TO_EMAIL = process.env.HOST_TO_EMAIL ?? "sababcs054@gmail.com";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string;
  });
}

export async function GET(req: Request) {
  // Redirect direct GET requests to the Contact page
  return NextResponse.redirect(new URL("/contact", req.url));
}

export async function POST(req: Request) {
  const missing: string[] = [];
  if (!GMAIL_USER) missing.push("GMAIL_USER");
  if (!GMAIL_APP_PASSWORD) missing.push("GMAIL_APP_PASSWORD");
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing ${missing.join(", ")}` },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const contentType = req.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");

  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  if (isJson) {
    const body = await req.json();
    name = (body.name || "").trim();
    email = (body.email || "").trim();
    subject = (body.subject || "").trim();
    message = (body.message || "").trim();
  } else {
    const form = await req.formData();
    name = String(form.get("name") || "").trim();
    email = String(form.get("email") || "").trim();
    subject = String(form.get("subject") || "").trim();
    message = String(form.get("message") || "").trim();
  }

  // ✅ validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  // ✅ Email content for admin
  const adminSubject = `[Contact] ${subject || "No subject"}`;
  const adminHtml = `
    <div style="font-family: Arial, sans-serif;">
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
    </div>
  `;

  // ✅ Email content for user confirmation
  const userHtml = `
    <div style="font-family: Arial, sans-serif;">
      <h2>Thanks for contacting AnayaNex</h2>
      <p>Hi ${escapeHtml(name)},</p>
      <p>We have received your request successfully. Our team will get back to you shortly.</p>
      <p><strong>Your subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Your message:</strong></p>
      <pre style="white-space:pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      <br />
      <p>— The AnayaNex Team</p>
    </div>
  `;

  try {
    // Send to company owner (host)
    await transporter.sendMail({
      from: `"AnayaNex Contact" <${GMAIL_USER}>`,
      to: HOST_TO_EMAIL,
      replyTo: email, // dynamic user's email
      subject: adminSubject, // ensure this is used
      html: adminHtml,
    });

    // Send confirmation to the user
    await transporter.sendMail({
      from: `"AnayaNex" <${GMAIL_USER}>`,
      to: email, // dynamic user's email
      subject: "We received your message",
      html: userHtml,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unexpected error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }

  // redirect or JSON based on request type
  const accept = req.headers.get("accept") || "";
  const isBrowserForm = !isJson && accept.includes("text/html");
  if (isBrowserForm) {
    return NextResponse.redirect(new URL("/contact?success=1", req.url));
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
