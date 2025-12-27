"use client"

import Link from "next/link"
import { ArrowLeft, History } from "lucide-react"

interface PresensiHeaderProps {
  onBack?: () => void
}

export function PresensiHeader({ onBack }: PresensiHeaderProps) {
  return (
    <div className="bg-white p-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
      <div className="flex items-center gap-3">
        {onBack ? (
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
        ) : (
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
        )}
        <h1 className="font-semibold text-lg text-slate-800">Presensi Mingguan</h1>
      </div>
      <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
        <History className="w-5 h-5 text-slate-600" />
      </button>
    </div>
  )
}