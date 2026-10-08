export default function Sambutan() {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:items-center md:py-24">
        {/* TEKS SAMBUTAN */}
        <div className="md:col-span-7">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#4F6ACA]">
            Sambutan
          </p>

          <h2 className="mb-8 text-3xl font-bold leading-tight text-[#001188] md:text-5xl">
            Sambutan Kepala
            <br />
            Satuan Pendidikan
          </h2>

          <div className="space-y-5 text-base leading-8 text-[#333333]">
            <p>
              Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas
              segala nikmat dan karunia-Nya.
            </p>

            <p>
              Selamat datang di website SMA Negeri 3 Tegal. Website ini menjadi
              media informasi mengenai profil sekolah, kegiatan pendidikan,
              prestasi siswa, serta berbagai informasi terbaru dari lingkungan
              sekolah.
            </p>

            <p>
              SMA Negeri 3 Tegal berkomitmen memberikan layanan pendidikan yang
              berkualitas dalam membentuk peserta didik yang beriman,
              berprestasi, berkarakter, dan memiliki wawasan luas.
            </p>

            <p>
              Melalui berbagai kegiatan akademik maupun nonakademik, sekolah
              terus berupaya menciptakan lingkungan belajar yang positif,
              nyaman, dan mendukung perkembangan potensi siswa.
            </p>
          </div>

          {/* IDENTITAS */}
          <div className="mt-10 border-t border-[#E5E5E5] pt-6">
            <p className="text-lg font-semibold text-[#001188]">
              Istiana Herawati, S.S., M.Pd.
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Kepala SMA Negeri 3 Tegal
            </p>
          </div>
        </div>

        {/* FOTO KEPALA SEKOLAH */}
        <div className="md:col-span-5">
          <div className="overflow-hidden bg-white">
            <img
              src="/kepala-sekolah.jpg"
              alt="Istiana Herawati, S.S., M.Pd."
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4F6ACA]">
              Kepala Sekolah
            </p>

            <p className="mt-1 text-xl font-bold text-[#001188]">
              Istiana Herawati, S.S., M.Pd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
