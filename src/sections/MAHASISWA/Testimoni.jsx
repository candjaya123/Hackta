import React, { useState } from 'react';
import PropTypes from 'prop-types';

const mahasiswaTestimonials = [
  {
    name: 'Rina',
    title: 'Mahasiswa Teknik Informatika',
    quote: 'Hackta membantu saya membangun aplikasi web untuk tugas akhir. Mentornya sangat mendukung!',
    imgSrc: 'https://placehold.co/100x100/BA55D3/000000?text=R',
  },
  {
    name: 'Pak Hasan',
    title: 'Dosen Teknologi',
    quote: 'Kurikulum Hackta relevan dengan kebutuhan industri. Mahasiswa saya jadi lebih siap untuk magang.',
    imgSrc: 'https://placehold.co/100x100/BA55D3/000000?text=H',
  },
  {
    name: 'Budi',
    title: 'Mahasiswa Semester 5',
    quote: 'Belajar AI di Hackta seru! Saya berhasil bikin model prediktif untuk proyek kampus.',
    imgSrc: 'https://placehold.co/100x100/BA55D3/000000?text=B',
  },
  {
    name: 'Ibu Sari',
    title: 'Orang Tua Mahasiswa',
    quote: 'Hackta memberikan anak saya kepercayaan diri untuk mengejar karir di teknologi. Proyeknya luar biasa!',
    imgSrc: 'https://placehold.co/100x100/BA55D3/000000?text=S',
  },
  {
    name: 'Adi',
    title: 'Mahasiswa Teknik Elektro',
    quote: 'Program ini membantu saya memahami IoT untuk proyek penelitian. Mentornya sangat berpengalaman.',
    imgSrc: 'https://placehold.co/100x100/BA55D3/000000?text=A',
  },
  {
    name: 'Lia',
    title: 'Mahasiswa Semester 7',
    quote: 'Saya berhasil membuat portofolio profesional di Hackta. Ini sangat membantu untuk melamar magang!',
    imgSrc: 'https://placehold.co/100x100/BA55D3/000000?text=L',
  },
];

const TestimoniCard = ({ quote, name, title, imgSrc }) => (
  <div
    className="relative bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    role="article"
    aria-labelledby={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}
    tabIndex={0}
  >
    <img
      src={imgSrc}
      alt={name}
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto -mt-16 sm:-mt-20 mb-4 border-4 border-light-bg-secondary dark:border-dark-bg-secondary object-cover"
    />
    <p className="italic text-sm sm:text-base text-light-text-secondary dark:text-dark-text-secondary mb-4">"{quote}"</p>
    <h4
      id={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="font-bold text-base sm:text-lg text-light-text dark:text-dark-text"
    >
      {name}
    </h4>
    <p className="text-primary text-sm sm:text-base">{title}</p>
  </div>
);

TestimoniCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

const Testimoni = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? mahasiswaTestimonials : mahasiswaTestimonials.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-purple-100/60 to-white dark:from-purple-900/20 dark:to-dark-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">
          Apa Kata Mereka tentang Program Mahasiswa?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start justify-center">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimoniCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </div>
        {mahasiswaTestimonials.length > 3 && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={toggleShowAll}
              className="bg-primary text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base"
              aria-label={showAll ? 'Sembunyikan testimonial tambahan' : 'Lihat testimonial lainnya'}
            >
              {showAll ? 'Sembunyikan' : 'Lihat Lainnya'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Inject animation styles
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .grid > div {
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: calc(0.1s * var(--index));
  }
`;
document.head.appendChild(style);

export default Testimoni;