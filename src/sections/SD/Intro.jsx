// src/sections/SD/Intro.jsx
import React from 'react';
// Impor template Intro dari folder components
import IntroTemplate from '../../components/layanan/Intro';

// Data spesifik untuk Intro Section halaman SD
const introData = {
  title: "Belajar Sambil Bermain",
  narrative: "Di Hackta, kami percaya bahwa coding untuk anak SD harus terasa seperti sebuah permainan yang seru. Kami mengubah konsep-konsep pemrograman yang kompleks menjadi aktivitas visual yang interaktif dan mudah dipahami.",
  // Ganti 'YOUR_VIDEO_ID' dengan ID video YouTube Anda
  videoId: "L9o4M4_jV9s", 
  // Tombol 1
  button1: {
    text: "Lihat di YouTube",
    link: "https://www.youtube.com/watch?v=L9o4M4_jV9s" // Ganti dengan link channel Anda
  },
  // Tombol 2
  button2: {
    text: "Tentang Kami",
    link: "/tentang-kami"
  },
  // Gradasi biru pastel
  gradientClass: "bg-gradient-to-b from-light-bg to-blue-100/60 dark:from-dark-bg dark:to-blue-900/20"
};

const Intro = () => {
  return (
    <IntroTemplate 
      title={introData.title}
      narrative={introData.narrative}
      videoId={introData.videoId}
      button1={introData.button1}
      button2={introData.button2}
      gradientClass={introData.gradientClass}
    />
  );
};

export default Intro;