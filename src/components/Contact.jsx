import { useState } from "react";

const contactImg = "https://placehold.co/600x500/1A1A1A/fdb827?text=Hubungi+Kami";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [buttonText, setButtonText] = useState('Kirim Pesan');
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Mengirim...");
    setTimeout(() => {
      setButtonText("Kirim Pesan");
      setFormDetails({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setStatus({ success: true, message: 'Pesan berhasil dikirim! (Simulasi)' });
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-r from-primary to-accent py-20" id="connect">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={contactImg} alt="Contact Us" className="rounded-2xl shadow-xl"/>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">Hubungi Kami</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Nama Depan" className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-xl border border-white/50 focus:bg-white/30 focus:outline-none" />
                <input type="text" placeholder="Nama Belakang" className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-xl border border-white/50 focus:bg-white/30 focus:outline-none" />
                <input type="email" placeholder="Alamat Email" className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-xl border border-white/50 focus:bg-white/30 focus:outline-none" />
                <input type="tel" placeholder="No. Telepon" className="w-full bg-white/20 text-white placeholder-white/70 p-3 rounded-xl border border-white/50 focus:bg-white/30 focus:outline-none" />
              </div>
              <textarea rows="6" placeholder="Pesan" className="w-full mt-4 bg-white/20 text-white placeholder-white/70 p-3 rounded-xl border border-white/50 focus:bg-white/30 focus:outline-none"></textarea>
              <button type="submit" className="mt-4 bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-light-bg-secondary transition-colors">{buttonText}</button>
              {status.message && <p className={`mt-4 ${status.success ? 'text-green-900' : 'text-red-900'}`}>{status.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;