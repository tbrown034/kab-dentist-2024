// components/Header/Header.jsx
import HeaderFullNav from "./HeaderFullNav";
import HeaderDropDown from "./HeaderDropDown";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="flex items-center justify-between text-2xl tracking-tighter font-header md:gap-6">
      <a
        id="#home"
        href="/"
        className="font-bold hover:text-teal-800 active:-textteal-700"
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
