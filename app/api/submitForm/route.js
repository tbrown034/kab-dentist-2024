import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { format } from "date-fns";
import { EmailTemplate } from "./EmailTemplate";

export const runtime = "nodejs";

function getCentralTime() {
  const now = new Date();
  const centralTimeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const parts = centralTimeFormatter.formatToParts(now);
  const formattedParts = {};
  parts.forEach(({ type, value }) => {
    formattedParts[type] = value;
  });

  return new Date(
    formattedParts.year,
    formattedParts.month - 1,
    formattedParts.day,
    (formattedParts.hour % 12) + (formattedParts.dayPeriod === "PM" ? 12 : 0),
    formattedParts.minute
  );
}

export async function POST(req) {
  try {
    const formData = await req.json();

    const {
      name,
      email,
      phone,
      city,
      question,
      painLevel,
      returningPatient,
      insurance,
      formType,
    } = formData;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: "keithbrowndds@zohomail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const timestamp = format(getCentralTime(), "h:mm a M/d/yy");

    const { subject, text, html } = EmailTemplate({
      name,
      email,
      phone,
      city,
      question,
      painLevel,
      returningPatient,
      insurance,
      formType,
      timestamp,
    });

    const mailOptions = {
      from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>',
      to: ["appointments@keithbrowndds.com", "trevorbrown.web@gmail.com"],
      subject,
      text,
      html,
      priority: "high",
    };

    const result = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Email sent successfully!",
        messageId: result.messageId,
        recipientCount: mailOptions.to.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error sending email",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
