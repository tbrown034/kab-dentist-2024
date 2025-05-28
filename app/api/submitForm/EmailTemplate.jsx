export function EmailTemplate({
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
  isTest,
}) {
  const isEmergency = formType === "emergency" || painLevel >= 8;

  // Enhanced subject for iPhone VIP notifications
  const urgencyPrefix = isEmergency
    ? "🔴 New Emergency Request"
    : "🗓️ New Appointment Request";
  const subject = `${urgencyPrefix} from ${name} • ${phone} @ ${timestamp}`;

  const introText = `You have received a new ${
    isEmergency ? "<strong>emergency</strong> " : ""
  }appointment request from <strong>${name}</strong> at <strong>${timestamp}</strong>. They report the following issue: <strong>${question}</strong> and are experiencing a pain level of <strong>${painLevel}/10</strong>. ${
    isEmergency
      ? "<strong>⚡ EMERGENCY REQUEST - RESPOND IMMEDIATELY!</strong> "
      : ""
  }They can be reached at <strong>${phone}</strong> or via email at <strong>${email}</strong>. Their reported insurance is: <strong>${insurance}</strong>.`;

  let annotatedIntroText = introText;
  if (isTest) {
    annotatedIntroText =
      `<p style="color: red;"><strong>[TEST EMAIL - NOT A REAL PATIENT]</strong></p>` +
      annotatedIntroText;
  }

  let text = `Dr. Brown,
`;
  if (isTest) {
    text = `[TEST EMAIL - NOT A REAL PATIENT]\n\n` + text;
  }

  text += `

${annotatedIntroText}

Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
Message: ${question}
Pain Level: ${painLevel}
Returning Patient: ${returningPatient}
Insurance: ${insurance}`;

  const html = `
  <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px; line-height: 1.5; color: #222; padding: 0 16px; max-width: 600px; margin: auto;">

    <p style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: ${
      isEmergency ? "#b30000" : "#1a73e8"
    };">
      ${
        isEmergency ? "🚨 Emergency Request" : "🗓️ Appointment Request"
      } submitted at ${timestamp}
    </p>

    <h2 style="margin-top: 0; margin-bottom: 8px;">New Patient Intake</h2>

    <section style="margin: 24px 0;">
      <h3 style="margin-bottom: 4px;">Patient</h3>
      <p style="margin: 0;"><strong>Name:</strong> ${name}<br>
      <strong>City:</strong> ${city}<br>
      <strong>Returning Patient:</strong> ${returningPatient}</p>
    </section>

    <section style="margin: 24px 0;">
      <div style="background: #f2f2f2; padding: 12px 16px; border-left: 4px solid #333; border-radius: 4px;">
        <strong>Concern</strong><br>
        <div style="margin-top: 6px;">
          ${question}<br>
          <strong>Pain Level:</strong> ${painLevel}/10<br>
          <strong>Insurance:</strong> ${insurance}
        </div>
      </div>
    </section>

    <section style="margin: 24px 0;">
      <h3 style="margin-bottom: 4px;">Contact</h3>
      <p style="margin: 0;">
        Phone: <a href="tel:${phone}" style="color: #1a73e8;">${phone}</a><br>
        Email: <a href="mailto:${email}" style="color: #1a73e8;">${email}</a><br>
        City: ${city}<br>
        Returning Patient: ${returningPatient}
      </p>
    </section>

    <footer style="margin-top: 40px; text-align: center; font-size: 12px; color: #888;">
      Submitted via <a href="https://keithbrowndds.com" style="color: #888;">keithbrowndds.com</a>
    </footer>
  </div>
`;

  return { subject, text, html };
}
