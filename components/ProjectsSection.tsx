"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { TerminalWindow } from "@/components/TerminalWindow";
import { useLang } from "@/components/LangContext";
import { t } from "@/data/translations";

export function ProjectsSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const { lang } = useLang();

  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-32">
      <p className="text-green-500 text-xs tracking-[0.2em] mb-2 opacity-50">
        {t.projects.cmd[lang]}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">{t.projects.title[lang]}</h2>

      <div className="flex flex-col md:flex-row gap-0">
        {/* Sidebar */}
        <div className="md:w-[35%] border-r border-[#1a1a1a] flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => !p.comingSoon && setActiveId(p.id)}
              className={`text-left px-4 py-3 transition-colors flex-shrink-0 ${
                p.comingSoon
                  ? "border-l-2 border-dashed border-[#1a1a1a] cursor-default"
                  : activeId === p.id
                    ? "border-l-2 border-green-500 bg-[#111]"
                    : "border-l-2 border-transparent hover:bg-[#111]/50"
              }`}
            >
              <span
                className={`text-[10px] tracking-widest block ${
                  p.comingSoon
                    ? "text-[#222]"
                    : activeId === p.id
                      ? "text-green-500/50"
                      : "text-[#333]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-xs font-bold ${
                  p.comingSoon
                    ? "text-[#333] italic"
                    : activeId === p.id
                      ? "text-[#f1f5f9]"
                      : "text-[#64748b]"
                }`}
              >
                {p.comingSoon ? t.projects.comingSoon[lang].toLowerCase() : p.id}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="md:w-[65%] md:pl-6 pt-4 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {active.comingSoon ? (
                <div className="border border-dashed border-[#222] bg-[#0e0e0e] flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <p className="text-[#333] text-3xl mb-2">+</p>
                    <p className="text-[#333] text-xs tracking-widest">
                      {t.projects.comingSoon[lang]}
                    </p>
                  </div>
                </div>
              ) : (
                <TerminalWindow title={active.id}>
                  <div className="p-4">
                    <p className="text-green-500 text-xs mb-2">{t.projects.describe[lang]}</p>
                    <h3 className="text-xl font-bold mb-2">{active.name}</h3>
                    <p className="text-[#64748b] text-xs leading-relaxed mb-4">
                      {active.description}
                    </p>

                    <div className="bg-[#0c0c0c] border border-[#1a1a1a] h-32 flex items-center justify-center mb-4">
                      <span className="text-[#333] text-xs">
                        [ screenshot ]
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-1.5 flex-wrap">
                        {active.tech.map((tech) => (
                          <span
                            key={tech}
                            className="border border-[#222] text-[#94a3b8] px-2 py-0.5 text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {active.sourceUrl && (
                          <a
                            href={active.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 text-xs hover:underline"
                          >
                            {t.projects.source[lang]} &rarr;
                          </a>
                        )}
                        {active.demoUrl && (
                          <a
                            href={active.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 text-xs hover:underline"
                          >
                            {t.projects.demo[lang]} &rarr;
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
