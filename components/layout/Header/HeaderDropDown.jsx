"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#doctorSection", label: "About" },
  { href: "/dentalservices", label: "  Dental Services" },
  { href: "/insurance", label: "Insurance" },
  { href: "/emergency", label: "Emegency" },
  { href: "/make-an-appointment", label: "Make an Appoitment" },

  { href: "/blog", label: "Blog" },
  { href: "/docbot", label: "Virtual Dental Assistant" },
];

function HeaderDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
        <FontAwesomeIcon
          icon={faBars}
          className="text-gray-900 dark:text-white"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {links.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <Link href={link.href}>
                    <div
                      className={`${
                        active ? "bg-teal-500 text-white" : "text-gray-900"
                      } hover:bg-teal-100 hover:text-teal-900 active:bg-teal-200 active:text-teal-700 group flex w-full items-center rounded-md px-4 py-2 text-sm transition-colors`}
                    >
                      {link.label}
                    </div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1">
            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-900">
              <span>Dark/Light Mode</span>
              <ThemeToggle />
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderDropdown;
