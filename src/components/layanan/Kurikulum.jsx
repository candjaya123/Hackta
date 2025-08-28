// src/components/layanan/Kurikulum.jsx
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import DetailPenawaranModal from './DetailPenawaranModal';

// Sub-komponen untuk satu kartu kurikulum
const KurikulumCard = ({ title, points, imgSrc, onButtonClick }) => (
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
    
    <button 
      onClick={onButtonClick} 
      className="mt-6 w-full bg-primary/20 dark:bg-primary/10 text-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
    >
      Lihat Detail Penawaran <ArrowRightIcon className="h-5 w-5" />
    </button>
  </div>
);

// Komponen template utama
const Kurikulum = ({ title, description, kurikulumData, gradientClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Fungsi untuk membuka modal dengan data dari kartu yang diklik
  const handleOpenModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  const responsive = {
    desktop: { 
      breakpoint: { max: 3000, min: 1024 }, 
      items: Math.min(kurikulumData.length, 3), // Dynamically set items based on data length
      partialVisibilityGutter: 40 
    },
    tablet: { 
      breakpoint: { max: 1024, min: 768 }, 
      items: Math.min(kurikulumData.length, 2), 
      partialVisibilityGutter: 30 
    },
    mobile: { 
      breakpoint: { max: 768, min: 0 }, 
      items: 1, 
      partialVisibilityGutter: 20 
    }
  };

  return (
    <>
      <section className={`py-24 ${gradientClass}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto">
            {description}
          </p>
          
          <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true} // Enable center mode
            containerClass="carousel-container" // Add custom class for styling
            itemClass="carousel-item h-full"
          >
            {kurikulumData.map((item, index) => (
              <KurikulumCard 
                key={index} 
                {...item}
                onButtonClick={() => handleOpenModal(item)}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Render komponen Modal di sini */}
      <DetailPenawaranModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedData} 
      />
    </>
  );
};

// Inject custom CSS for centering
const style = document.createElement('style');
style.innerHTML = `
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px; /* Adjust padding as needed */
  }
`;
document.head.appendChild(style);

export default Kurikulum;