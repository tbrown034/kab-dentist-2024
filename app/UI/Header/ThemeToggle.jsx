"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false); // Correct naming convention

  useEffect(() => {
    // Apply the 'dark' class to the body tag based on `darkMode`
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      className={`${darkMode ? "bg-blue-600" : "bg-gray-200"}
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
