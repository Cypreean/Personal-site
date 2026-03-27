"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { contacts } from "@/data/portfolio";
import { useLang } from "@/components/LangContext";
import { t } from "@/data/translations";

export function ContactSection() {
  const { lang } = useLang();

  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-32">
      <p className="text-green-500 text-xs tracking-[0.2em] mb-2 opacity-50">
        {t.contact.cmd[lang]}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">{t.contact.title[lang]}</h2>

      <div className="max-w-md">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.url}
            target={c.label === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="flex py-2 group"
          >
            <span className="text-[#64748b] text-xs w-24">{c.label}</span>
            <span className="text-[#f1f5f9] text-xs group-hover:text-green-500 transition-colors">
              {c.value}
            </span>
          </motion.a>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mt-8"
        >
          <a
            href="/Cyprian_Ratynski_Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 text-xs hover:bg-green-500/10 transition-colors"
          >
            <Download size={14} />
            {t.contact.downloadCv[lang]}
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-6 border-t border-[#1a1a1a]">
        <p className="text-[#333] text-xs">{t.contact.footer[lang]}</p>
      </div>
    </section>
  );
}
