// src/sections/SD/Kurikulum.jsx
import React from 'react';
import KurikulumTemplate from '../../components/layanan/Kurikulum';

const sdKurikulumData = [
  {
    slug: "program-dasar", // <-- ID untuk URL
    title: "Program Dasar",
    points: [ "Logika visual...", "Membuat animasi...", "Dasar-dasar berpikir komputasi."],
    imgSrc: "https://placehold.co/400x200/ADD8E6/000000?text=Basic+Coding",
    // Data lengkap untuk halaman detail
    description: "Program dasar kami adalah gerbang pertama...",
    carouselImages: ["..."],
    instructor: { name: "Kak Sinta", profile: "...", imgSrc: "..."},
    syllabusLink: "/silabus/SD-Dasar.pdf"
  },
  {
    slug: "proyek-elektronik-dasar", // <-- ID untuk URL
    title: "Proyek Elektronik Dasar",
    points: [ "Pengenalan komponen...", "Merakit sirkuit...", "Memberi perintah..."],
    imgSrc: "https://placehold.co/400x200/98FB98/000000?text=Electronics+Project",
    // Data lengkap untuk halaman detail
    description: "Di program ini, anak-anak akan belajar...",
    carouselImages: ["..."],
    instructor: { name: "Kak Rudi", profile: "...", imgSrc: "..."},
    syllabusLink: "/silabus/SD-Elektronik.pdf"
  },
  // ... data lainnya ...
];

const Kurikulum = () => {
  return (
    <KurikulumTemplate 
      title="Apa yang Akan Dipelajari?"
      description="..."
      kurikulumData={sdKurikulumData}
      gradientClass="bg-blue-100/60 dark:bg-blue-900/20"
    />
  );
};

export default Kurikulum;