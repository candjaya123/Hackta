import React from 'react';
// Impor Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Impor GuaranteeCard yang sudah ada
import GuaranteeCard from '../../components/GuaranteeCard';

// Menambahkan lebih banyak data untuk menunjukkan fungsi carousel
const teamMembers = [
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Andi",
    title: "Andi",
    subtitle: "Spesialis Robotik & IoT"
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Sinta",
    title: "Sinta",
    subtitle: "Pakar Coding & AI Dasar"
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Rudi",
    title: "Rudi",
    subtitle: "Ahli Desain PCB & Prototyping"
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Dewi",
    title: "Dewi",
    subtitle: "Mentor Web Development"
  },
  {
    imgSrc: "https://placehold.co/300x300/fdb827/000000?text=Bima",
    title: "Bima",
    subtitle: "Instruktur Data Science"
  }
];

const TeamSection = () => {
  // Konfigurasi untuk membuat carousel responsif
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <section className="py-24 bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Tim Pengajar</h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-12">
          Kami bukan hanya pengajar, tapi juga teman belajar. Sebagai mahasiswa yang sering turun langsung di laboratorium, riset, dan lomba, kami tahu rasanya belajar dari nol.
        </p>
        
        {/* Mengganti grid dengan Carousel */}
        <Carousel
          responsive={responsive}
          infinite={true}
          className="w-full"
          itemClass="px-4" // Memberi sedikit jarak antar item
        >
          {teamMembers.map((member, index) => (
            <GuaranteeCard
              key={index}
              imgSrc={member.imgSrc}
              title={member.title}
              subtitle={member.subtitle}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;