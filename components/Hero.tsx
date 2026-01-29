
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
      {/* CSS-based decorative element representing international trade/connectivity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-400/30 rounded-full animate-[pulse_8s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-300/20 rounded-full animate-[pulse_6s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-200/10 rounded-full animate-[pulse_4s_infinite]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-brand text-5xl md:text-7xl mb-6 tracking-tight animate-fade-in-up">
          PABLO <span className="text-blue-400">LORENZO</span> ALONSO
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light max-w-2xl mx-auto">
          Especialista en Negocios Internacionales y Comercio Exterior. Estudiante de Máster en IFFE Business School.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all cursor-default">
            🌍 Comercio Exterior
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all cursor-default">
            💼 Estrategia de Negocios
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all cursor-default">
            🗣️ Inglés C1.1
          </span>
        </div>

        <div className="flex justify-center no-print">
          <a
            href={`${import.meta.env.BASE_URL}CV-PABLO LORENZO ALONSO.pdf`}
            download="CV-PABLO LORENZO ALONSO.pdf"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 text-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            DESCARGAR CURRÍCULUM PDF
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce no-print">
        <a href="#about" className="text-white/50 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
