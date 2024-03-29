"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const links = [
  { href: "#doctorSection", label: "Meet the Doctor" },
  { href: "#locationSection", label: "Location" },
  { href: "#servicesSection", label: "Services" },
  { href: "#apptSection", label: "Appointments" },
  { href: "#financialSection", label: "Financial" },
];

function HeaderDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="">
        <i className="text-lg text-teal-900 fa-solid fa-bars"></i>
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
        <Menu.Items className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {links.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <Link href={link.href}>
                    <div
                      className={`${
                        active ? "bg-teal-500 text-white" : "text-gray-900"
                      } hover:text-teal-800 active:text-teal-700 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {link.label}
                    </div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderDropdown;
