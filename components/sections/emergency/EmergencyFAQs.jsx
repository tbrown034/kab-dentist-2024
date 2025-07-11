import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";
import sectionContents from "@/lib/content/sectionContent.json"; // Adjust the path as needed

const EmergencyFAQs = () => {
  const faqs = sectionContents.emergencySection.FAQ;

  return (
    <section
      id="emergencyFAQs"
      className="flex flex-col items-start justify-start text-left"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-left underline underline-offset-4 md:text-3xl md:text-center">
        Emergency & Urgent Care Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.question}>
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

export default EmergencyFAQs;
