export const runtime = "nodejs"; // ✅ Required for Nodemailer on Vercel

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const email = form.get("email")?.toString() || "";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // ✅ SAME transporter as your career form
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

    const adminEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    /* ---------------- USER EMAIL ---------------- */
    await transporter.sendMail({
      from: `"gHRig" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "You're on the gHRig launch list 🚀",
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>
          You’ve successfully joined the gHRig launch list.
          We’ll notify you as soon as we go live.
        </p>
        <br/>
        <strong>– Team gHRig</strong>
      `,
    });

    /* ---------------- ADMIN EMAIL ---------------- */
    await transporter.sendMail({
      from: `"gHRig System" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: "New Coming Soon Subscriber",
      text: `
New Coming Soon Subscription

Email: ${email}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Coming Soon Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
