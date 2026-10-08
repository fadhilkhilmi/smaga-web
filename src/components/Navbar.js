import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* LOGO SEKOLAH */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <img
            src="/logo.png"
            alt="Logo SMA Negeri 3 Tegal"
            className="h-10 w-10 object-contain"
          />

          <span className="font-semibold tracking-wide">SMAN 3 TEGAL</span>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-5 py-3 text-sm text-gray-800 backdrop-blur">
          <Link href="/" className="px-3 py-1 hover:text-blue-800">
            Home
          </Link>

          {/* DROPDOWN PROFIL */}
          <div className="group relative">
            <button className="flex items-center gap-2 px-3 py-2 hover:text-blue-800">
              Profil
              <span className="text-xs">▾</span>
            </button>

            <div
              className="
      invisible
      absolute
      left-0
      top-full
      mt-3
      w-52
      rounded-xl
      bg-white
      p-2
      shadow-xl
      opacity-0
      transition-all
      duration-200
      group-hover:visible
      group-hover:opacity-100
    "
            >
              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                Tentang Sekolah
              </Link>

              <Link
                href="/about#visi"
                className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                Visi & Misi
              </Link>
            </div>
          </div>
          <Link href="/berita" className="px-3 py-1 hover:text-blue-800">
            Berita
          </Link>
        </div>
      </div>
    </nav>
  );
}
