"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/HLybcHC6/Hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Jasa Pembuatan Website Profesional
            <br />
            untuk Bisnis Online
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Website profesional meningkatkan kepercayaan, visibilitas Google,
            dan penjualan. IndoDesign.website membantu UMKM hingga perusahaan
            membangun website modern, cepat, dan SEO-ready.
          </p>

          {/* PANDUAN SINGKAT */}
          <ul className="mt-6 space-y-3 text-gray-200 text-sm">
            <li>✔ Konsultasi gratis & tanpa ribet</li>
            <li>✔ Desain profesional & mobile friendly</li>
            <li>✔ Bisa order, bayar, dan revisi online</li>
          </ul>

          {/* CTA HERO */}
          <a
            href="#order-website"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-neon-blue text-black font-bold text-lg rounded-lg hover:scale-[1.03] transition"
          >
            Order Website Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* VISUAL / INFO CARD */}
        <div className="hidden md:block bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
          <h3 className="text-xl font-bold text-white mb-4">
            Kenapa Website Itu Penting?
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>✔ Bisnis terlihat lebih profesional</li>
            <li>✔ Mudah ditemukan di Google</li>
            <li>✔ Terima order 24 jam</li>
            <li>✔ Branding jangka panjang</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
