import React from "react";
// Import Accordion components from shadcn/ui library
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import sectionContents from "../../sectionContent.json"; // Adjust the path as needed

const EmergencyFAQs = () => {
  // Assuming the structure based on previous JSON example
  const faqs = sectionContents.emergencySection.FAQ;

  return (
    <section className="flex flex-col items-start justify-start text-left">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-left underline underline-offset-4 md:text-3xl md:text-center">
        Emergnecy & Urgent Care Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.question}>
            <AccordionTrigger className="text-left md:text-center">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-left md:text-center">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default EmergencyFAQs;
