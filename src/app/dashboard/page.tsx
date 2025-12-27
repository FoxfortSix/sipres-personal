"use client"

import Link from "next/link"
import { QrCode, Upload, ClipboardList, FileText } from 'lucide-react'
import { StatsCard } from "@/components/StatsCard"
import { QuickAction } from "@/components/QuickAction"
import { ActivityItem } from "@/components/ActivityItem"

export default function DashboardPage() {
  // Mock Data
  const userData = {
    totalPresensi: 8,
    totalResume: 7,
    persentaseKehadiran: 80
  }

  const recentActivities = [
    {
      id: 1,
      type: 'presensi',
      title: 'Presensi Minggu ke-8',
      date: '2 Desember 2025',
      status: 'success'
    },
    {
      id: 2,
      type: 'resume',
      title: 'Upload Resume Minggu ke-8',
      date: '2 Desember 2025',
      status: 'success'
    },
    {
      id: 3,
      type: 'presensi',
      title: 'Presensi Minggu ke-7',
      date: '25 November 2025',
      status: 'missed'
    }
  ]

  return (
    <div className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8">
        {/* Desktop: 2 Column Layout */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          
          {/* Left Column - Stats & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <section>
              <h2 className="text-slate-800 mb-4 md:mb-6 font-bold">Ringkasan Aktivitas</h2>
              
              <div className="grid grid-cols-3 gap-3 mb-6 md:gap-4 md:mb-8">
                <StatsCard
                  value={userData.totalPresensi}
                  label="Presensi"
                  color="bg-blue-500"
                />
                <StatsCard
                  value={userData.totalResume}
                  label="Resume"
                  color="bg-teal-500"
                />
                <StatsCard
                  value={`${userData.persentaseKehadiran}%`}
                  label="Kehadiran"
                  color="bg-indigo-500"
                />
              </div>

              {/* Progress Bar */}
              <div className="bg-white rounded-xl p-4 shadow-sm md:p-6">
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <span className="text-sm text-slate-600 md:text-base font-medium">Progress Semester</span>
                  <span className="text-slate-800 md:text-lg font-bold">{userData.totalPresensi}/10</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 md:h-3">
                  <div 
                    className="bg-[#1e5a7e] h-2 md:h-3 rounded-full transition-all duration-500"
                    style={{ width: `${userData.persentaseKehadiran}%` }}
                  ></div>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section>
              <h2 className="text-slate-800 mb-4 md:mb-6 font-bold">Aksi Cepat</h2>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                <Link href="/dashboard/presensi">
                  <QuickAction
                    icon={<QrCode className="w-6 h-6" />}
                    label="Presensi"
                    color="bg-blue-500"
                  />
                </Link>
                <Link href="/dashboard/upload-resume">
                  <QuickAction
                    icon={<Upload className="w-6 h-6" />}
                    label="Upload Resume"
                    color="bg-teal-500"
                  />
                </Link>
                <Link href="/dashboard/rekap-nilai">
                  <QuickAction
                    icon={<ClipboardList className="w-6 h-6" />}
                    label="Rekap Nilai"
                    color="bg-indigo-500"
                  />
                </Link>
                <Link href="/dashboard/tugas-pengganti">
                  <QuickAction
                    icon={<FileText className="w-6 h-6" />}
                    label="Tugas Pengganti"
                    color="bg-violet-500"
                  />
                </Link>
              </div>
            </section>

            {/* Recent Activity - Hidden on Desktop, shown in right column */}
            <section className="lg:hidden">
              <h2 className="text-slate-800 mb-4 md:mb-6 font-bold">Aktivitas Terkini</h2>
              
              <div className="space-y-3 md:space-y-4">
                {recentActivities.map(activity => (
                  <ActivityItem
                    key={activity.id}
                    title={activity.title}
                    date={activity.date}
                    status={activity.status}
                    icon={activity.type === 'presensi' ? 
                      <QrCode className="w-5 h-5" /> : 
                      <Upload className="w-5 h-5" />
                    }
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="hidden lg:block space-y-6">
            {/* Upcoming Event */}
            <section>
              <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-100">Ceramah Berikutnya</span>
                </div>
                <h3 className="mb-1 font-bold text-lg">Minggu ke-9</h3>
                <p className="text-blue-100 text-sm mb-3">Sabtu, 7 Desember 2025 • 08.00 WIB</p>
                <p className="text-sm text-blue-50">
                  Tema: Akhlak dalam Pergaulan Sehari-hari
                </p>
              </div>
            </section>

            {/* Recent Activity - Desktop */}
            <section>
              <h2 className="text-slate-800 mb-4 font-bold">Aktivitas Terkini</h2>
              
              <div className="space-y-3">
                {recentActivities.map(activity => (
                  <ActivityItem
                    key={activity.id}
                    title={activity.title}
                    date={activity.date}
                    status={activity.status}
                    icon={activity.type === 'presensi' ? 
                      <QrCode className="w-5 h-5" /> : 
                      <Upload className="w-5 h-5" />
                    }
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Upcoming Event - Mobile & Tablet Only */}
        <section className="lg:hidden mt-6 md:mt-8">
          <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-xl p-5 shadow-md md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-100 md:text-base">Ceramah Berikutnya</span>
            </div>
            <h3 className="mb-1 font-bold text-lg">Minggu ke-9</h3>
            <p className="text-blue-100 text-sm mb-3 md:text-base">Sabtu, 7 Desember 2025 • 08.00 WIB</p>
            <p className="text-sm text-blue-50 md:text-base">
              Tema: Akhlak dalam Pergaulan Sehari-hari
            </p>
          </div>
        </section>
      </div>
  )
}