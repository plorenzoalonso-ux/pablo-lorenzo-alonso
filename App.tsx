
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Articles from './components/Articles';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-grow">
        <section id="hero">
          <Hero lang={lang} />
        </section>
        <section id="about" className="py-20 bg-white">
          <About lang={lang} />
        </section>
        <section id="resume" className="py-20 bg-slate-50">
          <Resume lang={lang} />
        </section>
        <section id="articles" className="py-20 bg-white">
          <Articles lang={lang} />
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
