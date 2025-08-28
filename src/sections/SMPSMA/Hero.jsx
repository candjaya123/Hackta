import React from 'react';
import HeroTemplate from '../../components/layanan/Hero';

const smpSmaHeroData = {
  title: "Layanan Jenjang SMP & SMA",
  subtitle: "Mempersiapkan siswa SMP dan SMA untuk masa depan teknologi melalui coding, robotika, dan proyek berbasis industri.",
  carouselImages: [
    "https://placehold.co/800x400/98FB98/FFFFFF?text=Coding+SMP+SMA",
    "https://placehold.co/800x400/A5D6A7/000000?text=Robotika+Advanced",
    "https://placehold.co/800x400/81C784/000000?text=Proyek+Teknologi",
  ],
  colorTheme: "green",
};

const Hero = () => {
  return (
    <HeroTemplate
      title={smpSmaHeroData.title}
      subtitle={smpSmaHeroData.subtitle}
      carouselImages={smpSmaHeroData.carouselImages}
      colorTheme={smpSmaHeroData.colorTheme}
    />
  );
};

export default Hero;