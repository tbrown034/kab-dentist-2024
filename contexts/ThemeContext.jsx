// contexts/ThemeContext.jsx
// Client Component
"use client";

import { createContext, use, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(null); // null = system, "light" or "dark" = user override
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("🎨 ThemeProvider: Initializing theme system...");

    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme"); // null if not set
        console.log(
          "🎨 ThemeProvider: Found saved theme:",
          savedTheme || "system"
        );

        setThemeState(savedTheme); // null for system, "light"/"dark" for user override
        applyTheme(savedTheme);
        setMounted(true);

        console.log("🎨 ThemeProvider: Theme system initialized successfully");
      } catch (error) {
        console.error("🎨 ThemeProvider: Error initializing theme:", error);
        setThemeState(null);
        applyTheme(null);
        setMounted(true);
      }
    };

    initializeTheme();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    console.log("🎨 ThemeProvider: Setting up system theme listener");

    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = (e) => {
        console.log(
          "🎨 ThemeProvider: System theme changed to:",
          e.matches ? "dark" : "light"
        );

        if (theme === null) {
          console.log("🎨 ThemeProvider: Following system preference");
          document.documentElement.classList.toggle("dark", e.matches);
        } else {
          console.log(
            "🎨 ThemeProvider: User has override, ignoring system change"
          );
        }
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    } catch (error) {
      console.error(
        "🎨 ThemeProvider: Error setting up system theme listener:",
        error
      );
    }
  }, [theme, mounted]);

  const applyTheme = (newTheme) => {
    if (typeof window === "undefined") return;

    console.log("🎨 ThemeProvider: Applying theme:", newTheme || "system");

    try {
      document.documentElement.classList.remove("light", "dark");

      if (newTheme === "light") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.add("light");
        console.log("🎨 ThemeProvider: Light theme applied");
      } else if (newTheme === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        console.log("🎨 ThemeProvider: Dark theme applied");
      } else {
        // null/system - remove stored preference and follow system
        localStorage.removeItem("theme");
        const isDarkSystem = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", isDarkSystem);
        console.log(
          "🎨 ThemeProvider: System theme applied, resolved to:",
          isDarkSystem ? "dark" : "light"
        );
      }
    } catch (error) {
      console.error("🎨 ThemeProvider: Error applying theme:", error);
      document.documentElement.classList.add("light");
    }
  };

  const setTheme = (newTheme) => {
    console.log("🎨 ThemeProvider: setTheme called with:", newTheme);

    if (newTheme !== null && !["light", "dark"].includes(newTheme)) {
      console.error("🎨 ThemeProvider: Invalid theme provided:", newTheme);
      return;
    }

    try {
      setThemeState(newTheme);
      applyTheme(newTheme);
    } catch (error) {
      console.error("🎨 ThemeProvider: Error in setTheme:", error);
    }
  };

  const getResolvedTheme = () => {
    if (typeof window === "undefined") return "light";

    try {
      if (theme === null) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return theme;
    } catch (error) {
      console.error("🎨 ThemeProvider: Error getting resolved theme:", error);
      return "light";
    }
  };

  const isDark = () => {
    if (typeof window === "undefined") return false;

    try {
      return document.documentElement.classList.contains("dark");
    } catch (error) {
      console.error("🎨 ThemeProvider: Error checking isDark:", error);
      return false;
    }
  };

  const value = {
    theme: theme || "system", // For backwards compatibility, expose "system" when theme is null
    resolvedTheme: getResolvedTheme(),
    setTheme,
    mounted,
    isDark: isDark(),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  try {
    const context = use(ThemeContext);
    if (!context) {
      const error = new Error("useTheme must be used within a ThemeProvider");
      console.error("🎨 useTheme:", error.message);
      throw error;
    }
    return context;
  } catch (error) {
    console.error("🎨 useTheme: Error accessing theme context:", error);
    throw error;
  }
}

export { ThemeContext };
