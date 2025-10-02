import Image from "next/image";
import Link from "next/link";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import FAQs from "@/components/sections/dentalservices/FAQs";
import FullTitle from "@/components/shared/FullTitle";
import sectionContents from "@/lib/content/sectionContent.json";
import ServicesSeparator from "@/components/sections/dentalservices/ServicesSeparator";
import ServicesSearch from "@/components/sections/dentalservices/ServicesSearch";
import officeEquipment from "../../../src/assets/images/doctor/dr-with-patient-before.jpeg";
import DisplayNumber from "@/components/DisplayNumber";

export const metadata = {
  title: "Dental Services - Naperville | Dr. Keith Brown DDS",
  description:
    "Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family.",
  keywords:
    "dental services Naperville, comprehensive dental care, family dentist, routine check-ups, advanced dental procedures, Keith Brown DDS",
  openGraph: {
    title: "Dental Services - Naperville | Dr. Keith Brown DDS",
    description:
      "Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family.",
    url: "https://keithbrowndds.com/dentalservices",
    images: [
      {
        url: "https://keithbrowndds.com/og-dentalservices.jpg",
        width: 800,
        height: 600,
        alt: "Dental Services - Naperville | Keith Brown DDS",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services - Naperville | Dr. Keith Brown DDS",
    description:
      "Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family.",
    image: "https://keithbrowndds.com/twitter-dentalservices.jpg",
  },
};

const DentalServices = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.dentalServicesPage;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        id="servicesSection"
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <Image
              src={officeEquipment}
              alt="Modern dental equipment and technology at Dr. Keith A. Brown's office"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-header">
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h1>

          <div className="flex flex-col gap-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
            {textBlock.map((block, blockIndex) => (
              <p key={blockIndex}>{block.text}</p>
            ))}
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 p-4 rounded-r-lg">
              <p className="text-base sm:text-lg font-medium text-teal-900 dark:text-teal-100">
                <strong>Can't find what you need?</strong> Browse our services below or contact us to learn more.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3 sm:flex-wrap lg:flex-nowrap pt-4">
            <DisplayNumber
              showIcon={true}
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-lg hover:from-teal-700 hover:to-teal-800 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            />

            <Link
              href="#browseServices"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-4 text-base font-semibold text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              aria-label="Browse our dental services"
            >
              <ClipboardDocumentCheckIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              <span>Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <ServicesSeparator />

      <div id="browseServices">
        <ServicesSearch />
      </div>

      <FAQs />
    </div>
  );
};

export default DentalServices;
