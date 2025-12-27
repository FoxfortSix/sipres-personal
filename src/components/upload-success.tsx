import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Calendar, Clock } from "lucide-react";

interface UploadData {
  mingguKe: number;
  fileName: string;
  fileSize: string;
  uploadTime: string;
}

interface UploadSuccessProps {
  data: UploadData;
  onBackToDashboard: () => void;
  onUploadAnother: () => void;
}

export function UploadSuccess({
  data,
  onBackToDashboard,
  onUploadAnother,
}: UploadSuccessProps) {
  return (
    <div className="px-4 py-8 max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-300">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Upload Berhasil!
        </h2>
        <p className="text-slate-500 mb-8">
          Resume Anda telah berhasil disimpan ke sistem.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="text-slate-600">Minggu ke-{data.mingguKe}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FileText className="w-4 h-4 text-slate-400" />
            <span className="text-slate-600 truncate">{data.fileName}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-slate-600">{data.uploadTime}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={onBackToDashboard}
          >
            Kembali ke Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full text-slate-600"
            onClick={onUploadAnother}
          >
            Upload File Lain
          </Button>
        </div>
      </div>
    </div>
  );
}
