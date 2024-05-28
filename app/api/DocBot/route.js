import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAIAPI, // Ensure this environment variable is set
});
const openai = new OpenAIApi(configuration);

export async function POST(req) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { message: "Question is required" },
        { status: 400 }
      );
    }

    const completion = await openai.createChatCompletion({
      model: "gpt-4o-2024-05-13", // Use the most advanced model available
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant specializing in dental information. Answer the following question in a concise and informative manner, citing credible sources like the ADA.",
        },
        { role: "user", content: question },
      ],
      max_tokens: 150,
    });

    const answer = completion.data.choices[0].message.content.trim();

    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    return NextResponse.json(
      { message: "Error fetching response from OpenAI" },
      { status: 500 }
    );
  }
}
