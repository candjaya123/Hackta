import { useState } from 'react';
// Impor komponen Card yang baru
import ServiceCard from '../../components/ServiceCard'; 

export const Services = () => {
  const [activeTab, setActiveTab] = useState("Mahasiswa");

  // Daftar tab baru
  const tabs = ["Mahasiswa", "SMP-SMA", "SD"];

  // Data layanan untuk setiap tab
  const services = {
    "Mahasiswa": [
      { title: "Spesialisasi Karir", description: "Persiapan intensif untuk dunia kerja.", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mahasiswa+1" },
      { title: "Advanced Development", description: "Mendalami algoritma & data science.", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mahasiswa+2" },
      { title: "Sertifikasi Internasional", description: "Siap bersaing di panggung global.", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mahasiswa+3" },
    ],
    "SMP-SMA": [
      { title: "Web & Aplikasi Dasar", description: "Membangun website dan aplikasi pertama.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1" },
      { title: "Dasar Logika & Game", description: "Belajar coding melalui pembuatan game.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+2" },
      { title: "Persiapan Olimpiade", description: "Program khusus untuk kompetisi coding.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+3" },
    ],
    "SD": [
      { title: "Coding Awal & Animasi", description: "Pengenalan coding yang menyenangkan.", imgUrl: "https://placehold.co/600x400/32CD32/FFFFFF?text=SD+1" },
      { title: "Logika Sederhana", description: "Mengasah kemampuan berpikir logis.", imgUrl: "https://placehold.co/600x400/32CD32/FFFFFF?text=SD+2" },
      { title: "Kreativitas Digital", description: "Menciptakan karya digital pertama.", imgUrl: "https://placehold.co/600x400/32CD32/FFFFFF?text=SD+3" },
    ]
  };

  return (
    <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Layanan Kami</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg mb-12 max-w-2xl mx-auto">
          Program belajar yang dirancang khusus untuk setiap jenjang pendidikan.
        </p>
        
        {/* Navigasi Tab */}
        <div className="w-full max-w-2xl mx-auto flex justify-center mb-8 bg-light-bg dark:bg-dark-bg-secondary p-2 rounded-full shadow-md">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-2.5 text-lg font-semibold rounded-full transition-colors relative ${activeTab === tab ? 'text-black' : 'text-light-text dark:text-dark-text'}`}
            >
              {/* Efek latar belakang yang bergerak */}
              {activeTab === tab && <span className="absolute inset-0 bg-primary rounded-full z-0"></span>}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Konten Tab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeTab].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;