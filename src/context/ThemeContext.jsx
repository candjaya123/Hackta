import React, { createContext, useState, useEffect } from 'react';

// 1. Buat Context
export const ThemeContext = createContext(null);

// 2. Buat Provider Komponen
export const ThemeProvider = ({ children }) => {
  // State untuk menyimpan tema, defaultnya 'dark'
  const [theme, setTheme] = useState('dark');

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  // Efek untuk menambahkan class ke body saat tema berubah
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
