import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const { name, email, phone, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "الاسم والبريد والرسالة مطلوبة." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.CONTACT_TO ?? "dezaratiperfume@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json({
      ok: true,
      warning: "تم استلام الاستفسار محلياً. قم بإعداد SMTP_HOST وSMTP_USER وSMTP_PASS لإرسال البريد.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"موقع DEZARTI" <${smtpUser}>`,
    to: mailTo,
    replyTo: email,
    subject: `استفسار جديد من ${name}`,
    text: `الاسم: ${name}\nالبريد: ${email}\nالهاتف: ${phone ?? "غير متوفر"}\n\n${message}`,
  });

  await transporter.sendMail({
    from: `"DEZARTI" <${smtpUser}>`,
    to: email,
    subject: "تم استلام استفسارك لدى DEZARTI",
    text: `مرحباً ${name}،\n\nشكراً لتواصلك مع DEZARTI. استلم فريقنا استفسارك وسيتواصل معك قريباً.\n\nDEZARTI`,
  });

  return NextResponse.json({ ok: true });
}
