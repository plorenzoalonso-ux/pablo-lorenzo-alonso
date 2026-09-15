
import React from 'react';

interface ResumeProps {
  lang: 'es' | 'en';
}

const Resume: React.FC<ResumeProps> = ({ lang }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-brand text-4xl text-slate-900 mb-4 tracking-tight">
          {lang === 'es' ? 'Mi Trayectoria' : 'Career History'}
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-8 flex items-center">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </span>
            {lang === 'es' ? 'Educación' : 'Education'}
          </h3>
          <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-4">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
              <div className="mb-1">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {lang === 'es' ? 'ACTUALMENTE' : 'CURRENT'}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'es' ? 'Máster en Negocios Internacionales y Comercio Exterior' : 'Master’s Degree in International Business & Foreign Trade'}
              </h4>
              <p className="text-blue-600 font-medium text-sm mb-2">IFFE Business School</p>
              <p className="text-slate-500 text-sm italic">
                {lang === 'es' 
                  ? 'Especialización en mercados globales, logística internacional y estrategias de exportación.' 
                  : 'Specialization in global markets, international logistics, and export strategies.'}
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
              <div className="mb-1">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {lang === 'es' ? '2024 - PRESENTE' : '2024 - PRESENT'}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'es' ? 'Inglés Nivel C1.1' : 'English Level C1.1'}
              </h4>
              <p className="text-blue-600 font-medium text-sm mb-2">
                {lang === 'es' ? 'Escuela Oficial de Idiomas' : 'Official Language School'}
              </p>
              <p className="text-slate-500 text-sm italic">
                {lang === 'es'
                  ? 'Perfeccionamiento de la competencia lingüística para entornos profesionales internacionales.'
                  : 'Advanced linguistic skill refinement tailored for global corporate environments.'}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
              <div className="mb-1">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {lang === 'es' ? 'GRADO' : 'BACHELOR’S DEGREE'}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'es' ? 'Comercio' : 'Commerce Degree'}
              </h4>
              <p className="text-blue-600 font-medium text-sm mb-2">
                {lang === 'es' ? 'Universidad de Vigo' : 'University of Vigo'}
              </p>
              <p className="text-slate-500 text-sm italic">
                {lang === 'es'
                  ? 'Formación en fundamentos de comercio, economía y gestión empresarial.'
                  : 'Comprehensive education in commerce fundamentals, economics, and business management.'}
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-xl font-bold mb-8 flex items-center">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            {lang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
          </h3>
          <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-4">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
              <div className="mb-1">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {lang === 'es' ? 'PRÁCTICAS' : 'INTERNSHIP'}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {lang === 'es' ? 'Empleado en prácticas' : 'Trade & Consulting Intern'}
              </h4>
              <p className="text-blue-600 font-medium text-sm mb-2">Redflexión Consultores S.L</p>
              <ul className="text-slate-500 text-sm list-disc list-inside space-y-1">
                {lang === 'es' ? (
                  <>
                    <li>Elaboración de informes de ayuda a la internacionalización.</li>
                    <li>Realización de estudios de mercado detallados.</li>
                    <li>Captación de clientes mediante llamadas a puerta fría.</li>
                    <li>Gestión y uso avanzado de herramientas CRMs y ERPs.</li>
                  </>
                ) : (
                  <>
                    <li>Drafting comprehensive internationalization strategy reports.</li>
                    <li>Conducting in-depth global market research.</li>
                    <li>Client acquisition and B2B cold calling.</li>
                    <li>Advanced management of enterprise CRM and ERP platforms.</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">
              {lang === 'es' ? 'Idiomas' : 'Languages'}
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{lang === 'es' ? 'INGLÉS (C1.1)' : 'ENGLISH (C1.1)'}</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{lang === 'es' ? 'ESPAÑOL (NATIVO)' : 'SPANISH (NATIVE)'}</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                  <div className="h-full bg-blue-400 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{lang === 'es' ? 'GALLEGO (NATIVO)' : 'GALICIAN (NATIVE)'}</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                  <div className="h-full bg-blue-300 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
