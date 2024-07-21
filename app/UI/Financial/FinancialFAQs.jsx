import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import sectionContents from "../../../sectionContent.json";

const FinancialFAQs = () => {
  const financialFAQs = sectionContents.financialSection.financialFAQs;
  return (
    <section className="flex flex-col items-start justify-start px-4 text-left ">
      <h2 className="mb-2 text-xl font-extrabold tracking-tight underline underline-offset-2">
        Financial FAQs
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {financialFAQs.map((faq, index) => (
          <AccordionItem key={index} value={faq.question.replace(/\s+/g, "-")}>
            <AccordionTrigger className="text-left ">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-left ">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FinancialFAQs;
