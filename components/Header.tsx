
import React, { useState } from 'react';
import { GOOGLE_FORM_LINK } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#internships', label: 'Internships' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  const DemoButton = () => (
     <a
        href={GOOGLE_FORM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
    >
        Request Demo
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">
          Neura<span className="text-indigo-400">Mind</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300">
              {link.label}
            </a>
          ))}
           <DemoButton />
        </nav>
        <button
          className="md:hidden text-slate-300 hover:text-indigo-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/90">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="mt-2">
                <DemoButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
