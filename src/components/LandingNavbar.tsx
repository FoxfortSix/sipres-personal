"use client"

import Link from "next/link"
import { Info, Zap, Mail, LogIn, UserPlus } from "lucide-react"

interface LandingNavbarProps {
  onScrollToSection: (sectionId: string) => void
}

export function LandingNavbar({ onScrollToSection }: LandingNavbarProps) {
  const navItems = [
    { icon: <Info className="w-4 h-4" />, label: "Tentang", href: "/tentang" },
    { icon: <Zap className="w-4 h-4" />, label: "Fitur", onClick: () => onScrollToSection("fitur") },
    { icon: <Mail className="w-4 h-4" />, label: "Kontak", href: "/kontak" },
  ]

  return (
    <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
      {navItems.map((item, index) =>
        item.href ? (
          <Link key={index} href={item.href} className="flex items-center gap-2 text-slate-600 hover:text-[#1e5a7e] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50">
            {item.icon}<span className="text-sm font-medium">{item.label}</span>
          </Link>
        ) : (
          <button key={index} onClick={item.onClick} className="flex items-center gap-2 text-slate-600 hover:text-[#1e5a7e] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50">
            {item.icon}<span className="text-sm font-medium">{item.label}</span>
          </button>
        )
      )}
      <div className="w-px h-6 bg-slate-200"></div>
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="flex items-center gap-2 text-[#1e5a7e] hover:text-[#164561] transition-colors py-2 px-4 rounded-lg hover:bg-slate-50 font-medium">
          <LogIn className="w-4 h-4" /><span className="text-sm">Masuk</span>
        </Link>
        <button className="flex items-center gap-2 bg-[#1e5a7e] text-white py-2 px-4 rounded-lg hover:bg-[#164561] transition-colors font-medium">
          <UserPlus className="w-4 h-4" /><span className="text-sm">Daftar</span>
        </button>
      </div>
    </nav>
  )
}