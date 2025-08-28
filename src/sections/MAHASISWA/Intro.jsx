import React from 'react';
import IntroTemplate from '../../components/layanan/Intro';

const mahasiswaIntroData = {
  title: "Siap Bersaing di Dunia Industri",
  narrative: "Di Hackta, mahasiswa belajar keterampilan teknologi lanjutan seperti full-stack development dan AI melalui proyek nyata, mempersiapkan mereka untuk magang dan karir profesional.",
  videoId: "Y8zX5n7v9uW",
  button1: {
    text: "Lihat di YouTube",
    link: "https://www.youtube.com/watch?v=Y8zX5n7v9uW",
  },
  button2: {
    text: "Tentang Kami",
    link: "/tentang-kami",
  },
  gradientClass: "bg-gradient-to-b from-light-bg to-purple-100/60 dark:from-dark-bg dark:to-purple-900/20",
};

const Intro = () => {
  return (
    <IntroTemplate
      title={mahasiswaIntroData.title}
      narrative={mahasiswaIntroData.narrative}
      videoId={mahasiswaIntroData.videoId}
      button1={mahasiswaIntroData.button1}
      button2={mahasiswaIntroData.button2}
      gradientClass={mahasiswaIntroData.gradientClass}
    />
  );
};

export default Intro;