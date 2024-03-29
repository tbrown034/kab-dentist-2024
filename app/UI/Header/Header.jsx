// components/Header.jsx
import CallDiallogue from "@/app/Dialogues/CallDiallogue.jsx";
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";
import { poppins } from "../../../app/font.js";

const Header = () => {
  return (
    <nav
      className={`${poppins.className} flex items-center justify-between p-1`}
    >
      <a href="/" className="text-2xl font-bold tracking-wide">
        Dr. Keith Brown DDS
      </a>
      <div className="hidden md:flex">
        <HeaderFullNav />
      </div>
      <div className="flex items-center gap-2 text-xs">
        <div className="p-2 text-white bg-teal-600 rounded-lg hover:bg-teal-500 0 active:bg-teal-400">
          <CallDiallogue buttonName="Call Us" />
        </div>
        <div className="flex md:hidden">
          <HeaderDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
