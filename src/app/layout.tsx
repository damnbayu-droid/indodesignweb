import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indodesign.website"),
  title: {
    default: "Jasa Pembuatan Website Profesional | IndoDesign.website",
    template: "%s | IndoDesign.website",
  },
  description:
    "IndoDesign.website adalah jasa pembuatan website profesional terbaik di Indonesia. Kami melayani pembuatan website bisnis, company profile, toko online, dan custom web app dengan desain modern, SEO-ready, dan fast loading.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa buat website",
    "web design indonesia",
    "jasa pembuatan website toko online",
    "jasa pembuatan website company profile",
    "jasa seo website",
    "jasa website murah berkualitas",
    "bikin website bisnis",
  ],
  authors: [{ name: "IndoDesign Team", url: "https://indodesign.website" }],
  creator: "IndoDesign Team",
  publisher: "IndoDesign.website",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Jasa Pembuatan Website Profesional | IndoDesign.website",
    description:
      "Bangun identitas digital bisnis Anda dengan website profesional, modern, dan SEO-friendly. Konsultasi gratis sekarang!",
    url: "https://indodesign.website",
    siteName: "IndoDesign.website",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Profesional - IndoDesign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional | IndoDesign.website",
    description:
      "Jasa pembuatan website profesional, cepat, dan berkualitas. Tingkatkan omset bisnis Anda dengan website yang menarik dan SEO-ready.",
    images: ["/og-image.png"],
    creator: "@indodesignweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://indodesign.website",
  },
  icons: {
    icon: "/Logo.webp",
    shortcut: "/Logo.webp",
    apple: "/logo.webp", // Assuming logo.webp can serve as apple icon or needs resizing
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
