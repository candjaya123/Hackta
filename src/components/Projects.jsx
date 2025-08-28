import { useState } from 'react';

const projects = [
    { title: "Aplikasi E-Commerce", description: "Web Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=E-Commerce", category: "Web & Mobile" },
    { title: "Desain Aplikasi Mobile", description: "UI/UX Design", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mobile+App", category: "UI/UX Design" },
    { title: "Website Sekolah", description: "Web Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Web+Sekolah", category: "Web & Mobile" },
    { title: "Game Edukasi", description: "Game Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Game+Edukasi", category: "Data & Game" },
];

const ProjectCard = ({ title, description, imgUrl }) => (
  <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
    <img src={imgUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary via-accent to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-500 p-4 flex flex-col justify-end">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-black text-2xl font-bold">{title}</h4>
        <span className="text-black text-lg italic">{description}</span>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("Web & Mobile");
  const tabs = ["Web & Mobile", "UI/UX Design", "Data & Game"];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Portofolio Proyek Siswa</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg mb-12 max-w-2xl mx-auto">Lihat apa yang telah dibangun oleh para siswa kami.</p>
        
        <div className="w-full max-w-2xl mx-auto flex justify-center mb-8 bg-light-bg-secondary dark:bg-dark-bg-secondary p-2 rounded-full">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-2.5 text-lg font-semibold rounded-full transition-colors relative ${activeTab === tab ? 'text-black' : 'text-light-text dark:text-dark-text'}`}
            >
              {activeTab === tab && <span className="absolute inset-0 bg-primary rounded-full z-0"></span>}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => p.category === activeTab).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;