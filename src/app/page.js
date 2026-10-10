import Link from "next/link";
import { daftarBerita } from "@/data/berita";
import Sambutan from "@/components/Sambutan";
import VisiMisi from "@/components/VisiMisi";

export default function Home() {
  return (
    <main className="bg-[#F7F7F7]">
      {/* HERO SEKOLAH */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="/gerbang.jpg"
          alt="Suasana SMA Negeri 3 Tegal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradasi agar tulisan terbaca tanpa menutupi foto */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 pb-14 md:pb-20 flex items-end">
          <div className="max-w-3xl text-white">
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase mb-4 text-gray-200">
              Tegal · Jawa Tengah
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              SMA Negeri 3 Tegal
            </h1>

            <div className="w-12 h-[2px] bg-white mt-6 mb-5" />

            <p className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed">
              Informasi sekolah, kegiatan, dan prestasi siswa.
            </p>
          </div>
        </div>
      </section>

      {/* SAMBUTAN DAN PROFIL SINGKAT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* KOLOM KIRI */}
            <div className="md:col-span-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                Mengenal Sekolah
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#001188] leading-snug">
                Selamat Datang di
                <br />
                SMA Negeri 3 Tegal
              </h2>
            </div>

            {/* KOLOM KANAN */}
            <div className="md:col-span-8">
              <p className="text-[#333333] leading-8 mb-5">
                SMA Negeri 3 Tegal merupakan sekolah menengah atas negeri yang
                berada di Kota Tegal, Jawa Tengah.
              </p>

              <p className="text-[#333333]/80 leading-8 mb-8">
                Melalui website ini, pengunjung dapat memperoleh informasi
                mengenai profil sekolah, kegiatan pendidikan, prestasi siswa,
                serta berita terbaru dari lingkungan sekolah.
              </p>

              <Link
                href="/about"
                className="
inline-flex
items-center
gap-2
rounded-full
bg-[#001188]
px-7
py-3
font-semibold
text-white
transition
hover:bg-[#4F6ACA]
"
              >
                Selengkapnya tentang sekolah
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* GARIS PEMISAH */}
          <div className="border-t border-gray-200 mt-16" />
        </div>
      </section>

      {/* SAMBUTAN KEPALA SEKOLAH */}
      <Sambutan />

      <VisiMisi />

      {/* BERITA TERBARU */}
      <section className="bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-6 pb-20">
          {/* JUDUL BAGIAN */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm tracking-widest uppercase text-gray-500 mb-3">
                Kabar Sekolah
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#001188]">
                Berita Terbaru
              </h2>
            </div>

            <Link
              href="/berita"
              className="
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#001188]
    px-6
    py-2.5
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-[#4F6ACA]
  "
            >
              Semua Berita
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* DAFTAR BERITA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* BERITA UTAMA */}
            <article>
              <div className="h-64 md:h-80 overflow-hidden bg-gray-100 mb-6">
                <img
                  src={daftarBerita[0].gambar || "/gerbang.jpg"}
                  alt={daftarBerita[0].judul}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <p className="text-sm text-gray-500 mb-3">
                {daftarBerita[0].tanggal}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                <Link
                  href={`/berita/${daftarBerita[0].id}`}
                  className="hover:text-blue-800"
                >
                  {daftarBerita[0].judul}
                </Link>
              </h3>

              <p className="text-gray-600 leading-7 mb-4">
                {daftarBerita[0].ringkasan}
              </p>

              <Link
                href={`/berita/${daftarBerita[0].id}`}
                className="
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#001188]
    px-6
    py-2.5
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-[#4F6ACA]
  "
              >
                Baca selengkapnya
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            {/* BERITA LAINNYA */}
            <div className="grid gap-8">
              {daftarBerita.slice(1, 3).map((berita) => (
                <article key={berita.id} className="grid gap-5 md:grid-cols-3">
                  {/* GAMBAR */}
                  <div className="h-44 overflow-hidden bg-gray-100 md:col-span-1">
                    <img
                      src={berita.gambar || "/gerbang.jpg"}
                      alt={berita.judul}
                      className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            hover:scale-105
          "
                    />
                  </div>

                  {/* INFORMASI */}
                  <div className="md:col-span-2">
                    <p className="mb-3 text-sm text-gray-500">
                      {berita.tanggal}
                    </p>

                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      <Link
                        href={`/berita/${berita.id}`}
                        className="hover:text-blue-800"
                      >
                        {berita.judul}
                      </Link>
                    </h3>

                    <p className="mb-5 leading-7 text-gray-600">
                      {berita.ringkasan}
                    </p>

                    <Link
                      href={`/berita/${berita.id}`}
                      className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#001188]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#4F6ACA]
          "
                    >
                      Baca selengkapnya
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
