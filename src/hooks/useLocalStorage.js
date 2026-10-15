"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem(key);

      if (savedData !== null) {
        setData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Gagal membaca localStorage:", error);
    } finally {
      setReady(true);
    }
  }, [key]);

  useEffect(() => {
    if (!ready) return;

    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Gagal menyimpan localStorage:", error);
    }
  }, [key, data, ready]);

  return [data, setData, ready];
}
