
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Internships from './components/Internships';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-300 font-sans transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/50 -z-10"></div>
      <Header />
      <main>
        <Hero />
        <Internships />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
