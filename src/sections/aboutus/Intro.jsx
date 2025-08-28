import React from 'react';

export const IntroSection = () => {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-yellow-100/60 to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-light-text dark:text-dark-text mb-4">Tentang Kami</h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          “Gerakan kecil dari Gen Z untuk membangkitkan teknologi Indonesia”
        </h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
          Kami adalah sekelompok mahasiswa Gen Z yang tumbuh dengan rasa ingin tahu dan semangat berkarya. Melihat kondisi Indonesia yang masih tertinggal dalam bidang teknologi membuat kami gelisah—dan dari kegelisahan itulah kursus ini lahir.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;