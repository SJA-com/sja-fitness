import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness | Elevate Your Wellness",
  description: "AI-powered fitness and wellness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`\${geistSans.variable} \${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
