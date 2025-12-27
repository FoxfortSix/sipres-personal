"use client"

import { useState } from "react"
import Link from "next/link"
import { ClipboardList, Upload, QrCode, FileText } from "lucide-react"

import { Header } from "@/components/Header"
import { LandingSidebar } from "@/components/LandingSidebar"
import { FeatureCard } from "@/components/FeatureCard"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      
      <LandingSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Hero Section */}
      <section className="px-4 py-12 max-w-md mx-auto text-center md:max-w-3xl lg:max-w-5xl md:py-16 lg:py-20">
        <div className="mb-8 md:mb-12">
          <h1 className="text-slate-800 mb-3 md:mb-4 font-bold text-3xl md:text-4xl">Selamat Datang di SPAI</h1>
          <p className="text-slate-600 md:text-lg">Sistem Presensi dan Administrasi Islami</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 md:p-8 md:mb-12">
          <p className="text-slate-700 leading-relaxed md:text-lg md:max-w-2xl md:mx-auto">
            Platform digital untuk mendukung kegiatan ceramah islami mingguan mahasiswa. 
            Kelola presensi, resume, dan tugas pengganti dengan mudah.
          </p>
        </div>

        <div className="flex gap-3 md:gap-4 md:max-w-md md:mx-auto">
          <Link href="/dashboard" className="flex-1 bg-[#1e5a7e] text-white py-3 px-6 rounded-xl hover:bg-[#164561] transition-colors md:py-4 md:text-lg flex items-center justify-center">
            Masuk
          </Link>
          <button className="flex-1 border-2 border-[#1e5a7e] text-[#1e5a7e] py-3 px-6 rounded-xl hover:bg-[#1e5a7e] hover:text-white transition-colors md:py-4 md:text-lg">
            Daftar
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="px-4 py-8 max-w-md mx-auto md:max-w-3xl lg:max-w-5xl md:py-12 lg:py-16">
        <h2 className="text-slate-800 mb-6 text-center md:mb-8 lg:mb-10 font-bold text-2xl">Fitur Utama</h2>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 lg:gap-6">
          <FeatureCard icon={<QrCode className="w-6 h-6" />} title="Presensi Digital" description="Scan barcode untuk presensi cepat dan akurat setiap minggu" color="bg-blue-500" />
          <FeatureCard icon={<Upload className="w-6 h-6" />} title="Upload Resume" description="Kirim resume ceramah langsung dari smartphone Anda" color="bg-teal-500" />
          <FeatureCard icon={<ClipboardList className="w-6 h-6" />} title="Rekap Nilai" description="Pantau absensi dan resume yang telah dikirim" color="bg-indigo-500" />
          <FeatureCard icon={<FileText className="w-6 h-6" />} title="Tugas Pengganti" description="Akses daftar tugas pengganti jika tidak bisa hadir" color="bg-violet-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="px-4 py-8 max-w-md mx-auto md:max-w-3xl lg:max-w-5xl md:py-12 lg:py-16">
        <div className="bg-[#1e5a7e] text-white rounded-2xl p-6 md:p-8 lg:p-10">
          <h3 className="mb-3 md:mb-4 md:text-center font-bold text-xl">Tentang SPAI</h3>
          <p className="text-blue-100 leading-relaxed mb-4 md:text-center md:text-lg md:max-w-2xl md:mx-auto md:mb-6">
            SPAI adalah kegiatan ceramah islami yang dilaksanakan setiap minggu untuk mahasiswa. 
            Melalui platform ini, kami memudahkan administrasi dan meningkatkan partisipasi mahasiswa.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-100 text-sm md:text-base">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Aktif setiap minggu</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 max-w-md mx-auto text-center text-slate-500 text-sm md:max-w-3xl lg:max-w-5xl md:py-12">
        <p>&copy; 2025 SPAI. Platform Kegiatan Mahasiswa</p>
      </footer>
    </div>
  )
}