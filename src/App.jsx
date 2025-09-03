// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import LayananSDPage from './pages/LayananSDPage';
import LayananSMASMPPage from './pages/LayananSMASMPPage';
import LayananMahasiswaPage from './pages/LayananMahasiswaPage';
import DetailLayananPage from './pages/DetailLayananPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans overflow-x-hidden">
      <ScrollToTop /> 
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<AboutUsPage />} />
        {/* Halaman layanan jenjang, jika masih ada */}
        <Route path="/layanan-sd" element={<LayananSDPage />} />
        <Route path="/layanan-smp-sma" element={<LayananSMASMPPage />} />
        <Route path="/layanan-mahasiswa" element={<LayananMahasiswaPage />} />

        {/* Rute dinamis untuk detail setiap layanan */}
        <Route path="/layanan/:slug" element={<DetailLayananPage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;