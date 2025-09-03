import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // Impor Link untuk navigasi

// Sub-komponen untuk satu kartu kurikulum
const KurikulumCard = ({ title, points, imgSrc, slug }) => (
  <div className="bg-light-bg dark:bg-dark-bg-secondary p-6 rounded-2xl shadow-lg h-full border border-light-text/10 dark:border-dark-text/10 mx-2 flex flex-col transform hover:scale-105 transition-transform duration-300">
    <img src={imgSrc} alt={title} className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"/>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
      <ul className="space-y-3 text-left">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-light-text-secondary dark:text-dark-text-secondary">{point}</span>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Tombol ini sekarang menjadi Link yang mengarah ke halaman detail */}
    <Link 
      to={`/layanan/${slug}`}
      className="mt-6 w-full bg-primary/20 dark:bg-primary/10 text-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
    >
      Lihat Detail Penawaran <ArrowRightIcon className="h-5 w-5" />
    </Link>
  </div>
);

// Komponen template utama (tanpa logika modal)
const Kurikulum = ({ title, description, kurikulumData, gradientClass }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
  };

  return (
    <section className={`py-24 ${gradientClass}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        
        <Carousel
          responsive={responsive}
          infinite={true}
          className="w-full pb-4"
          itemClass="h-full"
        >
          {kurikulumData.map((item, index) => (
            <KurikulumCard key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Kurikulum;