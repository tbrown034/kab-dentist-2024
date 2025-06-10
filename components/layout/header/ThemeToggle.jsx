"use client";
import React from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme, mounted } = useTheme();

  // Prevent rendering until theme is determined
  if (!mounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (theme === "system") {
      // If currently system, switch to opposite of current resolved theme
      setTheme(isDarkMode ? "light" : "dark");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      // Currently dark, go to light
      setTheme("light");
    }
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleToggle}
      className={`${isDarkMode ? "bg-teal-600" : "bg-gray-200"}
        relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${isDarkMode ? "translate-x-6" : "translate-x-1"}
          inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default ThemeToggle;
