import React from 'react';

// Impor semua section baru
import IntroSection from '../sections/aboutus/Intro';
import WhoWeAre from '../sections/aboutus/WhoWeAre';
import WhyWeExist from '../sections/aboutus/WhyWeExist';
import VisionMission from '../sections/aboutus/VisionMission';
import TeamSection from '../sections/aboutus/Team';
// Anda bisa menambahkan section lain seperti Facilities, Methodology, dll di sini

const AboutUsPage = () => {
  return (
    <>
      <IntroSection />
      <WhoWeAre />
      <WhyWeExist />
      <VisionMission />
      <TeamSection />
    </>
  );
};

export default AboutUsPage;