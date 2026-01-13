export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const firstName = form.get("firstName")?.toString();
    const lastName = form.get("lastName")?.toString();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"GHRIG Contact" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Message from ${firstName} ${lastName}`,
      text: `
New Contact Enquiry (GHRIG)

Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message || "No message"}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
