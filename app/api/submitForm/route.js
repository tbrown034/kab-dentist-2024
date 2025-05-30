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
  const url = new URL(req.url);
  const isTest = url.searchParams.get("test") === "true";
  const testType = url.searchParams.get("type") || "normal"; // 'normal' or 'emergency'

  // TEST PAYLOADS constant as per instructions
  const TEST_PAYLOADS = {
    emergency: {
      testName: "Test Emergency",
      name: "John Doe",
      email: "johndoe.emergency@example.com",
      phone: "555-982-1001",
      city: "Chicago",
      question: "My tooth is killing me! It's swollen and I can't sleep.",
      painLevel: 9,
      returningPatient: "no",
      insurance: "Delta Dental",
      formType: "emergency",
    },
    normal: {
      testName: "Test Regular",
      name: "Jane Smith",
      email: "janesmith.routine@example.com",
      phone: "555-293-8442",
      city: "Naperville",
      question: "Just need a routine cleaning and checkup.",
      painLevel: 2,
      returningPatient: "yes",
      insurance: "MetLife",
      formType: "appointment",
    },
  };

  try {
    console.log("=== FORM SUBMISSION START ===", {
      timestamp: new Date().toISOString(),
      isTest: isTest,
      testType: testType,
    });

    let formData;

    // TEST MODE - Use predefined test data
    if (isTest) {
      console.log("=== TEST MODE ACTIVATED ===");
      formData =
        TEST_PAYLOADS[testType === "emergency" ? "emergency" : "normal"];
    } else {
      // REAL MODE - Use actual form data
      formData = await req.json();
    }

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
      isTest: isTest,
      testType: testType,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: "keithbrowndds@zohomail.com",
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
      isTest, // Pass test flag to email generator
      testType,
    });

    // EMAIL RECIPIENTS - Different for test vs production
    const priorityRecipients = isTest
      ? [
          "trevorbrown.web@gmail.com", // Only your email for tests
          "tbrown034@gmail.com", // Your backup email for tests
        ]
      : [
          "kabdds@aol.com", // Dr. Brown's MAIN email (iPhone VIP notifications)
          "trevorbrown.web@gmail.com", // Your monitoring email
        ];

    const priorityMailOptions = {
      from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>',
      to: priorityRecipients,
      subject: subject,
      text: text,
      html: html,
      priority: "high", // Mark as high priority for faster delivery
    };

    console.log("=== SENDING PRIORITY EMAIL ===", {
      timestamp: new Date().toISOString(),
      recipients: priorityRecipients,
      subject: subject,
    });

    // Send priority email with retry logic
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
          ); // 2s, 4s delays
        }
      }
    }

    // BACKUP EMAILS - Only send for real emails, not tests
    if (!isTest) {
      setTimeout(async () => {
        const backupRecipients = [
          "tbrown034@gmail.com", // Your backup email
          "kbdds@sbcglobal.net", // Problematic SBC email (separate to avoid delays)
        ];

        try {
          console.log("=== SENDING BACKUP EMAILS ===", {
            timestamp: new Date().toISOString(),
            recipients: backupRecipients,
          });

          const backupMailOptions = {
            from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>',
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
      }, 5000); // 5 second delay for backup emails
    } else {
      console.log("=== SKIPPING BACKUP EMAILS (TEST MODE) ===");
    }

    // Check if priority email succeeded
    if (priorityEmailResult) {
      const processingTime = Date.now() - startTime;
      console.log("=== EMAIL SYSTEM SUCCESS ===", {
        timestamp: new Date().toISOString(),
        processingTime: `${processingTime}ms`,
        priorityDelivered: true,
        backupScheduled: !isTest,
        isTest: isTest,
        testType: testType,
      });

      return NextResponse.json(
        {
          message: isTest
            ? `Test email sent successfully! (${testType} test)`
            : "Email sent successfully!",
          messageId: priorityEmailResult.messageId,
          processingTime: `${processingTime}ms`,
          isTest: isTest,
          testType: testType,
          recipientCount: priorityRecipients.length,
        },
        { status: 200 }
      );
    } else {
      // Priority email failed after retries - this is critical
      console.error("=== CRITICAL: PRIORITY EMAIL FAILED ===", {
        timestamp: new Date().toISOString(),
        formType: formType,
        painLevel: painLevel,
        patientName: name,
        retriesAttempted: maxRetries + 1,
        isTest: isTest,
      });

      // TODO: Add emergency fallback here (SMS, Slack, etc.)
      // if (formType === 'emergency' || painLevel >= 8) {
      //   await sendEmergencySMS(name, phone, painLevel);
      // }

      return NextResponse.json(
        {
          message: isTest
            ? "Test email failed after retries"
            : "Priority email failed after retries - manual intervention required",
          error: "CRITICAL_EMAIL_FAILURE",
          isTest: isTest,
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
