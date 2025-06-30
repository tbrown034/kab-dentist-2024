import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import FAQs from "@/components/sections/dentalservices/FAQs";
import FullTitle from "@/components/shared/FullTitle";
import sectionContents from "@/lib/content/sectionContent.json";
import ServicesSeparator from "@/components/sections/dentalservices/ServicesSeparator";
import ServicesSearch from "@/components/sections/dentalservices/ServicesSearch";
import DocBot from "@/components/sections/dentalservices/DocBot";
import officeEquipment from "../../../src/assets/images/doctor/dr-with-patient-before.jpeg";

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
    <div className="flex flex-col gap-12 p-6">
      {/* Hero Section */}
      <section
        className="flex flex-col xl:flex-row gap-6 xl:gap-12"
        id="servicesSection"
      >
        {/* Image */}
        <div className="w-full xl:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-[280px] sm:aspect-[5/3] lg:aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={officeEquipment}
              alt="Modern dental equipment and technology at Dr. Keith A. Brown's office"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 w-full xl:w-1/2">
          <h1 className="text-3xl font-extrabold tracking-tight font-header xl:text-5xl mb-2">
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h1>

          <div className="flex flex-col gap-4 pb-2 text-xl">
            {textBlock.map((block, blockIndex) => (
              <p key={blockIndex}>{block.text}</p>
            ))}
            <p>
              Browse our services below. If you don't see what you need,{" "}
              <a
                href="tel:6302968702"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                call us
              </a>{" "}
              or{" "}
              <Link
                href="/appointment"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                request an appointment
              </Link>{" "}
              to learn more.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 mt-2 sm:flex-row xl:flex-wrap xl:gap-6">
            <Link
              href="#browseServices"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Browse our dental services"
            >
              <DocumentTextIcon className="w-5 h-5" />
              Browse Services
            </Link>

            <Link
              href="/appointment"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Book a dental appointment"
            >
              <PhoneIcon className="w-5 h-5 text-teal-600" />
              Book Appointment
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
