import React from 'react';
import { Flower2, Users, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Chữa Lành Cá Nhân",
      description: "Các liệu pháp tâm lý và thiền định giúp bạn giải tỏa căng thẳng, chữa lành những vết thương cảm xúc và tìm lại sự cân bằng.",
      icon: <Flower2 className="w-12 h-12" />,
    },
    {
      id: 2,
      title: "Hạnh Phúc Gia Đình",
      description: "Tư vấn và đồng hành cùng các gia đình để xây dựng sự thấu hiểu, kết nối yêu thương và hóa giải mâu thuẫn thế hệ.",
      icon: <Users className="w-12 h-12" />,
    },
    {
      id: 3,
      title: "Khai Phá Tiềm Năng",
      description: "Đánh thức sức mạnh nội tại, giúp bạn sống một cuộc đời ý nghĩa, tự tin và trọn vẹn với sứ mệnh của mình.",
      icon: <Sparkles className="w-12 h-12" />,
    }
  ];

  return (
    <section id="dich-vu" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Dịch Vụ Của Chúng Tôi</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">Hành Trình Chuyển Hóa</h2>
          <div className="w-24 h-1 bg-emerald-800 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gold-400 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {service.icon}
              </div>
              
              <div className="mb-6 inline-flex p-4 rounded-full bg-emerald-50 text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-emerald-900 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              
              <a href="#lien-he" className="inline-block text-gold-600 font-medium border-b border-gold-600 pb-1 hover:text-emerald-800 hover:border-emerald-800 transition-all">
                Tìm hiểu thêm &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};