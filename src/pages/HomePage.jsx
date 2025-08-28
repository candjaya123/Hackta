import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights'; // <-- Impor komponen Highlights
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Highlights /> {/* <-- Tambahkan komponen Highlights di sini */}
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;