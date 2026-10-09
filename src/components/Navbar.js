"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scroll ke bawah
        setShowNavbar(false);
      } else {
        // scroll ke atas
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
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <img
            src="/logo1.png"
            alt="Logo SMA Negeri 3 Tegal"
            className="h-12 w-12 object-contain"
          />

          <span className="text-base font-semibold tracking-wide">
            SMAN 3 TEGAL
          </span>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-8 text-white text-base">
          <Link href="/" className="hover:text-[#FFCC33] transition">
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-2 hover:text-[#FFCC33] transition">
              Profil
              <span className="text-xs">▾</span>
            </button>

            <div
              className="
                invisible
                absolute
                left-0
                top-full
                mt-4
                w-52
                rounded-xl
                bg-white
                p-2
                opacity-0
                shadow-lg
                transition-all
                duration-200
                group-hover:visible
                group-hover:opacity-100
              "
            >
              <Link
                href="/about"
                className="
                  block rounded-lg px-4 py-3
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-[#001188]
                "
              >
                Tentang Sekolah
              </Link>

              <Link
                href="/about#visi"
                className="
                  block rounded-lg px-4 py-3
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-[#001188]
                "
              >
                Visi & Misi
              </Link>
            </div>
          </div>

          <Link href="/berita" className="hover:text-[#FFCC33] transition">
            Berita
          </Link>
        </div>
      </div>
    </nav>
  );
}
