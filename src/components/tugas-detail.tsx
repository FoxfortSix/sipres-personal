import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import type { TugasData } from "@/app/dashboard/tugas-pengganti/page";

interface TugasDetailProps {
  tugas: TugasData;
  onBack: () => void;
  onStartSubmit: () => void;
}

export function TugasDetail({
  tugas,
  onBack,
  onStartSubmit,
}: TugasDetailProps) {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
              Minggu {tugas.minggu}
            </span>
            <span className="text-sm text-slate-500">{tugas.tema}</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            {tugas.judul}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs">Tanggal Sesi</span>
              </div>
              <p className="font-medium text-slate-800">{tugas.tanggal}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-red-500 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Deadline</span>
              </div>
              <p className="font-medium text-red-700">{tugas.deadline}</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Deskripsi Tugas
            </h3>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {tugas.deskripsi}
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-medium mb-1">Catatan:</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Kerjakan tugas sesuai instruksi di atas</li>
                <li>Format file yang diterima: PDF atau DOCX</li>
                <li>Maksimal ukuran file: 5 MB</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t border-slate-100">
            <Button variant="outline" className="w-full" onClick={onBack}>
              Kembali
            </Button>
            {tugas.status === "available" && (
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={onStartSubmit}
              >
                Kerjakan Tugas
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
