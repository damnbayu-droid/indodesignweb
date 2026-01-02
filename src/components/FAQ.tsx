"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Apa itu IndoDesign.website?",
    a: "IndoDesign.website adalah jasa pembuatan website profesional di Indonesia dengan fokus desain modern, performa tinggi, dan SEO-ready.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Rata-rata pengerjaan 3–14 hari kerja tergantung paket dan kompleksitas.",
  },
  {
    q: "Apakah website mobile friendly?",
    a: "Ya. Semua website kami 100% responsif untuk mobile, tablet, dan desktop.",
  },
  {
    q: "Apakah sudah termasuk SEO?",
    a: "Struktur SEO basic sudah termasuk. SEO lanjutan tersedia di paket Pro ke atas.",
  },
  {
    q: "Berapa kali revisi?",
    a: "Revisi disesuaikan dengan paket agar hasil akhir sesuai kebutuhan bisnis.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Pembayaran bisa melalui transfer bank, PayPal, dan payment gateway (menyusul).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg bg-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="p-4 pt-0 text-gray-400 text-sm">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
