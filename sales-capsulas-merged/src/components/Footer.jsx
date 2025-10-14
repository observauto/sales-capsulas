// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { Twitter, Instagram, Youtube, Linkedin, Moon, Sun } from "lucide-react";
import { toggleTheme } from "../utils/theme";

const OALogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 28" aria-hidden="true" className="h-6">
    <g fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="20" fontWeight="800">
      <text x="0" y="20" fill="#1C3B71">OBSER</text>
      <text x="72" y="20" fill="#1F4086">V</text>
      <text x="86" y="20" fill="#D70102">AUTO</text>
    </g>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const sync = () => setPressed(document.documentElement.classList.contains("dark"));
    sync();
    window.addEventListener("oa:theme-change", sync);
    return () => window.removeEventListener("oa:theme-change", sync);
  }, []);

  const socials = [
    { icon: <Twitter className="h-5 w-5" aria-hidden="true" />, href: "https://x.com/ObservAuto" },
    { icon: <Instagram className="h-5 w-5" aria-hidden="true" />, href: "https://instagram.com/observauto" },
    { icon: <Youtube className="h-5 w-5" aria-hidden="true" />, href: "https://youtube.com/@observauto" },
    { icon: <Linkedin className="h-5 w-5" aria-hidden="true" />, href: "https://linkedin.com/company/observauto" },
  ];

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0B1220]/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <OALogo />
            <span className="text-sm text-gray-600 dark:text-white/70">© {year} ObservAuto</span>
          </div>

          <div className="flex items-center gap-3">
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

            <nav aria-label="Social media" className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-200 p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 dark:border-white/10 dark:hover:bg-white/5"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
