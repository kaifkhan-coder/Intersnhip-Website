
import React from 'react';
import { INTERNSHIPS } from '../constants';
import InternshipCard from './InternshipCard';

const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-20 md:py-28 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Internship Programs</h2>
          <p className="text-slate-400 mt-2">Find the perfect program to launch your career in tech.</p>
           <div className="mt-4 h-1 w-24 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERNSHIPS.map((internship, index) => (
            <InternshipCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
