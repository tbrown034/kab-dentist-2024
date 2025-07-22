// app/actions/submitForm.js
"use server";

import nodemailer from "nodemailer";
import { EmailTemplate } from "@/app/api/submitForm/EmailTemplate";
import { officeNumber } from "@/lib/constants/constants";

// Returns { time: "h:mm AM/PM M/d/yy", zone: "CST/CDT" }
function getCentralTimeInfo() {
  const now = new Date();

  const options = {
    timeZone: "America/Chicago",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    month: "numeric",
    day: "numeric",
    year: "2-digit",
    timeZoneName: "short", // e.g., CDT or CST
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(now);
  const lookup = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return {
    time: `${lookup.hour}:${lookup.minute} ${lookup.dayPeriod} ${lookup.month}/${lookup.day}/${lookup.year}`,
    zone: lookup.timeZoneName || "CT",
  };
}

// Simple in-memory rate limiting (resets on server restart)
const recentSubmissions = new Map();

export async function submitForm(prevState, formData) {
  try {
    const isDev = process.env.NODE_ENV === "development";

    if (isDev) {
      console.log("🧪 [DEV MODE] Relaxed validation enabled");
    }

    // Extract and sanitize form data immediately
    const sanitizeInput = (input) => {
      if (typeof input !== "string") return input;
      return input.replace(/[<>]/g, "").trim().substring(0, 1000);
    };

    const data = {
      firstName: sanitizeInput(formData.get("firstName")),
      lastName: sanitizeInput(formData.get("lastName")),
      email: sanitizeInput(formData.get("email")),
      phone: sanitizeInput(formData.get("phone")),
      city: sanitizeInput(formData.get("city")),
      insurance: sanitizeInput(formData.get("insurance")),
      question: sanitizeInput(formData.get("question")),
      painLevel: formData.get("painLevel"),
      returningPatient: formData.get("returningPatient"),
      formType: formData.get("formType"),
    };

    // 1. HONEYPOT CHECK (skip in dev)
    if (!isDev && formData.get("fullName")) {
      console.log(`🚫 Spam blocked (honeypot)`);
      return { type: "error", message: "Please try again later." };
    }

    // 2. BASIC REQUIRED FIELDS
    const missing = [];
    const minLength = isDev ? 1 : 2;
    const minQuestion = isDev ? 3 : 8;

    if (!data.firstName || data.firstName.length < minLength)
      missing.push("First name");
    if (!data.lastName || data.lastName.length < minLength)
      missing.push("Last name");
    if (!data.email) missing.push("Email");
    if (!data.phone) missing.push("Phone");
    if (!data.city || data.city.length < minLength) missing.push("City");
    if (!data.insurance || data.insurance.length < minLength)
      missing.push("Insurance");
    if (!data.question || data.question.length < minQuestion)
      missing.push("Details");
    if (!data.returningPatient) missing.push("Returning patient selection");

    if (missing.length > 0) {
      return {
        type: "error",
        message: `Please fill in: ${missing.join(", ")}.`,
      };
    }

    // 3. EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { type: "error", message: "Please enter a valid email address." };
    }

    // 4. PHONE VALIDATION
    const phoneDigits = data.phone.replace(/[^\d]/g, "");
    if (phoneDigits.length < 10) {
      return { type: "error", message: "Please enter a valid phone number." };
    }

    // 5. RATE LIMITING (more lenient in dev)
    const now = Date.now();
    const rateLimit = isDev ? 30000 : 300000; // 30s dev, 5min prod
    const lastSubmission = recentSubmissions.get(data.email);

    if (lastSubmission && now - lastSubmission < rateLimit) {
      const waitTime = Math.round((rateLimit - (now - lastSubmission)) / 1000);
      return {
        type: "error",
        message: isDev
          ? `[DEV] Wait ${waitTime}s or use different email`
          : "Please wait a few minutes before submitting again.",
      };
    }

    // 6. BASIC SPAM DETECTION (skip in dev)
    if (!isDev) {
      // Marketing spam keywords
      const spamKeywords = [
        "seo",
        "website design",
        "web development",
        "marketing",
        "traffic",
        "ranking",
      ];
      const hasSpam = spamKeywords.some((word) =>
        data.question.toLowerCase().includes(word)
      );

      if (hasSpam) {
        console.log(`🚫 Marketing spam: ${data.email}`);
        return {
          type: "error",
          message:
            `Please contact our office directly for dental inquiries at ${officeNumber}.`,
        };
      }
    }

    // Track submission
    recentSubmissions.set(data.email, now);

    // Clean up old entries periodically
    if (Math.random() < 0.1) {
      // 10% chance on each submission
      for (const [email, timestamp] of recentSubmissions.entries()) {
        if (now - timestamp > 3600000) {
          // 1 hour old
          recentSubmissions.delete(email);
        }
      }
    }

    // 7. SEND EMAIL
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const { time, zone } = getCentralTimeInfo();
    const timestamp = `${time} ${zone}`;
    const { subject, text, html } = EmailTemplate({ ...data, timestamp });

    const recipients = isDev
      ? ["trevorbrown.web@gmail.com"]
      : [
          "kabdds@keithbrowndds.com",
          "tbrown034@keithbrowndds.com",
          "office@keithbrowndds.com",
        ];

    const finalSubject = isDev ? `[DEV] ${subject}` : subject;

    // Simple email sending (no complex retry logic)
    let emailsSent = 0;

    for (const recipient of recipients) {
      try {
        await transporter.sendMail({
          from: `"Keith Brown DDS" <${process.env.EMAIL_USER}>`,
          to: recipient,
          subject: finalSubject,
          text,
          html,
        });
        emailsSent++;
        console.log(`✅ Email sent to ${recipient}`);
      } catch (err) {
        console.error(`❌ Email failed to ${recipient}:`, err.message);
      }
    }

    // Send backup email in production (simplified)
    if (!isDev && emailsSent > 0) {
      setTimeout(async () => {
        try {
          await transporter.sendMail({
            from: `"Keith Brown DDS" <${process.env.EMAIL_USER}>`,
            to: "trevorbrown.web@gmail.com",
            subject: `[BACKUP] ${finalSubject}`,
            text,
            html,
          });
          console.log(`✅ Backup email sent`);
        } catch (err) {
          console.error(`❌ Backup email failed:`, err.message);
        }
      }, 3000);
    }

    if (emailsSent > 0) {
      const logPrefix = isDev ? "[DEV] " : "";
      console.log(
        `${logPrefix}✅ Form submitted: ${data.firstName} ${data.lastName} (${data.email})`
      );

      return {
        type: "success",
        message: isDev
          ? "[DEV] Form submitted successfully!"
          : "Form submitted successfully!",
      };
    } else {
      return {
        type: "error",
        message:
          `Failed to send email. Please call our office at ${officeNumber}.`,
      };
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      type: "error",
      message:
        `Sorry, we're having an issue. Please try again or call ${officeNumber}.`,
    };
  }
}
