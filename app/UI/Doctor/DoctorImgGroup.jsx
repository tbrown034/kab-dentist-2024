import Image from "next/image";
import drWithPatientClose from "../../../public/images/doctor/drWithPatientClose.jpeg";
import drWithPatientandComputer from "../../../public/images/doctor/drWithPatientandComputer.jpeg";
import drVertical1 from "../../../public/images/doctor/drVertical1.jpeg";

// Organize images into an array of objects
const images = [
  {
    id: "portrait",
    src: drVertical1,
    alt: "Portrait of Keith Brown",
    className: "rounded-xl",
  },
  {
    id: "patientClose",
    src: drWithPatientClose,
    alt: "Dr. with Patient Close-up",
    className: "rounded-xl",
  },
  {
    id: "patientComputer",
    src: drWithPatientandComputer,
    alt: "Dr. with Patient and Computer",
    className: "rounded-xl",
  },
];

const DoctorImgGroup = () => {
  return (
    <div className="flex flex-col gap-4 p-4 px-4 md:px-6 lg:px-16 xl:px-20 md:flex-row ">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="w-full ">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className="object-cover w-full h-auto rounded-xl max-h-80 md:max-h-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 md:w-1/2">
        {images.slice(1).map((image) => (
          <div key={image.id} className="flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-auto rounded-xl max-h-40 md:max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorImgGroup;
