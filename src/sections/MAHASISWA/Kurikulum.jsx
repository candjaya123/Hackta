import React from 'react';
import KurikulumTemplate from '../../components/layanan/Kurikulum';

const mahasiswaKurikulumData = [
  {
    title: "Full-Stack Development",
    description: "Mahasiswa belajar membangun aplikasi web lengkap menggunakan teknologi modern seperti React, Node.js, dan database relasional.",
    points: [
      "Frontend dengan React dan Tailwind CSS.",
      "Backend dengan Node.js dan Express.",
      "Manajemen database dengan PostgreSQL.",
      "Membuat proyek portofolio profesional.",
    ],
    imgSrc: "https://placehold.co/400x200/D8BFD8/000000?text=Full-Stack+Dev",
    carouselImages: [
      "https://placehold.co/800x400/D8BFD8/000000?text=Full-Stack+1",
      "https://placehold.co/800x400/CBC3E3/000000?text=Full-Stack+2",
    ],
    instructor: {
      name: "Kak Budi",
      profile: "Pengembang full-stack dengan pengalaman di startup teknologi.",
      imgSrc: "https://placehold.co/100x100/BA55D3/000000?text=Budi",
    },
    syllabusLink: "/silabus/Mahasiswa-FullStack.pdf",
  },
  {
    title: "Dasar-Dasar AI",
    description: "Program ini memperkenalkan mahasiswa pada konsep AI dan machine learning, dengan proyek praktis seperti klasifikasi data.",
    points: [
      "Pengenalan Python untuk AI.",
      "Dasar-dasar machine learning dengan scikit-learn.",
      "Membangun model prediktif sederhana.",
      "Persiapan untuk proyek penelitian AI.",
    ],
    imgSrc: "https://placehold.co/400x200/CBC3E3/000000?text=AI+Basics",
    carouselImages: [
      "https://placehold.co/800x400/CBC3E3/000000?text=AI+1",
      "https://placehold.co/800x400/BA55D3/000000?text=AI+2",
    ],
    instructor: {
      name: "Kak Rina",
      profile: "Peneliti AI dengan pengalaman di analisis data.",
      imgSrc: "https://placehold.co/100x100/BA55D3/000000?text=Rina",
    },
    syllabusLink: "/silabus/Mahasiswa-AI.pdf",
  },
];

const Kurikulum = () => {
  return (
    <KurikulumTemplate
      title="Apa yang Akan Dipelajari?"
      description="Kurikulum kami dirancang untuk membekali mahasiswa dengan keterampilan teknologi mutakhir untuk karir di industri modern."
      kurikulumData={mahasiswaKurikulumData}
      gradientClass="bg-purple-100/60 dark:bg-purple-900/20"
    />
  );
};

export default Kurikulum;