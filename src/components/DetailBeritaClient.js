"use client";

import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import { daftarBerita } from "@/data/berita";

export default function DetailBeritaClient({ id }) {
  const [daftar, , ready] = useLocalStorage("berita", daftarBerita);

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Memuat berita...</p>
      </main>
    );
  }

  const berita = daftar.find((item) => String(item.id) === String(id));

  if (!berita) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Berita tidak ditemukan
        </h1>

        <Link href="/berita" className="text-blue-700">
          Kembali ke Berita
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO DETAIL BERITA */}
      <section className="relative h-[380px] overflow-hidden md:h-[480px]">
        <img
          src={berita.gambar || "/gerbang2.png"}
          alt={berita.judul}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-12 md:pb-16">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/80">
              {berita.tanggal}
            </p>

            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              {berita.judul}
            </h1>
          </div>
        </div>
      </section>

      {/* ISI DETAIL BERITA */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-8 text-lg leading-9 text-gray-700">
          {berita.ringkasan}
        </p>

        <div className="whitespace-pre-line leading-9 text-gray-700">
          {berita.isi}
        </div>

        <Link
          href="/berita"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#001188] px-7 py-3 font-semibold text-white transition hover:bg-[#4F6ACA]"
        >
          Kembali ke Berita
          <span aria-hidden="true">→</span>
        </Link>
      </article>
    </main>
  );
}
