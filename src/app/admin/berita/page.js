"use client";

import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { daftarBerita } from "@/data/berita";

export default function AdminBeritaPage() {
  const [berita, setBerita, ready] = useLocalStorage("berita", daftarBerita);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const initialForm = {
    judul: "",
    tanggal: "",
    gambar: "",
    ringkasan: "",
    isi: "",
  };

  const [form, setForm] = useState(initialForm);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditId(null);
    setShowForm(false);
  };

  const tambahBerita = () => {
    setForm(initialForm);
    setEditId(null);
    setShowForm(true);
  };

  const editBerita = (item) => {
    setForm({
      judul: item.judul || "",
      tanggal: item.tanggal || "",
      gambar: item.gambar || "",
      ringkasan: item.ringkasan || "",
      isi: item.isi || "",
    });

    setEditId(item.id);
    setShowForm(true);
  };

  const simpanBerita = (e) => {
    e.preventDefault();

    if (!form.judul.trim()) {
      alert("Judul berita wajib diisi!");
      return;
    }

    if (editId !== null) {
      setBerita((prev) =>
        prev.map((item) => (item.id === editId ? { ...item, ...form } : item)),
      );
    } else {
      const beritaBaru = {
        id: Math.max(0, ...berita.map((item) => Number(item.id) || 0)) + 1,
        ...form,
      };

      setBerita((prev) => [beritaBaru, ...prev]);
    }

    resetForm();
  };

  const hapusBerita = (id) => {
    if (!confirm("Yakin ingin menghapus berita ini?")) {
      return;
    }

    setBerita((prev) => prev.filter((item) => item.id !== id));
  };

  const hasilPencarian = berita.filter((item) =>
    (item.judul || "").toLowerCase().includes(search.toLowerCase()),
  );

  if (!ready) {
    return <p>Memuat data berita...</p>;
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Kelola Berita</h1>
          <p className="mt-2 text-gray-500">
            Tambah, edit, dan hapus berita sekolah.
          </p>
        </div>

        <button
          onClick={tambahBerita}
          className="rounded-xl bg-[#173B63] px-5 py-3 font-medium text-white hover:bg-[#245580]"
        >
          + Tambah Berita
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-gray-800">
            {editId !== null ? "Edit Berita" : "Tambah Berita"}
          </h2>

          <form onSubmit={simpanBerita} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Judul Berita
              </label>
              <input
                name="judul"
                value={form.judul}
                onChange={updateForm}
                required
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
                placeholder="Masukkan judul berita"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Kategori
                </label>
                <select
                  name="kategori"
                  value={form.kategori}
                  onChange={updateForm}
                  className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
                >
                  <option>Kegiatan</option>
                  <option>Prestasi</option>
                  <option>Pengumuman</option>
                  <option>Akademik</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Tanggal
                </label>

                <input
                  type="text"
                  name="tanggal"
                  value={form.tanggal}
                  onChange={updateForm}
                  placeholder="Contoh: 15 Oktober 2026"
                  required
                  className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                URL Gambar
              </label>
              <input
                name="gambar"
                value={form.gambar}
                onChange={updateForm}
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
                placeholder="/berita/foto.jpg atau https://..."
              />
            </div>

            {form.gambar && (
              <img
                src={form.gambar}
                alt="Preview berita"
                className="h-40 w-64 rounded-xl object-cover"
              />
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Ringkasan Berita
              </label>

              <textarea
                name="ringkasan"
                value={form.ringkasan}
                onChange={updateForm}
                rows={3}
                required
                placeholder="Masukkan ringkasan singkat berita..."
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Isi Berita
              </label>
              <textarea
                name="isi"
                value={form.isi}
                onChange={updateForm}
                rows={7}
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
                placeholder="Tulis isi berita..."
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#173B63] px-6 py-3 text-white"
              >
                Simpan Berita
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl bg-gray-200 px-6 py-3 text-gray-700"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* DAFTAR BERITA */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Daftar Berita</h2>
            <p className="text-sm text-gray-500">
              Total {berita.length} berita
            </p>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari berita..."
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="p-4">No</th>
                <th className="p-4">Judul Berita</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Tanggal</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {hasilPencarian.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4 text-gray-600">{index + 1}</td>

                  <td className="p-4 font-medium text-gray-800">
                    {item.judul}
                  </td>

                  <td className="p-4 text-gray-600">{item.kategori || "-"}</td>

                  <td className="p-4 text-gray-600">{item.tanggal || "-"}</td>

                  <td className="p-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() => editBerita(item)}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => hapusBerita(item.id)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {hasilPencarian.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-gray-500">
                    Tidak ada berita ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
