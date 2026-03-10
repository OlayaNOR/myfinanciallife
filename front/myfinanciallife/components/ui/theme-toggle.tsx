"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-md border cursor-pointer"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  );
}