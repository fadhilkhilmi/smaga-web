"use client";

import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { guru } from "@/data/guru";

export default function GuruPage() {
  const [search, setSearch] = useState("");

  const [daftarGuru, , ready] = useLocalStorage("guru", guru);

  const filteredGuru = daftarGuru.filter((item) =>
    (item.nama || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-[#173B63] px-6 pb-16 pt-36 text-center text-white">
        <p className="mb-3 text-sm uppercase tracking-widest text-yellow-300">
          SMAN 3 TEGAL
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          Direktori Guru dan Tenaga Kependidikan
        </h1>

        <p className="mt-4 text-gray-200">
          Mengenal tenaga pendidik SMAN 3 Tegal
        </p>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Daftar Guru</h2>

            <p className="mt-2 text-gray-500">
              Total {ready ? daftarGuru.length : "..."} Guru dan Tenaga
              Kependidikan
            </p>
          </div>

          <input
            type="text"
            placeholder="Cari nama guru..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-800 outline-none focus:border-blue-500 md:w-80"
          />
        </div>

        {!ready ? (
          <p className="py-16 text-center text-gray-500">Memuat data guru...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredGuru.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200">
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt={item.nama}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-gray-400">
                        <svg
                          width="65"
                          height="65"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                        </svg>
                        <span className="mt-2 text-xs">Foto Guru</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-800">{item.nama}</h3>

                    <p className="mt-1 text-xs text-gray-500">{item.jabatan}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredGuru.length === 0 && (
              <p className="py-16 text-center text-gray-500">
                Guru tidak ditemukan.
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
}
