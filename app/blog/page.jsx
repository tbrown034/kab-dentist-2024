"use client";
import Entries from "./Entries";
import sectionContents from "../../sectionContent.json";
import FullTitle from "../UI/Other/FullTitle";
import { raleway } from "../font.js";

export default function BlogPage() {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.blog;

  // Guard clause to ensure rendering only occurs if data is available
  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-4 mt-6" id="locationSection">
      <h2
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      {textBlock.map((block, blockIndex) => (
        <div key={blockIndex} className="flex flex-col gap-2 ">
          <p>{block.text}</p>
        </div>
      ))}
      <Entries />
    </section>
  );
}
