// src/components/layanan/Hero.jsx
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Hero = ({ title, subtitle, carouselImages, colorTheme = 'default' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- SEMUA KEMUNGKINAN GRADIEN DIDEFINISIKAN DI SINI ---
  // Tailwind sekarang bisa melihat semua string kelas ini dan akan membuat CSS-nya.
  const gradientMap = {
    default: 'bg-gradient-to-b from-yellow-100/60 to-light-bg dark:from-yellow-900/20 dark:to-dark-bg-secondary',
    blue: 'bg-gradient-to-b from-blue-100/60 to-light-bg dark:from-blue-900/20 dark:to-dark-bg-secondary',
    green: 'bg-gradient-to-b from-green-100/60 to-light-bg dark:from-green-900/20 dark:to-dark-bg-secondary',
    purple: 'bg-gradient-to-b from-purple-100/60 to-light-bg dark:from-purple-900/20 dark:to-dark-bg-secondary',
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // Gunakan map untuk memilih kelas gradien yang benar
    <div className={`pt-32 pb-16 text-center ${gradientMap[colorTheme]}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-light-text dark:text-dark-text mb-4">{title}</h1>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-12">
          {subtitle}
        </p>

        <div className="relative max-w-4xl mx-auto h-96 group">
          <div 
            style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }} 
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl"
          ></div>
          
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronLeftIcon onClick={prevSlide} className="h-8 w-8" />
          </div>
          
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronRightIcon onClick={nextSlide} className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;