import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import type { TugasData } from "@/app/dashboard/tugas-pengganti/page";

interface TugasSubmitSuccessProps {
  tugas: TugasData;
  onBackToDashboard: () => void;
  onBackToList: () => void;
}

export function TugasSubmitSuccess({
  tugas,
  onBackToDashboard,
  onBackToList,
}: TugasSubmitSuccessProps) {
  return (
    <div className="px-4 py-12 max-w-md mx-auto text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-3">
        Upload Berhasil!
      </h2>
      <p className="text-slate-600 mb-8">
        Tugas pengganti untuk{" "}
        <span className="font-semibold">Minggu {tugas.minggu}</span> berhasil
        dikumpulkan dan akan segera direview oleh dosen.
      </p>

      <div className="space-y-3">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={onBackToList}
        >
          Lihat Tugas Lainnya
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={onBackToDashboard}
        >
          Kembali ke Dashboard
        </Button>
      </div>
    </div>
  );
}
