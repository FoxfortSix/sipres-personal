"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Upload, FileText, User, Settings, LogOut } from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DesktopNavbarProps {
  userData: {
    name: string
    nim: string
  }
}

export function DesktopNavbar({ userData }: DesktopNavbarProps) {
  const pathname = usePathname()

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: "Tentang", href: "/dashboard/tentang", icon: <Upload className="w-4 h-4" /> },
    { label: "Bantuan", href: "/dashboard/bantuan", icon: <FileText className="w-4 h-4" /> },
  ]

  return (
    <div className="hidden lg:flex items-center gap-6">
      {/* Navigation Links */}
      <nav className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-slate-100 text-[#1e5a7e]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#1e5a7e]"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="w-px h-6 bg-slate-200 mx-2"></div>

      {/* User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="flex items-center gap-3 pl-2 hover:opacity-80 transition-opacity">
            <div className="text-right hidden xl:block">
              <p className="text-sm font-semibold text-slate-800">{userData.name}</p>
              <p className="text-xs text-slate-500">{userData.nim}</p>
            </div>
            <Avatar className="h-9 w-9 border border-slate-200">
              <AvatarImage src="" />
              <AvatarFallback className="bg-[#1e5a7e] text-white font-medium">
                {userData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profil" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/pengaturan" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Pengaturan</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600 cursor-pointer focus:text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Keluar</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}