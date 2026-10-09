export default function VisiMisi() {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* JUDUL */}
          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#4F6ACA]">
              Tentang Sekolah
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#001188] md:text-4xl">
              Visi dan Misi
              <br />
              Sekolah
            </h2>

            <div className="mt-6 h-1 w-12 bg-[#FFCC33]" />
          </div>

          {/* ISI */}
          <div className="space-y-12 md:col-span-8">
            {/* VISI */}
            <div>
              <h3 className="mb-5 text-2xl font-bold text-[#001188]">Visi</h3>

              <p className="leading-8 text-[#333333]">
                Terbentuknya generasi yang beriman, berbudi pekerti luhur,
                cerdas, berprestasi, mengembangkan IPTEK, peduli terhadap
                lingkungan dan masalah kependudukan, serta berwawasan
                kebangsaan.
              </p>
            </div>

            {/* MISI */}
            <div>
              <h3 className="mb-5 text-2xl font-bold text-[#001188]">Misi</h3>

              <ol className="space-y-4 leading-7 text-[#333333]">
                <li className="flex gap-4">
                  <span className="font-bold text-[#4F6ACA]">01</span>

                  <p>
                    Menumbuhkan suasana sekolah yang religius dalam bersikap dan
                    bertingkah laku.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-[#4F6ACA]">02</span>

                  <p>
                    Menyelenggarakan kegiatan pembelajaran berkualitas,
                    menanamkan kepedulian terhadap lingkungan dan nilai - nilai
                    kependudukan, menyenangkan, didukung dengan TIK yang
                    memadai.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-[#4F6ACA]">03</span>

                  <p>
                    Menyelenggarakan kegiatan sekolah yang mendukung upaya
                    pelestarian lingkungan hidup.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-[#4F6ACA]">04</span>

                  <p>
                    Menyelenggarakan Kegiatan Ekstrakurikuler yang Mampu
                    Menumbuhkan bakat dan Minat Peserta Didik secara Optimal
                    untuk meraih prestasi.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-[#4F6ACA]">05</span>

                  <p>
                    Mengutamakan keteladanan seluruh warga sekolah untuk
                    menumbuhkan rasa cinta dan bangga terhadap tanah air dan
                    bangsa Indonesia.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
