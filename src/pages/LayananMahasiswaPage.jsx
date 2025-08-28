import React from 'react';
import Footer from '../components/Footer';

const LayananMahasiswaPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-purple-100/60 to-light-bg dark:from-purple-900/20 dark:to-dark-bg-secondary text-center">
        <h1 className="text-5xl font-bold text-light-text dark:text-dark-text mb-4">Layanan Mahasiswa</h1>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto px-6">
          Program intensif untuk mahasiswa, mempersiapkan keahlian profesional dan koneksi industri untuk karir di bidang teknologi.
        </p>
      </div>
      {/* Sections for Mahasiswa page go here */}
      <Footer />
    </>
  );
};

export default LayananMahasiswaPage; // <-- This line was missing