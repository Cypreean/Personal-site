import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/components/LangContext";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cyprian Ratynski — Portfolio",
  description:
    "Air Traffic Trainee, Developer, CS Student. Terminal-style portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-[#0c0c0c] text-[#f1f5f9] font-mono antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
