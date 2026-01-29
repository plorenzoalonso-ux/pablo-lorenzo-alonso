
import React from 'react';

const Articles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "¿Sabías que el Mundial 2026 generará...?",
      date: "Noviembre 2024",
      excerpt: "Un análisis detallado sobre las proyecciones económicas y el volumen de negocio que moverá el próximo mundial de fútbol.",
      category: "Macroeconomía",
      link: "https://www.linkedin.com/posts/pablo-lorenzo-alonso-2362562b2_sab%C3%ADas-que-el-mundial-2026-generar%C3%A1-activity-7402648001544093697-fXe4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsktsoBHzQHByP7h_HyeVHqembyfRP_TeE"
    },
    {
      id: 2,
      title: "El Ártico: la autopista marítima del futuro",
      date: "Octubre 2024",
      excerpt: "Explorando las nuevas rutas comerciales que el deshielo ártico está habilitando y su impacto en la logística mundial.",
      category: "Logística",
      link: "https://www.linkedin.com/posts/pablo-lorenzo-alonso-2362562b2_el-%C3%A1rtico-la-autopista-mar%C3%ADtima-del-futuro-activity-7400142638768627712-Sa55?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsktsoBHzQHByP7h_HyeVHqembyfRP_TeE"
    },
    {
      id: 3,
      title: "Impacto económico del Mundial 2026",
      date: "Noviembre 2024",
      excerpt: "Reflexiones sobre cómo los grandes eventos deportivos transforman las economías locales y los flujos comerciales.",
      category: "Estrategia",
      link: "https://www.linkedin.com/posts/pablo-lorenzo-alonso-2362562b2_impacto-econ%C3%B3mico-del-mundial-2026-activity-7402669974831443968-oykY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsktsoBHzQHByP7h_HyeVHqembyfRP_TeE"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-brand text-4xl text-slate-900 mb-4 tracking-tight">Presencia Digital</h2>
          <p className="text-slate-500 max-w-lg">Compartiendo conocimiento y visión sobre el panorama comercial actual en LinkedIn.</p>
        </div>
        <a 
          href="https://linkedin.com/in/pablo-lorenzo-alonso-2362562b2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#0077b5] text-white rounded-lg font-bold hover:bg-[#005c8d] transition-all no-print"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          Seguir en LinkedIn
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((art) => (
          <div key={art.id} className="bg-white border border-slate-100 rounded-2xl p-8 article-glow flex flex-col group">
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded mb-6 self-start">
              {art.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
              {art.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3">
              {art.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-slate-400 font-medium">{art.date}</span>
              <a 
                href={art.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-bold text-xs flex items-center hover:translate-x-1 transition-transform"
              >
                LEER MÁS 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
