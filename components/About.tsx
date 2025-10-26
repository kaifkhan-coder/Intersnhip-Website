import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why NeuraPeak?</h2>
          <p className="text-slate-400 mt-2">We bridge the gap between education and industry.</p>
           <div className="mt-4 h-1 w-24 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
              <div className="p-6 bg-slate-800/40 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Hybrid Learning Model</h3>
                  <p className="text-slate-400">Enjoy the flexibility of remote work combined with valuable in-person collaboration and networking sessions.</p>
              </div>
              <div className="p-6 bg-slate-800/40 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Real-World Projects</h3>
                  <p className="text-slate-400">Go beyond theory. Build a portfolio of impactful projects that showcase your skills to future employers.</p>
              </div>
              <div className="p-6 bg-slate-800/40 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Mentorship</h3>
                  <p className="text-slate-400">Receive guidance and support from seasoned industry professionals dedicated to your growth and success.</p>
              </div>
          </div>
          <div>
            <img src="https://picsum.photos/seed/tech/600/700" alt="Students collaborating" className="rounded-xl shadow-2xl shadow-indigo-900/40"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;