
import React from 'react';
import type { Internship } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 'java',
    title: 'Java Development',
    price: 2999,
    description: 'Master backend development with Java, Spring Boot, and build robust, scalable applications.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    price: 2499,
    description: 'Learn to protect systems and networks from digital attacks. Dive into ethical hacking and defense.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    price: 3499,
    description: 'Strengthen your problem-solving foundations. Essential for cracking top tech company interviews.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    id: 'webdev',
    title: 'Full-Stack Web Dev',
    price: 3999,
    description: 'Become a versatile developer by learning both front-end (React) and back-end (Node.js) technologies.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    price: 4999,
    description: 'Step into the world of AI. Learn to build and train models for prediction, classification, and more.',
     icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    price: 3499,
    description: 'Gain expertise in cloud platforms like AWS or Azure, focusing on infrastructure, deployment, and services.',
     icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    )
  }
];

export const YOUR_WHATSAPP_NUMBER = '9326865425'; // Replace with your actual WhatsApp number with country code
