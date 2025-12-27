"use client"

import Link from "next/link"
import { X, Info, Zap, Mail, LogIn, UserPlus, ChevronRight } from "lucide-react"

interface LandingSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function LandingSidebar({ isOpen, onClose }: LandingSidebarProps) {
  const scrollToSection = (sectionId: string) => {
    onClose()
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) element.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  const menuItems = [
    { icon: <Info className="w-5 h-5" />, label: "Tentang SPAI", href: "/tentang" },
    { icon: <Zap className="w-5 h-5" />, label: "Fitur-fitur", onClick: () => scrollToSection("fitur") },
    { icon: <Mail className="w-5 h-5" />, label: "Kontak", href: "/kontak" },
  ]

  return (
    <>
      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={onClose} />
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo SPAI" className="w-10 h-10 object-contain" />
                <h2 className="text-white font-bold text-lg">SPAI</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors"><X className="w-6 h-6" /></button>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-sm text-blue-100 mb-1">Sistem Presensi dan</p>
              <p className="text-white">Administrasi Islami</p>
            </div>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto space-y-2">
            {menuItems.map((item, index) => item.href ? (
                <Link key={index} href={item.href} onClick={onClose} className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-3"><div className="text-slate-600 group-hover:text-[#1e5a7e]">{item.icon}</div><span className="text-slate-700 group-hover:text-[#1e5a7e]">{item.label}</span></div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#1e5a7e]" />
                </Link>
              ) : (
                <button key={index} onClick={item.onClick} className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-3"><div className="text-slate-600 group-hover:text-[#1e5a7e]">{item.icon}</div><span className="text-slate-700 group-hover:text-[#1e5a7e]">{item.label}</span></div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#1e5a7e]" />
                </button>
              )
            )}
          </nav>
          <div className="p-4 border-t border-slate-200 space-y-3">
            <Link href="/dashboard" onClick={onClose} className="w-full flex items-center justify-center gap-2 bg-[#1e5a7e] text-white py-3 px-6 rounded-xl hover:bg-[#164561] transition-colors"><LogIn className="w-5 h-5" /><span>Masuk</span></Link>
            <button className="w-full flex items-center justify-center gap-2 border-2 border-[#1e5a7e] text-[#1e5a7e] py-3 px-6 rounded-xl hover:bg-[#1e5a7e] hover:text-white transition-colors"><UserPlus className="w-5 h-5" /><span>Daftar</span></button>
          </div>
        </div>
      </div>
    </>
  )
}