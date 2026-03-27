"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { useLang } from "@/components/LangContext";
import { t } from "@/data/translations";

function TimelineNode({
  entry,
  index,
}: {
  entry: (typeof timeline)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const dotColor = entry.active ? "bg-green-500" : index < 3 ? "bg-[#333]" : "bg-[#222]";
  const dateColor = entry.active ? "text-green-500" : "text-[#555]";
  const titleColor = entry.active ? "text-[#f1f5f9]" : "text-[#94a3b8]";
  const orgColor = entry.active ? "text-[#64748b]" : "text-[#4a5568]";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative pl-6 pb-8 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className={`absolute left-0 top-1 w-3 h-3 rounded-full ${dotColor} -translate-x-[7px] border-2 border-[#0c0c0c]`}
      />

      <p className={`text-[10px] tracking-widest mb-1 ${dateColor}`}>
        {entry.dateRange}
      </p>
      <h3 className={`text-sm font-bold ${titleColor}`}>{entry.title}</h3>
      <p className={`text-xs ${orgColor}`}>{entry.organization}</p>

      <AnimatePresence>
        {expanded && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[#555] text-xs leading-relaxed mt-2 overflow-hidden"
          >
            {entry.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TimelineSection() {
  const { lang } = useLang();

  return (
    <section id="timeline" className="py-24 px-8 md:px-16 lg:px-32">
      <p className="text-green-500 text-xs tracking-[0.2em] mb-2 opacity-50">
        {t.timeline.cmd[lang]}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">{t.timeline.title[lang]}</h2>

      <div className="border-l-2 border-[#1a1a1a] ml-1.5 max-w-xl">
        {timeline.map((entry, i) => (
          <TimelineNode key={entry.title} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
