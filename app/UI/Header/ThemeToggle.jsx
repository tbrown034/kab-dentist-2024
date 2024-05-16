"use client";
import React from "react";
import { Switch } from "@headlessui/react";
import { useDarkMode } from "@/useDarkMode";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  if (darkMode === null) {
    // Prevent rendering until darkMode is determined
    return null;
  }

  return (
    <Switch
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      className={`${darkMode ? "bg-teal-600" : "bg-gray-200"}
        relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${darkMode ? "translate-x-6" : "translate-x-1"}
          inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default ThemeToggle;
