import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="group">
      {/* FOTO BERITA */}
      <div className="mb-6 aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={berita.gambar || "/file.svg"}
          alt={berita.judul}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* KONTEN */}
      <div>
        {/* TANGGAL */}
        <p
          className="
          mb-4
          text-xs
          uppercase
          tracking-[0.2em]
          text-gray-500
          "
        >
          {berita.tanggal}
        </p>

        {/* JUDUL */}
        <h3
          className="
          mb-4
          text-xl
          font-semibold
          leading-snug
          text-[#001188]
          transition
          group-hover:text-blue-700
          "
        >
          <Link href={`/berita/${berita.id}`}>{berita.judul}</Link>
        </h3>

        {/* RINGKASAN */}
        <p
          className="
          mb-6
          text-sm
          leading-7
          text-gray-600
          "
        >
          {berita.ringkasan}
        </p>

        {/* LINK */}
        <Link
          href={`/berita/${berita.id}`}
          className="
          inline-flex
          items-center
          gap-2
          border-b
          border-gray-900
          pb-1
          text-sm
          font-medium
          text-gray-900
          transition
          hover:border-blue-800
          hover:text-blue-800
          "
        >
          Baca selengkapnya
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
