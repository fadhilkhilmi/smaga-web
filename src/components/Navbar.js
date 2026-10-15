"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <nav
      className={`
        absolute top-0 left-0 z-50 w-full
        transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-6 md:px-6 md:py-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <img
            src="/logo1.png"
            alt="Logo SMA Negeri 3 Tegal"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />

          <span className="text-sm md:text-base font-semibold tracking-wide">
            SMAN 3 TEGAL
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link href="/" className="hover:text-[#FFCC33]">
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpenProfile(!openProfile)}
              className="flex items-center gap-2 hover:text-[#FFCC33]"
            >
              Profil
              <span className="text-xs">▾</span>
            </button>

            {openProfile && (
              <div
                className="
                absolute
                top-full
                mt-4
                w-52
                rounded-xl
                bg-white
                p-2
                shadow-lg
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
            )}
          </div>

          <Link href="/guru" className="hover:text-[#FFCC33]">
            Guru
          </Link>

          <Link href="/ekstrakurikuler" className="hover:text-[#FFCC33]">
            Ekstrakurikuler
          </Link>

          <Link href="/berita" className="hover:text-[#FFCC33]">
            Berita
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div
          className="
          md:hidden
          mx-5
          rounded-xl
          bg-white
          p-4
          shadow-xl
          "
        >
          <Link href="/" className="block px-4 py-3 text-gray-700">
            Home
          </Link>

          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="
            flex
            w-full
            justify-between
            px-4
            py-3
            text-gray-700
            "
          >
            Profil
            <span>▾</span>
          </button>

          {openProfile && (
            <div className="ml-4 border-l">
              <Link href="/about" className="block px-4 py-3 text-gray-600">
                Tentang Sekolah
              </Link>

              <Link
                href="/about#visi"
                className="block px-4 py-3 text-gray-600"
              >
                Visi & Misi
              </Link>
            </div>
          )}

          <Link
            href="/guru"
            onClick={() => setOpenMenu(false)}
            className="block px-4 py-3 text-gray-700"
          >
            Guru
          </Link>

          <Link
            href="/ekstrakurikuler"
            onClick={() => setOpenMenu(false)}
            className="block px-4 py-3 text-gray-700"
          >
            Ekstrakurikuler
          </Link>

          <Link href="/berita" className="block px-4 py-3 text-gray-700">
            Berita
          </Link>
        </div>
      )}
    </nav>
  );
}
