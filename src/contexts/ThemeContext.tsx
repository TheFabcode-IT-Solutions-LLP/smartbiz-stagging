"use client";
import Calendly from "@/components/Calendly";
import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  toggleModal: (e: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(savedTheme || "light");
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleModal = (e: boolean) => {
    setOpen(e);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleModal }}>
      {children}
      <Calendly open={open} closeModal={()=>toggleModal(false)} />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
