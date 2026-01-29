
import React from 'react';

const About: React.FC = () => {
  const profileImage = "https://media.licdn.com/dms/image/v2/D4E03AQEHw-9mV7I6ew/profile-displayphoto-scale_400_400/B4EZsx3DunIUAk-/0/1766068079985?e=1767830400&v=beta&t=8GCNUUJPUgt0yBPrRrW4j0u9Iz3eC0ZgCmKFN59dJ6A";

  return (
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="font-brand text-3xl md:text-4xl text-slate-900 mb-6">Un enfoque global y proactivo.</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
          <p>
            Soy un chico de 22 años, amable, responsable con mis estudios, muy activo y con ganas de hacer cosas, y de tener mi primera toma de contacto con el entorno laboral.
          </p>
          <p>
            Me apasiona todo lo relacionado con el comercio, concretamente el comercio internacional y cómo las empresas pueden expandir sus horizontes en un mercado globalizado.
          </p>
          <p>
            Actualmente, curso en <strong>IFFE Business School</strong> un máster centrado en los negocios internacionales y el comercio exterior. A su vez, complemento mi formación académica en la Escuela Oficial de Idiomas con un curso de inglés nivel C1.1.
          </p>
        </div>
        <div className="mt-10 flex space-x-6">
          <div className="flex flex-col">
            <span className="text-blue-600 font-bold text-2xl">22</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">Años</span>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-blue-600 font-bold text-2xl">C1.1</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">Nivel Inglés</span>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-blue-600 font-bold text-2xl">IFFE</span>
            <span className="text-xs uppercase tracking-wider text-slate-400">Education</span>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-100 rounded-2xl -rotate-6 z-0"></div>
          <img 
            src={profileImage} 
            alt="Pablo Lorenzo Alonso" 
            className="relative z-10 w-full max-w-sm rounded-2xl shadow-2xl border-4 border-white transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
