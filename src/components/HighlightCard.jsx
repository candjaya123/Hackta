import React from 'react';

const HighlightCard = ({ icon: Icon, title, description }) => {
  return (
    // 'group' untuk efek hover pada elemen anak
    // Latar belakang default adalah gradasi dari kuning pastel pudar ke warna latar utama.
    // Saat hover, gradasi putih/latar hilang, digantikan oleh warna pastel yang solid.
    <div className="group relative p-8 rounded-2xl shadow-lg 
                   bg-gradient-to-b from-amber-100/60 to-light-bg dark:from-yellow-900/20 dark:to-dark-bg-secondary
                   hover:bg-amber-100 dark:hover:bg-yellow-900/30
                   transition-all duration-300 transform hover:-translate-y-2 
                   border border-light-text/10 dark:border-dark-text/10">
      
      {/* Ikon dimulai dengan warna aksen (emas) dan berubah warna saat di-hover */}
      <div className="text-accent group-hover:text-light-text dark:group-hover:text-dark-text 
                   transition-colors duration-300 mb-4">
        <Icon className="h-16 w-16 mx-auto" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary text-base">{description}</p>
    </div>
  );
};

export default HighlightCard;