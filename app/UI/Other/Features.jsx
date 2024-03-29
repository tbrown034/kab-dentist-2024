import React from "react";
import Link from "next/link"; // Import Link from Next.js
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure this path is correct based on your project structure
import { raleway } from "../../../app/font.js";

const Features = () => {
  const { title, intro, textBlock, highlightedText, highlightInFront } =
    sectionContents.features;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2
          className={`${raleway.className}
      text-2xl  font-extrabold tracking-tight leading-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h2>

        <p>{intro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {textBlock.map((feature, index) => (
          <article className="flex flex-col" key={index}>
            <Link href={feature.link} className="cursor-pointer">
              <div className="flex items-center mb-4 transition-transform duration-200 hover:scale-105 active:scale-95">
                <div
                  className="flex items-center justify-center w-10 h-10 text-white bg-teal-600 rounded-full"
                  aria-hidden="true"
                >
                  <i className={`fa-solid ${feature.icon} fa-lg`}></i>
                </div>
                <h3 className="ml-4 font-semibold">{feature.title}</h3>
              </div>
            </Link>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
