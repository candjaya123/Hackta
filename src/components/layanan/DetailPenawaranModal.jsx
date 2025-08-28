// src/components/layanan/DetailPenawaranModal.jsx
import React, { useState } from 'react';
import { XMarkIcon, CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
// --- INI BAGIAN YANG DIPERBAIKI ---
// Nama ikon diubah dari DownloadIcon menjadi ArrowDownTrayIcon
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const DetailPenawaranModal = ({ isOpen, onClose, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !data) return null;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-light-bg dark:bg-dark-bg-secondary w-full max-w-3xl rounded-2xl shadow-2xl p-8 relative transform transition-all duration-300 scale-95 animate-[scale-up_0.3s_ease-out_forwards] overflow-y-auto max-h-[90vh]">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-light-text/50 dark:text-dark-text/50 hover:text-primary z-20">
          <XMarkIcon className="h-8 w-8" />
        </button>

        <div className="relative h-64 w-full group mb-6">
          <div 
            style={{ backgroundImage: `url(${data.carouselImages[currentIndex]})` }} 
            className="w-full h-full rounded-xl bg-center bg-cover duration-500 shadow-lg"
          ></div>
          <div onClick={prevSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-3 p-2 bg-black/30 rounded-full cursor-pointer text-white"><ChevronLeftIcon className="h-6 w-6"/></div>
          <div onClick={nextSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-3 p-2 bg-black/30 rounded-full cursor-pointer text-white"><ChevronRightIcon className="h-6 w-6"/></div>
        </div>

        <h2 className="text-4xl font-bold text-primary mb-2">{data.title}</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 text-lg">
          {data.description}
        </p>

        <div className="bg-light-bg-secondary dark:bg-dark-bg p-6 rounded-2xl mb-8">
          <h3 className="text-2xl font-bold mb-4">Profil Pengajar</h3>
          <div className="flex items-center gap-4">
            <img src={data.instructor.imgSrc} alt={data.instructor.name} className="w-20 h-20 rounded-full object-cover"/>
            <div>
              <h4 className="font-bold text-xl">{data.instructor.name}</h4>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">{data.instructor.profile}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Apa Saja yang Dipelajari?</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {data.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckBadgeIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
        
        <a 
          href={data.syllabusLink} 
          download 
          className="mt-8 w-full bg-primary text-black font-bold py-4 px-6 rounded-full hover:bg-accent transition-colors duration-300 text-lg flex items-center justify-center gap-2 shadow-lg"
        >
          {/* Menggunakan nama ikon yang benar */}
          <ArrowDownTrayIcon className="h-6 w-6" /> Download Silabus Lengkap
        </a>

      </div>
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
@keyframes scale-up {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`;
document.head.appendChild(style);

export default DetailPenawaranModal;