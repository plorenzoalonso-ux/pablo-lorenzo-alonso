
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-white z-50 no-print border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-brand text-xl tracking-tighter">
          PABLO <span className="text-blue-400">LORENZO</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <a href="#about" className="hover:text-blue-400 transition-colors">Sobre mí</a>
          <a href="#resume" className="hover:text-blue-400 transition-colors">CV</a>
          <a href="#articles" className="hover:text-blue-400 transition-colors">Artículos</a>
          <a 
            href="CV_Pablo_Lorenzo.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full text-xs font-bold transition-all inline-flex items-center"
          >
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            DESCARGAR PDF
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
