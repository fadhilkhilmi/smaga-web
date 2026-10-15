"use client";

import BeritaCard from "@/components/BeritaCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import { daftarBerita } from "@/data/berita";

export default function BeritaList() {
  const [berita, , ready] = useLocalStorage("berita", daftarBerita);

  if (!ready) {
    return <p className="py-10 text-center text-gray-500">Memuat berita...</p>;
  }

  if (berita.length === 0) {
    return <p className="py-10 text-center text-gray-500">Belum ada berita.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {berita.map((item) => (
        <BeritaCard key={item.id} berita={item} />
      ))}
    </div>
  );
}
