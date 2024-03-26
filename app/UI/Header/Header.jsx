// components/Header.jsx
import CallDiallogue from "@/app/Dialogues/CallDiallogue.jsx";
import HeaderHamburger from "./HeaderHamburger.jsx";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-2 font-bold">
      <a href="/" className="text-2xl font-extrabold">
        Dr. Keith A. Brown DDS
      </a>
      <div>
        <div className="flex gap-4">
          <div className="hidden p-1 border-2 border-teal-800 sm:flex rounded-2xl hover:bg-gray-50 active:bg-white">
            <CallDiallogue />
          </div>
          <HeaderHamburger />
        </div>
      </div>
    </nav>
  );
};

export default Header;
