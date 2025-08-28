// src/components/layanan/TestimoniLayanan.jsx
import React from 'react';

const TestimoniCard = ({ quote, name, title, imgSrc }) => (
  <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-2xl shadow-lg text-center">
    <img src={imgSrc} alt={name} className="w-24 h-24 rounded-full mx-auto -mt-20 mb-4 border-4 border-light-bg-secondary dark:border-dark-bg-secondary"/>
    <p className="italic text-light-text-secondary dark:text-dark-text-secondary mb-4">"{quote}"</p>
    <h4 className="font-bold text-lg text-light-text dark:text-dark-text">{name}</h4>
    <p className="text-primary">{title}</p>
  </div>
);

const TestimoniLayanan = () => {
  return (
    <section className="pt-32 pb-24 bg-light-bg-secondary dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-16">
          <TestimoniCard name="Ibu Sarah" title="Orang Tua Siswa SD" quote="Anak saya jadi semangat belajar coding. Metodenya seru dan tidak membosankan!" imgSrc="https://placehold.co/100x100/fdb827/000000?text=S"/>
          <TestimoniCard name="Budi" title="Siswa SMA" quote="Materi di Hackta sangat relevan dengan industri. Saya jadi lebih siap untuk kuliah dan karir." imgSrc="https://placehold.co/100x100/fdb827/000000?text=B"/>
          <TestimoniCard name="Rina" title="Mahasiswa" quote="Sangat membantu untuk riset tugas akhir. Mentornya sangat suportif dan berpengalaman." imgSrc="https://placehold.co/100x100/fdb827/000000?text=R"/>
        </div>
      </div>
    </section>
  );
};

export default TestimoniLayanan;