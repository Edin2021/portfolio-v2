import React, { useEffect, useState } from "react";
import { magnet, magnetUnset } from "./helpers/utils";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const localTheme = localStorage.getItem("darkTheme");

  const [theme, setTheme] = useState(localTheme);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.className = "";
    if (theme === "true") {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = (e) => {
    e.currentTarget.classList.toggle("active");
    const newTheme = theme ? "" : "true";
    localStorage.setItem("darkTheme", newTheme);
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  useEffect(() => {
    const magnets = document.querySelectorAll(".magnet");
    magnets.forEach((magnetElement) => {
      if (!magnetElement) return;
      let xMp = 0.3;
      let yMp = 0.5;
      magnetElement.addEventListener("mousemove", (e) => magnet(e, xMp, yMp));
      magnetElement.addEventListener("mouseout", magnetUnset);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ showMobileMenu, toggleMobileMenu, toggleTheme, theme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => React.useContext(AppContext);
