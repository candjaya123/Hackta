// src/components/layanan/PricingLayanan.jsx
import React from 'react';

const PricingCard = ({ plan, price, features, isFeatured = false }) => {
  const cardClasses = isFeatured 
    ? "bg-dark-bg dark:bg-dark-bg-secondary text-white transform scale-105 shadow-2xl" 
    : "bg-light-bg dark:bg-dark-bg-secondary shadow-lg";
  const buttonClasses = isFeatured
    ? "bg-primary text-black"
    : "bg-light-bg-secondary text-light-text dark:bg-dark-bg dark:text-dark-text"

  return(
    <div className={`p-8 rounded-3xl border border-light-text/10 dark:border-dark-text/10 ${cardClasses}`}>
      <h3 className="text-2xl font-bold">{plan}</h3>
      <p className={`text-4xl font-bold my-4 ${isFeatured ? 'text-primary' : 'text-light-text dark:text-dark-text'}`}>{price}</p>
      <ul className="space-y-3 my-6">
        {features.map((feature, index) => (
          <li key={index} className={`${isFeatured ? 'text-gray-300' : 'text-light-text-secondary dark:text-dark-text-secondary'}`}>{feature}</li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full font-bold text-lg transition-transform hover:scale-105 ${buttonClasses}`}>Pilih Paket</button>
    </div>
  );
}

const PricingLayanan = () => {
  // Anda bisa memasukkan data harga dari props nanti
  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Pilihan Paket & Harga</h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-12">Investasi terbaik untuk masa depan digital Anda.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          <PricingCard plan="Dasar" price="Rp 1jt" features={["4 Sesi/Bulan", "Konsultasi Dasar", "Akses Komunitas"]} />
          <PricingCard plan="Intensif" price="Rp 2.5jt" features={["12 Sesi/Bulan", "Konsultasi Proyek", "Akses Komunitas VIP", "Persiapan Lomba"]} isFeatured={true} />
          <PricingCard plan="Privat" price="Rp 4jt" features={["12 Sesi Privat", "Mentoring Personal", "Bebas Atur Jadwal"]} />
        </div>
      </div>
    </section>
  );
};

export default PricingLayanan;