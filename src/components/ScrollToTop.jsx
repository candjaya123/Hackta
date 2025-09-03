// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Mengambil informasi path URL saat ini (contoh: "/", "/tentang-kami")
  const { pathname } = useLocation();

  // useEffect akan berjalan setiap kali 'pathname' berubah
  useEffect(() => {
    // Perintah untuk memaksa window scroll ke posisi paling atas (koordinat 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // <-- Dependency: jalankan efek ini hanya saat path URL berubah

  // Komponen ini tidak merender apa-apa, tugasnya hanya menjalankan efek di atas
  return null;
};

export default ScrollToTop;