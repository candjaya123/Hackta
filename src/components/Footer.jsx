export const Footer = () => {
  return (
    <footer className="pt-12">
      <div className="container mx-auto px-6">
        {/* Kotak Newsletter dengan latar belakang kuning pastel SOLID */}
        <div className="bg-amber-100 dark:bg-yellow-900 rounded-3xl text-center p-10 md:p-16 -mb-24 relative z-10 shadow-xl border border-light-text/10 dark:border-dark-text/10">
          
          <h3 className="text-3xl font-bold mb-4 text-light-text dark:text-dark-text">Berlangganan Newsletter Kami</h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Dapatkan info terbaru tentang program dan promo spesial.</p>
          
          <form className="flex justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="w-full bg-light-bg dark:bg-dark-bg p-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary" 
            />
            <button 
              type="submit" 
              className="bg-primary text-black font-bold px-6 py-3 rounded-r-lg hover:bg-accent transition-colors"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>

      {/* Bagian bawah footer */}
      <div className="bg-dark-bg text-white pt-32 pb-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Hack<span className="text-primary">ta</span></h2>
          <p className="mt-4 text-dark-text-secondary">Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;