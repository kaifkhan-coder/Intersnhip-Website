
import React from 'react';
import { YOUR_WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const message = `Hello NeuraMind! I'd like to inquire about your internship programs.`;
  const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 animate-pulse-whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.388 1.916 6.106l-.558 2.035 2.074-.557z" />
        </svg>
      </a>
      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }
        .animate-pulse-whatsapp {
          animation: pulse-whatsapp 2s infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;
