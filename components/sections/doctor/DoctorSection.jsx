import Link from "next/link";
import FullTitle from "@/components/shared/FullTitle";
import DoctorFAGD from "./DoctorFAGD";
import DoctorSingleImage from "./DoctorSingleImage";

const DoctorSection = () => {
  const title =
    "Dr. Keith A. Brown DDS, FAGD: A Continual Pursuit of Excellence";
  const highlightedText = "Dr. Keith A. Brown DDS, FAGD:";
  const highlightInFront = true;

  return (
    <section id="doctorSection" className="flex flex-col gap-6">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start md:gap-12">
        {/* Left side: Text content */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="font-header text-2xl md:text-3xl font-extrabold tracking-tight">
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h2>
          <p>
            With over four decades of experience, Dr. Keith A. Brown, DDS, FAGD,
            is a trusted name in Naperville, delivering unmatched expertise and
            personalized dental care.
          </p>
          <p>
            A Chicagoland native, Dr. Brown graduated from Naperville's{" "}
            <Link
              href="https://www.northcentralcollege.edu/"
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            >
              North Central College
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.luc.edu/archives/schoolofdentistry/"
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            >
              Loyola's School of Dentistry
            </Link>{" "}
            in Maywood, IL. He is a member of the{" "}
            <Link
              href="https://www.ada.org/"
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            >
              American Dental Association
            </Link>
            ,{" "}
            <Link
              href="https://www.cds.org/"
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            >
              Chicago Dental Society
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.aes-tmj.org/"
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            >
              American Equilibration Society
            </Link>
            .
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2">
          <DoctorSingleImage />
        </div>
      </div>
      <div className="p-4 ">
        <DoctorFAGD />
      </div>
    </section>
  );
};

export default DoctorSection;
