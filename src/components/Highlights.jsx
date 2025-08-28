import React from 'react';
import { AcademicCapIcon, RocketLaunchIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/outline';

const HighlightCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg-secondary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-text/10 dark:border-dark-text/10">
      <div className="text-primary mb-4">
        <Icon className="h-16 w-16 mx-auto" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary text-base">{description}</p>
    </div>
  );
};

export const Highlights = () => {
  const highlightsData = [
    {
      icon: AcademicCapIcon,
      title: "Kurikulum Terkini",
      description: "Materi belajar yang selalu diperbarui sesuai standar industri dan tren teknologi terbaru."
    },
    {
      icon: RocketLaunchIcon,
      title: "Proyek Nyata",
      description: "Bangun portofolio kuat dengan proyek-proyek yang relevan dengan dunia industri dan startup."
    },
    {
      icon: GlobeAltIcon,
      title: "Akses Global",
      description: "Terhubung dengan komunitas developer global dan raih peluang karir internasional."
    },
    {
      icon: UsersIcon,
      title: "Mentor Berpengalaman",
      description: "Belajar langsung dari praktisi industri yang ahli di bidangnya masing-masing."
    }
  ];

  return (
    <section className="py-24 bg-light-bg-secondary dark:bg-dark-bg-secondary" id="highlights">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-light-text dark:text-dark-text">
          Mengapa Memilih <span className="text-primary">Hackta</span>?
        </h2>
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
          Kami berkomitmen memberikan pendidikan coding terbaik yang relevan dengan kebutuhan masa depan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightsData.map((highlight, index) => (
            <HighlightCard key={index} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;