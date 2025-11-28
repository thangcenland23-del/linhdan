import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Consultation } from './components/Consultation';
import { Contact } from './components/Contact';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Testimonials />
        <Consultation />
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
};

export default App;