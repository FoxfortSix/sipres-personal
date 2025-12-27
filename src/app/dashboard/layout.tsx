"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { DashboardHeader } from "@/components/DashboardHeader"

// Mock Data User (Nanti bisa diganti dengan real data)
const userData = {
  name: 'Ahmad Fauzi',
  nim: '2021110001'
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pb-20">
      <DashboardHeader 
        name={userData.name}
        nim={userData.nim}
        onMenuClick={() => setIsSidebarOpen(true)}
      />
      
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        userData={userData}
      />

      {/* Konten Halaman (Page.tsx) akan dirender di sini */}
      {children}
    </div>
  )
}