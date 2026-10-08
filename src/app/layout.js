import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "SMA Negeri 3 Tegal",
    template: "%s | SMA Negeri 3 Tegal",
  },
  description:
    "Website resmi SMA Negeri 3 Tegal berisi profil sekolah, berita, kegiatan, dan informasi pendidikan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col font-[var(--font-poppins)]">
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
