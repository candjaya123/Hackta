// src/components/detail-layanan/HeroDetailLayanan.jsx
import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

const HeroDetailLayanan = ({ title, tagline, imageUrl }) => {
  return (
    <section 
      className="relative py-32 md:py-48 text-white bg-cover bg-center" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay untuk keterbacaan teks */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="font-bold text-lg tracking-wider bg-primary/20 text-primary px-4 py-2 rounded-full inline-block mb-4">
          {tagline}
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Temukan potensi tak terbatas dalam dunia teknologi.
        </p>
      </div>
    </section>
  );
};

export default HeroDetailLayanan;