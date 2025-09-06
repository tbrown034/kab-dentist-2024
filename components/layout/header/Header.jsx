// components/layout/header/Header.jsx
// Client Component
"use client";
import HeaderFullNav from "@/components/layout/header/HeaderFullNav";
import HeaderDropDown from "@/components/layout/header/HeaderDropDown";
import ThemeToggle from "@/components/layout/header/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-800/60 border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between">
        <a
          id="#home"
          href="/"
          className="font-bold text-gray-900 dark:text-gray-100 text-xl sm:text-2xl lg:text-3xl hover:text-teal-600 transition-colors tracking-tight"
        >
          <span className="sm:hidden">Dr. Keith A. Brown DDS</span>
          <span className="hidden sm:inline">Dr. Keith A. Brown DDS</span>
        </a>
        <div className="hidden lg:flex">
          <HeaderFullNav />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex lg:hidden">
            <HeaderDropDown />
          </div>
          <div className="hidden lg:flex">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
