import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const config = {
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
      subject: "New Emergency Form Submission",
      text: `You received a new submission from:\n
             Name: ${name}\n
             Email: ${email}\n
             Phone: ${phone}\n
             Message: ${question}\n
             Pain Level: ${painLevel}\n
             Returning Patient: ${returningPatient}\n
             Insurance: ${insurance}`,
      html: `<h4>You received a new submission from:</h4>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${question}</p>
             <p><strong>Pain Level:</strong> ${painLevel}</p>
             <p><strong>Returning Patient:</strong> ${returningPatient}</p>
             <p><strong>Insurance:</strong> ${insurance}</p>`,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return new NextResponse(
      JSON.stringify({ message: "Email successfully sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new NextResponse(
      JSON.stringify({ message: "Error sending email" }),
      { status: 500 }
    );
  }
}
