import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface RekapItem {
  minggu: number;
  tanggal: string;
  tema: string;
  presensi: boolean;
  resume: boolean;
  resumeStatus: string | null;
  nilai: number;
}

interface RekapTableProps {
  data: RekapItem[];
}

export function RekapTable({ data }: RekapTableProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-xl border border-slate-200">
        <p className="text-slate-500">Tidak ada data ditemukan</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {data.map((item, index) => (
          <Card key={index} className="p-4 border border-slate-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  Minggu {item.minggu}
                </span>
                <p className="text-xs text-slate-500 mt-2">{item.tanggal}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-slate-800">
                  {item.nilai}
                </span>
                <p className="text-[10px] text-slate-400">Poin</p>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3 line-clamp-2">
              {item.tema}
            </h3>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
              <Badge
                variant={item.presensi ? "default" : "destructive"}
                className={
                  item.presensi
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-red-100 text-red-700 hover:bg-red-200"
                }
              >
                {item.presensi ? "Hadir" : "Absen"}
              </Badge>

              {item.resume ? (
                <Badge
                  variant="outline"
                  className={`
                  ${
                    item.resumeStatus === "approved"
                      ? "border-green-200 text-green-700 bg-green-50"
                      : item.resumeStatus === "pending"
                      ? "border-yellow-200 text-yellow-700 bg-yellow-50"
                      : "border-red-200 text-red-700 bg-red-50"
                  }
                `}
                >
                  Resume:{" "}
                  {item.resumeStatus === "approved"
                    ? "Disetujui"
                    : item.resumeStatus === "pending"
                    ? "Pending"
                    : "Ditolak"}
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="border-slate-200 text-slate-500 bg-slate-50"
                >
                  No Resume
                </Badge>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-700">
                Pertemuan
              </th>
              <th className="px-6 py-4 font-semibold text-slate-700">
                Topik & Tanggal
              </th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-center">
                Presensi
              </th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-center">
                Status Resume
              </th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-right">
                Nilai
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-slate-600">
                  Minggu Ke-{item.minggu}
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-800">{item.tema}</div>
                  <div className="text-xs text-slate-500 mt-1">
                    {item.tanggal}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.presensi
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.presensi ? "Hadir" : "Tidak Hadir"}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {item.resume ? (
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                      ${
                        item.resumeStatus === "approved"
                          ? "bg-green-100 text-green-800"
                          : item.resumeStatus === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.resumeStatus === "approved"
                        ? "Disetujui"
                        : item.resumeStatus === "pending"
                        ? "Menunggu"
                        : "Ditolak"}
                    </span>
                  ) : (
                    <span className="text-slate-400 text-xs">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right font-bold text-slate-700">
                  {item.nilai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
