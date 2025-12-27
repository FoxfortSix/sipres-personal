"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, User, Settings, Info, HelpCircle, LogOut, ChevronRight } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  userData?: {
    name: string
    nim: string
  }
}

export function Sidebar({ isOpen, onClose, userData }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      icon: <User className="w-5 h-5" />,
      label: 'Profil Saya',
      href: '/dashboard/profil'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: 'Pengaturan',
      href: '/dashboard/pengaturan'
    },
    {
      icon: <Info className="w-5 h-5" />,
      label: 'Tentang SPAI',
      href: '/tentang'
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: 'Bantuan & FAQ',
      href: '/dashboard/bantuan'
    }
  ]

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="Logo SPAI" 
                  className="w-10 h-10 object-contain"
                />
                <h2 className="text-white font-bold">SPAI</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {userData && (
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm text-blue-100 mb-1">Halo,</p>
                <p className="mb-1 font-semibold">{userData.name}</p>
                <p className="text-xs text-blue-100">NIM: {userData.nim}</p>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors group ${
                     pathname === item.href ? 'bg-slate-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`transition-colors ${pathname === item.href ? 'text-[#1e5a7e]' : 'text-slate-600 group-hover:text-[#1e5a7e]'}`}>
                      {item.icon}
                    </div>
                    <span className={`transition-colors ${pathname === item.href ? 'text-[#1e5a7e] font-medium' : 'text-slate-700 group-hover:text-[#1e5a7e]'}`}>
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-colors ${pathname === item.href ? 'text-[#1e5a7e]' : 'text-slate-400 group-hover:text-[#1e5a7e]'}`} />
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200">
            <Link
              href="/"
              className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-red-50 text-red-600 transition-colors group"
            >
              <LogOut className="w-5 h-5" />
              <span>Keluar</span>
            </Link>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-500">&copy; 2025 SPAI</p>
              <p className="text-xs text-slate-400">Versi 1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}