import React from 'react';
import Footer from '../components/Footer';

const LayananSMASMPPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-100/60 to-light-bg dark:from-blue-900/20 dark:to-dark-bg-secondary text-center">
        <h1 className="text-5xl font-bold text-light-text dark:text-dark-text mb-4">Layanan Jenjang SMP & SMA</h1>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto px-6">
          Materi coding mendalam untuk siswa SMP dan SMA, fokus pada pengembangan web, aplikasi, dan persiapan kompetisi.
        </p>
      </div>
      {/* Sections for SMP/SMA page go here */}
      <Footer />
    </>
  );
};

export default LayananSMASMPPage; // <-- This line was missing