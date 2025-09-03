// src/components/detail-layanan/CurriculumSection.jsx
import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';

const CurriculumSection = ({ curriculumModules }) => {
  return (
    <div className="py-12 bg-light-bg dark:bg-dark-bg-secondary rounded-xl shadow-inner">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary">Modul Pembelajaran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumModules.map((module, index) => (
            <div key={index} className="bg-white dark:bg-dark-bg-third p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <BookOpenIcon className="h-8 w-8 text-accent flex-shrink-0" />
                <h4 className="text-xl font-bold text-light-text dark:text-dark-text">{module.title}</h4>
              </div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;