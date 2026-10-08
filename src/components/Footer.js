import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* IDENTITAS SEKOLAH */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-bold tracking-wide text-[#001188]">
              SMA Negeri 3 Tegal
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
              Terbentuknya generasi yang beriman, berbudi pekerti luhur, cerdas,
              berprestasi, mengembangkan IPTEK, peduli lingkungan, serta
              berwawasan kebangsaan.
            </p>
          </div>

          {/* KONTAK */}
          <div className="md:col-span-4">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6ACA]">
              Kontak
            </h4>

            <div className="space-y-4 text-sm text-gray-700">
              <p>☎ &nbsp; (0283) 351093</p>

              <p>✉ &nbsp; sman3kotategal@gmail.com</p>

              <p className="leading-7">
                📍 &nbsp; Jl. Sumbodro No.81,
                <br />
                Slerok, Kec. Tegal Timur,
                <br />
                Kota Tegal, Jawa Tengah 52125
              </p>
            </div>
          </div>

          {/* NAVIGASI */}
          <div className="md:col-span-3">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6ACA]">
              Menu
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-700">
              <Link href="/" className="hover:text-[#001188]">
                Beranda
              </Link>

              <Link href="/about" className="hover:text-[#001188]">
                Profil Sekolah
              </Link>

              <Link href="/berita" className="hover:text-[#001188]">
                Berita
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-[#E5E5E5] pt-6 text-center text-xs text-gray-500">
          © 2026 SMA Negeri 3 Tegal. Seluruh Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
