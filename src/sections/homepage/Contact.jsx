import { useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Tambahkan ikon kontak

const contactImg = "https://placehold.co/600x500/1A1A1A/fdb827?text=Hubungi+Kami"; // Gambar ini bisa Anda ganti dengan gambar lokal jika diinginkan

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [buttonText, setButtonText] = useState('Kirim Pesan');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Mengirim...");
    // Simulasi pengiriman data
    setTimeout(() => {
      setButtonText("Kirim Pesan");
      setFormDetails({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setStatus({ success: true, message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' });
      // Reset status setelah beberapa detik
      setTimeout(() => setStatus({}), 5000); 
    }, 2000);
  };

  return (
    // Background gradasi yang lembut dan konsisten dengan banner
    <section className="py-24 bg-gradient-to-b from-yellow-100/60 to-light-bg dark:from-dark-bg dark:to-dark-bg-secondary" id="connect">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-light-text dark:text-dark-text">
          Hubungi Kami
        </h2>
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-center text-light-text-secondary dark:text-dark-text-secondary">
          Ada pertanyaan atau ingin tahu lebih banyak? Jangan ragu untuk menghubungi tim Hackta.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-light-bg/70 dark:bg-dark-bg-secondary/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-light-text/10 dark:border-dark-text/10">
          {/* Kolom Kiri: Informasi Kontak & Gambar */}
          <div>
            <img 
              src={contactImg} 
              alt="Contact Us" 
              className="rounded-2xl shadow-xl mb-8 md:mb-0" // Margin bawah untuk mobile
            />
            <div className="mt-8 space-y-4 text-light-text dark:text-dark-text">
                <div className="flex items-center gap-4">
                    <MapPinIcon className="h-8 w-8 text-primary" />
                    <p className="text-lg">Jl. Raya Darmo Permai III No.123, Surabaya, Jawa Timur</p>
                </div>
                <div className="flex items-center gap-4">
                    <PhoneIcon className="h-8 w-8 text-primary" />
                    <p className="text-lg">+62 812-3456-7890</p>
                </div>
                <div className="flex items-center gap-4">
                    <EnvelopeIcon className="h-8 w-8 text-primary" />
                    <p className="text-lg">info@hackta.com</p>
                </div>
            </div>
          </div>
          
          {/* Kolom Kanan: Formulir Kontak */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Nama Depan" 
                  value={formDetails.firstName} 
                  onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                  className="w-full bg-light-bg-secondary dark:bg-dark-bg p-3 rounded-xl border border-light-text/20 dark:border-dark-text/20 focus:ring-2 focus:ring-primary focus:outline-none text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary" 
                />
                <input 
                  type="text" 
                  placeholder="Nama Belakang" 
                  value={formDetails.lastName} 
                  onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                  className="w-full bg-light-bg-secondary dark:bg-dark-bg p-3 rounded-xl border border-light-text/20 dark:border-dark-text/20 focus:ring-2 focus:ring-primary focus:outline-none text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary" 
                />
                <input 
                  type="email" 
                  placeholder="Alamat Email" 
                  value={formDetails.email} 
                  onChange={(e) => onFormUpdate('email', e.target.value)} 
                  className="w-full bg-light-bg-secondary dark:bg-dark-bg p-3 rounded-xl border border-light-text/20 dark:border-dark-text/20 focus:ring-2 focus:ring-primary focus:outline-none text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary" 
                />
                <input 
                  type="tel" 
                  placeholder="No. Telepon" 
                  value={formDetails.phone} 
                  onChange={(e) => onFormUpdate('phone', e.target.value)} 
                  className="w-full bg-light-bg-secondary dark:bg-dark-bg p-3 rounded-xl border border-light-text/20 dark:border-dark-text/20 focus:ring-2 focus:ring-primary focus:outline-none text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary" 
                />
              </div>
              <textarea 
                rows="6" 
                placeholder="Pesan Anda" 
                value={formDetails.message} 
                onChange={(e) => onFormUpdate('message', e.target.value)} 
                className="w-full mt-4 bg-light-bg-secondary dark:bg-dark-bg p-3 rounded-xl border border-light-text/20 dark:border-dark-text/20 focus:ring-2 focus:ring-primary focus:outline-none text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
              ></textarea>
              <button 
                type="submit" 
                className="mt-6 bg-primary text-black font-bold py-3 px-8 rounded-full text-lg 
                           hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {buttonText}
              </button>
              {status.message && (
                <p className={`mt-4 text-base ${status.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;