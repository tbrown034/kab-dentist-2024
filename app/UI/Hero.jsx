import HeroText from "./HeroText";
import Image from "next/image";
import bank from "../../public/images/bank1.jpeg";
import hero1 from "../../public/images/hero1.jpeg";
import hero2 from "../../public/images/hero2.jpeg";

const Hero = () => {
  return (
    <header className="flex flex-col gap-8">
      <HeroText />
      <div className="grid grid-cols-3 gap-4">
        <Image
          className="border-2 border-teal-800 rounded-2xl"
          src={bank}
          alt="bank"
        />
        <Image
          className="border-2 border-teal-800 rounded-2xl"
          src={hero1}
          alt="hero1"
        />
        <Image
          className="border-2 border-teal-800 rounded-2xl"
          src={hero2}
          alt="hero2"
        />
      </div>
    </header>
  );
};

export default Hero;
