// src/components/layanan/FaqLayanan.jsx
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="border-b border-light-text/10 dark:border-dark-text/10 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronDownIcon className={`h-6 w-6 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      {isOpen && (
        <p className="pt-4 text-light-text-secondary dark:text-dark-text-secondary">
          {answer}
        </p>
      )}
    </div>
  );
}

const FaqLayanan = () => {
  const faqData = [
    { q: "Apakah harus punya laptop sendiri?", a: "Sangat disarankan untuk membawa laptop sendiri agar bisa berlatih di rumah. Namun, kami juga menyediakan unit komputer di lab." },
    { q: "Bagaimana sistem pembayarannya?", a: "Pembayaran bisa dilakukan per bulan atau langsung per paket (3 bulan) untuk mendapatkan diskon khusus." },
    { q: "Apakah ada kelas percobaan?", a: "Tentu! Anda bisa mengikuti satu sesi kelas percobaan gratis untuk merasakan langsung pengalaman belajar di Hackta." },
  ];
  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => <FaqItem key={index} question={item.q} answer={item.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FaqLayanan;