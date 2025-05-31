import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};
