import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ve-chung-toi" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <img
          src="https://picsum.photos/id/28/1920/1200"
          alt="Forest nature healing"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-emerald-900/20 to-emerald-950/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="block text-gold-400 font-serif text-xl md:text-2xl italic tracking-wider mb-4 animate-fade-in-up">
          Chữa Lành & Hạnh Phúc
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Tìm Về Sự <br />
          <span className="text-gold-400 italic">Bình An Nội Tâm</span>
        </h1>
        <p className="text-slate-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Khi tâm trí tĩnh lặng, hạnh phúc sẽ tự tìm về. Chúng tôi đồng hành cùng bạn trên con đường thấu hiểu bản thân và vun đắp tổ ấm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#dich-vu"
            className="px-8 py-3 bg-white text-emerald-900 rounded-full font-semibold hover:bg-gold-50 transition-colors shadow-lg"
          >
            Khám Phá Hành Trình
          </a>
          <a
            href="#tu-van"
            className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Liên Hệ Tư Vấn
          </a>
        </div>
      </div>
    </section>
  );
};