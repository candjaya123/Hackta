import React from 'react';
import Banner from '../sections/homepage/Banner';
import Highlights from '../sections/homepage/Highlights';
import Guarantees from '../sections/homepage/Guarantees'; 
import Services from '../sections/homepage/Services';
import Gallery from '../sections/homepage/Gallery';
import Contact from '../sections/homepage/Contact';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Highlights />
      <Services />
      <Guarantees /> 
      <Gallery />
      <Contact />
    </>
  );
};

export default HomePage;