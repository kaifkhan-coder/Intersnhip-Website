import React from 'react';
import { YOUR_WHATSAPP_NUMBER } from '../constants';

interface WhatsAppButtonProps {
  title: string;
  price: number;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ title, price }) => {
  const message = `Hello NeuraMind, I'm interested in the "${title}" internship program (Price: ₹${price}). Could you please provide more details about this hybrid internship? Thank you!`;
  const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full text-center block bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
    >
      Enroll Now
    </a>
  );
};

export default WhatsAppButton;