import React, { useEffect, useState, useRef } from 'react';
import { Heart, Sun, Feather } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate offset based on section position relative to viewport
        // Only animate when near viewport to save resources
        if (rect.top < window.innerHeight && rect.bottom > 0) {
           // Move image down slightly as we scroll down (parallax)
           const speed = 0.1;
           setOffset((window.innerHeight - rect.top) * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="triet-ly" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Parallax */}
          <div 
            className="relative will-change-transform transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500/30 rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500/30 rounded-br-3xl"></div>
            <img
              src="https://picsum.photos/id/106/800/1000"
              alt="Meditation and Peace"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8 relative z-10 bg-white/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl">
            <div>
              <h2 className="text-emerald-800 font-serif text-5xl font-bold mb-4">
                Cốt Lõi Của Hạnh Phúc
              </h2>
              <div className="w-20 h-1 bg-gold-500 mb-6"></div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Trong cuộc sống hối hả, chúng ta thường mải miết chạy theo những giá trị bên ngoài mà quên mất rằng, kho báu thực sự nằm sâu bên trong mỗi người. 
                <strong className="text-emerald-800 font-medium"> Bình an nội tâm</strong> không phải là đích đến, mà là con đường chúng ta đi qua mỗi ngày.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Heart className="w-6 h-6 text-emerald-600" />,
                  title: "Chữa Lành",
                  desc: "Đối diện và ôm ấp những tổn thương để tái tạo năng lượng sống tích cực."
                },
                {
                  icon: <Sun className="w-6 h-6 text-gold-500" />,
                  title: "Thấu Hiểu",
                  desc: "Lắng nghe tiếng nói sâu thẳm bên trong để hiểu rõ giá trị bản thân."
                },
                {
                  icon: <Feather className="w-6 h-6 text-emerald-400" />,
                  title: "Tự Do",
                  desc: "Giải phóng tâm trí khỏi những ràng buộc để sống trọn vẹn từng khoảnh khắc."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4 hover:bg-emerald-50 rounded-xl transition-colors duration-300">
                  <div className="mt-1 p-2 bg-white rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <p className="font-serif text-2xl italic text-gold-600">
                "Hạnh phúc không đến từ những gì ta có, mà đến từ cách ta cảm nhận cuộc sống."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};