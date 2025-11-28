import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Chị Minh Anh",
      role: "Doanh nhân",
      content: "Chương trình đã giúp tôi tìm lại được điểm cân bằng trong cuộc sống bận rộn. Tôi đã học được cách yêu thương bản thân và kết nối sâu sắc hơn với chồng con.",
      image: "https://picsum.photos/id/64/100/100"
    },
    {
      id: 2,
      name: "Anh Hoàng Nam",
      role: "Kiến trúc sư",
      content: "Sự bình an nội tâm là chìa khóa mà tôi tìm kiếm bấy lâu nay. Cảm ơn đội ngũ đã tận tâm hướng dẫn tôi đi qua những giai đoạn khó khăn nhất.",
      image: "https://picsum.photos/id/91/100/100"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-4xl font-serif font-bold text-emerald-900 mb-16">
          Câu Chuyện Hạnh Phúc
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 right-8 text-emerald-200 w-10 h-10" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-serif text-xl font-bold text-emerald-900">{item.name}</h4>
                  <span className="text-sm text-gold-600 font-medium">{item.role}</span>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};