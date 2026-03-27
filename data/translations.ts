export type Lang = "en" | "pl";

export const t = {
  nav: {
    projects: { en: "projects", pl: "projekty" },
    timeline: { en: "timeline", pl: "kariera" },
    contact: { en: "contact", pl: "kontakt" },
  },
  hero: {
    whoami: { en: "> whoami", pl: "> whoami" },
    scrollDown: { en: "scroll down", pl: "przewin w dol" },
    skillsCmd: { en: "$ cat ~/skills.json | jq", pl: "$ cat ~/umiejetnosci.json | jq" },
    summary: {
      en: [
        "I adapt fast to new technologies and environments.",
        "I work in high-risk, safety-critical environments (ATC).",
        "I ship products. I solve problems.",
      ],
      pl: [
        "Szybko sie adaptuje do nowych technologii i srodowisk.",
        "Pracuje w srodowiskach o wysokim ryzyku (kontrola ruchu lotniczego).",
        "Dostarczam produkty. Rozwiazuje problemy.",
      ],
    },
  },
  projects: {
    cmd: { en: "> ls ~/projects", pl: "> ls ~/projekty" },
    title: { en: "PROJECTS", pl: "PROJEKTY" },
    describe: { en: "$ describe", pl: "$ opis" },
    comingSoon: { en: "COMING SOON", pl: "WKROTCE" },
    source: { en: "source", pl: "zrodlo" },
    demo: { en: "demo", pl: "demo" },
  },
  timeline: {
    cmd: { en: "> git log --oneline career.md", pl: "> git log --oneline kariera.md" },
    title: { en: "TIMELINE", pl: "KARIERA" },
  },
  contact: {
    cmd: { en: "> contact --list", pl: "> kontakt --lista" },
    title: { en: "CONTACT", pl: "KONTAKT" },
    downloadCv: { en: "download CV", pl: "pobierz CV" },
    footer: { en: "built with next.js // 2026", pl: "zbudowane w next.js // 2026" },
  },
} as const;
