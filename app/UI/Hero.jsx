import HeroText from "./HeroText";
import Slider from "./Slider";

const Hero = () => {
  return (
    <header className="flex flex-col gap-8">
      <HeroText />
      <div className="px-8 mx-8">
        <Slider />
      </div>
    </header>
  );
};

export default Hero;
