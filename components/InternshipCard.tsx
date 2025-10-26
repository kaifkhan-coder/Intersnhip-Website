
import React, { useState } from 'react';
import type { Internship } from '../types';
import { YOUR_WHATSAPP_NUMBER } from '../constants';

interface InquiryLinkProps {
  internshipTitle: string;
  question: string;
}

const InquiryLink: React.FC<InquiryLinkProps> = ({ internshipTitle, question }) => {
  const message = `Hello NeuraPeak, regarding the "${internshipTitle}" internship: ${question}`;
  const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-left text-sm bg-slate-700/50 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between group"
    >
      <span>{question}</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" />
      </svg>
    </a>
  );
};


interface InternshipCardProps {
  internship: Internship;
  index: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, index }) => {
  const [showInquiryOptions, setShowInquiryOptions] = useState(false);
  
  const inquiryQuestions = [
    "Can you tell me more about the curriculum?",
    "What are the class timings and duration?",
    "Are there any prerequisites for this course?",
    "What are the next steps to enroll?",
  ];

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
        <button
          onClick={() => setShowInquiryOptions(!showInquiryOptions)}
          aria-expanded={showInquiryOptions}
          aria-controls={`inquiry-options-${internship.id}`}
          className="w-full text-center block bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          {showInquiryOptions ? 'Close Inquiry' : 'Inquire on WhatsApp'}
        </button>
        {showInquiryOptions && (
          <div id={`inquiry-options-${internship.id}`} className="mt-4 space-y-2 animate-fade-in-quick">
            <p className="text-sm text-slate-400 mb-2">Click a question to start a chat:</p>
            {inquiryQuestions.map(q => (
              <InquiryLink key={q} internshipTitle={internship.title} question={q} />
            ))}
          </div>
        )}
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
        @keyframes fadeInQuick {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-quick {
          animation: fadeInQuick 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InternshipCard;