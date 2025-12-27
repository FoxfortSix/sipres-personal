"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { LandingNavbar } from "./LandingNavbar";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between md:max-w-3xl lg:max-w-5xl md:py-5">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="Logo SPAI"
            className="w-10 h-10 object-contain md:w-12 md:h-12"
          />
          <div>
            <h1 className="text-slate-800 md:text-xl font-bold">SPAI</h1>
            <p className="text-xs text-slate-500 md:text-sm">
              Ceramah Islami Mingguan
            </p>
          </div>
        </Link>
        <LandingNavbar onScrollToSection={scrollToSection} />
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors md:p-3 lg:hidden"
        >
          <Menu className="w-6 h-6 text-slate-600 md:w-7 md:h-7" />
        </button>
      </div>
    </header>
  );
}
