"use client";

import { useState } from "react";
import { PresensiHeader } from "@/components/PresensiHeader";
import { PresensiInfo } from "@/components/PresensiInfo";
import { QRScanner } from "@/components/QRScanner";
import { PresensiSuccess } from "@/components/PresensiSuccess";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function PresensiPage() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = (result: string) => {
    if (result) {
      console.log("QR Data:", result);
      // Di sini nanti logika validasi ke database
      // Simulasi sukses:
      setScanResult(result);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
    setError("Gagal mengakses kamera. Pastikan izin kamera diberikan.");
  };

  if (scanResult) {
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <PresensiHeader />
        <div className="p-4 max-w-md mx-auto">
          <PresensiSuccess />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PresensiHeader />

      <div className="p-4 max-w-md mx-auto space-y-6">
        <PresensiInfo />

        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 text-center">Scan QR Code</h3>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <QRScanner onScan={handleScan} onError={handleError} />

          <p className="text-center text-sm text-slate-500 px-8">
            Pastikan QR Code berada dalam bingkai kamera dan memiliki
            pencahayaan yang cukup.
          </p>
        </div>
      </div>
    </div>
  );
}
