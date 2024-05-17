import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DentalServices = () => {
  const dentalServices = [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      details: [
        {
          title: "Routine Cleanings",
          description:
            "Routine cleanings help in maintaining oral hygiene and preventing dental issues. [More Info](https://www.ada.org/en/member-center/oral-health-topics/cleanings-and-prevention)",
        },
        {
          title: "Fillings",
          description:
            "Fillings are used to restore decayed teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/fillings)",
        },
        {
          title: "Root Canals",
          description:
            "Root canal treatment is designed to eliminate bacteria from the infected root canal, prevent reinfection, and save the natural tooth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/root-canals)",
        },
        {
          title: "Extractions",
          description:
            "Extractions are performed to remove teeth that are damaged or decayed beyond repair. [More Info](https://www.ada.org/en/member-center/oral-health-topics/tooth-extractions)",
        },
        {
          title: "Crowns",
          description:
            "Crowns are used to restore the shape, size, and strength of teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/crowns)",
        },
        {
          title: "Bridges",
          description:
            "Bridges are used to replace one or more missing teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/bridges)",
        },
      ],
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      details: [
        {
          title: "Teeth Whitening",
          description:
            "Professional teeth whitening to brighten your smile. [More Info](https://www.ada.org/en/member-center/oral-health-topics/teeth-whitening)",
        },
        {
          title: "Veneers",
          description:
            "Veneers are used to improve the appearance of the front teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/veneers)",
        },
        {
          title: "Bonding",
          description:
            "Bonding is used to repair chipped or cracked teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/bonding)",
        },
        {
          title: "Inlays and Onlays",
          description:
            "Inlays and onlays are used to restore decayed or damaged teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/inlays-and-onlays)",
        },
        {
          title: "Gum Contouring",
          description:
            "Gum contouring reshapes the gums to improve the appearance of your smile. [More Info](https://www.ada.org/en/member-center/oral-health-topics/gum-contouring)",
        },
        {
          title: "Clear Aligners",
          description:
            "Clear aligners are an alternative to traditional braces for straightening teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/orthodontics)",
        },
      ],
    },
    {
      id: "emergency-dentistry",
      title: "Emergency Dentistry",
      details: [
        {
          title: "Toothache Relief",
          description:
            "Immediate relief for toothaches and other dental emergencies. [More Info](https://www.ada.org/en/member-center/oral-health-topics/toothaches)",
        },
        {
          title: "Broken Tooth Repair",
          description:
            "Quick repair of broken or cracked teeth. [More Info](https://www.ada.org/en/member-center/oral-health-topics/emergency-care)",
        },
        {
          title: "Knocked-Out Tooth",
          description:
            "Emergency care for knocked-out teeth to increase the chances of saving them. [More Info](https://www.ada.org/en/member-center/oral-health-topics/emergency-care)",
        },
        {
          title: "Lost Filling or Crown",
          description:
            "Replacement of lost fillings or crowns to restore the tooth's function. [More Info](https://www.ada.org/en/member-center/oral-health-topics/emergency-care)",
        },
        {
          title: "Abscess Treatment",
          description:
            "Treatment of dental abscesses to prevent infection and alleviate pain. [More Info](https://www.ada.org/en/member-center/oral-health-topics/emergency-care)",
        },
        {
          title: "Soft Tissue Injury",
          description:
            "Care for injuries to the gums, cheeks, tongue, and lips. [More Info](https://www.ada.org/en/member-center/oral-health-topics/emergency-care)",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-start justify-start px-4 text-left">
      <h2 className="mb-2 text-xl font-extrabold tracking-tight underline underline-offset-2">
        Dental Services
      </h2>
      {dentalServices.map((service, index) => (
        <div key={index} id={service.id} className="mb-8">
          <h3 className="mb-4 text-lg font-semibold">{service.title}</h3>
          <Accordion type="single" collapsible className="w-full">
            {service.details.map((detail, detailIndex) => (
              <AccordionItem
                key={detailIndex}
                value={detail.title.replace(/\s+/g, "-")}
              >
                <AccordionTrigger className="text-left md:text-center">
                  {detail.title}
                </AccordionTrigger>
                <AccordionContent className="text-left md:text-center">
                  {detail.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </section>
  );
};

export default DentalServices;
