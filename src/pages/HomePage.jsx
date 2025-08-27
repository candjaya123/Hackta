import React from 'react';

// Import komponen-komponen yang membentuk halaman utama
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
