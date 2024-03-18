import DoctorImgGroup from "./DoctorImgGroup";

const Doctor = () => {
  return (
    <section className="flex flex-col gap-4" aria-labelledby="doctor-heading">
      <h2
        id="doctor-heading"
        className="text-3xl font-extrabold tracking-tight"
      >
        Dr. Keith A. Brown:{" "}
        <span className="text-teal-500">Your Trusted Partner</span> in Dental
        Health
      </h2>
      <p className="text-xl">
        Bringing over four decades of unparalleled dedication and expertise to
        Naperville, Dr. Keith A. Brown, DDS, FAGD, is more than a dentist; he is
        a community staple committed to your dental well-being.
      </p>
      <DoctorImgGroup alt="Dr. Keith A. Brown in his dental practice" />

      <div className="flex flex-col gap-4 mt-4 text-lg">
        <p>
          Dr. Brown earned his Doctor of Dental Surgery degree from Loyola
          Dental School. Prior to that, he earned Bachelor of Arts degrees in
          Chemistry and Biology from North Central College.
        </p>
        <p>
          With a deep-seated belief in the power of modern dentistry, combined
          with a personalized approach, Dr. Brown offers a care experience that
          is both exceptional and uniquely tailored to meet your needs.
        </p>
        <p>
          His journey in dentistry is punctuated by a lifelong commitment to
          education and a heartfelt desire to make every visit a comfortable,
          positive experience. "Your healthiest smile, our shared mission." This
          philosophy drives everything we do, ensuring that your care is both
          comprehensive and compassionate.
        </p>
        <blockquote className="italic text-center">
          A smile is a curve that sets everything straight. Let us care for
          yours together. - Dr. Keith A. Brown
        </blockquote>
      </div>
    </section>
  );
};

export default Doctor;
