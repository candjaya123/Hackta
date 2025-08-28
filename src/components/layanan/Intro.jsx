// src/components/layanan/Intro.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon } from '@heroicons/react/24/solid'; // Ikon untuk tombol YouTube

const Intro = ({ title, narrative, videoId, button1, button2, gradientClass }) => {
  return (
    // Menggunakan gradasi yang dikirim melalui props
    <section className={`py-24 text-center ${gradientClass}`}>
      <div className="container mx-auto px-6">
        {/* Judul dan Narasi */}
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-3xl mx-auto mb-12">
          {narrative}
        </p>

        {/* Kontainer Video Responsif */}
        <div className="relative max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' /* Aspect Ratio 16:9 */ }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Kontainer Tombol */}
        <div className="mt-12 flex justify-center items-center gap-4">
          {/* Tombol 1 (YouTube) */}
          <a 
            href={button1.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <PlayCircleIcon className="h-6 w-6" /> {button1.text}
          </a>

          {/* Tombol 2 (Tentang Kami) */}
          <Link 
            to={button2.link} 
            className="bg-primary text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {button2.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;