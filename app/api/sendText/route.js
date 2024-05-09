// app/api/sendText/route.js
import twilio from "twilio";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } =
    process.env;
  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  const { to, body } = await req.json();

  try {
    const message = await client.messages.create({
      to: to,
      from: TWILIO_PHONE_NUMBER,
      body: body,
    });
    return NextResponse.json({ success: true, messageSid: message.sid });
  } catch (error) {
    console.error("SMS Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
