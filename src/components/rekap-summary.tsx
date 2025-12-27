import { Card, CardContent } from "@/components/ui/card";
import { Trophy, FileCheck, Calendar, CheckCircle } from "lucide-react";

interface RekapSummaryProps {
  totalPresensi: number;
  totalResume: number;
  persentaseKehadiran: number;
  nilaiRataRata: number;
  totalMinggu: number;
}

export function RekapSummary({
  totalPresensi,
  totalResume,
  persentaseKehadiran,
  nilaiRataRata,
  totalMinggu,
}: RekapSummaryProps) {
  const stats = [
    {
      label: "Kehadiran",
      value: `${persentaseKehadiran}%`,
      subtext: `${totalPresensi}/${totalMinggu} Pertemuan`,
      icon: Calendar,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      label: "Rata-rata Nilai",
      value: nilaiRataRata,
      subtext: "Poin Keseluruhan",
      icon: Trophy,
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      label: "Resume",
      value: `${totalResume}`,
      subtext: "Terkumpul",
      icon: FileCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      label: "Status",
      value: persentaseKehadiran >= 75 ? "Aman" : "Warning",
      subtext: "Syarat Lulus 75%",
      icon: CheckCircle,
      color: persentaseKehadiran >= 75 ? "text-green-600" : "text-red-600",
      bg: persentaseKehadiran >= 75 ? "bg-green-100" : "bg-red-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm bg-white">
          <CardContent className="p-4 flex flex-col items-center text-center md:items-start md:text-left">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${stat.bg}`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-slate-800 md:text-3xl">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1 md:text-sm">
              {stat.label}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5 md:text-xs">
              {stat.subtext}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
