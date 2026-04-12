import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness | Train Anywhere. Win Everywhere.",
  description: "AI-powered workout plans, online coaching, and fitness challenges. Coming soon from SJA Fitness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`\${geistSans.variable} \${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
