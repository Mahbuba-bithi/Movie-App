"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-xl cursor-pointer hover:text-amber-500"
    >
      {mounted && resolvedTheme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default DarkModeSwitch;
