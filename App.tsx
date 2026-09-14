
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Articles from './components/Articles';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="py-20 bg-white">
          <About />
        </section>
        <section id="resume" className="py-20 bg-slate-50">
          <Resume />
        </section>
        <section id="articles" className="py-20 bg-white">
          <Articles />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
