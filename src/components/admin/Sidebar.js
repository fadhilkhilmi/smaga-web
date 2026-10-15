"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Dashboard", href: "/admin", icon: "▦" },
    { name: "Berita", href: "/admin/berita", icon: "▤" },
    { name: "Guru", href: "/admin/guru", icon: "♙" },
    {
      name: "Ekstrakurikuler",
      href: "/admin/ekstrakurikuler",
      icon: "★",
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-[70] rounded-lg bg-[#173B63] px-4 py-2 text-white md:hidden"
      >
        ☰
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[50] bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-[60] h-screen w-64 bg-[#173B63] text-white transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-white/20 px-6 py-7">
          <h1 className="text-xl font-bold">SMAN 3 TEGAL</h1>
          <p className="mt-1 text-sm text-gray-300">Administrator</p>
        </div>

        <nav className="space-y-2 p-4">
          {menus.map((menu) => {
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-yellow-400 font-semibold text-[#173B63]"
                    : "text-gray-200 hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{menu.icon}</span>
                <span>{menu.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 w-full px-4">
          <Link
            href="/"
            className="block rounded-xl border border-white/30 px-4 py-3 text-center text-sm hover:bg-white/10"
          >
            ← Kembali ke Website
          </Link>
        </div>
      </aside>
    </>
  );
}
