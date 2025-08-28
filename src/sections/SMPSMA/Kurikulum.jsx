import React from 'react';
import KurikulumTemplate from '../../components/layanan/Kurikulum';

const smpSmaKurikulumData = [
  {
    title: "Web Development Dasar",
    description: "Siswa belajar membangun website interaktif menggunakan HTML, CSS, dan JavaScript, dengan proyek nyata seperti portfolio pribadi.",
    points: [
      "Dasar-dasar HTML dan CSS.",
      "Interaktivitas dengan JavaScript.",
      "Membuat website responsif.",
      "Pengenalan alat pengembangan modern.",
    ],
    imgSrc: "https://placehold.co/400x200/98FB98/000000?text=Web+Development",
    carouselImages: [
      "https://placehold.co/800x400/98FB98/000000?text=Web+1",
      "https://placehold.co/800x400/A5D6A7/000000?text=Web+2",
    ],
    instructor: {
      name: "Kak Andi",
      profile: "Pengembang web full-stack dengan pengalaman industri.",
      imgSrc: "https://placehold.co/100x100/81C784/000000?text=Andi",
    },
    syllabusLink: "/silabus/SMPSMA-Web.pdf",
  },
  {
    title: "Robotika Lanjutan",
    description: "Program ini mengajarkan siswa untuk merancang dan memprogram robot menggunakan Arduino dan sensor canggih untuk proyek berbasis IoT.",
    points: [
      "Pemrograman Arduino lanjutan.",
      "Integrasi sensor dan aktuator.",
      "Proyek IoT sederhana.",
      "Persiapan untuk kompetisi robotika.",
    ],
    imgSrc: "https://placehold.co/400x200/A5D6A7/000000?text=Robotics",
    carouselImages: [
      "https://placehold.co/800x400/A5D6A7/000000?text=Robot+1",
      "https://placehold.co/800x400/81C784/000000?text=Robot+2",
    ],
    instructor: {
      name: "Kak Lina",
      profile: "Ahli robotika dan IoT dengan pengalaman kompetisi internasional.",
      imgSrc: "https://placehold.co/100x100/81C784/000000?text=Lina",
    },
    syllabusLink: "/silabus/SMPSMA-Robotika.pdf",
  },
];

const Kurikulum = () => {
  return (
    <KurikulumTemplate
      title="Apa yang Akan Dipelajari?"
      description="Kurikulum kami dirancang untuk membekali siswa SMP dan SMA dengan keterampilan teknologi modern yang relevan dengan industri."
      kurikulumData={smpSmaKurikulumData}
      gradientClass="bg-green-100/60 dark:bg-green-900/20"
    />
  );
};

export default Kurikulum;