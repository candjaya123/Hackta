import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

// Data for SD pricing plans
const sdPricingPlans = [
  {
    plan: 'SD Dasar',
    price: 'Rp 800rb',
    features: ['4 Sesi/Bulan', 'Materi Block-Based Coding', 'Akses Komunitas Anak'],
    isFeatured: false,
  },
  {
    plan: 'SD Intensif',
    price: 'Rp 2jt',
    features: ['12 Sesi/Bulan', 'Proyek Kreatif', 'Akses Komunitas VIP', 'Sertifikat Kemajuan'],
    isFeatured: true,
  },
  {
    plan: 'SD Privat',
    price: 'Rp 3.5jt',
    features: ['12 Sesi Privat', 'Mentoring 1-on-1', 'Jadwal Fleksibel'],
    isFeatured: false,
  },
];

const PricingCard = ({ plan, price, features, isFeatured }) => {
  const cardClasses = `p-8 rounded-3xl border border-light-text/10 dark:border-dark-text/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
    isFeatured
      ? 'bg-gradient-to-br from-blue-200/20 to-blue-300/40 dark:from-blue-800/30 dark:to-blue-900/50 text-white scale-105 shadow-2xl'
      : 'bg-light-bg dark:bg-dark-bg-secondary shadow-lg'
  }`;

  const buttonClasses = `w-full py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
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
      <h3 id={`pricing-${plan.toLowerCase().replace(/\s+/g, '-')}`} className="text-2xl font-bold text-center">
        {plan}
      </h3>
      <p
        className={`text-4xl font-bold my-4 text-center ${
          isFeatured ? 'text-accent' : 'text-light-text dark:text-dark-text'
        }`}
      >
        {price}
      </p>
      <ul className="space-y-4 my-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 ${
              isFeatured
                ? 'text-gray-200'
                : 'text-light-text-secondary dark:text-dark-text-secondary'
            }`}
          >
            <CheckCircleIcon
              className={`h-6 w-6 flex-shrink-0 ${
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
    <section className="py-24 bg-blue-100/60 dark:bg-blue-900/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Pilihan Paket & Harga untuk SD</h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto">
          Investasi terbaik untuk memperkenalkan anak-anak SD pada dunia coding dan teknologi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start justify-center">
          {sdPricingPlans.map((plan, index) => (
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
      transform: translateY(20px);
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