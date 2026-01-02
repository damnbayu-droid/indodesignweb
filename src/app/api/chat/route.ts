import OpenAI from "openai";

/* ============================================================================
   OPENAI CLIENT
============================================================================ */
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* ============================================================================
   SYSTEM PROMPT — VERSI KAYA, NATURAL, TIDAK KAKU
============================================================================ */
const SYSTEM_PROMPT = `
Kamu adalah AI Assistant resmi untuk IndoDesign.website,
layanan jasa pembuatan website profesional di Indonesia.

Peran kamu adalah sebagai KONSULTAN WEBSITE, bukan robot teknis.

==================================================
CARA BICARA (WAJIB):
==================================================
- Gunakan bahasa Indonesia yang natural, santai profesional
- Seperti ngobrol dengan klien, bukan baca brosur
- Tidak kaku, tidak terlalu formal
- Jangan menjawab seperti buku atau dosen
- Jelaskan pelan, runtut, dan masuk akal

==================================================
FOKUS LAYANAN:
==================================================
- Website Landing Page
- Company Profile
- Website Bisnis & UMKM
- Website Jasa / Service
- Website Personal Brand
- Website untuk closing (WhatsApp, Form, CTA)

==================================================
HAL YANG HARUS KAMU KUASAI:
==================================================

1. LANDING PAGE
- Cocok untuk jualan, iklan, dan promosi
- Fokus ke 1 tujuan (chat WA / order)
- Cepat, singkat, dan langsung ke poin
- Ideal untuk UMKM, jasa, dan campaign

2. COMPANY PROFILE
- Cocok untuk branding & kepercayaan
- Menjelaskan bisnis secara lengkap
- Digunakan untuk klien, partner, dan investor
- Tampilan rapi dan profesional itu penting

3. MANFAAT WEBSITE
- Website bikin bisnis terlihat serius
- Website meningkatkan kepercayaan calon klien
- Website bekerja 24 jam tanpa capek
- Website memudahkan orang menghubungi via WhatsApp
- Website membantu closing lebih cepat

4. PROSES KERJA (JELASKAN DENGAN SEDERHANA)
- Konsultasi kebutuhan
- Kumpulkan data (logo, teks, foto)
- Desain & pembangunan website
- Revisi ringan
- Website online & siap digunakan

5. EDUKASI USER NON-TEKNIS
- Banyak user tidak paham istilah web
- Jangan sebut coding, framework, server
- Pakai contoh sehari-hari
- Jika user bingung, bantu pelan-pelan

==================================================
ATURAN JAWABAN:
==================================================
- Jangan bahas topik di luar website & bisnis
- Jangan bahas hal teknis kecuali diminta
- Jangan menyebut OpenAI, model, atau AI internal
- Jika user bertanya harga, jelaskan secara umum dulu
- Jika user tertarik → arahkan ke konsultasi / WhatsApp
- Jika user ragu → yakinkan dengan penjelasan, bukan tekanan

==================================================
GAYA MENJUAL (HALUS):
==================================================
- Jangan memaksa
- Jangan hard selling
- Ajak ngobrol
- Tawarkan solusi
- Biarkan user merasa dibantu

Contoh gaya yang benar:
"Boleh saya jelaskan opsi yang paling cocok untuk kebutuhan Anda?"
"Biasanya untuk kasus seperti ini, klien kami memilih..."
"Kalau mau, kita bisa lanjutkan ke konsultasi supaya lebih pas."

==================================================
TUJUAN AKHIR:
==================================================
Membantu user memahami website,
merasa yakin,
dan nyaman untuk lanjut konsultasi atau order.
`;

/* ============================================================================
   TYPES
============================================================================ */
type IncomingMessage = {
  role?: string;
  content?: any;
  parts?: any[];
};

type NormalizedMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

/* ============================================================================
   HELPER: SAFE STRING
============================================================================ */
function safeString(value: any): string {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  try {
    return JSON.stringify(value);
  } catch {
    return "";
  }
}

/* ============================================================================
   HELPER: EXTRACT TEXT FROM PARTS
============================================================================ */
function extractTextFromParts(parts: any[]): string {
  if (!Array.isArray(parts)) return "";
  return parts
    .filter((p) => p && typeof p === "object" && p.type === "text")
    .map((p) => safeString(p.text))
    .join("");
}

/* ============================================================================
   NORMALIZE MESSAGE
============================================================================ */
function normalizeMessage(msg: IncomingMessage): NormalizedMessage | null {
  if (!msg || typeof msg !== "object") return null;

  const role =
    msg.role === "user" || msg.role === "assistant" || msg.role === "system"
      ? msg.role
      : "user";

  if (typeof msg.content === "string" && msg.content.trim() !== "") {
    return { role, content: msg.content };
  }

  if (Array.isArray(msg.content)) {
    const combined = msg.content.map(safeString).join("");
    if (combined.trim() !== "") {
      return { role, content: combined };
    }
  }

  if (!msg.content && Array.isArray(msg.parts)) {
    const text = extractTextFromParts(msg.parts);
    if (text.trim() !== "") {
      return { role, content: text };
    }
  }

  if (typeof msg.content === "object" && msg.content !== null) {
    const text = safeString(msg.content);
    if (text.trim() !== "") {
      return { role, content: text };
    }
  }

  return null;
}

function normalizeMessages(input: any[]): NormalizedMessage[] {
  if (!Array.isArray(input)) return [];

  const normalized: NormalizedMessage[] = [];

  for (const msg of input) {
    const safeMsg = normalizeMessage(msg);
    if (safeMsg && safeMsg.content.trim() !== "") {
      normalized.push(safeMsg);
    }
  }

  return normalized;
}

/* ============================================================================
   API HANDLER
============================================================================ */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawMessages = body?.messages ?? [];

    const userMessages = normalizeMessages(rawMessages);

    if (userMessages.length === 0) {
      return new Response(
        JSON.stringify({
          role: "assistant",
          content:
            "Halo 👋 Saya siap membantu Anda seputar pembuatan website. Boleh ceritakan sedikit kebutuhan Anda?",
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("[CHAT] Incoming messages:", userMessages.length);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 700,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...userMessages,
      ],
    });

    const answer =
      completion.choices?.[0]?.message?.content ??
      "Maaf, saya belum bisa menjawab saat ini. Silakan coba lagi.";

    return new Response(
      JSON.stringify({
        role: "assistant",
        content: answer,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("❌ Chat API Error:", error);

    return new Response(
      JSON.stringify({
        role: "assistant",
        content:
          "Terjadi kendala sementara. Silakan refresh halaman atau hubungi kami via WhatsApp.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
