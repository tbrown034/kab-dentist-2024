import Image from "next/image";
import doctorImg from "../../../public/images/horizontal/dr.jpeg";
import family1 from "../../../public/images/family1.JPG";
import drSitting3 from "../../../public/images/drSitting.jpeg";

const Doctor = () => {
  return (
    <section className="">
      <h2 className="text-3xl font-extrabold tracking-tight">
        Dr. Keith A. Brown:{" "}
        <span className="text-teal-500">Your Trusted Partner</span> in Dental
        Health
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col justify-center">
          <Image
            src={doctorImg}
            className="rounded-xl"
            alt="Doctor Keith A. Brown"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Image
            src={family1}
            className="rounded-xl"
            alt="Dr. Brown's Family"
            layout="responsive"
          />
          <Image
            src={drSitting3}
            className="rounded-xl"
            alt="Dr. Brown Relaxing"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4 text-lg">
        <p className="">
          Bringing over four decades of unparalleled dedication and expertise to
          Naperville, Dr. Keith A. Brown, DDS, FAGD, is more than a dentist;
          he's a community staple committed to your dental well-being.{" "}
        </p>
        <p>
          With a deep-seated belief in the power of modern dentistry, combined
          with a personalized approach, Dr. Brown offers a care experience
          that's both exceptional and uniquely tailored to meet your needs.
        </p>
        <p className="">
          His journey in dentistry is punctuated by a lifelong commitment to
          education and a heartfelt desire to make every visit a comfortable,
          positive experience. "Your healthiest smile, our shared mission." This
          philosophy drives everything we do, ensuring that your care is both
          comprehensive and compassionate.
        </p>
        <blockquote className="italic text-center ">
          “A smile is a curve that sets everything straight. Let's care for
          yours together.” <br></br>- Dr. Keith A. Brown
        </blockquote>
      </div>
    </section>
  );
};

export default Doctor;