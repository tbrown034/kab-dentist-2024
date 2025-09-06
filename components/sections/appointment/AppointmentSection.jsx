// components/sections/appointment/AppointmentSection.jsx
// Server Component

import sectionContents from "@/lib/content/sectionContent.json";
import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";

const AppointmentSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.appointmentSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto" id="appointmentSection">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h2 className="font-header text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h2>
        {textBlock.map((block, blockIndex) => (
          <div key={blockIndex} className="mb-4 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
              {block.text}
            </p>
          </div>
        ))}
      </div>
      
      {/* Enhanced form container with gradient background */}
      <div className="relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-teal-100/30 dark:from-teal-900/10 dark:to-teal-800/10 rounded-3xl -z-10"></div>
        
        <div className="mt-10 sm:mt-12">
          <UnifiedForm />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
