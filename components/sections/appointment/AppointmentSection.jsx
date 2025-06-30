import sectionContents from "@/lib/content/sectionContent.json";
import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";

const AppointmentSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.appointmentSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="appointmentSection">
      <h2
        className={`font-header text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      {textBlock.map((block, blockIndex) => (
        <div
          key={blockIndex}
          className="flex flex-col gap-2 text-lg lg:text-xl"
        >
          <p>{block.text}</p>
        </div>
      ))}
      <div className="p-4 ">
        <UnifiedForm />
      </div>
    </section>
  );
};

export default AppointmentSection;
