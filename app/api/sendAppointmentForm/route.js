// app/api/sendAppointmentForm/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const {
    name,
    email,
    phone,
    question,
    insurance,
    isReturning,
    isEmergency,
    painLevel,
  } = await req.json();

  // Create a Nodemailer transporter using Zoho's SMTP server
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "keithbrowndds@zohomail.com", // Your Zoho Mail email address
      pass: process.env.NEXT_PUBLIC_DEV_EMAIL_PASS,
    },
  });

  // Setup email data
  let mailOptions = {
    from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>', // Sender address
    to: "keithbrowndds@zohomail.com", // List of recipients
    subject: "New Appointment Request", // Adjust the subject line to reflect the action
    text: `You received a new appointment request from:
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Insurance: ${insurance || "Not provided"}
  Returning Patient: ${isReturning ? "Yes" : "No"}
  Emergency: ${isEmergency ? "Yes" : "No"}
  Pain Level: ${painLevel}
  Message: ${question}`, // Adjust the plain text body
    html: `<h4>You received a new appointment request from:</h4>
  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Phone:</b> ${phone}</p>
  <p><b>Insurance:</b> ${insurance || "Not provided"}</p>
  <p><b>Returning Patient:</b> ${isReturning ? "Yes" : "No"}</p>
  <p><b>Emergency:</b> ${isEmergency ? "Yes" : "No"}</p>
  <p><b>Pain Level:</b> ${painLevel}</p>
  <p><b>Message:</b> ${question}</p>`, // Adjust the HTML body
  };

  // Send the email
  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);

  return new Response(JSON.stringify({ message: "Email successfully sent!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
