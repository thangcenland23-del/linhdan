import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về Chúng Tôi', href: '#ve-chung-toi' },
    { name: 'Triết Lý', href: '#triet-ly' },
    { name: 'Dịch Vụ', href: '#dich-vu' },
    { name: 'Liên Hệ', href: '#lien-he' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Leaf className={`w-8 h-8 ${isScrolled ? 'text-emerald-800' : 'text-white'}`} />
          <span className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
            LINH ĐAN
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0869566982"
            className={`border px-6 py-2 rounded-full font-medium transition-all ${
              isScrolled
                ? 'border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-emerald-900'
            }`}
          >
            0869 566 982
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-6 px-4 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-emerald-900 font-medium text-lg py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};