// src/components/layanan/CtaLayanan.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CtaLayanan = ({ title, buttonText, linkTo = "/#connect" }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">{title}</h2>
        <Link to={linkTo} className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-light-bg-secondary transition-transform transform hover:scale-105 inline-block shadow-lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CtaLayanan;