"use client";

import {
  ShieldCheck,
  Zap,
  Headphones,
  Globe,
} from "lucide-react";

export default function CategoryHighlights() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Layanan Web Design Profesional
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition">
            <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Website Fast Loading
            </h3>
            <p className="text-sm text-gray-400">
              Website ringan, cepat dibuka, dan optimal di semua perangkat untuk
              pengalaman pengguna terbaik.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition">
            <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Desain Modern & Profesional
            </h3>
            <p className="text-sm text-gray-400">
              Desain website modern yang membangun kepercayaan dan meningkatkan
              konversi bisnis.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition">
            <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Struktur SEO Ready
            </h3>
            <p className="text-sm text-gray-400">
              Struktur website disiapkan untuk SEO agar mudah ditemukan di
              Google sejak awal.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition">
            <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue">
              <Headphones className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Support & Konsultasi
            </h3>
            <p className="text-sm text-gray-400">
              Konsultasi langsung dan support profesional selama dan setelah
              website selesai.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
