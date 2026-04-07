import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { I18nProvider } from "@/contexts/I18nContext";
import { siteOrigin, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: {
    default: "Oak Technology — Acorn",
    template: "%s · Oak Technology — Acorn",
  },
  description:
    "Veriyle büyüyen dijital ürünler ve yapay zeka çözümleri. Oak Technology & Acorn.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Oak Technology — Acorn",
    title: "Oak Technology — Acorn",
    description:
      "Veriyle büyüyen dijital ürünler ve yapay zeka çözümleri. Oak Technology & Acorn.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oak Technology — Acorn",
    description:
      "Veriyle büyüyen dijital ürünler ve yapay zeka çözümleri. Oak Technology & Acorn.",
  },
  icons: {
    icon: [{ url: "/images/acorn-brand-icon.png", type: "image/png" }],
    shortcut: "/images/acorn-brand-icon.png",
    apple: "/images/acorn-brand-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-oak-page font-sans text-oak-dark antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
