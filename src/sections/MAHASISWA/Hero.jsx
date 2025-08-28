import React from 'react';
import HeroTemplate from '../../components/layanan/Hero';

const mahasiswaHeroData = {
  title: "Layanan untuk Mahasiswa",
  subtitle: "Meningkatkan keterampilan teknologi mahasiswa melalui proyek industri, pemrograman lanjutan, dan persiapan karir.",
  carouselImages: [
    "https://placehold.co/800x400/D8BFD8/FFFFFF?text=Full-Stack+Development",
    "https://placehold.co/800x400/CBC3E3/000000?text=AI+Basics",
    "https://placehold.co/800x400/BA55D3/000000?text=Portfolio+Proyek",
  ],
  colorTheme: "purple",
};

const Hero = () => {
  return (
    <HeroTemplate
      title={mahasiswaHeroData.title}
      subtitle={mahasiswaHeroData.subtitle}
      carouselImages={mahasiswaHeroData.carouselImages}
      colorTheme={mahasiswaHeroData.colorTheme}
    />
  );
};

export default Hero;