import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceCard from '../../components/ServiceCard'; // Pastikan path ini benar

export const Services = () => {
  const [activeTab, setActiveTab] = useState("Mahasiswa");
  const tabs = ["Mahasiswa", "SMP-SMA", "SD"];

  const services = {
    "Mahasiswa": [
      { slug: "mahasiswa-ta", title: "Konsultasi Tugas Akhir / Skripsi", description: "Mendapatkan konsultasi untuk tugas akhir dan skripsi anda.", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mahasiswa+1" },
      { slug: "mahasiswa-ai", title: "Pelatihan AI", description: "Pelatihan Komputer Vision, LLM, NLP, dan Machine Learning.", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mahasiswa+2" },
    ],
    "SMP-SMA": [
      { slug: "sma-ai", title: "Pelatihan AI", description: "Membangun website dan aplikasi pertama.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1" },
      { slug: "sma-iot", title: "Pelatihan IoT", description: "Belajar coding melalui pembuatan game.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+2" },
      { slug: "sma-hacking", title: "Pelatihan Hacking", description: "Program khusus untuk kompetisi coding.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+3" },
      { slug: "sma-lf", title: "Kelas Robot Line Follower", description: "Program khusus untuk kompetisi coding.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+4" },
      { slug: "sma-arm", title: "Kelas Robot Lengan", description: "Program khusus untuk kompetisi coding.", imgUrl: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+5" },
    ],
    "SD": [
      { slug: "sd-coding", title: "Kelas Coding & Animasi", description: "Pengenalan coding yang menyenangkan.", imgUrl: "https://placehold.co/600x400/32CD32/FFFFFF?text=SD+1" },
      { slug: "sd-elektronika", title: "Kelas Pengenalan Elektronika", description: "Mengasah kemampuan berpikir logis.", imgUrl: "https://placehold.co/600x400/32CD32/FFFFFF?text=SD+2" },
      { slug: "sd-robot", title: "Kelas Robot Dasar", description: "Menciptakan karya digital pertama.", imgUrl: "https://placehold.co/600x400/32CD32/FFFFFF?text=SD+3" },
    ]
  };

  const currentServices = services[activeTab];

  // Konfigurasi untuk carousel di semua ukuran layar
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 } // Di bawah 768px, selalu 1 item
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
              {activeTab === tab && <span className="absolute inset-0 bg-primary rounded-full z-0"></span>}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* --- KONTEN TAB DENGAN LOGIKA BARU --- */}
        <div>
          {/* Untuk layar BESAR (lg), kita cek jumlah item */}
          <div className="hidden lg:block">
            {currentServices.length > 3 ? (
              // Jika lebih dari 3, gunakan Carousel
              <Carousel responsive={responsive} infinite={true} className="w-full pb-4" itemClass="px-2">
                {currentServices.map((service, index) => <ServiceCard key={index} {...service} />)}
              </Carousel>
            ) : (
              // Jika 3 atau kurang, gunakan Flexbox
              <div className="flex flex-wrap justify-center gap-8">
                {currentServices.map((service, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-[31%]">
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Untuk layar KECIL (mobile & tablet), SELALU gunakan Carousel jika item lebih dari 1 */}
          <div className="block lg:hidden">
            {currentServices.length > 1 ? (
              <Carousel responsive={responsive} infinite={true} showDots={true} className="w-full pb-8" itemClass="px-2">
                {currentServices.map((service, index) => <ServiceCard key={index} {...service} />)}
              </Carousel>
            ) : (
              // Jika hanya 1 item, tampilkan di tengah
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                   {currentServices.map((service, index) => <ServiceCard key={index} {...service} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;