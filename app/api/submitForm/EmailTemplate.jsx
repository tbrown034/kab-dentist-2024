export function EmailTemplate({
  firstName,
  lastName,
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
  const isEmergency = formType === "emergency" || painLevel >= 8;

  const name = `${firstName} ${lastName}`.trim();
  const shortName = `${firstName} ${lastName.charAt(0) || ""}.`;

  const subject = isEmergency
    ? `🔴 EMERGENCY: ${shortName} (${city}) • ${phone} @ ${timestamp}`
    : `📅 REQUEST: ${shortName} (${city}) • ${phone} @ ${timestamp}`;

  let text = `Dr. Brown,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nMessage: ${question}\nPain Level: ${painLevel}\nReturning Patient: ${returningPatient}\nInsurance: ${insurance}\nSubmitted: ${timestamp}`;

  const html = `
  <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; font-size: 17px; line-height: 1.6; color: #222; max-width: 500px; margin: 8px auto; padding: 0 16px;">

    <div style="font-size: 14px; color: #666; margin-bottom: 8px;">Submitted: ${timestamp}</div>

    <h2 style="font-size: 22px; font-weight: 700; color: #223b5a; margin: 0 0 8px;">New Patient Inquiry</h2>

    <div style="margin-bottom: 16px;">
      <div style="font-weight: 600; color: #205e8b; text-decoration: underline; margin-bottom: 6px;">Patient Info</div>
      <div><strong>Name:</strong> ${name}</div>
      <div><strong>City:</strong> ${city}</div>
      <div><strong>Returning Patient:</strong> ${returningPatient}</div>
    </div>

    <div style="margin-bottom: 8px;">
      <div style="font-weight: 600; color: #205e8b; text-decoration: underline; margin-bottom: 6px;">Issue/Notes</div>
      <div>${question}</div>
      <div style="margin-top: 6px;"><strong>Pain Level:</strong> ${painLevel}/10</div>
      <div><strong>Insurance:</strong> ${insurance}</div>
    </div>

    <div style="margin-bottom: 8px;">
      <div style="font-weight: 600; color: #205e8b; text-decoration: underline; margin-bottom: 6px;">Contact</div>
      <a href="tel:${phone}" style="display: inline-block; margin: 8px 0; background: #4a90e2; color: white; padding: 10px 14px; border-radius: 5px; text-decoration: none; font-weight: 600;">📞 Call ${phone}</a>
      <div style="font-size: 13px; color: #666;">(Tap and hold)</div>
      <div style="margin-top: 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1574d1; text-decoration: underline;">${email}</a></div>
    </div>

    <footer style="margin-top: 28px; text-align: center; font-size: 12px; color: #aaa;">
      Submitted via <a href="https://keithbrowndds.com" style="color: #aaa; text-decoration: underline;">keithbrowndds.com</a>
      <br><br>
      <span style="font-size: 11px; color: #bbb;">
        <strong>Confidentiality Notice:</strong> This email and attachments may contain confidential health info. If you are not the intended recipient, delete immediately and notify the sender. Do not reply with personal or medical information.
      </span>
    </footer>
  </div>
  `;

  return { subject, text, html };
}
