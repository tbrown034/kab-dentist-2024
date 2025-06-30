"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";
import servicesContent from "@/lib/content/servicesContent.json";

const FAQs = () => {
  return (
    <div className="">
      {servicesContent.map((service, index) => (
        <div key={index} id={service.id} className="mb-8">
          <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
          <p className="text-lg">{service.text}</p>
          <Accordion type="single" collapsible className="p-2 lg:px-16">
            {service.details.map((detail, detailIndex) => (
              <AccordionItem
                key={detailIndex}
                value={detail.title.replace(/\s+/g, "-")}
              >
                <AccordionTrigger className="text-left ">
                  {detail.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 text-left ">
                  <p>{detail.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
