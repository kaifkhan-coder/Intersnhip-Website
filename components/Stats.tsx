
import React from 'react';

const stats = [
  {
    value: '10+',
    label: 'Projects Completed',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    value: '2+',
    label: 'Expert Developers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    value: '40+',
    label: 'Technologies Used',
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m0 0l-3 3m3-3l3 3m-3-3v12m6-12l3 3m0 0l3 3m-3-3l-3 3m-3-3V3m-6 12h12" />
      </svg>
    ),
  },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-slate-800/40 p-8 rounded-xl border border-slate-700/50 transform hover:-translate-y-2 transition-transform duration-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.15}s forwards`, opacity: 0 }}
            >
              <div className="flex items-center justify-center mb-4 text-indigo-400">
                <div className="bg-indigo-500/10 p-4 rounded-full">
                    {stat.icon}
                </div>
              </div>
              <p className="text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
       <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
