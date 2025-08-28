# Hackta Education Platform

**Hackta** is a modern, responsive web application built with React and Tailwind CSS, designed to deliver engaging and accessible coding and technology courses for students at various educational levels: SD (elementary school), SMP/SMA (junior and senior high school), and Mahasiswa (university students). The platform emphasizes interactive learning, industry-relevant skills, and a user-friendly experience with distinct color themes for each educational level.

**Live Demo**: [https://hackta-lovat.vercel.app/](https://hackta-lovat.vercel.app/)

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
Hackta is an educational platform that provides tailored learning experiences for students at different stages:
- **SD (Elementary School)**: Focuses on fun, visual-based coding (e.g., block-based programming) to build foundational logic and creativity.
- **SMP/SMA (Junior/Senior High School)**: Offers advanced coding and robotics courses to prepare students for higher education and tech careers.
- **Mahasiswa (University Students)**: Delivers industry-relevant skills like full-stack development and AI basics for internships and professional careers.

Each level has its own page (`LayananSDPage`, `LayananSMPSMAPage`, `LayananMahasiswaPage`), with sections for Hero, Intro, Kurikulum, Pricing, and Testimoni, styled with distinct color themes (blue for SD, green for SMP/SMA, purple for Mahasiswa).

## Key Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop with Tailwind CSS, using responsive grids and typography.
- **Distinct Color Themes**:
  - SD: Blue (`bg-blue-100/60 dark:bg-blue-900/20`).
  - SMP/SMA: Green (`bg-green-100/60 dark:bg-green-900/20`).
  - Mahasiswa: Purple (`bg-purple-100/60 dark:bg-purple-900/20`).
  - Testimoni sections use a gradient-to-white effect for visual consistency.
- **Centered Cards**: Kurikulum (carousel), Pricing (grid), and Testimoni (grid) sections center cards, even for 1 or 2 items, using `justify-center` or `centerMode`.
- **Interactivity**: Hover effects (card lift, button scaling), `fadeInUp` animations with staggered delays, and toggle functionality for testimonials ("Lihat Lainnya"/"Sembunyikan").
- **Accessibility**: ARIA attributes (`role`, `aria-labelledby`, `aria-label`), keyboard navigation (`tabIndex`), and high-contrast colors for screen reader compatibility.
- **Reusable Components**: Uses shared templates (`HeroTemplate`, `IntroTemplate`, `KurikulumTemplate`) for modularity and consistency across pages.
- **Dummy Data**: Includes placeholder images, YouTube video IDs, and testimonials tailored to each educational level.

## File Structure
```
src/
├── components/
│   └── layanan/
│       ├── Hero.jsx        # Reusable Hero template
│       ├── Intro.jsx       # Reusable Intro template
│       ├── Kurikulum.jsx   # Reusable Kurikulum template
├── pages/
│   ├── LayananSDPage.jsx   # SD services page
│   ├── LayananSMPSMAPage.jsx # SMP/SMA services page
│   ├── LayananMahasiswaPage.jsx # Mahasiswa services page
├── sections/
│   ├── SD/
│   │   ├── Hero.jsx        # SD Hero section
│   │   ├── Intro.jsx       # SD Intro section
│   │   ├── Kurikulum.jsx   # SD Kurikulum section
│   │   ├── Pricing.jsx     # SD Pricing section
│   │   ├── Testimoni.jsx   # SD Testimoni section
│   ├── SMPSMA/
│   │   ├── Hero.jsx        # SMP/SMA Hero section
│   │   ├── Intro.jsx       # SMP/SMA Intro section
│   │   ├── Kurikulum.jsx   # SMP/SMA Kurikulum section
│   │   ├── Pricing.jsx     # SMP/SMA Pricing section
│   │   ├── Testimoni.jsx   # SMP/SMA Testimoni section
│   ├── Mahasiswa/
│   │   ├── Hero.jsx        # Mahasiswa Hero section
│   │   ├── Intro.jsx       # Mahasiswa Intro section
│   │   ├── Kurikulum.jsx   # Mahasiswa Kurikulum section
│   │   ├── Pricing.jsx     # Mahasiswa Pricing section
│   │   ├── Testimoni.jsx   # Mahasiswa Testimoni section
├── App.jsx                 # Main app with routing
├── index.jsx               # Entry point
├── tailwind.config.js      # Tailwind CSS configuration
```

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/hackta-education.git
   cd hackta-education
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Tailwind CSS**:
   Ensure `tailwind.config.js` includes custom colors:
   ```javascript
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: '#2563EB', // Example primary color
           accent: '#F59E0B',  // Example accent color
           'light-bg': '#F9FAFB',
           'dark-bg': '#1F2937',
           'light-text': '#1F2937',
           'dark-text': '#F9FAFB',
           'light-bg-secondary': '#F3F4F6',
           'dark-bg-secondary': '#374151',
         },
       },
     },
   };
   ```

4. **Run the Development Server**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage
1. **Access the Live Demo**:
   Visit [https://hackta-lovat.vercel.app/](https://hackta-lovat.vercel.app/) to explore the deployed application.

2. **Routing**:
   - `/layanan/sd`: SD services page.
   - `/layanan/smp-sma`: SMP/SMA services page.
   - `/layanan/mahasiswa`: Mahasiswa services page.
   Configure routes in `App.jsx` using React Router:
   ```javascript
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import LayananSDPage from './pages/LayananSDPage';
   import LayananSMPSMAPage from './pages/LayananSMPSMAPage';
   import LayananMahasiswaPage from './pages/LayananMahasiswaPage';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/layanan/sd" element={<LayananSDPage />} />
           <Route path="/layanan/smp-sma" element={<LayananSMPSMAPage />} />
           <Route path="/layanan/mahasiswa" element={<LayananMahasiswaPage />} />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

3. **Customizing Data**:
   - Update dummy data (e.g., images, video IDs, testimonials) in each section file (e.g., `src/sections/SD/Hero.jsx`, `src/sections/Mahasiswa/Testimoni.jsx`).
   - Replace placeholder images (`placehold.co`) with real assets.
   - Update YouTube video IDs and syllabus links as needed.

4. **Testing**:
   - **Centering**: Verify card centering in Kurikulum (carousel), Pricing (grid), and Testimoni (grid) for 1, 2, or more items.
   - **Responsiveness**: Test on mobile, tablet, and desktop using browser dev tools.
   - **Accessibility**: Use screen readers (e.g., NVDA, VoiceOver) to verify ARIA attributes and keyboard navigation.
   - **Animations**: Ensure `fadeInUp` animations trigger smoothly with staggered delays.
   - **Dark Mode**: Check color themes (blue, green, purple) in light and dark modes.

## Dependencies
- **React**: `^18.2.0`
- **React Router**: `^6.4.0` (for routing)
- **Tailwind CSS**: `^3.4.0`
- **@heroicons/react**: `^2.0.18` (for icons in Pricing)
- **prop-types**: `^15.8.1` (for type checking)
- **react-multi-carousel**: `^2.8.4` (for Kurikulum carousel)

Install dependencies:
```bash
npm install react@18 react-dom@18 react-router-dom@6 tailwindcss@3 @heroicons/react@2 prop-types@15 react-multi-carousel@2
```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request with a clear description of changes.

Please ensure:
- Code follows ESLint and Prettier standards.
- New features maintain accessibility (ARIA attributes, keyboard navigation).
- Updates align with the color themes (blue for SD, green for SMP/SMA, purple for Mahasiswa).
- Tests are added for new components or functionality.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Hackta Education Platform**  
Built with 💻 by the Hackta Team  
For inquiries, contact: [your-email@example.com](mailto:your-email@example.com)