import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";

export const metadata = {
  title: "Berita | SMA Negeri 3 Tegal",
  description: "Informasi dan kegiatan SMA Negeri 3 Tegal",
};

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BERITA */}
      <section className="relative h-[420px] overflow-hidden md:h-[520px]">
        {/* FOTO SEKOLAH */}
        <img
          src="/gerbang2.png"
          alt="Suasana SMA Negeri 3 Tegal"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* GRADASI FOTO */}
        <div className="absolute inset-0 bg-black/60" />

        {/* JUDUL HERO */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-14 md:pb-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Informasi / Kabar Sekolah
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Kabar dari SMA Negeri 3 Tegal
            </h1>

            <div className="my-5 h-px w-14 bg-white/80" />

            <p className="max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
              Kegiatan, prestasi, dan informasi terbaru dari lingkungan sekolah.
            </p>
          </div>
        </div>
      </section>

      {/* DAFTAR BERITA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* HEADER DAFTAR */}
        <div className="mb-10 border-b border-[#E5E5E5] pb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#4F6ACA]">
            Publikasi Sekolah
          </p>

          <h2 className="text-3xl font-bold text-[#001188] md:text-4xl">
            Daftar Berita
          </h2>

          <p className="mt-4 text-base text-[#333333]/80">
            Informasi dan kegiatan dari lingkungan SMA Negeri 3 Tegal.
          </p>
        </div>

        {/* ENAM BERITA */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {daftarBerita.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </section>
    </main>
  );
}
