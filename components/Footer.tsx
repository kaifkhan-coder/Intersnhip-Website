
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900/50 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} NeuraPeak. All Rights Reserved.</p>
        <p className="mt-2">
          Designed & Developed by{' '}
          <a
            href="https://68fce820d22b69add316060a--earnest-genie-e46231.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            the Founder
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
