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
    console.log("=== FORM SUBMISSION START ===", {
      timestamp: new Date().toISOString(),
    });

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

    console.log("=== FORM DATA RECEIVED ===", {
      name,
      formType,
      painLevel,
      isEmergency: formType === "emergency" || painLevel >= 8,
    });

    // EMAIL_USER should be your full Gmail address (e.g. appointments@keithbrowndds.com) set in your .env
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    console.log("=== VERIFYING SMTP CONNECTION ===");
    await transporter.verify();
    console.log("=== SMTP CONNECTION VERIFIED ===");

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

    // EMAIL RECIPIENTS
    const priorityRecipients = ["tbrown034@keithbrowndds.com"];

    const priorityMailOptions = {
      from: `"Keith Brown DDS" <${process.env.EMAIL_USER}>`,
      to: priorityRecipients,
      subject: subject,
      text: text,
      html: html,
      priority: "high",
    };

    console.log("=== SENDING PRIORITY EMAIL ===", {
      timestamp: new Date().toISOString(),
      recipients: priorityRecipients,
      subject: subject,
    });

    let priorityEmailResult = null;
    let retryCount = 0;
    const maxRetries = 2;

    while (retryCount <= maxRetries && !priorityEmailResult) {
      try {
        priorityEmailResult = await transporter.sendMail(priorityMailOptions);
        console.log("=== PRIORITY EMAIL SENT SUCCESS ===", {
          timestamp: new Date().toISOString(),
          messageId: priorityEmailResult.messageId,
          accepted: priorityEmailResult.accepted,
          rejected: priorityEmailResult.rejected,
          retryAttempt: retryCount,
        });
        break;
      } catch (retryError) {
        retryCount++;
        console.error(`=== PRIORITY EMAIL RETRY ${retryCount} FAILED ===`, {
          timestamp: new Date().toISOString(),
          error: retryError.message,
          retryAttempt: retryCount,
        });

        if (retryCount <= maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, 2000 * retryCount)
          );
        }
      }
    }

    setTimeout(async () => {
      const backupRecipients = [
        "trevorbrown.web@gmail.com",
        "admin@keithbrowndds.com",
      ];

      try {
        console.log("=== SENDING BACKUP EMAILS ===", {
          timestamp: new Date().toISOString(),
          recipients: backupRecipients,
        });

        const backupMailOptions = {
          from: `"Keith Brown DDS" <${process.env.EMAIL_USER}>`,
          to: backupRecipients,
          subject: `[BACKUP] ${subject}`,
          text: text,
          html: html,
        };

        const backupResult = await transporter.sendMail(backupMailOptions);

        console.log("=== BACKUP EMAILS SENT SUCCESS ===", {
          timestamp: new Date().toISOString(),
          messageId: backupResult.messageId,
          accepted: backupResult.accepted,
          rejected: backupResult.rejected,
        });
      } catch (backupError) {
        console.error("=== BACKUP EMAIL FAILED (NON-CRITICAL) ===", {
          timestamp: new Date().toISOString(),
          error: backupError.message,
          code: backupError.code,
        });
      }
    }, 5000);

    if (priorityEmailResult) {
      const processingTime = Date.now() - startTime;
      console.log("=== EMAIL SYSTEM SUCCESS ===", {
        timestamp: new Date().toISOString(),
        processingTime: `${processingTime}ms`,
        priorityDelivered: true,
        backupScheduled: true,
      });

      return NextResponse.json(
        {
          message: "Email sent successfully!",
          messageId: priorityEmailResult.messageId,
          processingTime: `${processingTime}ms`,
          recipientCount: priorityRecipients.length,
        },
        { status: 200 }
      );
    } else {
      console.error("=== CRITICAL: PRIORITY EMAIL FAILED ===", {
        timestamp: new Date().toISOString(),
        formType: formType,
        painLevel: painLevel,
        patientName: name,
        retriesAttempted: maxRetries + 1,
      });

      return NextResponse.json(
        {
          message:
            "Priority email failed after retries - manual intervention required",
          error: "CRITICAL_EMAIL_FAILURE",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error("=== EMAIL SYSTEM ERROR ===", {
      timestamp: new Date().toISOString(),
      error: error.message,
      code: error.code,
      stack: error.stack,
      processingTime: `${processingTime}ms`,
    });

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
