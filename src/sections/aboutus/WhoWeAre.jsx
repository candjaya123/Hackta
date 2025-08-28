import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://placehold.co/600x400/fdb827/000000?text=Riset+Teknologi" alt="Tim Hackta" className="rounded-2xl shadow-xl"/>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Siapa Kami?</h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Kami adalah mahasiswa yang aktif di riset dan lomba teknologi, mulai dari robotika, kecerdasan buatan, hingga elektronika.
              <br/><br/>
              Kami percaya belajar teknologi tidak harus rumit, dan bisa dimulai dari hal sederhana—coding untuk anak SD, robotik untuk remaja, hingga konsultasi riset untuk mahasiswa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;