import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "hello@mustafah.dev";
const FROM_EMAIL   = "hello@mustafah.dev";

interface ContactPayload {
  name:          string;
  email:         string;
  etablissement: string;
  message:       string;
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const { name, email, etablissement, message } = body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Les champs nom, email et message sont requis." },
      { status: 400 }
    );
  }

  const subject = `Nouveau prospect — ${etablissement?.trim() || name.trim()}`;

  const sentAt = new Date().toLocaleString("fr-FR", {
    timeZone:    "Africa/Dakar",
    dateStyle:   "full",
    timeStyle:   "short",
  });

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body  { font-family: system-ui, sans-serif; background: #070809; color: #eceef2; margin: 0; padding: 32px; }
    .card { background: #111418; border: 1px solid #1c2028; border-radius: 12px; padding: 32px; max-width: 560px; margin: 0 auto; }
    .top  { height: 3px; background: linear-gradient(90deg, #e8c97a, #5b9cf6, #64e8a0); border-radius: 12px 12px 0 0; margin: -32px -32px 28px; }
    h1    { font-size: 20px; font-weight: 700; margin: 0 0 24px; color: #eceef2; }
    .row  { margin-bottom: 16px; }
    .lbl  { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #7d8899; margin-bottom: 4px; }
    .val  { font-size: 14px; color: #eceef2; line-height: 1.6; white-space: pre-wrap; }
    .msg  { background: #0d0f12; border: 1px solid #1c2028; border-radius: 8px; padding: 16px; }
    .foot { font-size: 11px; color: #3a4352; margin-top: 28px; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top"></div>
    <h1>✉️ Nouveau prospect via mustafah.dev</h1>

    <div class="row">
      <div class="lbl">Nom</div>
      <div class="val">${escHtml(name)}</div>
    </div>

    <div class="row">
      <div class="lbl">Email</div>
      <div class="val"><a href="mailto:${escHtml(email)}" style="color:#e8c97a;">${escHtml(email)}</a></div>
    </div>

    <div class="row">
      <div class="lbl">Établissement</div>
      <div class="val">${escHtml(etablissement?.trim() || "—")}</div>
    </div>

    <div class="row">
      <div class="lbl">Message</div>
      <div class="val msg">${escHtml(message)}</div>
    </div>

    <div class="foot">Reçu le ${escHtml(sentAt)} · mustafah.dev</div>
  </div>
</body>
</html>
  `.trim();

  try {
    const { error } = await resend.emails.send({
      from:    FROM_EMAIL,
      to:      NOTIFY_EMAIL,
      replyTo: email.trim(),
      subject,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

/** Échappe les caractères HTML pour le corps de l'email. */
function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
