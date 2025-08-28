import React from 'react';
import Footer from '../components/Footer';

const LayananSDPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-amber-100/60 to-light-bg dark:from-yellow-900/20 dark:to-dark-bg-secondary text-center">
        <h1 className="text-5xl font-bold text-light-text dark:text-dark-text mb-4">Layanan Jenjang SD</h1>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto px-6">
          Program coding yang didesain secara menyenangkan dan interaktif untuk siswa Sekolah Dasar,
          mengembangkan logika dasar dan kreativitas digital.
        </p>
      </div>
      {/* Sections for SD page go here */}
      <Footer />
    </>
  );
};

export default LayananSDPage; // <-- This line was missing