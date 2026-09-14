
import React from 'react';

const About: React.FC = () => {
  const profileImage = `${import.meta.env.BASE_URL}images/foto-pablo.png`;

  return (
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="font-brand text-3xl md:text-4xl text-slate-900 mb-6">Un enfoque global y proactivo.</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
          <p>
            Graduado en Comercio y con un Máster en Negocios Internacionales y Comercio Exterior, Pablo Lorenzo es un chico de 22 años con experiencia profesional en compras internacionales y logística global dentro de los sectores industrial y naval. Si me tuviera que definir personalmente, diría que soy una persona trabajadora, consciente y amante de los retos.
          </p>
          <p>
            A través de mi experiencia profesional, he tenido la oportunidad de trabajar con proveedores internacionales y coordinar operaciones de aprovisionamiento y abastecimiento en diferentes mercados, especialmente dando soporte a las operaciones de la flota en Sudáfrica y Namibia. Tras llevar todo el año trabajando en Iberconsa, tengo claro que cada vez es mayor mi interés por los negocios internacionales y conozco de primera mano cómo las compras, la logística y el comercio internacional se integran en un entorno global.
          </p>
          <p>
            Con un nivel avanzado de inglés, estoy especialmente interesado en seguir desarrollando mi experiencia profesional en un entorno internacional, asumiendo nuevas responsabilidades y aplicando mis conocimientos en áreas como compras internacionales, comercio exterior, gestión de la cadena de suministro y desarrollo de negocio B2B.
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
