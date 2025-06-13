import Image from "next/image";
import drWithPatientClose from "../../../src/assets/images/doctor/dr-horizontal-primary.jpeg";
import drWithPatientandComputer from "../../../src/assets/images/doctor/dr-with-patient-after.jpeg";
import drVertical1 from "../../../src/assets/images/doctor/dr-vertical-primary.jpeg";

// Organize images into an array of objects
const images = [
  {
    id: "portrait",
    src: drVertical1,
    alt: "Portrait of Dr. Keith A. Brown DDS, FAGD, with a view of the Fifth Third Bank building and surrounding area in Naperville, IL, from the third floor.",
    className: "rounded-xl",
  },
  {
    id: "patientClose",
    src: drWithPatientClose,
    alt: "Close-up of Dr. Keith A. Brown DDS, FAGD, performing a dental procedure on a patient.",
    className: "rounded-xl",
  },
  {
    id: "patientComputer",
    src: drWithPatientandComputer,
    alt: "Dr. Keith A. Brown DDS, FAGD, with a patient and a computer displaying dental images in the background.",
    className: "rounded-xl",
  },
];

const DoctorImgGroup = () => {
  return (
    <div className="flex flex-col gap-4 p-4 px-4 md:px-6 lg:px-16 xl:px-20 md:flex-row ">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          className="object-cover w-full h-auto rounded-xl md:max-h-full"
          style={{ objectPosition: "center bottom" }} // Adjust position to keep subject lower on mobile
        />
      </div>
      <div className="flex flex-col w-full gap-4 md:w-1/2">
        {images.slice(1).map((image) => (
          <div key={image.id} className="flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-auto rounded-xl max-h-60 md:max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorImgGroup;
