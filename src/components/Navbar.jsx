import { useState, useEffect, useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
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
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-xl' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/#home" className="text-4xl font-bold text-light-text dark:text-dark-text">
          Hack<span className="text-primary">ta</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-light-bg/50 dark:bg-dark-bg/50 px-8 py-2 rounded-full border border-light-text/10 dark:border-dark-text/10">
          {navLinks.map((link) => (
            <HashLink 
              smooth 
              to={link.href} 
              key={link.label}
              className={`text-lg transition-colors duration-300 ${activeLink === link.label.toLowerCase() ? 'text-primary' : 'text-light-text/80 dark:text-dark-text/80 hover:text-primary'}`} 
              onClick={() => setActiveLink(link.label.toLowerCase())}
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <SocialIcon><BeakerIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><CodeBracketIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><UserGroupIcon className="h-6 w-6"/></SocialIcon>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
          </button>
          <HashLink to='#connect' className="bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
            Hubungi Kami
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-8 w-8 text-light-text dark:text-dark-text" /> : <Bars3Icon className="h-8 w-8 text-light-text dark:text-dark-text" />}
          </button>
        </div>
      </div>

       {/* Mobile Menu */}
       {isOpen && (
        <div className="md:hidden bg-light-bg dark:bg-dark-bg px-6 pb-4 mt-2 border-t border-light-text/10 dark:border-dark-text/10">
          {navLinks.map((link) => (
             <HashLink 
              smooth
              to={link.href} 
              key={link.label}
              className="block py-3 text-center text-lg text-light-text dark:text-dark-text hover:text-primary" 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </HashLink>
          ))}
           <HashLink to='#connect' className="block w-full mt-2 bg-primary text-black font-bold py-3 px-5 rounded-full text-center" onClick={() => setIsOpen(false)}>
            Hubungi Kami
          </HashLink>
          <div className="flex justify-center gap-6 mt-4">
            <SocialIcon><BeakerIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><CodeBracketIcon className="h-6 w-6"/></SocialIcon>
            <SocialIcon><UserGroupIcon className="h-6 w-6"/></SocialIcon>
          </div>
           <button onClick={toggleTheme} className="w-full mt-4 p-2 rounded-full text-light-text dark:text-dark-text bg-light-bg-secondary dark:bg-dark-bg-secondary flex justify-center items-center gap-2">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
            <span>Ganti Tema</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;