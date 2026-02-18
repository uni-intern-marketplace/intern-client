import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // globals.css осы папкада жатыр
import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}