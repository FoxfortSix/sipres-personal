"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const logoSrc = "/logo.png";
interface SubPageHeaderProps {
  title: string;
  onBack: () => void;
}

export function SubPageHeader({ title, onBack }: SubPageHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-4 md:max-w-3xl lg:max-w-6xl md:py-5">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="hover:bg-slate-100 -ml-2 text-slate-600"
          >
            <ArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
          </Button>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Menggunakan img tag standar agar aman jika Next/Image belum dikonfigurasi */}
            <img
              src={logoSrc}
              alt="Logo SPAI"
              className="w-8 h-8 object-contain md:w-10 md:h-10"
            />
            <h1 className="text-slate-800 font-semibold md:text-xl">{title}</h1>
          </div>

          <div className="w-10 md:w-14"></div>
        </div>
      </div>
    </header>
  );
}
