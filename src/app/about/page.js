import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO ABOUT */}
      <section className="relative h-[380px] overflow-hidden md:h-[480px]">
        <img
          src="/lobi.jpg"
          alt="Lobi SMA Negeri 3 Tegal"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-12 md:pb-16">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Profil Sekolah / SMA Negeri 3 Tegal
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Mengenal
              <br />
              SMA Negeri 3 Tegal
            </h1>

            <div className="my-5 h-px w-14 bg-white/80" />

            <p className="max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
              Profil, sejarah, visi, dan misi sekolah.
            </p>
          </div>
        </div>
      </section>

      {/* PROFIL SEKOLAH */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4F6ACA]">
              01 / Tentang Sekolah
            </p>

            <h2 className="text-3xl font-bold text-[#001188] md:text-4xl">
              Profil Sekolah
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-base leading-8 text-[#333333]">
              SMA Negeri 3 Tegal merupakan salah satu sekolah menengah atas
              negeri yang berada di Kota Tegal, Jawa Tengah.
              <br />
              <br />
              SMA Negeri 3 Tegal berkomitmen memberikan layanan pendidikan yang
              berkualitas melalui pengembangan akademik, karakter, kreativitas,
              dan potensi peserta didik.
              <br />
              <br />
              Dengan semangat "SMAGA Semakin Jaya", sekolah terus berupaya
              menciptakan lingkungan pendidikan yang nyaman, berprestasi, dan
              berwawasan luas.
            </p>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="border-t border-gray-200 bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4F6ACA]">
                02 / Perjalanan Sekolah
              </p>

              <h2 className="text-3xl font-bold text-[#001188] md:text-4xl">
                Sejarah Singkat
              </h2>
            </div>

            <div className="md:col-span-8">
              <p className="text-base leading-8 text-[#333333]">
                SMA Negeri 3 Tegal merupakan salah satu sekolah menengah atas
                negeri yang berada di Kota Tegal, Jawa Tengah. Sekolah ini
                berdiri pada tahun 1987 sebagai bagian dari upaya pemerintah
                dalam meningkatkan layanan pendidikan tingkat menengah atas di
                Kota Tegal.
                <br />
                <br />
                Pada awal perkembangannya, SMA Negeri 3 Tegal terus melakukan
                peningkatan kualitas pendidikan melalui pengembangan fasilitas,
                tenaga pendidik, serta berbagai program akademik dan
                nonakademik.
                <br />
                <br />
                Dalam perjalanannya, SMA Negeri 3 Tegal berkembang menjadi
                sekolah yang aktif dalam membangun karakter peserta didik,
                meningkatkan prestasi, serta menciptakan lingkungan belajar yang
                nyaman dan berwawasan luas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISI DAN MISI */}
      <section id="visi" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4F6ACA]">
            03 / Arah Pendidikan
          </p>

          <h2 className="mb-12 text-2xl font-semibold text-gray-900 md:text-3xl">
            Visi dan Misi
          </h2>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t-2 border-[#001188] pt-6">
              <h3 className="mb-5 text-xl font-semibold text-gray-900">
                Visi Sekolah
              </h3>

              <p className="leading-8 text-gray-700">
                Terbentuknya generasi yang beriman, berbudi pekerti luhur,
                cerdas, berprestasi, mengembangkan IPTEK, peduli terhadap
                lingkungan dan masalah kependudukan, serta berwawasan
                kebangsaan.
              </p>
            </div>

            <div className="border-t-2 border-[#001188] pt-6">
              <h3 className="mb-5 text-xl font-semibold text-gray-900">
                Misi Sekolah
              </h3>

              <ul className="space-y-3 leading-7 text-gray-700">
                <li>
                  • Menyelenggarakan pendidikan yang berkualitas dan
                  berkarakter.
                </li>

                <li>
                  • Mengembangkan kemampuan akademik dan nonakademik peserta
                  didik.
                </li>

                <li>
                  • Meningkatkan kreativitas serta pemanfaatan teknologi dalam
                  pembelajaran.
                </li>

                <li>
                  • Menciptakan lingkungan sekolah yang aman, nyaman, dan peduli
                  lingkungan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4F6ACA]">
                04 / Lingkungan Sekolah
              </p>

              <h2 className="text-3xl font-bold text-[#001188] md:text-4xl">
                Fasilitas Sekolah
              </h2>
            </div>

            <div className="md:col-span-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Ruang Pembelajaran
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Ruang kelas yang mendukung kegiatan belajar mengajar secara
                  nyaman dan efektif.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Laboratorium</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Fasilitas praktikum untuk menunjang pembelajaran siswa.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Perpustakaan</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Mendukung budaya literasi dan sumber belajar siswa.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Kegiatan Siswa</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Sarana pengembangan bakat melalui kegiatan ekstrakurikuler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALAMAT */}
      <section className="border-t border-gray-200 bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4F6ACA]">
                04 / Lokasi
              </p>

              <h2 className="text-3xl font-bold text-[#001188] md:text-4xl">
                Alamat Sekolah
              </h2>
            </div>

            <div className="md:col-span-8">
              <p className="text-lg font-medium text-gray-900">
                SMA Negeri 3 Tegal
              </p>

              <p className="mt-2 leading-8 text-gray-700">
                Jl. Sumbodro No.81, Slerok,
                <br />
                Kecamatan Tegal Timur, Kota Tegal,
                <br />
                Jawa Tengah 52125
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                Telepon: (0283) 351093
                <br />
                Email: sman3kotategal@gmail.com
              </p>

              <Link
                href="/"
                className="
    mt-8
    inline-flex
    rounded-full
    bg-[#001188]
    px-8
    py-3
    font-semibold
    text-white
    transition
    hover:bg-[#4F6ACA]
  "
              >
                ← Kembali ke Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
