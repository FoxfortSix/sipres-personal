"use client"

import Link from "next/link"
import { Bell, Menu } from 'lucide-react'
import { DesktopNavbar } from "./DesktopNavbar"

interface DashboardHeaderProps {
  name: string
  nim: string
  onMenuClick: () => void
}

export function DashboardHeader({ name, nim, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-4 md:max-w-3xl lg:max-w-6xl md:py-5">
        {/* ROW 1: Logo & Navbar */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <Link 
            href="/dashboard"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.png" 
              alt="Logo SPAI" 
              className="w-10 h-10 object-contain md:w-12 md:h-12"
            />
            <div>
              <h1 className="text-slate-800 font-bold md:text-xl">SPAI</h1>
              <p className="text-xs text-slate-500 md:text-sm">Dashboard Peserta</p>
            </div>
          </Link>
          
          {/* Desktop Navbar - Tampil di Kanan Logo */}
          <DesktopNavbar userData={{ name, nim }} />

          {/* Mobile Actions - Hanya di HP */}
          <div className="flex items-center gap-2 lg:hidden">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative md:p-3">
              <Bell className="w-5 h-5 text-slate-600 md:w-6 md:h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={onMenuClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors md:p-3"
            >
              <Menu className="w-5 h-5 text-slate-600 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
        
        {/* ROW 2: User Info Gradient Card */}
        {/* WAJIB: lg:flex agar tampil di desktop sesuai desain asli */}
        <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-lg p-3 md:p-4 lg:flex lg:items-center lg:justify-between shadow-sm">
          <div>
            <p className="text-sm text-blue-100 mb-1 md:text-base">Selamat datang kembali,</p>
            <p className="mb-1 font-bold md:text-lg">{name}</p>
            <p className="text-xs text-blue-100 md:text-sm">NIM: {nim}</p>
          </div>
          
          {/* Tambahan visual agar seimbang di Desktop (Opsional, tapi bagus untuk layout) */}
          <div className="hidden lg:block">
             <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Status Akun: Aktif</span>
             </div>
          </div>
        </div>
      </div>
    </header>
  )
}