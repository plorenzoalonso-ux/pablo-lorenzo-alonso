
import React from 'react';

interface NavbarProps {
  lang: 'es' | 'en';
  onToggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const cvFile = `${import.meta.env.BASE_URL}CV PABLO LORENZO ALONSO.pdf`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-white z-50 no-print border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-brand text-xl tracking-tighter">
          PABLO <span className="text-blue-400">LORENZO</span>
        </div>
        <div className="flex space-x-3 md:space-x-6 text-sm font-medium items-center">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            {lang === 'es' ? 'Sobre mí' : 'About me'}
          </a>
          <a href="#resume" className="hover:text-blue-400 transition-colors">
            {lang === 'es' ? 'CV' : 'Resume'}
          </a>
          <a href="#articles" className="hidden sm:inline hover:text-blue-400 transition-colors">
            {lang === 'es' ? 'Artículos' : 'Articles'}
          </a>
          <a 
            href={cvFile}
            download="CV PABLO LORENZO ALONSO.pdf"
            className="bg-blue-600 hover:bg-blue-700 px-3 md:px-4 py-1.5 rounded-full text-xs font-bold transition-all inline-flex items-center"
          >
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {lang === 'es' ? 'DESCARGAR CV' : 'DOWNLOAD CV'}
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={onToggleLang}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-all flex items-center tracking-wider"
            title={lang === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
          >
            {lang === 'es' ? 'EN' : 'ESP'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
