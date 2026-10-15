"use client";

import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import { guru } from "@/data/guru";
import { ekstrakurikuler } from "@/data/ekstrakurikuler";
import { daftarBerita } from "@/data/berita";

export default function AdminDashboard() {
  const [dataBerita, , beritaReady] = useLocalStorage("berita", daftarBerita);

  const [dataGuru, , guruReady] = useLocalStorage("guru", guru);

  const [dataEkskul, , ekskulReady] = useLocalStorage(
    "ekstrakurikuler",
    ekstrakurikuler,
  );

  const ready = beritaReady && guruReady && ekskulReady;

  const statistik = [
    {
      title: "Total Berita",
      value: dataBerita.length,
      href: "/admin/berita",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Total Guru",
      value: dataGuru.length,
      href: "/admin/guru",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Total Ekstrakurikuler",
      value: dataEkskul.length,
      href: "/admin/ekstrakurikuler",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  if (!ready) {
    return <p className="text-gray-600">Memuat dashboard...</p>;
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Admin</h1>
        <p className="mt-2 text-gray-500">
          Selamat datang di panel administrasi SMAN 3 Tegal.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {statistik.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div
              className={`mb-5 inline-block rounded-xl px-4 py-2 text-sm font-semibold ${item.color}`}
            >
              {item.title}
            </div>

            <h2 className="text-4xl font-bold text-gray-800">{item.value}</h2>

            <p className="mt-3 text-sm text-gray-500">Kelola Data →</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold text-gray-800">Akses Cepat</h2>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/berita"
            className="rounded-xl bg-[#173B63] px-5 py-3 text-sm text-white hover:bg-[#245580]"
          >
            Kelola Berita
          </Link>

          <Link
            href="/admin/guru"
            className="rounded-xl bg-[#173B63] px-5 py-3 text-sm text-white hover:bg-[#245580]"
          >
            Kelola Guru
          </Link>

          <Link
            href="/admin/ekstrakurikuler"
            className="rounded-xl bg-[#173B63] px-5 py-3 text-sm text-white hover:bg-[#245580]"
          >
            Kelola Ekstrakurikuler
          </Link>
        </div>
      </div>
    </div>
  );
}
