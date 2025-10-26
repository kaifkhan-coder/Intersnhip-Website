
import React from 'react';
import type { Internship } from '../types';
import WhatsAppButton from './WhatsAppButton';

interface InternshipCardProps {
  internship: Internship;
  index: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, index }) => {
  return (
    <div
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
    >
      <div className="bg-indigo-600/20 text-indigo-400 p-3 rounded-lg mb-4">
        {internship.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{internship.title}</h3>
      <p className="text-slate-400 flex-grow mb-4">{internship.description}</p>
      <div className="w-full mt-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-white">₹{internship.price}</span>
        </div>
        <WhatsAppButton title={internship.title} price={internship.price} />
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default InternshipCard;
