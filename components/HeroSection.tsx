"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/components/LangContext";
import { t } from "@/data/translations";

const firstName = "Cyprian";
const lastName = "Ratynski";

const roles = [
  { role: "Air Traffic Trainee", at: "PANSA" },
  { role: "Developer", at: "Miejscownik.pl" },
  { role: "CS Student", at: "PJATK" },
];

const skills = [
  { category: "languages", items: ["Java", "C++", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "frontend", items: ["React", "Next.js", "React Native", "Tailwind CSS"] },
  { category: "backend", items: ["Node.js", "REST API", "PostgreSQL", "PL/SQL"] },
  { category: "tools", items: ["Git", "Docker", "WordPress", "Chrome APIs", "Webpack"] },
  { category: "ai_dev", items: ["Prompt Engineering", "Claude Code", "Google Gemini", "AI-Assisted Dev"] },
  { category: "industries", items: ["Aviation", "EdTech", "Healthcare IT", "GeoData & Maps"] },
];

export function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const { lang } = useLang();

  const fullLength = firstName.length + lastName.length;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed((firstName + lastName).slice(0, i));
      if (i >= fullLength) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[10%] text-[#111] text-[120px] md:text-[200px] font-bold leading-none select-none opacity-50">
          CR
        </div>
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
          style={{ height: "200px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>

      <div className="flex-1 flex items-center px-8 md:px-16 lg:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-12 lg:gap-20">
          {/* Left side - intro */}
          <div className="lg:w-[45%]">
            <p className="text-green-500 text-xs tracking-[0.2em] mb-3 opacity-60">
              {t.hero.whoami[lang]}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="block">
                {displayed.slice(0, firstName.length)}
                {displayed.length <= firstName.length && <span className="animate-blink text-green-500">_</span>}
              </span>
              <span className="block">
                {displayed.slice(firstName.length)}
                {displayed.length > firstName.length && <span className="animate-blink text-green-500">_</span>}
              </span>
            </h1>

            {doneTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mt-6 space-y-1.5">
                  {roles.map((r, i) => (
                    <motion.p
                      key={r.role}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      className="text-sm"
                    >
                      <span className="text-[#94a3b8]">{r.role}</span>
                      <span className="text-[#333] mx-1">@</span>
                      <span className="text-[#555]">{r.at}</span>
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  className="flex gap-4 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <a
                    href="https://github.com/Cypreean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500 text-green-500 px-4 py-1.5 text-xs hover:bg-green-500/10 transition-colors"
                  >
                    github &rarr;
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cyprian-raty%C5%84ski-749a78269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#333] text-[#94a3b8] px-4 py-1.5 text-xs hover:border-[#555] transition-colors"
                  >
                    linkedin &rarr;
                  </a>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Right side - skills terminal */}
          {doneTyping && (
            <motion.div
              className="lg:w-[50%]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-[#111] border border-[#222] overflow-hidden">
                <div className="bg-[#161616] px-3 py-2 flex items-center gap-1.5 border-b border-[#222]">
                  <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-green-500 opacity-70" />
                  <span className="text-[#555] text-xs ml-2">skills.sh</span>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-green-500 text-[10px] opacity-50">{t.hero.skillsCmd[lang]}</p>

                  {skills.map((group, gi) => (
                    <motion.div
                      key={group.category}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + gi * 0.1, duration: 0.3 }}
                    >
                      <p className="text-green-500/70 text-[10px] tracking-widest uppercase mb-1.5">
                        {"//"} {group.category.replace("_", " ")}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="border border-[#222] text-[#94a3b8] px-2 py-0.5 text-[10px] hover:border-green-500/40 hover:text-green-500 transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                    className="pt-2 border-t border-[#1a1a1a]"
                  >
                    <div className="text-[#555] text-[10px] leading-relaxed space-y-0.5">
                      {t.hero.summary[lang].map((line, i) => (
                        <p key={i}>
                          <span className="text-green-500/50">$</span> {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {doneTyping && (
        <motion.div
          className="pb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-green-500/60 text-xs tracking-widest flex flex-col items-center gap-2 mx-auto hover:text-green-500 transition-colors group"
          >
            <span className="border border-green-500/30 px-4 py-1.5 group-hover:border-green-500/60 transition-colors">
              {t.hero.scrollDown[lang]}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </button>
        </motion.div>
      )}
    </section>
  );
}
