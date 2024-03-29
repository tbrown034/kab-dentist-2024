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
    <div className="grid grid-cols-2 gap-4">
      {/* Dynamic rendering of images */}
      <div className="flex items-center rounded-xl">
        <Image
          src={images[0].src} // First image is treated specially due to its size
          alt={images[0].alt}
          className={images[0].className}
        />
      </div>

      <div className="flex flex-col gap-4">
        {images.slice(1).map(
          (
            image // Start from the second image
          ) => (
            <div key={image.id} className="rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DoctorImgGroup;
