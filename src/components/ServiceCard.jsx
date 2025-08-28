import React from 'react';

const ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2">
      <img src={imgUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      
      {/* Overlay gradasi yang muncul saat hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-accent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 p-6 flex flex-col justify-end">
        
        {/* Konten teks yang muncul dari bawah */}
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-black text-2xl font-bold">{title}</h4>
          <span className="text-black text-lg italic">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;