// src/components/detail-layanan/PriceCard.jsx
import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const PriceCard = ({ price, buttonText = "Daftar Sekarang", ctaLink = "#contact" }) => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-xl shadow-xl text-center flex flex-col items-center justify-center h-full">
      <h3 className="text-4xl font-extrabold text-black mb-4">{price}</h3>
      <p className="text-black/80 mb-6 text-lg">Per bulan atau per paket, sesuai pilihan Anda.</p>
      <a 
        href={ctaLink} 
        className="inline-flex items-center gap-2 bg-black text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
      >
        <ShoppingBagIcon className="h-6 w-6" /> {buttonText}
      </a>
    </div>
  );
};

export default PriceCard;