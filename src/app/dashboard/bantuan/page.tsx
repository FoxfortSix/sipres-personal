"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  QrCode,
  Upload,
  ClipboardList,
  FileText,
  CheckCircle,
  AlertCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight,
  Send,
  Instagram,
  Facebook,
  Twitter,
  User,
} from "lucide-react";
import { SubPageHeader } from "@/components/sub-page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BantuanPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"tutorial" | "faq" | "contact">(
    "tutorial"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  // Data FAQ (Sama seperti source file)
  const faqItems = [
    {
      category: "Akun & Login",
      questions: [
        {
          q: "Bagaimana cara mendaftar akun SPAI?",
          a: 'Klik tombol "Daftar" di halaman utama, isi form dengan NIM, nama lengkap, email aktif, dan password. Setelah itu, verifikasi email Anda melalui link yang dikirimkan.',
        },
        {
          q: "Lupa password, bagaimana cara reset?",
          a: 'Klik "Lupa Password" di halaman login, masukkan email Anda, dan ikuti instruksi reset password yang dikirim ke email. Link reset berlaku 24 jam.',
        },
        {
          q: "Apakah bisa mengubah NIM setelah registrasi?",
          a: "NIM tidak dapat diubah sendiri karena merupakan identitas unik. Jika ada kesalahan, hubungi admin melalui email spai@university.ac.id dengan bukti KTM.",
        },
      ],
    },
    // ... item lainnya bisa ditambahkan sesuai kebutuhan, disingkat untuk contoh
    {
      category: "Presensi",
      questions: [
        {
          q: "Kapan waktu presensi dibuka?",
          a: "Presensi dibuka setiap Sabtu pukul 07.45 - 10.00 WIB. Scan barcode hanya bisa dilakukan dalam rentang waktu tersebut.",
        },
        {
          q: "Barcode tidak terbaca, apa solusinya?",
          a: "Pastikan pencahayaan cukup, kamera bersih, dan barcode tidak rusak. Jika masih gagal, laporkan ke panitia untuk presensi manual dengan membawa KTM.",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Hubungi Admin",
      description: "WhatsApp",
      detail: "+62 812-3456-7890",
      action: "Chat",
      color: "bg-green-500",
      href: "https://wa.me/6281234567890",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      description: "Email Bantuan",
      detail: "spai@university.ac.id",
      action: "Email",
      color: "bg-blue-500",
      href: "mailto:spai@university.ac.id",
    },
  ];

  const filteredFaq = faqItems
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="pb-8 md:pb-12 lg:pb-16">
      <SubPageHeader title="Bantuan & FAQ" onBack={() => router.back()} />

      <div className="px-3 py-6 max-w-md mx-auto md:max-w-3xl lg:max-w-6xl md:px-4 md:py-8 lg:py-10">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#1e5a7e] to-[#2a7ba8] text-white rounded-2xl p-6 mb-6 text-center md:p-8 md:mb-8 lg:mb-10 shadow-md">
          <MessageCircle className="w-12 h-12 mx-auto mb-3 text-white md:w-14 md:h-14 md:mb-4" />
          <h2 className="text-white mb-2 text-2xl font-bold md:text-3xl md:mb-3">
            Pusat Bantuan
          </h2>
          <p className="text-blue-100 md:text-lg lg:max-w-2xl lg:mx-auto">
            Temukan jawaban atas pertanyaan Anda atau pelajari cara menggunakan
            aplikasi SPAI
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl p-2 shadow-sm mb-6 flex gap-2 md:mb-8 md:p-3 border border-slate-200">
          <button
            onClick={() => setActiveTab("tutorial")}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors text-sm font-medium md:py-3 md:text-base ${
              activeTab === "tutorial"
                ? "bg-[#1e5a7e] text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Tutorial
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors text-sm font-medium md:py-3 md:text-base ${
              activeTab === "faq"
                ? "bg-[#1e5a7e] text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors text-sm font-medium md:py-3 md:text-base ${
              activeTab === "contact"
                ? "bg-[#1e5a7e] text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Kontak
          </button>
        </div>

        {/* Tutorial Tab */}
        {activeTab === "tutorial" && (
          <div className="space-y-4 md:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 lg:items-start">
            {/* Steps Container */}
            <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
              <div className="flex items-start gap-3 mb-4 md:mb-5">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold md:w-10 md:h-10">
                  1
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold md:text-xl">
                    Registrasi & Login
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Langkah awal menggunakan aplikasi.
                  </p>
                </div>
              </div>
              <div className="pl-11 space-y-2 text-sm text-slate-700">
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> Klik
                  "Daftar" di halaman utama.
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> Isi
                  data diri lengkap.
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{" "}
                  Login dengan akun baru.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
              <div className="flex items-start gap-3 mb-4 md:mb-5">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold md:w-10 md:h-10">
                  2
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold md:text-xl flex items-center gap-2">
                    Presensi <QrCode className="w-4 h-4 text-teal-500" />
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Scan QR Code saat ceramah.
                  </p>
                </div>
              </div>
              <div className="pl-11 space-y-2 text-sm text-slate-700">
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> Buka
                  menu "Presensi".
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{" "}
                  Arahkan kamera ke QR Code.
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700 flex gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" /> Presensi hanya
                hari Sabtu 08.00-10.00 WIB.
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
              <div className="flex items-start gap-3 mb-4 md:mb-5">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold md:w-10 md:h-10">
                  3
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold md:text-xl flex items-center gap-2">
                    Upload Resume <Upload className="w-4 h-4 text-indigo-500" />
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Kumpulkan ringkasan materi.
                  </p>
                </div>
              </div>
              <div className="pl-11 space-y-2 text-sm text-slate-700">
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> Menu
                  "Upload Resume".
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{" "}
                  Pilih Minggu Ke-X.
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{" "}
                  Upload PDF/DOCX (Max 5MB).
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm md:p-6 border border-slate-100">
              <div className="flex items-start gap-3 mb-4 md:mb-5">
                <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold md:w-10 md:h-10">
                  4
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold md:text-xl flex items-center gap-2">
                    Tugas Pengganti{" "}
                    <FileText className="w-4 h-4 text-rose-500" />
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Jika berhalangan hadir.
                  </p>
                </div>
              </div>
              <div className="pl-11 space-y-2 text-sm text-slate-700">
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> Menu
                  "Tugas Pengganti".
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{" "}
                  Kerjakan tugas sesuai deadline.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pertanyaan..."
                className="pl-10"
              />
            </div>

            {filteredFaq.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center border border-slate-200">
                <p className="text-slate-500">
                  Tidak ada hasil untuk &quot;{searchQuery}&quot;
                </p>
              </div>
            ) : (
              filteredFaq.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
                >
                  <h3 className="text-slate-800 mb-4 font-bold">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((item, index) => {
                      const globalIndex = categoryIndex * 100 + index;
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setExpandedFaq(
                                expandedFaq === globalIndex ? null : globalIndex
                              )
                            }
                            className="w-full flex items-start justify-between gap-3 p-4 hover:bg-slate-50 transition-colors text-left"
                          >
                            <span className="text-sm font-medium text-slate-700">
                              {item.q}
                            </span>
                            <ChevronRight
                              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                                expandedFaq === globalIndex ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          {expandedFaq === globalIndex && (
                            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div className="space-y-4">
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border border-slate-100"
                >
                  <div
                    className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">
                      {link.title}
                    </h4>
                    <p className="text-xs text-slate-500 mb-1">
                      {link.description}
                    </p>
                    <p className="text-xs text-slate-700 truncate">
                      {link.detail}
                    </p>
                  </div>
                  <span className="text-sm text-[#1e5a7e] font-medium flex-shrink-0">
                    {link.action} →
                  </span>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <h3 className="text-slate-800 mb-4 font-bold">Kirim Pesan</h3>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-in zoom-in">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-slate-800 font-bold mb-2">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-sm text-slate-600">
                    Tim SPAI akan segera merespon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama Anda"
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@contoh.com"
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subjek
                    </label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, subject: val })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih subjek pesan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">
                          Masalah Teknis
                        </SelectItem>
                        <SelectItem value="attendance">
                          Pertanyaan Presensi
                        </SelectItem>
                        <SelectItem value="resume">Upload Resume</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tulis pesan Anda..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#1e5a7e] hover:bg-[#164561]"
                  >
                    <Send className="w-4 h-4 mr-2" /> Kirim Pesan
                  </Button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
