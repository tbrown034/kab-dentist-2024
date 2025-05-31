import Entries from "./BlogContainer";
import sectionContents from "../../sectionContent.json";
import FullTitle from "../../../components/shared/FullTitle";

export const metadata = {
  title: "Blog | Dr. Keith Brown DDS",
  description:
    "Explore the Keith Brown DDS FAGD blog for insightful articles, updates, and tips related to dental care and health. Stay informed with our latest posts.",
  keywords:
    "dentistry blog, dental articles, dental updates, dental health, Dr. Keith A. Brown",
};

export default function BlogPage() {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.blog;

  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-4 px-4 mt-6" id="blogSection">
      <h1 className="text-2xl font-extrabold tracking-tight font-header md:text-3xl">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h1>
      <div className="flex flex-col gap-4">
        {textBlock.map((block, blockIndex) => (
          <p key={blockIndex} className="text-lg">
            {block.text}
          </p>
        ))}
      </div>

      <Entries />
    </section>
  );
}
