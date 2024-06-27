import Entries from "./Entries";
import sectionContents from "../../sectionContent.json";
import FullTitle from "../UI/Other/FullTitle";
import { raleway } from "../font.js";

export const metadata = {
  title: "Blog | Dr. Keith Brown DDS",
  description:
    "Explore the Keith Brown DDS blog for insightful articles, updates, and tips related to dental care and health. Stay informed with our latest posts.",
  keywords:
    "dentistry blog, dental articles, dental updates, dental health, Dr. Keith A. Brown",
};

export default function BlogPage() {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.blog;

  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-4 px-4 mt-6" id="blogSection">
      <h1
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h1>
      <p className="flex flex-col gap-4">
        {textBlock.map((block, blockIndex) => (
          <p key={blockIndex} className="text-lg">
            {block.text}
          </p>
        ))}
      </p>

      <Entries />
    </section>
  );
}
