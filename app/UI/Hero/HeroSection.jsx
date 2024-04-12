import HeroBody from "./HeroBody";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "../Other/FullTitle";
import HeroImgSlider from "./HeroImgSlider";
import HeroCTA from "./HeroCTA";
const HeroSection = () => {
  const { title, highlightedText, highlightInFront } = sectionContents.heroText;
  return (
    <section className="flex flex-col gap-4">
      <div className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </div>
      <HeroBody />
      <HeroCTA />
      <HeroImgSlider />
    </section>
  );
};
export default HeroSection;
