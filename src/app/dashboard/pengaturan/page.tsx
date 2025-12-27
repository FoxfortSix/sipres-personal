"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Moon, Globe, Lock } from "lucide-react";
import { SubPageHeader } from "@/components/sub-page-header";
import { Switch } from "@/components/ui/switch"; // Menggunakan Shadcn UI Switch jika ada, atau fallback ke manual
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PengaturanPage() {
  const router = useRouter();
  const [notifPresensi, setNotifPresensi] = useState(true);
  const [notifResume, setNotifResume] = useState(true);
  const [notifTugas, setNotifTugas] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("id");

  return (
    <div className="pb-8 md:pb-12 lg:pb-16">
      <SubPageHeader title="Pengaturan" onBack={() => router.back()} />

      <div className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8 lg:py-10">
        <div className="space-y-4 md:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {/* Notifications */}
          <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
            <h3 className="text-slate-800 mb-4 flex items-center gap-2 font-bold md:text-xl md:mb-5">
              <Bell className="w-5 h-5 text-[#1e5a7e] md:w-6 md:h-6" />
              Notifikasi
            </h3>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    Notifikasi Presensi
                  </p>
                  <p className="text-xs text-slate-500 md:text-sm">
                    Pengingat untuk melakukan presensi
                  </p>
                </div>
                <Switch
                  checked={notifPresensi}
                  onCheckedChange={setNotifPresensi}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    Notifikasi Resume
                  </p>
                  <p className="text-xs text-slate-500 md:text-sm">
                    Pengingat deadline upload resume
                  </p>
                </div>
                <Switch
                  checked={notifResume}
                  onCheckedChange={setNotifResume}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    Notifikasi Tugas
                  </p>
                  <p className="text-xs text-slate-500 md:text-sm">
                    Pengingat deadline tugas pengganti
                  </p>
                </div>
                <Switch checked={notifTugas} onCheckedChange={setNotifTugas} />
              </div>
            </div>
          </div>

          {/* Appearance & Language Container */}
          <div className="space-y-4 md:space-y-6">
            {/* Appearance */}
            <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
              <h3 className="text-slate-800 mb-4 flex items-center gap-2 font-bold md:text-xl md:mb-5">
                <Moon className="w-5 h-5 text-[#1e5a7e] md:w-6 md:h-6" />
                Tampilan
              </h3>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    Mode Gelap
                  </p>
                  <p className="text-xs text-slate-500 md:text-sm">
                    Aktifkan tema gelap
                  </p>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>

            {/* Language */}
            <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
              <h3 className="text-slate-800 mb-4 flex items-center gap-2 font-bold md:text-xl md:mb-5">
                <Globe className="w-5 h-5 text-[#1e5a7e] md:w-6 md:h-6" />
                Bahasa
              </h3>

              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Bahasa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
            <h3 className="text-slate-800 mb-4 flex items-center gap-2 font-bold md:text-xl md:mb-5">
              <Lock className="w-5 h-5 text-[#1e5a7e] md:w-6 md:h-6" />
              Keamanan
            </h3>

            <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors md:p-4 border border-slate-100">
              <p className="text-sm font-medium text-slate-700 mb-1 md:text-base md:mb-2">
                Ubah Password
              </p>
              <p className="text-xs text-slate-500 md:text-sm">
                Perbarui password akun Anda
              </p>
            </button>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 md:p-6">
            <h3 className="text-red-800 mb-3 font-bold md:text-xl md:mb-4">
              Zona Bahaya
            </h3>
            <button className="w-full text-left p-3 rounded-lg bg-red-100 hover:bg-red-200 transition-colors md:p-4">
              <p className="text-sm font-bold text-red-800 mb-1 md:text-base md:mb-2">
                Hapus Akun
              </p>
              <p className="text-xs text-red-600 md:text-sm">
                Hapus akun dan semua data Anda secara permanen
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
