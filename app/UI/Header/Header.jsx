// components/Header.jsx
import CallDiallogue from "@/app/Dialogues/CallDiallogue.jsx";
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-2 font-bold">
      <a href="/" className="text-2xl font-extrabold">
        Dr. Keith A. Brown DDS
      </a>
      {/* Hide on mobile, show on screens larger than 'sm' */}
      <div className="hidden md:flex">
        <HeaderFullNav />
      </div>
      <div className="flex items-center gap-2">
        <div className="p-1 text-sm border-2 border-teal-800 sm:flex rounded-2xl text-medium hover:bg-gray-50 active:bg-white whitespace-nowrap">
          <CallDiallogue buttonName="Call Us Now" />
        </div>
        <div className="flex text-lg md:hidden">
          <HeaderDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
