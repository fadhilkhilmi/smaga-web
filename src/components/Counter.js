"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="inline-block bg-white border border-[#E5E5E5] p-6">
      <p className="mb-5 text-sm text-[#333333]">
        Jumlah klik:
        <span className="ml-2 font-bold text-[#001188]">{count}</span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="
            rounded-full
            bg-[#001188]
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#4F6ACA]
          "
        >
          Tambah
        </button>

        <button
          onClick={() => setCount(0)}
          className="
            rounded-full
            border-2
            border-[#001188]
            px-5
            py-2
            text-sm
            font-semibold
            text-[#001188]
            transition
            hover:bg-[#F7F7F7]
          "
        >
          Reset
        </button>
      </div>
    </div>
  );
}
