import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { format } from "date-fns";

export const runtime = {
  api: {
    bodyParser: {
      type: "json",
    },
  },
};

function getCentralTime() {
  const now = new Date();

  // Use Intl.DateTimeFormat to get the current time in Central Time
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
    } = await req.json();

    // Create a Nodemailer transporter using Zoho's SMTP server
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "keithbrowndds@zohomail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Get the current date and time in Central Time
    const centralTimeDate = getCentralTime();
    const timestamp = format(centralTimeDate, "h:mm a M-d");

    // Setup email data for Dr. Brown and kabdds
    let mailOptions = {
      from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>',
      to: [
        "keithbrowndds@zohomail.com",
        // "kabdds@aol.com",
        // "kbdds@sbcglobal.net",
      ], // Array of recipients
      subject: `New Emergency Request From ${name} at ${timestamp}`,
      text: `Dr. Brown,

You have received an emergency request from ${name}.

Timestamp: ${timestamp}

They report the following issue: ${question} and are experiencing a pain level of ${painLevel}/10.

They can be reached at ${phone} or via email at ${email} and live in ${city}. They mentioned that they have insurance: ${insurance}.

Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
Message: ${question}
Pain Level: ${painLevel}
Returning Patient: ${returningPatient}
Insurance: ${insurance}`,
      html: `<h2 style="color: #2c7a7b;">Dr. Brown,</h2>
             <p>You have received an emergency request from <strong>${name}</strong>.</p>
             <p><strong>Timestamp:</strong> ${timestamp}</p>
             <p>They report the following issue: <strong>${question}</strong> and are experiencing a pain level of <strong>${painLevel}/10</strong>.</p>
             <p>They can be reached at <a href="tel:${phone}">${phone}</a> or via email at <a href="mailto:${email}">${email}</a>. Their reported insurance is: <strong>${insurance}</strong>.</p>
             <hr>
             <h4 style="color: #2c7a7b;">Details:</h4>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>City:</strong> ${city}</p>
             <p><strong>Message:</strong> ${question}</p>
             <p><strong>Pain Level:</strong> ${painLevel}</p>
             <p><strong>Returning Patient:</strong> ${returningPatient}</p>
             <p><strong>Insurance:</strong> ${insurance}</p>`,
    };

    // Log the email options for testing
    console.log(mailOptions);

    let emailInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", emailInfo.messageId);

    // Setup email data for SMS
    let smsOptions = {
      from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>',
      to: "6303010589@txt.att.net",
      text: `New emergency request from ${name}. Check your email for details.`,
    };

    // Send the SMS
    let smsInfo = await transporter.sendMail(smsOptions);
    console.log("SMS sent: %s", smsInfo.messageId);

    return NextResponse.json(
      { message: "Email and SMS options logged successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging email options: ", error);
    return NextResponse.json(
      { message: "Error logging email options" },
      { status: 500 }
    );
  }
}
