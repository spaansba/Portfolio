import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/app/contact/schema";

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `${validatedData.subject}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(validatedData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(validatedData.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(validatedData.message).replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
