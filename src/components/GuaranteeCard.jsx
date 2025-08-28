import React from 'react';

const GuaranteeCard = ({ imgSrc, title, subtitle }) => {
  return (
    <div className="group text-center transition-all duration-300 transform hover:-translate-y-2">
      {/* Gambar dengan bayangan dan border saat hover */}
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-primary/30 border-4 border-transparent group-hover:border-primary/50 transition-all duration-300"
      />
      
      {/* Judul */}
      <h3 className="text-2xl font-bold mt-6 mb-2 text-light-text dark:text-dark-text">
        {title}
      </h3>
      
      {/* Subjudul */}
      <p className="text-light-text-secondary dark:text-dark-text-secondary text-base max-w-xs mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default GuaranteeCard;