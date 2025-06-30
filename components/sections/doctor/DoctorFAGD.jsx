import Link from "next/link";

const DoctorFAGD = () => {
  const quote =
    "If your dentist is a (FAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices.";
  const citation = "— Academy of General Dentistry";

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Not Your Average Dentist</h2>

      <p>
        Dr. Brown is among the elite{" "}
        <Link
          href="https://www.agd.org/education/awards-recognition/become-an-agd-fellow"
          className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
        >
          6%
        </Link>{" "}
        of dentists in the U.S. to become a{" "}
        <Link
          href="https://www.agd.org/education/awards-recognition/become-an-agd-fellow"
          className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
        >
          Fellow of the Academy of General Dentistry (FAGD)
        </Link>
        .
      </p>

      <div className="p-6 bg-teal-800 rounded-lg shadow-inner text-white">
        <blockquote className="text-lg italic font-serif text-center leading-relaxed">
          “{quote}”
        </blockquote>
        <a
          href="https://www.agd.org/practice/tools/patient-resources/know-my-dentist/why-choose-an-fagd-or-magd-dentist#:~:text=If%20your%20dentist%20is%20a,2%20percent%20are%20AGD%20Masters"
          className="block mt-4 text-sm font-semibold text-center text-teal-100 hover:underline"
        >
          {citation}
        </a>
      </div>
    </div>
  );
};

export default DoctorFAGD;
