"use client";

import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ekstrakurikuler } from "@/data/ekstrakurikuler";

export default function EkstrakurikulerPage() {
  // STATE PENCARIAN DAN FILTER
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");

  // DATA EKSTRAKURIKULER DARI LOCALSTORAGE
  const [daftarEkskul, , ready] = useLocalStorage(
    "ekstrakurikuler",
    ekstrakurikuler,
  );

  const daftarKategori = [
    "Semua",
    ...new Set(daftarEkskul.map((item) => item.kategori)),
  ];

  const filteredEkskul = daftarEkskul.filter((item) => {
    const cocokNama = item.nama.toLowerCase().includes(search.toLowerCase());

    const cocokKategori = kategori === "Semua" || item.kategori === kategori;

    return cocokNama && cocokKategori;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-[#173B63] px-6 pb-16 pt-36 text-center text-white">
        <p className="mb-3 text-sm uppercase tracking-widest text-yellow-300">
          SMAN 3 TEGAL
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">Ekstrakurikuler</h1>

        <p className="mt-4 text-gray-200">
          Wadah pengembangan bakat, minat, dan potensi siswa
        </p>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Kegiatan Ekstrakurikuler
            </h2>

            <p className="mt-2 text-gray-500">
              Tersedia {ready ? daftarEkskul.length : "..."} kegiatan
              ekstrakurikuler
            </p>
          </div>

          <input
            type="text"
            placeholder="Cari ekstrakurikuler..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-800 outline-none focus:border-blue-500 md:w-80"
          />
        </div>

        {/* FILTER KATEGORI */}
        <div className="mb-10 flex flex-wrap gap-3">
          {daftarKategori.map((item) => (
            <button
              key={item}
              onClick={() => setKategori(item)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                kategori === item
                  ? "bg-[#173B63] text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID EKSTRAKURIKULER */}
        {!ready ? (
          <p className="py-16 text-center text-gray-500">
            Memuat data ekstrakurikuler...
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEkskul.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* FOTO */}
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt={item.nama}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-slate-500">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>

                        <span className="mt-3 text-sm">Foto Kegiatan</span>
                      </div>
                    )}
                  </div>

                  {/* INFORMASI */}
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {item.kategori}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-gray-800">
                      {item.nama}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredEkskul.length === 0 && (
              <p className="py-16 text-center text-gray-500">
                Ekstrakurikuler tidak ditemukan.
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
}
