import HeroBody from "./HeroBody";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "../Other/FullTitle";
import HeroImgSlider from "./HeroImgSlider";
import HeroCTA from "./HeroCTA";
const HeroSection = () => {
  const { title, highlightedText, highlightInFront } = sectionContents.heroText;
  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-4 md:gap-8 xl:gap-12 2xl:gap-16 md:w-3/5">
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
      <div className=" md:w-2/5">
        <HeroImgSlider />
      </div>
    </section>
  );
};
export default HeroSection;
