// src/components/detail-layanan/FeatureList.jsx
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const FeatureList = ({ title, features }) => {
  return (
    <div className="bg-white dark:bg-dark-bg-secondary p-6 rounded-xl shadow-md h-full">
      <h3 className="text-2xl font-bold mb-5 text-light-text dark:text-dark-text">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-light-text-secondary dark:text-dark-text-secondary">
            <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;