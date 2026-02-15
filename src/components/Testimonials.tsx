"use client";

import { Star } from "lucide-react";
import { BrowserWindow } from "@/components/ui/browser-window";
import { CodeWindow } from "@/components/ui/code-window";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya oleh Klien Kami
          </h2>
          <p className="text-gray-400">
            Pengalaman nyata dari bisnis dan profesional yang bekerja bersama IndoDesign.website
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gallery – visual tetap */}
          {/* Visual – Web Design & Dev Representation */}
          <div className="relative">
            {/* Abstract Background Glow */}
            <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] rounded-full opacity-20" />

            <div className="relative z-10 w-full">
              <BrowserWindow className="w-full shadow-2xl bg-[#111]" url="indodesign.website">
                <div className="p-6 grid grid-cols-3 gap-4 opacity-50">
                  <div className="col-span-2 h-40 bg-white/5 rounded-lg border border-white/5" />
                  <div className="col-span-1 h-40 bg-white/10 rounded-lg border border-white/5" />
                  <div className="col-span-3 h-24 bg-white/5 rounded-lg border border-white/5" />
                </div>
              </BrowserWindow>

              <CodeWindow
                className="absolute -bottom-10 -right-4 w-[90%] md:w-[80%] shadow-[0_10px_50px_rgba(0,0,0,0.8)] border-neon-blue/30"
                filename="ModernWebsite.tsx"
                code={`export default function Website() {
  return (
    <Features>
      <FastLoading />
      <MobileFriendly />
      <SEOOptimized />
    </Features>
  );
}`}
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {[
              {
                name: "Rizky – UMKM Owner",
                text:
                  "Website kami sekarang terlihat jauh lebih profesional. Loading cepat dan langsung meningkatkan kepercayaan pelanggan.",
              },
              {
                name: "Dewi – Personal Brand",
                text:
                  "Desainnya rapi, modern, dan sesuai dengan branding saya. Prosesnya juga jelas dan komunikatif.",
              },
              {
                name: "Andre – Startup Founder",
                text:
                  "Struktur SEO-nya bagus. Setelah website live, halaman kami langsung terindex di Google.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#111] border border-white/5 relative"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  “{item.text}”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <span className="text-xs text-gray-500">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
