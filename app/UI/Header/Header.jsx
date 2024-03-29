// components/Header.jsx
import CallDialog from "@/app/DialogBoxes/CallDialog.jsx";
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";
import { montserrat } from "../../../app/font.js";

const Header = () => {
  return (
    <nav
      className={`${montserrat.className} flex items-center gap-2 md:gap-6 justify-between p-2`}
    >
      <a href="/" className="text-2xl font-bold ">
        Dr. Keith Brown DDS
      </a>
      <div className="hidden md:flex">
        <HeaderFullNav />
      </div>
      <div className="flex items-center gap-4 text-xs">
        <div className="p-2 text-white bg-teal-600 rounded-xl hover:bg-teal-500 0 active:bg-teal-400">
          <CallDialog buttonName="Contact" />
        </div>
        <div className="flex md:hidden">
          <HeaderDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
