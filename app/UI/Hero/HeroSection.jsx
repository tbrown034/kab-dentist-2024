import HeroImgSlider from "./HeroImgSlider";
import HeroCTA from "./HeroCTA";

const HeroSection = () => {
  const title = "Naperville's Home For Trusted, Modern Dentistry";
  const highlightedText = "Trusted, Modern Dentistry";
  const highlightInFront = false;

  const textBlock = [
    "For decades, Dr. Keith A. Brown DDS, FAGD, has provided expert care for Naperville and the Chicagoland area",
    "Start your journey towards excellent care today!",
  ];

  return (
    <section className="flex flex-col gap-8 lg:gap-10 xl:gap-12 md:flex-row">
      <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-18 md:w-3/5">
        <div className="text-3xl font-extrabold leading-tight tracking-tight xl:text-5xl 2xl:text-6xl md:text-4xl">
          {highlightInFront ? (
            <>
              <span className="text-teal-600">{highlightedText}</span>{" "}
              {title.replace(highlightedText, "")}
            </>
          ) : (
            <>
              {title.replace(highlightedText, "")}{" "}
              <span className="text-teal-600">{highlightedText}</span>
            </>
          )}
        </div>
        <div className="flex flex-col justify-center gap-3 text-xl font-medium md:text-2xl xl:text-3xl xl:gap-12 md:gap-4 lg:gap-8">
          {textBlock.map((text, index) => (
            <p key={index} className="flex flex-col gap-2">
              {text}
            </p>
          ))}
        </div>
        <HeroCTA />
      </div>
      <div className="flex flex-col justify-center md:w-2/5">
        <HeroImgSlider />
      </div>
    </section>
  );
};

export default HeroSection;
