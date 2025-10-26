
import React from 'react';
import { YOUR_WHATSAPP_NUMBER, YOUR_EMAIL, YOUR_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello NeuraMind!")}`;
  
  return (
    <footer id="contact" className="bg-slate-900/50 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Neura<span className="text-indigo-400">Mind</span>
            </h3>
            <p className="text-slate-400 mt-4">Bridging the gap between education and industry with cutting-edge tech internships.</p>
          </div>
          <div className="md:col-span-2">
             <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
             <div className="space-y-4">
               <div className="flex items-start space-x-3 text-slate-400">
                  <svg className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{YOUR_ADDRESS}</span>
               </div>
                <a href={`mailto:${YOUR_EMAIL}`} className="flex items-center space-x-3 text-slate-400 hover:text-indigo-400 transition-colors">
                  <svg className="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>{YOUR_EMAIL}</span>
               </a>
               <a href={`tel:+91${YOUR_WHATSAPP_NUMBER}`} className="flex items-center space-x-3 text-slate-400 hover:text-indigo-400 transition-colors">
                  <svg className="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+91 {YOUR_WHATSAPP_NUMBER}</span>
               </a>
             </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
           <p>&copy; {new Date().getFullYear()} NeuraMind. All Rights Reserved.</p>
           <p className="mt-2 text-sm">
              Designed & Developed by{' '}
              <a
                href="https://68fce820d22b69add316060a--earnest-genie-e46231.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                the Founder
              </a>.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
