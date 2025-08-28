import React from 'react';

const WhyWeExist = () => {
  return (
    <section className="py-24 bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img src="https://placehold.co/600x400/fdb827/000000?text=Menjembatani+Kesenjangan" alt="Visi Hackta" className="rounded-2xl shadow-xl"/>
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl font-bold mb-4">Kenapa Kami Berdiri?</h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Dunia sudah berlari dengan AI, otomasi, dan robotika. Namun, di banyak sekolah di Indonesia, siswa bahkan belum terbiasa dengan coding atau eksperimen teknologi dasar.
              <br/><br/>
              Kami ingin menjembatani kesenjangan itu. Membawa pengalaman kami di riset dan kompetisi ke ruang belajar yang menyenangkan, praktis, dan membumi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;