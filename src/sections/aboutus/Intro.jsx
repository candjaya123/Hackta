import { useState, useEffect } from "react";
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS carousel

// --- Impor Gambar untuk Carousel ---
// Pastikan Anda memiliki gambar-gambar ini di folder yang sesuai
// Misalnya: src/assets/homepage/banner-bg-1.jpg, banner-bg-2.jpg, dst.
import bgImg1 from "../../assets/img/footer-bg.png";
import bgImg2 from "../../assets/img/footer-bg.png";
import bgImg3 from "../../assets/img/footer-bg.png";

export const IntroSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const toRotate = ["Web Developer", "Data Scientist", "IoT Engineer", "AI Specialist", "Game Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text, delta]) // Tambahkan delta ke dependency array

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300); // Kecepatan ketik ulang setelah selesai menghapus
    }
  }

  // --- Data untuk setiap slide Carousel ---
  const carouselSlides = [
    {
      bgImg: bgImg1,
      tagline: "Kondisi Mendesak: Era Digital",
      title: (
        <>
          Indonesia Terancam Tertinggal, <br className="hidden md:block"/>
          Jika Bukan Sekarang, Kapan Lagi?
        </>
      ),
      description: "Data menunjukkan kesenjangan talenta teknologi kita semakin lebar. Jangan biarkan Indonesia hanya jadi pasar, saatnya menjadi pencipta!",
      ctaText: "Lihat Program Kami",
      ctaLink: "#services"
    },
    {
      bgImg: bgImg2,
      tagline: "Visi Kami: Generasi Pembaharu",
      title: (
        <>
          Mencetak <span className="text-primary whitespace-nowrap">{text}</span> <br className="hidden md:block"/>
          yang Siap Membangun Indonesia
        </>
      ),
      description: "Hackta hadir sebagai jembatan. Kami membekali Anda dengan kurikulum mutakhir dan keahlian praktis yang dibutuhkan industri.",
      ctaText: "Pelajari Lebih Lanjut",
      ctaLink: "#about"
    },
    {
      bgImg: bgImg3,
      tagline: "Aksi Nyata: Transformasi Digital",
      title: (
        <>
          Dari Nol Hingga Mahir, <br className="hidden md:block"/>
          Bersama Hackta Wujudkan Potensi Teknologi Anda
        </>
      ),
      description: "Bergabunglah dengan komunitas pembelajar kami. Mulai perjalanan Anda dari dasar hingga menguasai teknologi paling relevan.",
      ctaText: "Daftar Sekarang",
      ctaLink: "#contact"
    },
  ];

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000} // Ganti slide setiap 6 detik
        transitionTime={1000} // Durasi transisi 1 detik
        stopOnHover={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="inline-block mx-1 w-6 h-1.5 bg-primary rounded-full cursor-pointer transition-all duration-300"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="inline-block mx-1 w-2.5 h-1.5 bg-white/50 rounded-full cursor-pointer transition-all duration-300 hover:bg-white"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
        className="h-full"
      >
        {carouselSlides.map((slide, index) => (
          <div key={index} className="relative h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <img 
              src={slide.bgImg} 
              alt={`Banner ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover brightness-[.4] animate-zoom-in" // Tambahkan efek zoom
            />
            {/* Overlay untuk teks agar lebih terbaca */}
            <div className="absolute inset-0 bg-black/50"></div> 

            {/* Konten Teks */}
            <div className="relative z-10 container mx-auto px-6 text-center">
              <span className="font-bold text-lg tracking-wider bg-primary/10 text-primary px-4 py-2 rounded-full inline-block animate-fade-in-up">
                {slide.tagline}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold my-6 leading-tight text-white animate-fade-in-up delay-100">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90 animate-fade-in-up delay-200">
                {slide.description}
              </p>
              <a href={slide.ctaLink} className="inline-flex items-center gap-2 bg-primary text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-300">
                {slide.ctaText} <ArrowRightCircleIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Tailwind Keyframes for animations */}
      <style>{`
        @keyframes zoom-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-zoom-in {
          animation: zoom-in 6s ease-in-out infinite alternate;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-up.delay-100 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default IntroSection;