import React from 'react';
// Impor Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Impor komponen Card
import GuaranteeCard from '../../components/GuaranteeCard';

// Menambahkan lebih banyak data untuk menunjukkan fungsi carousel
const guaranteesData = [
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Kurikulum",
    title: "Kurikulum Standar Industri",
    subtitle: "Materi relevan dengan kebutuhan perusahaan teknologi terkemuka."
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Mentor",
    title: "Mentor Profesional",
    subtitle: "Belajar langsung dari para praktisi aktif di bidangnya."
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Portofolio",
    title: "Portofolio Nyata",
    subtitle: "Lulus dengan hasil karya proyek yang siap dipamerkan."
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Komunitas",
    title: "Komunitas Solid",
    subtitle: "Terhubung dengan jaringan alumni dan sesama siswa yang suportif."
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Karir",
    title: "Dukungan Karir",
    subtitle: "Bantuan persiapan CV, wawancara, dan koneksi ke perusahaan."
  }
];

export const Guarantees = () => {
  // Konfigurasi untuk membuat carousel responsif
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // Opsional, untuk slide beberapa item sekaligus
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg" id="guarantees">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-light-text dark:text-dark-text">
          Jaminan Kualitas <span className="text-primary">Hackta</span>
        </h2>
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
          Pilar utama yang memastikan setiap siswa kami mendapatkan pengalaman belajar terbaik dan siap berkarir.
        </p>

        {/* Implementasi Carousel */}
        <Carousel
          responsive={responsive}
          infinite={true}
          className="w-full"
          itemClass="px-4" // Memberi sedikit jarak antar item
        >
          {guaranteesData.map((guarantee, index) => (
            <GuaranteeCard 
              key={index} 
              imgSrc={guarantee.imgSrc}
              title={guarantee.title}
              subtitle={guarantee.subtitle}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Guarantees;