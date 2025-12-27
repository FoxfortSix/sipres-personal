"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TugasPenggantiHeader } from "@/components/tugas-pengganti-header";
import { TugasCard } from "@/components/tugas-card";
import { TugasDetail } from "@/components/tugas-detail";
import { TugasSubmitForm } from "@/components/tugas-submit-form";
import { TugasSubmitSuccess } from "@/components/tugas-submit-success";

export interface TugasData {
  id: number;
  minggu: number;
  tema: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  deadline: string;
  status: "available" | "submitted" | "approved" | "rejected";
  submittedDate?: string;
  nilai?: number;
}

export default function TugasPenggantiPage() {
  const router = useRouter();
  const [view, setView] = useState<"list" | "detail" | "submit" | "success">(
    "list"
  );
  const [selectedTugas, setSelectedTugas] = useState<TugasData | null>(null);

  // Mock data
  const [tugasList, setTugasList] = useState<TugasData[]>([
    {
      id: 1,
      minggu: 3,
      tema: "Pentingnya Silaturahmi",
      tanggal: "23 September 2025",
      judul: "Essay: Makna Silaturahmi dalam Kehidupan Modern",
      deskripsi:
        "Buatlah essay dengan minimal 500 kata yang membahas tentang pentingnya silaturahmi dalam kehidupan modern. Sertakan dalil Al-Quran atau Hadist yang relevan dan contoh penerapan dalam kehidupan sehari-hari.",
      deadline: "7 Oktober 2025",
      status: "available",
    },
    {
      id: 2,
      minggu: 7,
      tema: "Sabar dalam Menghadapi Ujian",
      tanggal: "21 Oktober 2025",
      judul: "Analisis: Kesabaran dalam Perspektif Islam",
      deskripsi:
        "Analisis konsep kesabaran dalam Islam dengan mengambil contoh dari kisah para Nabi. Jelaskan bagaimana kesabaran dapat membantu dalam menghadapi ujian hidup. Minimal 600 kata.",
      deadline: "4 November 2025",
      status: "submitted",
      submittedDate: "30 Oktober 2025",
    },
    {
      id: 3,
      minggu: 9,
      tema: "Akhlak dalam Pergaulan",
      tanggal: "4 November 2025",
      judul: "Refleksi: Etika Pergaulan dalam Islam",
      deskripsi:
        "Tuliskan refleksi pribadi tentang bagaimana akhlak Islam seharusnya diterapkan dalam pergaulan sehari-hari, baik di kampus maupun di lingkungan masyarakat. Minimal 500 kata dengan contoh konkret.",
      deadline: "18 November 2025",
      status: "available",
    },
  ]);

  const handleSelectTugas = (tugas: TugasData) => {
    setSelectedTugas(tugas);
    setView("detail");
  };

  const handleStartSubmit = () => {
    setView("submit");
  };

  const handleSubmitSuccess = (fileName: string) => {
    if (selectedTugas) {
      // Update status tugas
      setTugasList((prev) =>
        prev.map((t) =>
          t.id === selectedTugas.id
            ? {
                ...t,
                status: "submitted",
                submittedDate: new Date().toLocaleDateString("id-ID"),
              }
            : t
        )
      );
      setView("success");
    }
  };

  const handleBackToList = () => {
    setSelectedTugas(null);
    setView("list");
  };

  const handleBackToDashboard = () => {
    setSelectedTugas(null);
    setView("list");
    router.push("/dashboard");
  };

  // Handler utama untuk tombol back di header
  const handleMainBack = () => {
    router.back();
  };

  // Filter tugas berdasarkan status
  const availableTugas = tugasList.filter((t) => t.status === "available");
  const submittedTugas = tugasList.filter(
    (t) =>
      t.status === "submitted" ||
      t.status === "approved" ||
      t.status === "rejected"
  );

  return (
    <div className="pb-6">
      <TugasPenggantiHeader
        onBack={view === "list" ? handleMainBack : handleBackToList}
      />

      {view === "success" && selectedTugas ? (
        <TugasSubmitSuccess
          tugas={selectedTugas}
          onBackToDashboard={handleBackToDashboard}
          onBackToList={handleBackToList}
        />
      ) : view === "submit" && selectedTugas ? (
        <TugasSubmitForm
          tugas={selectedTugas}
          onBack={() => setView("detail")}
          onSubmitSuccess={handleSubmitSuccess}
        />
      ) : view === "detail" && selectedTugas ? (
        <TugasDetail
          tugas={selectedTugas}
          onBack={handleBackToList}
          onStartSubmit={handleStartSubmit}
        />
      ) : (
        <>
          {/* Info Banner */}
          <section className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8">
            <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-xl p-5 md:p-6 lg:p-8">
              <h2 className="mb-2 md:mb-3">Tugas Pengganti</h2>
              <p className="text-sm text-blue-100 md:text-base">
                Kerjakan tugas pengganti untuk minggu yang Anda tidak hadir.
                Setiap tugas memiliki deadline yang harus dipatuhi.
              </p>
            </div>
          </section>

          {/* Tasks Container - Desktop: Side by Side */}
          <div className="px-4 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-6">
            {/* Available Tasks */}
            <section className="py-4 md:py-6">
              <h3 className="text-slate-800 mb-4 md:mb-6">
                Tugas Tersedia ({availableTugas.length})
              </h3>

              {availableTugas.length === 0 ? (
                <div className="bg-white rounded-xl p-8 text-center md:p-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:w-20 md:h-20 md:mb-4">
                    <svg
                      className="w-8 h-8 text-green-600 md:w-10 md:h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-600 md:text-lg">
                    Tidak ada tugas pengganti tersedia
                  </p>
                  <p className="text-sm text-slate-500 mt-1 md:text-base">
                    Anda sudah hadir di semua sesi ceramah
                  </p>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {availableTugas.map((tugas) => (
                    <TugasCard
                      key={tugas.id}
                      tugas={tugas}
                      onSelect={() => handleSelectTugas(tugas)}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Submitted Tasks */}
            {submittedTugas.length > 0 && (
              <section className="py-4 md:py-6">
                <h3 className="text-slate-800 mb-4 md:mb-6">
                  Tugas Terkumpul ({submittedTugas.length})
                </h3>

                <div className="space-y-3 md:space-y-4">
                  {submittedTugas.map((tugas) => (
                    <TugasCard
                      key={tugas.id}
                      tugas={tugas}
                      onSelect={() => handleSelectTugas(tugas)}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Guidelines */}
          <section className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 md:p-6 lg:p-8">
              <h3 className="text-slate-800 mb-3 md:mb-4">
                Ketentuan Tugas Pengganti:
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 md:space-y-3 md:text-base lg:grid lg:grid-cols-2 lg:gap-x-6">
                <li className="flex gap-2">
                  <span className="text-[#1e5a7e]">•</span>
                  <span>
                    Tugas wajib dikerjakan untuk setiap sesi yang tidak dihadiri
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e5a7e]">•</span>
                  <span>Format file: PDF atau DOCX</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e5a7e]">•</span>
                  <span>Perhatikan deadline pengumpulan tugas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e5a7e]">•</span>
                  <span>
                    Tugas yang terlambat dikumpulkan tidak akan dinilai
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e5a7e]">•</span>
                  <span>Nilai maksimal tugas pengganti: 75 poin</span>
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
