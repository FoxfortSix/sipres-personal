"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// Asumsi komponen sudah ada di src/components atau akan dipindahkan nanti
import { RekapNilaiHeader } from "@/components/rekap-nilai-header";
import { RekapSummary } from "@/components/rekap-summary";
import { RekapTable } from "@/components/rekap-table";
import { RekapFilter } from "@/components/rekap-filter";

export default function RekapNilaiPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<"semua" | "hadir" | "tidak-hadir">(
    "semua"
  );

  const handleBack = () => {
    router.back(); // Atau router.push('/dashboard')
  };

  // Mock data - Sama persis dengan file asli
  const rekapData = [
    {
      minggu: 1,
      tanggal: "9 September 2025",
      tema: "Pengenalan SPAI",
      presensi: true,
      resume: true,
      resumeStatus: "approved",
      nilai: 100,
    },
    {
      minggu: 2,
      tanggal: "16 September 2025",
      tema: "Akhlak Kepada Orang Tua",
      presensi: true,
      resume: true,
      resumeStatus: "approved",
      nilai: 95,
    },
    {
      minggu: 3,
      tanggal: "23 September 2025",
      tema: "Pentingnya Silaturahmi",
      presensi: false,
      resume: false,
      resumeStatus: null,
      nilai: 0,
    },
    {
      minggu: 4,
      tanggal: "30 September 2025",
      tema: "Menuntut Ilmu dalam Islam",
      presensi: true,
      resume: true,
      resumeStatus: "approved",
      nilai: 100,
    },
    {
      minggu: 5,
      tanggal: "7 Oktober 2025",
      tema: "Adab Berbicara",
      presensi: true,
      resume: true,
      resumeStatus: "pending",
      nilai: 50,
    },
    {
      minggu: 6,
      tanggal: "14 Oktober 2025",
      tema: "Kejujuran dan Amanah",
      presensi: true,
      resume: false,
      resumeStatus: null,
      nilai: 50,
    },
    {
      minggu: 7,
      tanggal: "21 Oktober 2025",
      tema: "Sabar dalam Menghadapi Ujian",
      presensi: false,
      resume: false,
      resumeStatus: null,
      nilai: 0,
    },
    {
      minggu: 8,
      tanggal: "28 Oktober 2025",
      tema: "Bersyukur atas Nikmat Allah",
      presensi: true,
      resume: true,
      resumeStatus: "approved",
      nilai: 100,
    },
    {
      minggu: 9,
      tanggal: "4 November 2025",
      tema: "Akhlak dalam Pergaulan",
      presensi: false,
      resume: false,
      resumeStatus: null,
      nilai: 0,
    },
  ];

  // Filter data berdasarkan status
  const filteredData = rekapData.filter((item) => {
    // @ts-ignore - Mengabaikan type checking ketat sementara untuk filter
    if (filter === "hadir") return item.presensi;
    // @ts-ignore
    if (filter === "tidak-hadir") return !item.presensi;
    return true;
  });

  // Hitung statistik
  const totalPresensi = rekapData.filter((item) => item.presensi).length;
  const totalResume = rekapData.filter((item) => item.resume).length;
  const totalMinggu = rekapData.length;
  const persentaseKehadiran = Math.round((totalPresensi / totalMinggu) * 100);
  const nilaiRataRata = Math.round(
    rekapData.reduce((sum, item) => sum + item.nilai, 0) / totalMinggu
  );

  return (
    // Class min-h-screen dihapus atau disesuaikan karena sudah ada di layout dashboard
    <div className="pb-6">
      <RekapNilaiHeader onBack={handleBack} />

      {/* Summary Section */}
      <section className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8">
        <RekapSummary
          totalPresensi={totalPresensi}
          totalResume={totalResume}
          persentaseKehadiran={persentaseKehadiran}
          nilaiRataRata={nilaiRataRata}
          totalMinggu={totalMinggu}
        />
      </section>

      {/* Filter Section */}
      <section className="px-4 py-4 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl">
        <RekapFilter currentFilter={filter} onFilterChange={setFilter} />
      </section>

      {/* Table Section */}
      <section className="px-4 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl">
        <RekapTable data={filteredData} />
      </section>

      {/* Info Sections - Desktop: Side by Side */}
      <div className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Info Section */}
        <section>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 md:p-6">
            <h3 className="text-slate-800 mb-3 md:mb-4">
              Keterangan Status Resume:
            </h3>
            <div className="space-y-2 text-sm md:space-y-3 md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">
                  <span className="text-green-700">Disetujui</span> - Resume
                  telah direview dan disetujui
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-700">
                  <span className="text-yellow-700">Pending</span> - Resume
                  sedang dalam review
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-slate-700">
                  <span className="text-red-700">Ditolak</span> - Resume perlu
                  diperbaiki
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grading Info */}
        <section className="mt-6 lg:mt-0">
          <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-xl p-5 md:p-6">
            <h3 className="mb-3 md:mb-4">Sistem Penilaian:</h3>
            <ul className="space-y-2 text-sm text-blue-100 md:space-y-3 md:text-base">
              <li className="flex gap-2">
                <span>•</span>
                <span>Presensi hadir: 50 poin</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Resume disetujui: 50 poin</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Nilai maksimal per minggu: 100 poin</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Minimal kehadiran untuk lulus: 75%</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
