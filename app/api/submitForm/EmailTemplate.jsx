export function generateEmailContent({
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
}) {
  const isEmergency = formType === "emergency";
  const subject = isEmergency
    ? `New Emergency Request From ${name} at ${timestamp}`
    : `New Appointment Request From ${name} at ${timestamp}`;
  const introText = `You have received a new ${
    isEmergency ? "<strong>emergency</strong> " : ""
  }appointment request from <strong>${name}</strong> at <strong>${timestamp}</strong>. They report the following issue: <strong>${question}</strong> and are experiencing a pain level of <strong>${painLevel}/10</strong>. ${
    isEmergency ? "<strong>It is an emergency request.</strong> " : ""
  }They can be reached at <strong>${phone}</strong> or via email at <strong>${email}</strong>. Their reported insurance is: <strong>${insurance}</strong>.`;

  const text = `Dr. Brown,

  ${introText}

  Details:
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  City: ${city}
  Message: ${question}
  Pain Level: ${painLevel}
  Returning Patient: ${returningPatient}
  Insurance: ${insurance}`;

  const html = `<h2>Dr. Brown,</h2>
      <p>${introText}</p>
      <hr>
      <h4>Details:</h4>
      <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Phone:</td>
          <td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">City:</td>
          <td style="padding: 8px;">${city}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Message:</td>
          <td style="padding: 8px;">${question}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Pain Level:</td>
          <td style="padding: 8px;">${painLevel}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Returning Patient:</td>
          <td style="padding: 8px;">${returningPatient}</td>
        </tr>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px; font-weight: bold;">Insurance:</td>
          <td style="padding: 8px;">${insurance}</td>
        </tr>
      </table>`;

  return { subject, text, html };
}
