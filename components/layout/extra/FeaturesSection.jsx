import React from "react";
import Link from "next/link";
import sectionContents from "@/lib/content/sectionContent.json"; // Fixed: Use @/ alias
import FullTitle from "@/components/shared/FullTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faExclamationCircle,
  faMapLocation,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  money: faMoneyBill,
  emergency: faExclamationCircle,
  location: faMapLocation,
  noStress: faSmileBeam,
};

const FeaturesSection = () => {
  const { title, intro, textBlock, highlightedText, highlightInFront } =
    sectionContents.features;

  return (
    <section className="flex flex-col gap-4" aria-labelledby="features-title">
      <h2
        id="features-title"
        className={`font-header text-2xl md:text-3xl font-extrabold tracking-tight leading-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>

      <p>{intro}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {textBlock.map((feature, index) => (
          <article className="flex flex-col" key={index}>
            <Link
              href={feature.link}
              className="cursor-pointer"
              aria-label={feature.title}
            >
              <div className="flex items-center mb-4 transition-transform duration-200 hover:scale-105 active:scale-95">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-teal-600 rounded-full">
                  <FontAwesomeIcon icon={iconMapping[feature.icon]} size="lg" />
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

export default FeaturesSection;
