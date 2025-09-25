// components/layout/header/ThemeToggle.jsx
// Client Component
"use client";
import { Switch } from "@headlessui/react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme, mounted } = useTheme();

  // Prevent rendering until theme is determined
  if (!mounted) {
    // Reserve space for the toggle to prevent layout shift
    return (
      <div className="h-7 w-14 rounded-full bg-gray-200 dark:bg-gray-700" />
    );
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
      className={`${
        isDarkMode 
          ? "bg-gray-700 hover:bg-gray-600" 
          : "bg-gray-200 hover:bg-gray-300"
      }
      relative inline-flex h-7 w-14 items-center rounded-full shadow-inner transition-colors duration-200`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      
      {/* Simple sliding dot with subtle shadow */}
      <span
        className={`${isDarkMode ? "translate-x-8" : "translate-x-1"}
        inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out`}
      />
    </Switch>
  );
};

export default ThemeToggle;
