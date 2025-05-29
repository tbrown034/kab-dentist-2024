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
  <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 18px; line-height: 1.7; color: #222; max-width: 480px; width: 98vw; margin: 28px auto 0 auto; padding: 0 2vw; box-sizing: border-box;">
    <div style="margin-bottom: 8px; font-size: 14px; color: #888;">
      <strong>Prospective Patient submitted:</strong> ${timestamp}
    </div>
    <h2 style="font-size: 25px; font-weight: 700; margin: 0 0 16px 0; color: #223b5a;">
      New Patient Application Intake
    </h2>

    <section style="margin-bottom: 18px;">
      <div style="font-size: 19px; font-weight: 700; color: #223b5a; margin-bottom: 6px; text-decoration: underline;">Prospective Patient Information</div>
      <div><strong>Name:</strong> ${name}</div>
      <div><strong>City:</strong> ${city}</div>
      <div><strong>Returning Patient:</strong> ${returningPatient}</div>
    </section>

    <section style="margin-bottom: 22px;">
      <div style="padding: 13px 14px; background: #fff7ea; border-radius: 7px; border: 1px solid #f3e3c0; font-size: 17px; margin-bottom: 8px;">
        <div style="font-size: 17px; font-weight: 600; color: #205e8b; margin-bottom: 7px;">
          Submitted Issue
        </div>
        ${question}
        <div style="margin-top: 7px;">
          <strong>Pain Level:</strong> ${painLevel}/10<br/>
          <strong>Insurance:</strong> ${insurance}
        </div>
      </div>
    </section>

    <section style="margin-bottom: 16px;">
      <div style="font-size: 19px; font-weight: 700; color: #223b5a; margin-bottom: 6px; text-decoration: underline;">Contact</div>
      <div style="margin-bottom: 2px;"><strong>Phone:</strong>
        <a href="tel:${phone}" style="color: #1574d1; text-decoration: underline; font-size: 18px;">${phone}</a>
      </div>
      <div><strong>Email:</strong>
        <a href="mailto:${email}" style="color: #1574d1; text-decoration: underline; font-size: 18px;">${email}</a>
      </div>
    </section>

    <footer style="margin-top: 30px; text-align: center; font-size: 13px; color: #aaa;">
      Submitted via <a href="https://keithbrowndds.com" style="color: #aaa; text-decoration: underline;">keithbrowndds.com</a>
      <br><br>
      <span style="font-size: 11px; color: #bbb;">
        <strong>Confidentiality Notice:</strong> This email and any attachments may contain confidential health information. If you are not the intended recipient, please notify the sender immediately and delete this message. Do not forward or distribute without authorization. This notification system is designed to alert you of a new patient inquiry only—do not reply with medical advice or personal data.
      </span>
    </footer>
  </div>
`;

  return { subject, text, html };
}
