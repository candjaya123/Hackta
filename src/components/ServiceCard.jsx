import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, imgUrl, slug }) => {
  return (
    <Link to={`/layanan/${slug}`} className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2 block">
      {/* Image with hover effect */}
      <img src={imgUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      
      {/* Overlay gradasi yang sekarang selalu terlihat di bagian bawah 
        untuk memastikan judul selalu terbaca.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
        
        {/* Konten teks */}
        <div className="transform transition-transform duration-500">
          {/* Judul yang selalu terlihat */}
          <h4 className="text-white text-2xl font-bold">{title}</h4>
          
          {/* Deskripsi yang hanya muncul saat hover */}
          <span className="text-white/80 text-lg italic block mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;