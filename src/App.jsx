import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import LayananSDPage from './pages/LayananSDPage';
import LayananSMASMPPage from './pages/LayananSMASMPPage';
import LayananMahasiswaPage from './pages/LayananMahasiswaPage';
import Footer from './components/Footer';

function App() {
  return (
    // The main div with background/text colors is now in the root of App
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans overflow-x-hidden">
      {/* The NavBar should be inside the main div but outside the Routes */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<AboutUsPage />} />
        <Route path="/layanan-sd" element={<LayananSDPage />} />
        <Route path="/layanan-smp-sma" element={<LayananSMASMPPage />} />
        <Route path="/layanan-mahasiswa" element={<LayananMahasiswaPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;