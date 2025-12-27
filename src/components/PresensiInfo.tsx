import { MapPin, Calendar, Clock } from "lucide-react"

export function PresensiInfo() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6">
      <h2 className="font-bold text-slate-800 mb-3">Detail Pertemuan</h2>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#1e5a7e] mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">Minggu ke-12</p>
            <p className="text-xs text-slate-500">Sabtu, 14 Desember 2025</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#1e5a7e] mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">08:00 - 10:00 WIB</p>
            <p className="text-xs text-slate-500">Waktu tersisa: 45 menit</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#1e5a7e] mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">Masjid Al-Hidayah</p>
            <p className="text-xs text-slate-500">Kampus Pusat, Lantai 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}