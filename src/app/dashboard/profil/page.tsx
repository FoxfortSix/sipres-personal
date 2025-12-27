"use client";

import { useRouter } from "next/navigation";
import { User, Mail, Phone, Award } from "lucide-react";
import { SubPageHeader } from "@/components/sub-page-header";

export default function ProfilPage() {
  const router = useRouter();

  // Mock data
  const userData = {
    name: "Ahmad Fauzi",
    nim: "2021110001",
    email: "ahmad.fauzi@student.university.ac.id",
    phone: "081234567890",
    jurusan: "Teknik Informatika",
    fakultas: "Fakultas Teknik",
    angkatan: "2021",
    totalPresensi: 8,
    totalResume: 7,
    nilaiRataRata: 87,
  };

  return (
    <div className="pb-8 md:pb-12 lg:pb-16">
      <SubPageHeader title="Profil Saya" onBack={() => router.back()} />

      <div className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8 lg:py-10">
        {/* Profile Picture & Name */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-4 text-center md:p-8 md:mb-6 lg:mb-8 border border-slate-100">
          <div className="w-24 h-24 bg-gradient-to-br from-[#1e5a7e] to-[#2a7ba8] rounded-full flex items-center justify-center mx-auto mb-4 md:w-28 md:h-28 lg:w-32 lg:h-32 md:mb-5">
            <User className="w-12 h-12 text-white md:w-14 md:h-14 lg:w-16 lg:h-16" />
          </div>
          <h2 className="text-slate-800 mb-1 text-xl font-bold md:text-2xl md:mb-2">
            {userData.name}
          </h2>
          <p className="text-sm text-slate-500 mb-3 md:text-base md:mb-4">
            NIM: {userData.nim}
          </p>
          <button className="text-sm text-[#1e5a7e] hover:underline md:text-base font-medium">
            Edit Profil
          </button>
        </div>

        {/* Grid Container for Desktop */}
        <div className="space-y-4 md:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {/* Personal Info */}
          <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
            <h3 className="text-slate-800 mb-4 font-bold md:text-xl md:mb-5">
              Informasi Pribadi
            </h3>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0 md:p-3">
                  <Mail className="w-5 h-5 text-blue-600 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-1 md:text-sm">
                    Email
                  </p>
                  <p className="text-sm text-slate-700 break-words md:text-base">
                    {userData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0 md:p-3">
                  <Phone className="w-5 h-5 text-teal-600 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1 md:text-sm">
                    No. Handphone
                  </p>
                  <p className="text-sm text-slate-700 md:text-base">
                    {userData.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
            <h3 className="text-slate-800 mb-4 font-bold md:text-xl md:mb-5">
              Informasi Akademik
            </h3>

            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200 md:pb-4">
                <span className="text-sm text-slate-600 md:text-base">
                  Fakultas
                </span>
                <span className="text-sm text-slate-800 font-medium text-right md:text-base">
                  {userData.fakultas}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-slate-200 md:pb-4">
                <span className="text-sm text-slate-600 md:text-base">
                  Jurusan
                </span>
                <span className="text-sm text-slate-800 font-medium text-right md:text-base">
                  {userData.jurusan}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 md:text-base">
                  Angkatan
                </span>
                <span className="text-sm text-slate-800 font-medium md:text-base">
                  {userData.angkatan}
                </span>
              </div>
            </div>
          </div>

          {/* SPAI Statistics */}
          <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] rounded-xl p-5 shadow-sm md:p-6 lg:col-span-2">
            <h3 className="text-white mb-4 flex items-center gap-2 font-bold md:text-xl md:mb-6">
              <Award className="w-5 h-5 md:w-6 md:h-6" />
              Statistik SPAI
            </h3>

            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 lg:max-w-3xl lg:mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center md:p-5">
                <p className="text-2xl font-bold text-white mb-1 md:text-3xl lg:text-4xl md:mb-2">
                  {userData.totalPresensi}
                </p>
                <p className="text-xs text-blue-100 md:text-sm lg:text-base">
                  Presensi
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center md:p-5">
                <p className="text-2xl font-bold text-white mb-1 md:text-3xl lg:text-4xl md:mb-2">
                  {userData.totalResume}
                </p>
                <p className="text-xs text-blue-100 md:text-sm lg:text-base">
                  Resume
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center md:p-5">
                <p className="text-2xl font-bold text-white mb-1 md:text-3xl lg:text-4xl md:mb-2">
                  {userData.nilaiRataRata}
                </p>
                <p className="text-xs text-blue-100 md:text-sm lg:text-base">
                  Rata-rata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
