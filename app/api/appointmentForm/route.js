import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = {
  api: {
    bodyParser: {
      type: "json",
    },
  },
};

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

    // Setup email data
    let mailOptions = {
      from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>',
      to: "keithbrowndds@zohomail.com",
      subject: "New Appointment Request",
      text: `Dr. Brown,

You have received a new appointment request from ${name}.

They report the following issue: ${question} and are experiencing a pain level of ${painLevel}/10.

They can be reached at ${phone} or via email at ${email} and they live in ${city}. They mentioned that they have insurance: ${insurance}.

Direct info:
Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
Message: ${question}
Pain Level: ${painLevel}
Returning Patient: ${returningPatient}
Insurance: ${insurance}`,
      html: `<h2 ">Dr. Brown,</h2>
             <p>You have received a new appointment request from <strong>${name}</strong>.</p>
             <p>They report the following issue: <strong>${question}</strong> and are experiencing a pain level of <strong>${painLevel}/10</strong>.</p>
             <p>They can be reached at <a href="tel:${phone}">${phone}</a> or via email at <a href="mailto:${email}">${email}</a>. Their reported insurance is: <strong>${insurance}</strong>.</p>
             <hr>
             <h4 style="color: #2c7a7b;">Details:</h4>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
                          <p><strong>Phone:</strong> ${city}</p>

             <p><strong>Message:</strong> ${question}</p>
             <p><strong>Pain Level:</strong> ${painLevel}</p>
             <p><strong>Returning Patient:</strong> ${returningPatient}</p>
             <p><strong>Insurance:</strong> ${insurance}</p>`,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json(
      { message: "Email successfully sent!" },
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
