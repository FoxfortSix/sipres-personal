import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUploader } from "./file-uploader";
import type { TugasData } from "@/app/dashboard/tugas-pengganti/page";

interface TugasSubmitFormProps {
  tugas: TugasData;
  onBack: () => void;
  onSubmitSuccess: (fileName: string) => void;
}

export function TugasSubmitForm({
  tugas,
  onBack,
  onSubmitSuccess,
}: TugasSubmitFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!file) return;

    setIsSubmitting(true);
    // Simulasi delay upload
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    onSubmitSuccess(file.name);
  };

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-1">Upload Tugas</h2>
        <p className="text-slate-500 text-sm">
          Upload file tugas pengganti untuk Minggu {tugas.minggu}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
        <FileUploader selectedFile={file} onFileSelect={setFile} />
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Batal
        </Button>
        <Button
          className="flex-1 bg-blue-600 hover:bg-blue-700"
          onClick={handleSubmit}
          disabled={!file || isSubmitting}
        >
          {isSubmitting ? "Mengupload..." : "Kirim Tugas"}
        </Button>
      </div>
    </div>
  );
}
