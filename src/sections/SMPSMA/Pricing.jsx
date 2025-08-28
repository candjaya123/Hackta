import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const smpSmaPricingPlans = [
  {
    plan: 'SMP/SMA Dasar',
    price: 'Rp 1.2jt',
    features: [
      '6 Sesi/Bulan',
      'Materi Web atau Robotika Dasar',
      'Akses Komunitas Siswa',
      'Laporan Kemajuan',
    ],
    isFeatured: false,
  },
  {
    plan: 'SMP/SMA Pro',
    price: 'Rp 3jt',
    features: [
      '12 Sesi/Bulan',
      'Proyek Portofolio',
      'Akses Komunitas VIP',
      'Persiapan Hackathon',
      'Sertifikat Kompetensi',
    ],
    isFeatured: true,
  },
  {
    plan: 'SMP/SMA Privat',
    price: 'Rp 5jt',
    features: [
      '12 Sesi Privat/Bulan',
      'Mentoring Personal',
      'Jadwal Fleksibel',
      'Proyek Khusus',
    ],
    isFeatured: false,
  },
];

const PricingCard = ({ plan, price, features, isFeatured }) => {
  const cardClasses = `relative p-6 sm:p-8 rounded-3xl border border-light-text/10 dark:border-dark-text/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
    isFeatured
      ? 'bg-gradient-to-br from-green-200/20 to-green-300/40 dark:from-green-800/30 dark:to-green-900/50 text-white scale-[1.03] shadow-lg'
      : 'bg-light-bg dark:bg-dark-bg-secondary shadow-md'
  }`;

  const buttonClasses = `w-full py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
    isFeatured
      ? 'bg-primary text-black hover:bg-accent'
      : 'bg-light-bg-secondary text-light-text dark:bg-dark-bg dark:text-dark-text hover:bg-primary hover:text-black'
  }`;

  return (
    <div
      className={cardClasses}
      role="region"
      aria-labelledby={`pricing-${plan.toLowerCase().replace(/\s+/g, '-')}`}
      tabIndex={0}
    >
      {isFeatured && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-black text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-sm">
          Rekomendasi
        </span>
      )}
      <h3 id={`pricing-${plan.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl sm:text-2xl font-bold text-center mb-3">
        {plan}
      </h3>
      <p
        className={`text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 ${
          isFeatured ? 'text-accent' : 'text-light-text dark:text-dark-text'
        }`}
      >
        {price}
        <span className="text-base sm:text-lg font-normal">/bulan</span>
      </p>
      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              isFeatured
                ? 'text-gray-100'
                : 'text-light-text-secondary dark:text-dark-text-secondary'
            }`}
          >
            <CheckCircleIcon
              className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${
                isFeatured ? 'text-accent' : 'text-green-500'
              }`}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={buttonClasses}
        aria-label={`Pilih paket ${plan}`}
      >
        Pilih Paket
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFeatured: PropTypes.bool,
};

const Pricing = () => {
  return (
    <section className="py-16 sm:py-24 bg-green-100/60 dark:bg-green-900/20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
          Pilihan Paket & Harga untuk SMP/SMA
        </h2>
        <p className="text-base sm:text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 sm:mb-12 max-w-3xl mx-auto">
          Investasi untuk masa depan siswa SMP dan SMA dalam dunia teknologi dan inovasi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start justify-center">
          {smpSmaPricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>
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

export default Pricing;