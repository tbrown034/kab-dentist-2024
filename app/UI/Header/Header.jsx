// components/Header/Header.jsx
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";
import { montserrat } from "../../../app/font.js";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <nav
      className={`${montserrat.className} flex text-2xl  tracking-tighter items-center
        md:gap-6 justify-between`}
    >
      <a
        id="#home"
        href="/"
        className="font-bold hover:text-teal-800 active:-textteal-700 "
      >
        Dr. Keith A. Brown DDS
      </a>
      <div className="hidden md:flex">
        <HeaderFullNav />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex md:hidden">
          <HeaderDropDown />
        </div>
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
