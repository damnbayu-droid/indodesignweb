"use client";

import { useState } from "react";
import { Layers, Zap, ShieldCheck, Rocket, Crown, X } from "lucide-react";

const packages = [
  {
    name: "Paket Pemula",
    price: "Rp 250.000",
    icon: Layers,
    desc: [
      "1 Page Landing Page",
      "Domain random (.site / .web)",
      "Design simple & cepat",
      "Mobile friendly",
      "Cocok untuk coba bisnis",
    ],
  },
  {
    name: "Paket Starter",
    price: "Rp 500.000",
    icon: Zap,
    desc: [
      "1–2 Pages",
      "Domain sesuai nama usaha",
      "Desain rapi",
      "Mobile friendly",
      "Cocok untuk UMKM kecil",
    ],
  },
  {
    name: "Paket Standard",
    price: "Rp 1.500.000",
    icon: ShieldCheck,
    desc: [
      "1–3 Pages",
      "Domain .com",
      "SEO basic",
      "Fast loading",
      "Desain profesional",
    ],
  },
  {
    name: "Paket Pro",
    price: "Rp 5.000.000",
    icon: Rocket,
    desc: [
      "1–5 Pages sesuai request",
      "UI/UX profesional",
      "SEO optimasi",
      "Fast loading",
      "Custom design",
    ],
  },
  {
    name: "Paket Advance",
    price: "Rp 10.000.000",
    icon: Crown,
    desc: [
      "5–10 Pages",
      "2 Domain + Backlink",
      "SEO optimasi",
      "Fast performance",
    ],
  },
  {
    name: "Paket Enterprises",
    price: "Rp 25–50 Juta",
    icon: Crown,
    desc: [
      "Unlimited Pages",
      "Multi bahasa",
      "API & Database integration",
      "SEO Gold",
      "Support 1 Tahun",
    ],
  },
];

export default function FeaturedProducts() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Paket Jasa Pembuatan Website
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            const isOpen = active === i;

            return (
              <div key={i} className="relative">
                {/* CARD */}
                <div
                  className={`bg-[#151515] border border-white/10 rounded-xl p-6 ${
                    isOpen ? "opacity-30" : "hover:border-neon-blue"
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neon-blue/10 border border-neon-blue/40 mb-4">
                    <Icon className="text-neon-blue w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-neon-blue font-semibold mb-4">
                    {pkg.price}
                  </p>

                  <ul className="text-sm text-gray-400 space-y-1 mb-6">
                    {pkg.desc.map((d, idx) => (
                      <li key={idx}>• {d}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActive(i)}
                    className="w-full py-2 rounded bg-neon-blue text-black font-medium"
                  >
                    Order Now
                  </button>
                </div>

                {/* POPUP */}
                {isOpen && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-xl p-6 shadow-2xl">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-lg">
                          Order {pkg.name}
                        </h4>
                        <button onClick={() => setActive(null)}>
                          <X className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>

                      {/* === PAYPAL (FORM SENDIRI) === */}
                      <div className="mb-4 text-center">
                        <style>{`
                          .pp-KDQTEAWLJPWYY{
                            text-align:center;
                            border:none;
                            border-radius:0.25rem;
                            min-width:11.625rem;
                            padding:0 2rem;
                            height:2.625rem;
                            font-weight:bold;
                            background-color:#FFD140;
                            color:#000000;
                            font-family:"Helvetica Neue",Arial,sans-serif;
                            font-size:1rem;
                            line-height:1.25rem;
                            cursor:pointer;
                          }
                        `}</style>

                        <form
                          action="https://www.paypal.com/ncp/payment/KDQTEAWLJPWYY"
                          method="post"
                          target="_blank"
                          style={{
                            display: "inline-grid",
                            justifyItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <input
                            className="pp-KDQTEAWLJPWYY"
                            type="submit"
                            value="Bayar Sekarang"
                          />
                          <img
                            src="https://www.paypalobjects.com/images/Debit_Credit.svg"
                            alt="cards"
                          />
                        </form>
                      </div>

                      {/* BANK INFO */}
                      <div className="text-xs text-gray-400 border border-white/10 rounded p-3 mb-4">
                        <strong>Transfer Bank:</strong><br />
                        BCA 6115903172 Wahyudin Damopolii<br />
                        BRI 225301010175501 Wahyudin Damopolii<br />
                        Blu 090091910007 Wahyudin Damopolii
                      </div>

                      {/* === FORM REQUEST (FORMSPREE) === */}
                      <form
                        action="https://formspree.io/f/mnjqrvyd"
                        method="POST"
                        className="space-y-3"
                      >
                        <input name="nama" placeholder="Nama" required className="w-full p-3 rounded bg-white/5 border border-white/10" />
                        <input name="whatsapp" placeholder="WhatsApp" required className="w-full p-3 rounded bg-white/5 border border-white/10" />
                        <input name="email" type="email" placeholder="Email" required className="w-full p-3 rounded bg-white/5 border border-white/10" />
                        <input name="jenis_website" value={pkg.name} readOnly className="w-full p-3 rounded bg-white/5 border border-white/10" />
                        <textarea name="notes" placeholder="Catatan" className="w-full p-3 rounded bg-white/5 border border-white/10" />

                        <button
                          type="submit"
                          className="w-full py-3 border border-white/20 rounded text-gray-300"
                        >
                          Kirim Permintaan
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import FAQ from "@/components/FAQ";
