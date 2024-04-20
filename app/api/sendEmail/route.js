import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, question } = await req.json();

  // Create a Nodemailer transporter using Zoho's SMTP server
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "keithbrowndds@zohomail.com",
      pass: "WUM5Z2CixZ8m",
    },
  });
  //success

  // Setup email data
  let mailOptions = {
    from: '"Keith Brown DDS" <keithbrowndds@zohomail.com>', // Sender address
    to: "keithbrowndds@zohomail.com", // List of recipients
    subject: "New Contact Form Submission", // Subject line
    text: `You received a new submission from:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${question}`, // Plain text body
    html: `<h4>You received a new submission from:</h4><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${question}</p>`, // HTML body
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
