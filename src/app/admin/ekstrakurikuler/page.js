"use client";

import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ekstrakurikuler } from "@/data/ekstrakurikuler";

const initialForm = {
  nama: "",
  kategori: "Olahraga",
  deskripsi: "",
  foto: "",
};

const pilihanKategori = [
  "Kepemimpinan",
  "Sosial",
  "Olahraga",
  "Seni",
  "Akademik",
];

export default function AdminEkstrakurikulerPage() {
  const [daftarEkskul, setDaftarEkskul, ready] = useLocalStorage(
    "ekstrakurikuler",
    ekstrakurikuler,
  );

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(initialForm);

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm({ ...initialForm });
    setEditId(null);
    setShowForm(false);
  };

  const tambahEkskul = () => {
    setForm({ ...initialForm });
    setEditId(null);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const editEkskul = (item) => {
    setForm({
      nama: item.nama || "",
      kategori: item.kategori || "Olahraga",
      deskripsi: item.deskripsi || "",
      foto: item.foto || "",
    });

    setEditId(item.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const simpanEkskul = (e) => {
    e.preventDefault();

    if (!form.nama.trim() || !form.deskripsi.trim()) {
      alert("Nama dan deskripsi wajib diisi!");
      return;
    }

    const dataForm = {
      nama: form.nama.trim(),
      kategori: form.kategori,
      deskripsi: form.deskripsi.trim(),
      foto: form.foto.trim() || null,
    };

    if (editId !== null) {
      setDaftarEkskul((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...dataForm } : item,
        ),
      );
    } else {
      const idBaru =
        Math.max(0, ...daftarEkskul.map((item) => Number(item.id) || 0)) + 1;

      const ekskulBaru = {
        id: idBaru,
        ...dataForm,
      };

      setDaftarEkskul((prev) => [...prev, ekskulBaru]);
    }

    resetForm();
  };

  const hapusEkskul = (id) => {
    const konfirmasi = window.confirm(
      "Yakin ingin menghapus ekstrakurikuler ini?",
    );

    if (!konfirmasi) return;

    setDaftarEkskul((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredEkskul = daftarEkskul.filter((item) =>
    (item.nama || "").toLowerCase().includes(search.toLowerCase()),
  );

  if (!ready) {
    return <p className="text-gray-500">Memuat data ekstrakurikuler...</p>;
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Kelola Ekstrakurikuler
          </h1>

          <p className="mt-2 text-gray-500">
            Tambah, edit, dan hapus kegiatan ekstrakurikuler sekolah.
          </p>
        </div>

        <button
          type="button"
          onClick={tambahEkskul}
          className="rounded-xl bg-[#173B63] px-5 py-3 font-medium text-white hover:bg-[#245580]"
        >
          + Tambah Ekstrakurikuler
        </button>
      </div>

      {/* FORM TAMBAH / EDIT */}
      {showForm && (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-gray-800">
            {editId !== null
              ? "Edit Ekstrakurikuler"
              : "Tambah Ekstrakurikuler"}
          </h2>

          <form onSubmit={simpanEkskul} className="space-y-5">
            {/* NAMA */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Nama Ekstrakurikuler
              </label>

              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={updateForm}
                placeholder="Contoh: Robotika"
                required
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />
            </div>

            {/* KATEGORI */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Kategori
              </label>

              <select
                name="kategori"
                value={form.kategori}
                onChange={updateForm}
                className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-800"
              >
                {pilihanKategori.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* DESKRIPSI */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Deskripsi Kegiatan
              </label>

              <textarea
                name="deskripsi"
                value={form.deskripsi}
                onChange={updateForm}
                rows={4}
                required
                placeholder="Jelaskan kegiatan ekstrakurikuler..."
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />
            </div>

            {/* FOTO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                URL Foto Kegiatan
              </label>

              <input
                type="text"
                name="foto"
                value={form.foto}
                onChange={updateForm}
                placeholder="Contoh: /ekskul/pramuka.jpg"
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />

              <p className="mt-2 text-xs text-gray-500">
                Kosongkan jika belum memiliki foto.
              </p>
            </div>

            {/* PREVIEW FOTO */}
            {form.foto && (
              <div>
                <p className="mb-2 text-sm text-gray-600">Preview Foto</p>

                <img
                  src={form.foto}
                  alt="Preview kegiatan"
                  className="h-40 w-64 rounded-xl object-cover"
                />
              </div>
            )}

            {/* TOMBOL */}
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#173B63] px-6 py-3 font-medium text-white hover:bg-[#245580]"
              >
                {editId !== null
                  ? "Simpan Perubahan"
                  : "Simpan Ekstrakurikuler"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl bg-gray-200 px-6 py-3 font-medium text-gray-700 hover:bg-gray-300"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TABEL DATA */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Daftar Ekstrakurikuler
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Total {daftarEkskul.length} kegiatan
            </p>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari ekstrakurikuler..."
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="p-4">No</th>
                <th className="p-4">Foto</th>
                <th className="p-4">Nama</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Deskripsi</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {filteredEkskul.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4 text-gray-600">{index + 1}</td>

                  <td className="p-4">
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt={item.nama}
                        className="h-14 w-20 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
                        Belum ada
                      </div>
                    )}
                  </td>

                  <td className="p-4 font-medium text-gray-800">{item.nama}</td>

                  <td className="p-4 text-gray-600">{item.kategori}</td>

                  <td className="max-w-xs p-4 text-sm text-gray-600">
                    {item.deskripsi}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => editEkskul(item)}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => hapusEkskul(item.id)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredEkskul.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-gray-500">
                    Data ekstrakurikuler tidak ditemukan.
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
