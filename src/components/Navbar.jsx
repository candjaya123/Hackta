import { useState, useEffect, useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'; // Tambah ChevronDownIcon
import { ThemeContext } from "../context/ThemeContext";
import { BeakerIcon, CodeBracketIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const SocialIcon = ({ children }) => (
  <a href="#" className="text-light-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk mobile menu
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // State untuk dropdown layanan
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false); // Tutup mobile menu saat link diklik
    setIsServicesDropdownOpen(false); // Tutup dropdown layanan
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-xl' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold text-light-text dark:text-dark-text" onClick={() => handleLinkClick('home')}>
          Hack<span className="text-primary">ta</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-light-bg/50 dark:bg-dark-bg/50 px-8 py-2 rounded-full border border-light-text/10 dark:border-dark-text/10">
          <HashLink smooth to="/#home" className={`text-lg transition-colors duration-300 ${activeLink === 'home' ? 'text-primary' : 'text-light-text/80 dark:text-dark-text/80 hover:text-primary'}`} onClick={() => handleLinkClick('home')}>
            Beranda
          </HashLink>

          {/* Dropdown Layanan */}
          <div className="relative">
            <button 
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`flex items-center gap-1 text-lg transition-colors duration-300 ${activeLink.startsWith('layanan') ? 'text-primary' : 'text-light-text/80 dark:text-dark-text/80 hover:text-primary'}`}
            >
              Layanan <ChevronDownIcon className={`h-4 w-4 transform transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg py-2 border border-light-text/10 dark:border-dark-text/10">
                <Link to="/layanan-sd" className="block px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary" onClick={() => handleLinkClick('layanan-sd')}>Jenjang SD</Link>
                <Link to="/layanan-smp-sma" className="block px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary" onClick={() => handleLinkClick('layanan-smp-sma')}>Jenjang SMP-SMA</Link>
                <Link to="/layanan-mahasiswa" className="block px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary" onClick={() => handleLinkClick('layanan-mahasiswa')}>Mahasiswa</Link>
              </div>
            )}
          </div>

          <Link to="/tentang-kami" className={`text-lg transition-colors duration-300 ${activeLink === 'tentang-kami' ? 'text-primary' : 'text-light-text/80 dark:text-dark-text/80 hover:text-primary'}`} onClick={() => handleLinkClick('tentang-kami')}>
            Tentang Kami
          </Link>
        </div>

        {/* Tombol Sosial dan Tema (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <SocialIcon><BeakerIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><CodeBracketIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><UserGroupIcon className="h-6 w-6"/></SocialIcon>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
          </button>
          <HashLink to='/#connect' className="bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
            Hubungi Kami
          </HashLink>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-8 w-8 text-light-text dark:text-dark-text" /> : <Bars3Icon className="h-8 w-8 text-light-text dark:text-dark-text" />}
          </button>
        </div>
      </div>

       {/* Mobile Menu Dropdown */}
       {isOpen && (
        <div className="md:hidden bg-light-bg dark:bg-dark-bg px-6 pb-4 mt-2 border-t border-light-text/10 dark:border-dark-text/10">
          <HashLink smooth to="/#home" className="block py-3 text-center text-lg text-light-text dark:text-dark-text hover:text-primary" onClick={() => handleLinkClick('home')}>Beranda</HashLink>
          
          {/* Dropdown Layanan (Mobile) */}
          <div className="relative text-center">
            <button 
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`w-full flex items-center justify-center gap-1 py-3 text-lg text-light-text dark:text-dark-text hover:text-primary`}
            >
              Layanan <ChevronDownIcon className={`h-4 w-4 transform transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isServicesDropdownOpen && (
              <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow-inner py-2 mb-2">
                <Link to="/layanan-sd" className="block px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary" onClick={() => handleLinkClick('layanan-sd')}>Jenjang SD</Link>
                <Link to="/layanan-smp-sma" className="block px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary" onClick={() => handleLinkClick('layanan-smp-sma')}>Jenjang SMP-SMA</Link>
                <Link to="/layanan-mahasiswa" className="block px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary" onClick={() => handleLinkClick('layanan-mahasiswa')}>Mahasiswa</Link>
              </div>
            )}
          </div>

          <Link to="/tentang-kami" className="block py-3 text-center text-lg text-light-text dark:text-dark-text hover:text-primary" onClick={() => handleLinkClick('tentang-kami')}>Tentang Kami</Link>

           <HashLink to='/#connect' className="block w-full mt-2 bg-primary text-black font-bold py-3 px-5 rounded-full text-center" onClick={() => handleLinkClick('contact')}>
            Hubungi Kami
          </HashLink>
          <div className="flex justify-center gap-6 mt-4">
            <SocialIcon><BeakerIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><CodeBracketIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><UserGroupIcon className="h-6 w-6"/></SocialIcon>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;