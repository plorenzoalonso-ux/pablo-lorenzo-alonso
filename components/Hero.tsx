
import React from 'react';

const Hero: React.FC = () => {
  const bgImage = `${import.meta.env.BASE_URL}images/foto-pablo.png`;
  const cvFile = `${import.meta.env.BASE_URL}CV-PABLO LORENZO ALONSO.pdf`;

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      {/* Dark gradient overlay for maximum contrast and text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90 backdrop-blur-[2px]" />

      {/* Decorative pulse rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-400/30 rounded-full animate-[pulse_8s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-300/20 rounded-full animate-[pulse_6s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-200/10 rounded-full animate-[pulse_4s_infinite]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <h1 className="font-brand text-5xl md:text-7xl mb-6 tracking-tight drop-shadow-lg text-white font-extrabold">
          PABLO <span className="text-blue-400 drop-shadow-[0_2px_10px_rgba(96,165,250,0.5)]">LORENZO</span> ALONSO
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-100 mb-8 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow">
          Especialista en Negocios Internacionales y Comercio Exterior. Estudiante de Máster en IFFE Business School.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          <span className="bg-slate-900/80 backdrop-blur-md border border-white/20 text-blue-200 px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-slate-800/90 transition-all cursor-default">
            🌍 Comercio Exterior
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md border border-white/20 text-blue-200 px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-slate-800/90 transition-all cursor-default">
            💼 Compras Internacionales
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md border border-white/20 text-blue-200 px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-slate-800/90 transition-all cursor-default">
            🗣️ Inglés C1.1
          </span>
        </div>

        <div className="flex justify-center no-print">
          <a 
            href={cvFile} 
            download="CV-PABLO LORENZO ALONSO.pdf"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-lg border border-blue-400/30"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            DESCARGAR CURRÍCULUM PDF
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce no-print">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
