import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../utils/theme";

export default function Navbar() {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const sync = () => setPressed(document.documentElement.classList.contains("dark"));
    sync();
    window.addEventListener("oa:theme-change", sync);
    return () => window.removeEventListener("oa:theme-change", sync);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0B1220]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="font-extrabold tracking-tight text-[#1C3B71] dark:text-white">ObservAuto</div>
        <button
          type="button"
          aria-pressed={pressed}
          title="Cambiar tema"
          onClick={(e) => toggleTheme(e.currentTarget)}
          className="rounded-full border border-gray-200 p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 dark:border-white/10 dark:hover:bg-white/5"
        >
          <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
          <Sun className="h-5 w-5 hidden dark:block" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
