import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface PresensiSuccessProps {
  onClose?: () => void
}

export function PresensiSuccess({ onClose }: PresensiSuccessProps) {
  return (
    <div className="text-center py-8 animate-in zoom-in duration-300">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Presensi Berhasil!</h2>
      <p className="text-slate-600 mb-8 max-w-xs mx-auto">
        Terima kasih, kehadiran Anda pada pertemuan minggu ini telah tercatat.
      </p>
      
      <div className="space-y-3 max-w-xs mx-auto">
        <Link 
          href="/dashboard"
          className="block w-full bg-[#1e5a7e] text-white py-3 rounded-xl font-medium hover:bg-[#164561] transition-colors"
        >
          Kembali ke Dashboard
        </Link>
        <Link
          href="/dashboard/upload-resume"
          className="block w-full border border-slate-200 text-slate-600 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors"
        >
          Upload Resume Sekarang
        </Link>
      </div>
    </div>
  )
}