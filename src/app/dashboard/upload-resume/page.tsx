"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UploadResumeHeader } from "@/components/upload-resume-header";
import { FileUploader } from "@/components/file-uploader";
import { ResumeForm } from "@/components/resume-form";
import { UploadSuccess } from "@/components/upload-success";

export default function UploadResumePage() {
  const router = useRouter();
  const [uploadStatus, setUploadStatus] = useState<"form" | "success">("form");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedWeek, setSelectedWeek] = useState("9");
  const [uploadData, setUploadData] = useState({
    mingguKe: 9,
    fileName: "",
    fileSize: "",
    uploadTime: "",
  });

  const handleBack = () => {
    router.back();
  };

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // Simulasi upload - nanti bisa diganti dengan upload ke backend/Supabase
      const fileSize = (selectedFile.size / 1024).toFixed(2);
      const uploadTime = new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      setUploadData({
        mingguKe: parseInt(selectedWeek),
        fileName: selectedFile.name,
        fileSize: `${fileSize} KB`,
        uploadTime: uploadTime,
      });

      setUploadStatus("success");
    }
  };

  const handleBackToDashboard = () => {
    setUploadStatus("form");
    setSelectedFile(null);
    router.push("/dashboard");
  };

  return (
    <div className="pb-6">
      <UploadResumeHeader onBack={handleBack} />

      {uploadStatus === "success" ? (
        <UploadSuccess
          data={uploadData}
          onBackToDashboard={handleBackToDashboard}
          onUploadAnother={() => {
            setUploadStatus("form");
            setSelectedFile(null);
          }}
        />
      ) : (
        <>
          {/* Upload Form Section */}
          <section className="px-4 py-6 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl md:py-8">
            <ResumeForm
              selectedWeek={selectedWeek}
              onWeekChange={setSelectedWeek}
              selectedFile={selectedFile}
              onFileSelect={handleFileSelect}
              onSubmit={handleSubmit}
            />
          </section>

          {/* Guidelines and Tips - Desktop: Side by Side */}
          <div className="px-4 py-6 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl md:py-8 lg:grid lg:grid-cols-2 lg:gap-6">
            {/* Guidelines */}
            <section>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 md:p-6">
                <h3 className="text-slate-800 mb-3 md:mb-4">
                  Panduan Upload Resume:
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 md:space-y-3 md:text-base">
                  <li className="flex gap-2">
                    <span className="text-[#1e5a7e]">•</span>
                    <span>Format file yang diterima: PDF, DOC, DOCX</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1e5a7e]">•</span>
                    <span>Ukuran maksimal file: 5 MB</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1e5a7e]">•</span>
                    <span>
                      Resume harus mencakup poin-poin penting dari ceramah
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1e5a7e]">•</span>
                    <span>
                      Deadline upload: Maksimal 2 hari setelah ceramah
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1e5a7e]">•</span>
                    <span>
                      Pastikan nama file mencantumkan nama dan NIM Anda
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Tips Section */}
            <section className="mt-6 lg:mt-0">
              <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-xl p-5 md:p-6">
                <h3 className="mb-3 md:mb-4">Tips Membuat Resume:</h3>
                <ul className="space-y-2 text-sm text-blue-100 md:space-y-3 md:text-base">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Tuliskan tema dan pembicara ceramah</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Rangkum poin-poin utama yang disampaikan</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Sertakan hikmah atau pelajaran yang didapat</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Gunakan bahasa yang rapi dan mudah dipahami</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
