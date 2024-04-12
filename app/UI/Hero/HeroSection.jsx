import HeroBody from "./HeroBody";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "../Other/FullTitle";
import HeroImgSlider from "./HeroImgSlider";
import HeroCTA from "./HeroCTA";
const HeroSection = () => {
  const { title, highlightedText, highlightInFront } = sectionContents.heroText;
  return (
    <section className="flex flex-col gap-8 lg:gap-10 xl:gap-12 md:flex-row">
      <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-18 md:w-3/5">
        <div className="text-3xl font-extrabold leading-tight tracking-tight xl:text-5xl 2xl:text-6xl md:text-4xl">
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </div>
        <HeroBody />
        <HeroCTA />
      </div>
      <div className="flex flex-col justify-center md:w-2/5">
        <HeroImgSlider />
      </div>
    </section>
  );
};
export default HeroSection;
