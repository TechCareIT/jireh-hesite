import type { Metadata, Viewport } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "optional",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Jireh Hesite — Real Estate & Insurance",
  description:
    "Your go-to partner in smart decisions. Helping Filipino families find homes, acquire land, and secure their future.",
  openGraph: {
    title: "Jireh Hesite — Real Estate & Insurance",
    description:
      "Own more. Protect more. Worry less. Real estate, land, and insurance services based in Arayat, Pampanga.",
    type: "website",
    images: [{ url: "/jiji.JPG", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
