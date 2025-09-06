import BlogContainer from "./BlogContainer";
import sectionContents from "@/lib/content/sectionContent.json";
import FullTitle from "@/components/shared/FullTitle";

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
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto" id="blogSection">
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-header mb-6">
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h1>
          <div className="flex flex-col gap-4">
            {textBlock.map((block, blockIndex) => (
              <p key={blockIndex} className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
                {block.text}
              </p>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <BlogContainer />
      </div>
    </section>
  );
}
