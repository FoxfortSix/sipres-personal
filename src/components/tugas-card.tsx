import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import type { TugasData } from "@/app/dashboard/tugas-pengganti/page";

interface TugasCardProps {
  tugas: TugasData;
  onSelect: () => void;
}

export function TugasCard({ tugas, onSelect }: TugasCardProps) {
  const isSubmitted =
    tugas.status === "submitted" || tugas.status === "approved";

  return (
    <Card
      onClick={onSelect}
      className="cursor-pointer hover:shadow-md transition-all border-slate-200 group"
    >
      <CardContent className="p-4 md:p-5">
        <div className="flex justify-between items-start mb-3">
          <Badge
            variant={isSubmitted ? "secondary" : "default"}
            className={
              isSubmitted ? "bg-green-100 text-green-700" : "bg-blue-600"
            }
          >
            Minggu {tugas.minggu}
          </Badge>
          <Badge
            variant="outline"
            className={
              tugas.status === "available"
                ? "border-blue-200 text-blue-600"
                : tugas.status === "submitted"
                ? "border-yellow-200 text-yellow-600"
                : tugas.status === "approved"
                ? "border-green-200 text-green-600"
                : "border-red-200 text-red-600"
            }
          >
            {tugas.status === "available"
              ? "Tersedia"
              : tugas.status === "submitted"
              ? "Menunggu Review"
              : tugas.status === "approved"
              ? "Disetujui"
              : "Ditolak"}
          </Badge>
        </div>

        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {tugas.judul}
        </h3>

        <div className="flex items-center gap-4 text-xs text-slate-500 mt-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{tugas.tanggal}</span>
          </div>
          <div className="flex items-center gap-1.5 text-red-500">
            <Clock className="w-3.5 h-3.5" />
            <span>DL: {tugas.deadline}</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
          <span className="text-xs font-medium text-slate-400">
            Ketuk untuk detail
          </span>
          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
        </div>
      </CardContent>
    </Card>
  );
}
