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
      <div className="flex items-center">
        <div className="p-2 text-sm text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
          <CallDiallogue buttonName="Call Now" />
        </div>
        <div className="flex text-lg md:hidden">
          <HeaderDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
