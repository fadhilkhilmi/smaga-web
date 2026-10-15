"use client";

import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { guru } from "@/data/guru";

const initialForm = {
  nama: "",
  jabatan: "",
  foto: "",
};

export default function AdminGuruPage() {
  const [daftarGuru, setDaftarGuru, ready] = useLocalStorage("guru", guru);

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
    setForm(initialForm);
    setEditId(null);
    setShowForm(false);
  };

  const tambahGuru = () => {
    setForm(initialForm);
    setEditId(null);
    setShowForm(true);
  };

  const editGuru = (item) => {
    setForm({
      nama: item.nama || "",
      jabatan: item.jabatan || "",
      foto: item.foto || "",
    });

    setEditId(item.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const simpanGuru = (e) => {
    e.preventDefault();

    if (!form.nama.trim()) {
      alert("Nama guru wajib diisi!");
      return;
    }

    if (editId !== null) {
      setDaftarGuru((prev) =>
        prev.map((item) => (item.id === editId ? { ...item, ...form } : item)),
      );
    } else {
      const guruBaru = {
        id: crypto.randomUUID(),
        ...form,
      };

      setDaftarGuru((prev) => [...prev, guruBaru]);
    }

    resetForm();
  };

  const hapusGuru = (id) => {
    if (!window.confirm("Yakin ingin menghapus guru ini?")) {
      return;
    }

    setDaftarGuru((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredGuru = daftarGuru.filter((item) =>
    (item.nama || "").toLowerCase().includes(search.toLowerCase()),
  );

  if (!ready) {
    return <p className="text-gray-500">Memuat data guru...</p>;
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Kelola Guru</h1>
          <p className="mt-2 text-gray-500">
            Kelola data guru dan tenaga kependidikan.
          </p>
        </div>

        <button
          onClick={tambahGuru}
          className="rounded-xl bg-[#173B63] px-5 py-3 font-medium text-white hover:bg-[#245580]"
        >
          + Tambah Guru
        </button>
      </div>

      {/* FORM GURU */}
      {showForm && (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-gray-800">
            {editId !== null ? "Edit Guru" : "Tambah Guru"}
          </h2>

          <form onSubmit={simpanGuru} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Nama Lengkap Guru
              </label>
              <input
                name="nama"
                value={form.nama}
                onChange={updateForm}
                required
                placeholder="Contoh: Budi Santoso, S.Pd."
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Jabatan / Mata Pelajaran
              </label>
              <input
                name="jabatan"
                value={form.jabatan}
                onChange={updateForm}
                required
                placeholder="Contoh: Guru Matematika"
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                URL Foto Guru
              </label>
              <input
                name="foto"
                value={form.foto}
                onChange={updateForm}
                placeholder="/guru/guru1.jpg"
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800"
              />
            </div>

            {form.foto && (
              <img
                src={form.foto}
                alt="Preview Guru"
                className="h-48 w-36 rounded-xl object-cover"
              />
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#173B63] px-6 py-3 text-white"
              >
                Simpan Guru
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

      {/* DAFTAR GURU */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Daftar Guru</h2>
            <p className="mt-1 text-sm text-gray-500">
              Total {daftarGuru.length} guru
            </p>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama guru..."
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="p-4">No</th>
                <th className="p-4">Foto</th>
                <th className="p-4">Nama Guru</th>
                <th className="p-4">Jabatan</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {filteredGuru.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4 text-gray-600">{index + 1}</td>

                  <td className="p-4">
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt={item.nama}
                        className="h-14 w-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-12 items-center justify-center rounded-lg bg-gray-200 text-xs text-gray-500">
                        Foto
                      </div>
                    )}
                  </td>

                  <td className="p-4 font-medium text-gray-800">{item.nama}</td>

                  <td className="p-4 text-gray-600">{item.jabatan}</td>

                  <td className="p-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() => editGuru(item)}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => hapusGuru(item.id)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredGuru.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-gray-500">
                    Data guru tidak ditemukan.
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
