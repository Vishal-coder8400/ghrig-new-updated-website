export const runtime = "nodejs"; // ✅ Required for Nodemailer on Vercel

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const fullName = form.get("fullName")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const phone = form.get("phone")?.toString() || "";
    const address = form.get("address")?.toString() || "";
    const pin = form.get("pin")?.toString() || "";
    const message = form.get("message")?.toString() || "";

    if (!fullName || !email || !phone || !address || !pin) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const cv = form.get("cv") as File | null;
    const attachments: any[] = [];

    if (cv && typeof cv !== "string") {
      const arrayBuffer = await cv.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: (cv as any).name || "Resume.pdf",
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"GHRIG Careers" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New Career Application from ${fullName}`,
      replyTo: email,
      text: `
New Career Application (GHRIG)

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Address: ${address}
Pin Code: ${pin}

Message:
${message || "No message provided"}

Resume is attached.
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
