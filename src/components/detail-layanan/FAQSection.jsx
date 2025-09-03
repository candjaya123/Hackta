// src/components/detail-layanan/FAQSection.jsx
import React, { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-light-text/10 dark:border-dark-text/10 pb-4 mb-4 last:border-b-0 last:mb-0">
      <button
        className="flex justify-between items-center w-full text-left py-3 text-light-text dark:text-dark-text"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDownIcon className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-light-text-secondary dark:text-dark-text-secondary'}`} />
      </button>
      {isOpen && (
        <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary pr-8">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = ({ faqs }) => {
  return (
    <div className="py-12 bg-light-bg-secondary dark:bg-dark-bg rounded-xl shadow-md">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-light-text dark:text-dark-text">Pertanyaan Umum (FAQ)</h2>
        <div className="max-w-3xl mx-auto text-left">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;