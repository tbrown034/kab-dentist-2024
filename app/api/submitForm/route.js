import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { format } from "date-fns";
import { generateEmailContent } from "./EmailTemplate";

export const runtime = {
  api: {
    bodyParser: {
      type: "json",
    },
  },
};

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
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: "keithbrowndds@zohomail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const centralTimeDate = getCentralTime();
    const timestamp = format(centralTimeDate, "h:mm a M/d/yy");

    const { subject, text, html } = generateEmailContent({
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
      to: [
        "keithbrowndds@zohomail.com",
        "trevorbrown.web@gmail.com",
        "tbrown034@gmail.com",
        "kabdds@aol.com",
        "kbdds@sbcglobal.net",
      ],
      subject,
      text,
      html,
    };

    const emailInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", emailInfo.messageId);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
