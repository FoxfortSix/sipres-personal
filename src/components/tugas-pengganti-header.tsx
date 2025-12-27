import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TugasPenggantiHeaderProps {
  onBack: () => void;
}

export function TugasPenggantiHeader({ onBack }: TugasPenggantiHeaderProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-10 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="hover:bg-slate-100 -ml-2"
        >
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Button>
        <h1 className="text-lg font-bold text-slate-800 md:text-xl">
          Tugas Pengganti
        </h1>
      </div>
    </div>
  );
}
