// components/Header.jsx
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";
import { montserrat } from "../../../app/font.js";

const Header = () => {
  return (
    <nav
      className={`${montserrat.className} flex text-2xl  tracking-tighter
        md:gap-6 justify-between`}
    >
      <a href="/" className="font-bold ">
        Dr. Keith Brown DDS
      </a>
      <div className="hidden md:flex">
        <HeaderFullNav />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex md:hidden">
          <HeaderDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
