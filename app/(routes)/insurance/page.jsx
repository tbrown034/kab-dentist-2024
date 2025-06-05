import React from "react";
import Link from "next/link";
import FullTitle from "@/components/shared/FullTitle";
import sectionContents from "@/lib/content/sectionContent.json";
import FinancialPills from "@/components/sections/financial/FinancialPills";
import FinancialFAQs from "@/components/sections/financial/FinancialFAQs";

export const metadata = {
  title: "Insurance Information - Naperville | Dr. Keith Brown DDS",
  description:
    "Learn about the insurance policies and accepted providers at Dr. Keith Brown DDS in Naperville. We offer flexible payment plans and accept most insurance plans.",
  keywords:
    "insurance policies, accepted providers, dental insurance, flexible payment plans, Dr. Keith Brown DDS",
  openGraph: {
    title: "Insurance Information - Naperville | Dr. Keith Brown DDS",
    description:
      "Learn about the insurance policies and accepted providers at Dr. Keith Brown DDS in Naperville. We offer flexible payment plans and accept most insurance plans.",
    url: "https://keithbrowndds.com/insurance",
    images: [
      {
        url: "https://keithbrowndds.com/og-insurance.jpg",
        width: 800,
        height: 600,
        alt: "Insurance Information - Naperville | Dr. Keith Brown DDS",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Information - Naperville | Dr. Keith Brown DDS",
    description:
      "Learn about the insurance policies and accepted providers at Dr. Keith Brown DDS in Naperville. We offer flexible payment plans and accept most insurance plans.",
    image: "https://keithbrowndds.com/twitter-insurance.jpg",
  },
};

const InsurancePage = () => {
  const { title, textBlock, highlightedText, highlightInFront, policy } =
    sectionContents.insurancePage;

  if (!title || !policy || policy.length === 0) return null;

  return (
    <section className="flex flex-col gap-4 px-4 mt-6" id="insuranceSection">
      <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h1>
      <div className="flex flex-col gap-4">
        {policy.map((paragraph, index) => (
          <p key={index} className="text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <FinancialPills />
      <FinancialFAQs />

      <div className="flex flex-row items-center gap-4 py-2">
        <Link
          href="/"
          className="p-2 bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 dark:text-black active:bg-gray-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default InsurancePage;
