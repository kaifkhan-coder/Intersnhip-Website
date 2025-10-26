import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
          Unlock Your Potential at <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">NeuraPeak</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Kickstart your tech career with our industry-leading hybrid internships. Gain real-world experience and mentorship from experts.
        </p>
        <a
          href="#internships"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          Explore Programs
        </a>
      </div>
       <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;