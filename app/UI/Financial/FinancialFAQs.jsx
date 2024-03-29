import React from "react";
// Import Accordion components from shadcn/ui library
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FinancialFAQs = () => {
  return (
    <section className="flex flex-col items-start justify-start px-4 text-left ">
      <h2 className="mb-2 text-xl font-extrabold tracking-tight">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="payment-options">
          <AccordionTrigger>
            What payment options do you offer?
          </AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards, insurance plans, and payment
            programs. We also offer financing options to make dental care more
            accessible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="payment-plans">
          <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
          <AccordionContent>
            Yes, we provide flexible payment plans for various treatments. Our
            goal is to make dental care affordable for all our patients.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fsa-hsa">
          <AccordionTrigger>Can I use FSAs or HSAs?</AccordionTrigger>
          <AccordionContent>
            Yes, FSAs and HSAs are great options to cover dental expenses with
            pre-tax dollars. Eligible expenses include preventive care,
            diagnostics, and medically necessary treatments like cleanings and
            fillings, reducing your taxable income and saving you money.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="insurance-billing">
          <AccordionTrigger>How does insurance billing work?</AccordionTrigger>
          <AccordionContent>
            We direct bill your insurance company when possible, handling the
            paperwork to ensure you receive the benefits you're entitled to.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hidden-fees">
          <AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
          <AccordionContent>
            Transparency is key in our billing process. We provide detailed
            estimates before any treatment and discuss all possible costs with
            you.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FinancialFAQs;
