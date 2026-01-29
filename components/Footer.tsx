
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-brand text-2xl mb-6">PABLO <span className="text-blue-400">LORENZO</span></div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Dedicado a la excelencia en el comercio internacional y la creación de valor en mercados globales.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:pablo.lorenzo.alonso@example.com" className="hover:text-white transition-colors">pablo.lorenzo.alonso@example.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>A Coruña, Galicia, España</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Enlaces</h4>
            <div className="flex space-x-4">
               <a href="https://linkedin.com/in/pablo-lorenzo-alonso-2362562b2" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Pablo Lorenzo Alonso. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
