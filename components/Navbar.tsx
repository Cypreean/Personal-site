"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";
import { t } from "@/data/translations";

const links = [
  { key: "projects" as const, href: "#projects" },
  { key: "timeline" as const, href: "#timeline" },
  { key: "contact" as const, href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-colors ${
        scrolled ? "bg-[#0c0c0c]/90 backdrop-blur-sm border-b border-[#1a1a1a]" : ""
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-green-500 text-sm font-bold tracking-widest"
      >
        CR_
      </button>
      <div className="flex gap-6 items-center">
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-[#64748b] text-xs hover:text-green-500 transition-colors"
          >
            {t.nav[link.key][lang]}
          </button>
        ))}
        <button
          onClick={toggle}
          className="border-l border-[#222] pl-4 ml-2 flex items-center gap-1"
        >
          <span className={`text-[10px] font-bold transition-colors ${lang === "en" ? "text-green-500" : "text-[#555] hover:text-green-500"}`}>
            EN
          </span>
          <span className="text-[#333] text-[10px]">/</span>
          <span className={`text-[10px] font-bold transition-colors ${lang === "pl" ? "text-green-500" : "text-[#555] hover:text-green-500"}`}>
            PL
          </span>
        </button>
      </div>
    </nav>
  );
}
