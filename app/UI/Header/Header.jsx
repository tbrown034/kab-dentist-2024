// components/Header.jsx
import CallDiallogue from "@/app/Dialogues/CallDiallogue.jsx";
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-1">
      <a href="/" className="text-xl font-extrabold ">
        Dr. Keith A. Brown DDS
      </a>

      <div className="hidden md:flex">
        <HeaderFullNav />
      </div>
      <div className="flex items-center gap-1 text-xs">
        <div className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 0 active:bg-teal-400">
          <CallDiallogue buttonName="Call Now" />
        </div>
        <div className="flex md:hidden">
          <HeaderDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
