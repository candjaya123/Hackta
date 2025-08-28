import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const VisionMission = () => {
  const missions = [
    "Mengajarkan teknologi dari level dasar hingga lanjut dengan metode praktik langsung.",
    "Membuka akses kursus yang relevan untuk anak SD, SMP-SMA, hingga mahasiswa.",
    "Menghadirkan pembelajaran dengan semangat riset, inovasi, dan kompetisi.",
    "Menumbuhkan rasa percaya diri bahwa anak bangsa bisa bersaing dalam teknologi."
  ];

  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-primary">Visi Kami</h3>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              Membangun generasi Indonesia yang kreatif, mandiri, dan siap bersaing di dunia teknologi global.
            </p>
          </div>
          {/* Misi */}
          <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-primary">Misi Kami</h3>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckBadgeIcon className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg text-light-text-secondary dark:text-dark-text-secondary">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;