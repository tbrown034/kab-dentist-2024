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
  const startTime = Date.now();

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
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const centralTimeDate = getCentralTime();
    const timestamp = format(centralTimeDate, "h:mm a M/d/yy");

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

    // Primary and backup recipients
    const primaryRecipients = [
      "kabdds@keithbrowndds.com",
      "tbrown034@keithbrowndds.com",
    ];

    const backupRecipients = ["kabdds@aol.com", "trevorbrown.web@gmail.com"];

    const priorityMailOptions = {
      from: `"Keith Brown DDS" <${process.env.EMAIL_USER}>`,
      to: primaryRecipients,
      subject,
      text,
      html,
      priority: "high",
    };

    let priorityEmailResult = null;
    let retryCount = 0;
    const maxRetries = 2;

    while (retryCount <= maxRetries && !priorityEmailResult) {
      try {
        priorityEmailResult = await transporter.sendMail(priorityMailOptions);
        break;
      } catch (err) {
        retryCount++;
        if (retryCount <= maxRetries) {
          await new Promise((res) => setTimeout(res, 2000 * retryCount));
        }
      }
    }

    setTimeout(async () => {
      try {
        const backupMailOptions = {
          from: `"Keith Brown DDS" <${process.env.EMAIL_USER}>`,
          to: backupRecipients,
          subject: `[BACKUP] ${subject}`,
          text,
          html,
        };

        await transporter.sendMail(backupMailOptions);
      } catch (err) {
        console.error("Backup email failed:", err.message);
      }
    }, 5000);

    if (priorityEmailResult) {
      return NextResponse.json(
        {
          message: "Email sent successfully!",
          messageId: priorityEmailResult.messageId,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Priority email failed after retries",
          error: "CRITICAL_EMAIL_FAILURE",
        },
        { status: 500 }
      );
    }
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
