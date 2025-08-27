import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import komponen layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import komponen Halaman (Pages)
import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage'; // Anda bisa membuat halaman ini nanti

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
