"use client";

import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { SubPageHeader } from "@/components/sub-page-header";

export default function KontakPage() {
  const router = useRouter();

  return (
    <div className="pb-8 md:pb-12 lg:pb-16">
      <SubPageHeader title="Hubungi Kami" onBack={() => router.back()} />

      <div className="px-4 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:py-8 lg:py-10">
        <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-2xl p-6 mb-6 text-center md:p-8 md:mb-8 shadow-md">
          <h2 className="text-white mb-2 text-2xl font-bold md:text-3xl md:mb-3">
            Ada Pertanyaan?
          </h2>
          <p className="text-blue-100 md:text-lg">
            Kami siap membantu Anda. Hubungi kami melalui berbagai channel yang
            tersedia.
          </p>
        </div>

        <div className="space-y-3 mb-6 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 md:mb-8 lg:grid-cols-4 lg:gap-5">
          <a
            href="mailto:spai@university.ac.id"
            className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow md:flex-col md:text-center md:p-5 border border-slate-100"
          >
            <div className="bg-blue-100 p-3 rounded-lg md:p-4">
              <Mail className="w-6 h-6 text-blue-600 md:w-7 md:h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-1 font-medium">Email</p>
              <p className="text-sm font-bold text-slate-800 md:text-base">
                spai@university.ac.id
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow md:flex-col md:text-center md:p-5 border border-slate-100"
          >
            <div className="bg-green-100 p-3 rounded-lg md:p-4">
              <Phone className="w-6 h-6 text-green-600 md:w-7 md:h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-1 font-medium">
                WhatsApp
              </p>
              <p className="text-sm font-bold text-slate-800 md:text-base">
                +62 812-3456-7890
              </p>
            </div>
          </a>

          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 md:flex-col md:text-center md:p-5 lg:col-span-2 border border-slate-100">
            <div className="bg-violet-100 p-3 rounded-lg md:p-4">
              <MapPin className="w-6 h-6 text-violet-600 md:w-7 md:h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-1 font-medium">
                Alamat Sekretariat
              </p>
              <p className="text-sm font-bold text-slate-800 md:text-base">
                Gedung A Lantai 2, Ruang 201
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Universitas XYZ, Jl. Kampus No. 1
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 md:p-5 mb-6 border border-slate-100">
          <div className="bg-amber-100 p-3 rounded-lg md:p-4">
            <Clock className="w-6 h-6 text-amber-600 md:w-7 md:h-7" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-slate-500 mb-1 font-medium">
              Jam Layanan
            </p>
            <p className="text-sm font-bold text-slate-800 md:text-base">
              Senin - Jumat: 08.00 - 16.00 WIB
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Sabtu: 08.00 - 12.00 WIB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
