"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useAppTheme } from "@/provider";

const DarkModeSwitch = () => {
  const { theme, setTheme, mounted } = useAppTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xl cursor-pointer hover:text-amber-500"
    >
      {mounted && theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default DarkModeSwitch;
