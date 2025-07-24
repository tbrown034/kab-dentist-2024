import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAIAPI, // Ensure this environment variable is set
});

if (!process.env.OPENAIAPI) {
  console.error("OpenAI API key is not set in environment variables.");
}

// Predefined answers for specific questions about Dr. Brown's practice
const predefinedAnswers = {
  location:
    "Dr. Keith A. Brown's office is located on the third floor of the Fifth Third Bank building at the heart of Naperville, Illinois, complete with ample parking and accessibility.",
  hours:
    "Our office hours are Monday, Wednesday, and Friday from 8 AM to 5 PM. This adjusted schedule allows for proper sterilization between visits.",
  appointment:
    `You can book an appointment by calling our office at (630) 357-9358 or by visiting our website and using our online scheduling system.`,
  insurance:
    "Yes, we accept a variety of insurance plans. Please contact our office for more details on the specific plans we accept.",
  services:
    "We offer a comprehensive range of dental services, including general dentistry, cosmetic dentistry, emergency dentistry, endodontics and root canals, periodontics, and more.",
  emergency:
    "Yes, we offer 24/7 emergency care. For immediate assistance, call our office anytime or fill out the emergency hotline form on our website.",
  credentials:
    "Dr. Keith A. Brown, DDS, FAGD, has over four decades of experience in dentistry. He is a Fellow of the Academy of General Dentistry and a member of the American Dental Association, Chicago Dental Society, and American Equilibration Society.",
  sedation:
    "Yes, we offer free nitrous oxide (laughing gas) for pain-free appointments. This service is complimentary with any visit.",
  payment:
    "We accept all major credit cards, insurance plans, and payment programs. We also offer flexible financing options to make dental care more accessible for all our patients.",
  fsas: "Absolutely, FSAs and HSAs are great for covering dental expenses with pre-tax dollars, reducing your taxable income and saving you money.",
  billing:
    "We handle the paperwork and direct bill your insurance company, ensuring you receive the benefits you are entitled to.",
  fees: "Our billing process is transparent. We provide detailed estimates before any treatment and discuss all possible costs with you.",
  cost: "We offer free consultations to give you a detailed breakdown of potential treatments and associated costs, ensuring you make informed decisions about your dental care.",
  no_insurance:
    "Contact our office to learn more about our financial assistance programs. We are dedicated to making quality dental care accessible to everyone.",
  volunteer:
    "Dr. Brown volunteers a week of his time annually to travel to Tegucigalpa, Honduras on a mission trip with Crossroads Community Church, providing free dental care to hundreds of impoverished individuals.",
  medicaid: "Unfortunately, we do not accept Medicaid.",
};

// Keywords mapping to predefined answers
const keywordMapping = {
  location: ["where is your office", "office location", "located", "address"],
  hours: ["office hours", "working hours", "when are you open", "hours"],
  appointment: [
    "book an appointment",
    "schedule an appointment",
    "make an appointment",
  ],
  insurance: ["accept insurance", "insurance plans", "insurance"],
  services: ["services", "what services", "dental services", "offer"],
  emergency: ["emergency dental services", "emergency care", "emergency"],
  credentials: ["credentials", "qualifications", "background"],
  sedation: ["sedation dentistry", "nitrous oxide", "laughing gas"],
  payment: ["payment options", "payment methods", "how to pay"],
  fsas: ["fsas", "hsas", "flexible spending account", "health savings account"],
  billing: ["insurance billing", "how does billing work", "billing process"],
  fees: ["hidden fees", "any fees", "additional fees"],
  cost: ["estimate cost", "treatment cost", "cost of treatment"],
  no_insurance: ["no insurance", "don't have insurance", "without insurance"],
  volunteer: ["volunteer work", "community service", "volunteer"],
  medicaid: ["accept medicaid", "medicaid"],
};

function matchQueryToAnswer(query) {
  const lowercasedQuery = query.toLowerCase();
  for (const [key, phrases] of Object.entries(keywordMapping)) {
    for (const phrase of phrases) {
      if (lowercasedQuery.includes(phrase)) {
        return predefinedAnswers[key];
      }
    }
  }
  return null;
}

export async function POST(req) {
  try {
    const { question } = await req.json();
    console.log("Received question:", question);

    if (!question) {
      console.log("No question provided");
      return NextResponse.json(
        { message: "Question is required" },
        { status: 400 }
      );
    }

    const predefinedAnswer = matchQueryToAnswer(question);
    if (predefinedAnswer) {
      return NextResponse.json({ answer: predefinedAnswer }, { status: 200 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant specializing in dental information.
          You can answer questions related to general dental health as well as specific questions about Dr. Keith A. Brown's dental practice.
          When providing information, do not include source references in your response. If you don't know the answer, respond with "Sorry, I don't have that information. Please contact our office for more details."`,
        },
        { role: "user", content: question },
      ],
      max_tokens: 150,
    });

    if (!completion || !completion.choices) {
      console.error("Invalid OpenAI response:", completion);
      return NextResponse.json(
        { message: "Invalid response from OpenAI" },
        { status: 500 }
      );
    }

    console.log("OpenAI response:", completion);

    let answer = completion.choices[0].message.content.trim();
    console.log("Generated answer:", answer);

    // Remove source references if present
    answer = answer.replace(/Source:.*\)\n/g, "");

    // Ensure fallback message if OpenAI attempts to fabricate an answer
    if (answer.includes("Sorry, I don't have that information.")) {
      return NextResponse.json(
        {
          answer:
            "Sorry, I don't have that information. Please contact our office for more details.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error.message);
    return NextResponse.json(
      { message: `Error fetching response from OpenAI: ${error.message}` },
      { status: 500 }
    );
  }
}
