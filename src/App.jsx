import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans overflow-x-hidden">
      <NavBar />
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