// src/sections/SD/Hero.jsx
import React from 'react';
import HeroTemplate from '../../components/layanan/Hero';

const sdHeroData = {
  title: "Layanan Jenjang SD",
  subtitle: "Membangun fondasi logika dan kreativitas anak Anda melalui dunia coding yang menyenangkan dan interaktif.",
  carouselImages: [
    "https://placehold.co/800x400/87CEEB/FFFFFF?text=Coding+SD+1",
    "https://placehold.co/800x400/ADD8E6/000000?text=Robotika+Ceria",
    "https://placehold.co/800x400/98FB98/000000?text=Kreativitas+Digital",
  ],
  // --- PERUBAHAN DI SINI ---
  // Kirim 'blue' sebagai kunci tema, bukan seluruh kelas CSS.
  colorTheme: "blue"
};

const Hero = () => {
  return (
    <HeroTemplate 
      title={sdHeroData.title}
      subtitle={sdHeroData.subtitle}
      carouselImages={sdHeroData.carouselImages}
      colorTheme={sdHeroData.colorTheme} // Kirim props colorTheme
    />
  );
};

export default Hero;