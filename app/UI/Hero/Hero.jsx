// Hero.jsx
import HeroText from "./HeroText";
import HeroImgSlider from "./HeroImgSlider";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex-col">
        <HeroText />
      </div>
      <div className="flex-col">
        <HeroImgSlider />
      </div>
    </div>
  );
};

export default Hero;
