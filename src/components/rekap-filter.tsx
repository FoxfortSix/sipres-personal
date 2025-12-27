import { Button } from "@/components/ui/button";

interface RekapFilterProps {
  currentFilter: "semua" | "hadir" | "tidak-hadir";
  onFilterChange: (filter: "semua" | "hadir" | "tidak-hadir") => void;
}

export function RekapFilter({
  currentFilter,
  onFilterChange,
}: RekapFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
      <Button
        variant={currentFilter === "semua" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("semua")}
        className={`rounded-full px-4 ${
          currentFilter === "semua"
            ? "bg-slate-800"
            : "text-slate-600 border-slate-300"
        }`}
      >
        Semua
      </Button>
      <Button
        variant={currentFilter === "hadir" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("hadir")}
        className={`rounded-full px-4 ${
          currentFilter === "hadir"
            ? "bg-green-600 hover:bg-green-700"
            : "text-slate-600 border-slate-300"
        }`}
      >
        Hadir
      </Button>
      <Button
        variant={currentFilter === "tidak-hadir" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("tidak-hadir")}
        className={`rounded-full px-4 ${
          currentFilter === "tidak-hadir"
            ? "bg-red-600 hover:bg-red-700"
            : "text-slate-600 border-slate-300"
        }`}
      >
        Tidak Hadir
      </Button>
    </div>
  );
}
