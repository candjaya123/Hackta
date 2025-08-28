import React from 'react';
import IntroTemplate from '../../components/layanan/Intro';

const smpSmaIntroData = {
  title: "Belajar untuk Masa Depan",
  narrative: "Di Hackta, siswa SMP dan SMA belajar coding dan teknologi melalui proyek nyata yang relevan dengan dunia industri, mempersiapkan mereka untuk kuliah dan karir di bidang teknologi.",
  videoId: "X7yZ4m9v8tQ",
  button1: {
    text: "Lihat di YouTube",
    link: "https://www.youtube.com/watch?v=X7yZ4m9v8tQ",
  },
  button2: {
    text: "Tentang Kami",
    link: "/tentang-kami",
  },
  gradientClass: "bg-gradient-to-b from-light-bg to-green-100/60 dark:from-dark-bg dark:to-green-900/20",
};

const Intro = () => {
  return (
    <IntroTemplate
      title={smpSmaIntroData.title}
      narrative={smpSmaIntroData.narrative}
      videoId={smpSmaIntroData.videoId}
      button1={smpSmaIntroData.button1}
      button2={smpSmaIntroData.button2}
      gradientClass={smpSmaIntroData.gradientClass}
    />
  );
};

export default Intro;