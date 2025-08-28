// src/sections/SD/Kurikulum.jsx
import React from 'react';
import KurikulumTemplate from '../../components/layanan/Kurikulum';

// Data kurikulum yang diperkaya dengan detail untuk popup
const sdKurikulumData = [
  {
    title: "Program Dasar",
    description: "Program dasar kami adalah gerbang pertama bagi anak-anak untuk mengenal dunia coding dengan cara yang paling menyenangkan. Kami fokus pada fondasi logika tanpa membebani mereka dengan sintaks yang rumit.",
    points: [
      "Logika visual dengan block-based coding.",
      "Membuat animasi dan cerita interaktif.",
      "Dasar-dasar berpikir komputasi.",
      "Pengenalan konsep algoritma sederhana.",
    ],
    imgSrc: "https://placehold.co/400x200/ADD8E6/000000?text=Basic+Coding",
    carouselImages: [
      "https://placehold.co/800x400/ADD8E6/000000?text=Basic+1",
      "https://placehold.co/800x400/98FB98/000000?text=Basic+2",
    ],
    instructor: {
      name: "Kak Sinta",
      profile: "Spesialis edukasi coding anak dengan metode gamifikasi.",
      imgSrc: "https://placehold.co/100x100/fdb827/000000?text=Sinta"
    },
    syllabusLink: "/silabus/SD-Dasar.pdf"
  },
  {
    title: "Proyek Elektronik Dasar",
    description: "Di program ini, anak-anak akan belajar bahwa coding bisa berinteraksi dengan dunia nyata! Mereka akan merakit sirkuit sederhana dan melihat kode mereka 'hidup'.",
    points: [
      "Pengenalan komponen seperti LED, sensor, dan motor.",
      "Merakit sirkuit sederhana dengan Arduino.",
      "Memberi perintah pada perangkat fisik.",
      "Konsep input dan output pada hardware."
    ],
    imgSrc: "https://placehold.co/400x200/98FB98/000000?text=Electronics+Project",
    carouselImages: [
      "https://placehold.co/800x400/98FB98/000000?text=Elektronik+1",
      "https://placehold.co/800x400/87CEEB/000000?text=Elektronik+2",
    ],
    instructor: {
      name: "Kak Rudi",
      profile: "Ahli prototyping dan desain sirkuit elektronik.",
      imgSrc: "https://placehold.co/100x100/fdb827/000000?text=Rudi"
    },
    syllabusLink: "/silabus/SD-Elektronik.pdf"
  },
  // ... Tambahkan data untuk kartu lainnya dengan struktur yang sama ...
];

const Kurikulum = () => {
  return (
    <KurikulumTemplate 
      title="Apa yang Akan Dipelajari?"
      description="Kurikulum kami dirancang untuk membangun pemahaman fundamental secara bertahap dan menyenangkan di Hackta Surabaya."
      kurikulumData={sdKurikulumData}
      gradientClass="bg-blue-100/60 dark:bg-blue-900/20"
    />
  );
};

export default Kurikulum;