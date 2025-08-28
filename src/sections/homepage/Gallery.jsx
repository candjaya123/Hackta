import React from 'react';

// Data untuk gambar galeri
const galleryImages = [
  { src: "https://placehold.co/600x400/fdb827/000000?text=Kelas+Coding", alt: "Suasana kelas coding" },
  { src: "https://placehold.co/400x600/fdb827/000000?text=Workshop", alt: "Peserta workshop" },
  { src: "https://placehold.co/600x400/fdb827/000000?text=Kompetisi", alt: "Pemenang kompetisi" },
  { src: "https://placehold.co/600x400/fdb827/000000?text=Diskusi+Kelompok", alt: "Diskusi kelompok" },
  { src: "https://placehold.co/400x600/fdb827/000000?text=Presentasi", alt: "Presentasi proyek siswa" },
  { src: "https://placehold.co/600x400/fdb827/000000?text=Mentor+%26+Siswa", alt: "Mentor membantu siswa" },
];

const GalleryImage = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg group transform hover:-translate-y-2 transition-all duration-300">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

export const Gallery = () => {
  return (
    // Latar belakang gradasi dari atas putih ke bawah kuning pastel
    <section className="py-24 bg-gradient-to-b from-light-bg to-yellow-100/60 dark:from-dark-bg dark:to-yellow-900/20" id="gallery">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-light-text dark:text-dark-text">
          Galeri Kegiatan <span className="text-primary">Hackta</span>
        </h2>
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
          Momen-momen seru dan inspiratif dari berbagai kegiatan belajar dan kompetisi kami.
        </p>

        {/* Tata Letak Galeri yang Responsif */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <GalleryImage src={galleryImages[0].src} alt={galleryImages[0].alt} />
            <GalleryImage src={galleryImages[1].src} alt={galleryImages[1].alt} />
          </div>
          <div className="grid gap-4">
            <GalleryImage src={galleryImages[2].src} alt={galleryImages[2].alt} />
            <GalleryImage src={galleryImages[3].src} alt={galleryImages[3].alt} />
          </div>
          <div className="grid gap-4">
            <GalleryImage src={galleryImages[4].src} alt={galleryImages[4].alt} />
            <GalleryImage src={galleryImages[5].src} alt={galleryImages[5].alt} />
          </div>
          <div className="grid gap-4">
            <GalleryImage src={galleryImages[0].src} alt={galleryImages[0].alt} />
            <GalleryImage src={galleryImages[1].src} alt={galleryImages[1].alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;