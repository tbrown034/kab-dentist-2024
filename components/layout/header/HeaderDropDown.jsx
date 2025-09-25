// components/layout/header/HeaderDropDown.jsx
// Client Component
"use client";
import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ThemeToggle from "@/components/layout/header/ThemeToggle";

const links = [
  { href: "/appointment", label: "Appointments" },
  { href: "/emergency", label: "Emergency Care" },
  { href: "/dental-services", label: "Services" },
  { href: "/#locationSection", label: "Location" },
  { href: "/blog", label: "Blog" },
];

function HeaderDropdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show placeholder before mounting to prevent layout shift
  if (!mounted) {
    return (
      <div className="relative inline-block">
        <div className="flex items-center justify-center p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md min-w-[48px] min-h-[48px]">
          <div className="w-7 h-7" />
        </div>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="relative flex items-center justify-center p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 min-w-[48px] min-h-[48px]">
        <Bars3Icon className="w-7 h-7 text-gray-900 dark:text-white" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 w-72 mt-3 origin-top-right bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl divide-y divide-gray-200 dark:divide-gray-700 rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 focus:outline-none overflow-hidden">
          <div className="py-2">
            {links.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <Link href={link.href}>
                    <div
                      className={`${
                        active 
                          ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300" 
                          : "text-gray-900 dark:text-gray-100"
                      } flex w-full items-center px-6 py-4 text-base font-medium transition-all duration-150 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-300 active:bg-teal-100 dark:active:bg-teal-900/30`}
                    >
                      {link.label}
                    </div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between px-6">
              <span className="text-base font-medium text-gray-700 dark:text-gray-300">Dark/Light Mode</span>
              <ThemeToggle />
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderDropdown;
