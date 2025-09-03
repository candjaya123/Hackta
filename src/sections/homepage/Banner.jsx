import { useState, useEffect } from "react";
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

// --- INI BARIS YANG PERLU DIUBAH ---
// Impor gambar dari lokasi lokal di folder src/assets/img
import headerImg from "../../assets/img/contact-img.svg"; 
// Jika Anda ingin gambar background contact section juga dari lokal:
// import contactImg from "../assets/img/contact-image.png"; 
// Dan seterusnya untuk gambar-gambar lainnya

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const toRotate = [ "SD", "SMP", "SMA", "Mahasiswa" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text])

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
      setDelta(300);
    }
  }

  return (
    <section 
      className="pt-48 pb-24 text-center md:text-left bg-gradient-to-b from-yellow-100 to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg" 
      id="home"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Kolom Konten Teks */}
          <div>
            <span className="font-bold text-lg tracking-wider bg-primary/10 text-primary px-4 py-2 rounded-full inline-block">
              Selamat Datang di Hackta
            </span>
            <h1 className="text-5xl md:text-6xl font-bold my-4 leading-tight text-light-text dark:text-dark-text">
              Kursus Teknologi Untuk{' '}
              <span className="text-primary border-b-4 border-primary whitespace-nowrap">{text}</span>
              <span className="animate-ping text-primary">|</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light-text/70 dark:text-dark-text/70">
              Saatnya ciptakan Indonesia yang kreatif, mandiri, dan siap bersaing di dunia teknologi.
            </p>
            <a href="#connect" className="inline-flex items-center gap-2 bg-primary text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
              Hubungi Kami <ArrowRightCircleIcon className="h-6 w-6" />
            </a>
          </div>

          {/* Kolom Gambar */}
          <div className="animate-updown">
            <img src={headerImg} alt="Header" className="rounded-2xl shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;