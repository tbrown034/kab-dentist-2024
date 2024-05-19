import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import servicesContent from "./servicesContent.json";
import Link from "next/link";

const FAQs = () => {
  return (
    <div className="mt-6">
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
                  <Link
                    href={detail.moreInfo}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    More info
                  </Link>
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
