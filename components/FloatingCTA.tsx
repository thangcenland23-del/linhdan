import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <a
      href="tel:0869566982"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-800 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-300 group border-2 border-gold-500/50"
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gold-400 opacity-75 animate-ping"></div>
        <Phone className="w-6 h-6 relative z-10" />
      </div>
      <span className="font-semibold text-lg hidden sm:inline-block tracking-wide">0869 566 982</span>
      <span className="font-semibold text-lg sm:hidden">Hotline</span>
    </a>
  );
};