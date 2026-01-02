"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Zap, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

export default function PCBuilderCTA() {
  const [open, setOpen] = useState(false);

  // 🔑 AUTO OPEN POPUP JIKA DARI HERO CTA
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "#order-website") {
        setOpen(true);
      }
    }
  }, []);

  return (
    <section
      id="order-website"
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-blue/5 skew-x-12 blur-3xl" />

      {/* CONTENT */}
      <div
        className={`container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16 ${
          open ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/exploded-pc.png"
              alt="Web Design Illustration"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-neon-purple" />
            <span className="text-sm text-gray-300">
              Web Design & Development Expert
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bangun Website <span className="text-neon-blue">Profesional</span>{" "}
            untuk Bisnis Anda
          </h2>

          <p className="text-gray-400 mb-6">
            Website profesional meningkatkan kepercayaan, visibilitas Google,
            dan konversi bisnis Anda.
          </p>

          <ul className="space-y-3 mb-8 text-gray-300">
            <li>✔ Kredibilitas bisnis meningkat</li>
            <li>✔ Mudah ditemukan di Google (SEO-ready)</li>
            <li>✔ Bisa terima order 24/7</li>
            <li>✔ Branding lebih profesional</li>
          </ul>

          {/* CTA DI SECTION INI */}
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-neon-blue text-black font-bold text-lg rounded-lg hover:scale-[1.03] transition"
          >
            Order Website Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* OVERLAY + POPUP */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* POPUP */}
          <div className="relative w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-xl p-6 z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">
                Order Website Sekarang
              </h3>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* CARA ORDER */}
            <div className="text-sm text-gray-400 mb-4 border border-white/10 rounded p-3">
              <strong>Cara Order:</strong>
              <ol className="list-decimal ml-4 mt-1 space-y-1">
                <li>Isi data di bawah</li>
                <li>Pilih jenis website</li>
                <li>Kirim permintaan / lanjut pembayaran</li>
              </ol>
            </div>

            {/* FORM */}
            <form
              action="https://formspree.io/f/mnjqrvyd"
              method="POST"
              className="space-y-3"
            >
              <input name="nama" placeholder="Nama" required className="w-full p-3 rounded bg-white/5 border border-white/10" />
              <input name="whatsapp" placeholder="WhatsApp" required className="w-full p-3 rounded bg-white/5 border border-white/10" />
              <input name="email" type="email" placeholder="Email" required className="w-full p-3 rounded bg-white/5 border border-white/10" />
              <select name="jenis_website" className="w-full p-3 rounded bg-white/5 border border-white/10">
                <option>Landing Page</option>
                <option>Website Bisnis</option>
                <option>Company Profile</option>
                <option>E-Commerce</option>
                <option>Custom Website</option>
              </select>
              <textarea name="notes" placeholder="Catatan" className="w-full p-3 rounded bg-white/5 border border-white/10" />

              <div className="text-xs text-gray-400 border border-white/10 rounded p-3">
                <strong>Transfer Bank:</strong><br />
                BCA 6115903172 – Wahyudin Damopolii<br />
                BRI 225301010175501 – Wahyudin Damopolii<br />
                Blu 090091910007 – Wahyudin Damopolii
              </div>

              <button type="submit" className="w-full py-3 bg-white text-black font-semibold rounded">
                Kirim Permintaan
              </button>
            </form>

            <a
              href="https://www.paypal.com/ncp/payment/KDQTEAWLJPWYY"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center py-3 rounded bg-yellow-400 text-black font-bold"
            >
              Bayar dengan PayPal
            </a>

            <button className="w-full mt-2 py-3 border border-white/20 rounded text-gray-300">
              Order Now (Gateway Soon)
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
