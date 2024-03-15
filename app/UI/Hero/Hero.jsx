// Hero.jsx
import HeroText from "./HeroText";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 p-2 sm:flex-row">
      <div className="flex-1">
        <HeroText />
      </div>
      <div className="flex-1">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
