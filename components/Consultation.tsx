import React from 'react';
import { Send, Phone, Clock, MessageCircle } from 'lucide-react';

export const Consultation: React.FC = () => {
  return (
    <section id="tu-van" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-900 via-gold-400 to-emerald-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left: Info & Context */}
           <div className="space-y-8 animate-fadeInLeft">
              <div>
                <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2 block">Kết Nối Với Chúng Tôi</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 leading-tight">
                  Gửi Gắm Tâm Sự <br/>
                  <span className="text-gold-500 italic">Tìm Lại Bình An</span>
                </h2>
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                  Mọi hành trình chữa lành đều bắt đầu bằng sự lắng nghe. Hãy để lại thông tin, Linh Đan sẽ liên hệ lại với bạn trong thời gian sớm nhất để cùng chia sẻ và tháo gỡ những khúc mắc trong lòng.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-emerald-900">Hotline Tư Vấn</h4>
                    <p className="text-slate-500 mb-1 font-light">Hỗ trợ đặt lịch & tư vấn nhanh</p>
                    <a href="tel:0869566982" className="text-2xl font-serif font-bold text-gold-600 hover:text-gold-500 transition-colors">0869 566 982</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-emerald-900">Giờ Làm Việc</h4>
                    <p className="text-slate-500 font-light">Thứ 2 - Chủ Nhật: 8:00 - 21:00</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block relative mt-8 rounded-2xl overflow-hidden h-64 shadow-lg border border-emerald-100">
                 <img src="https://picsum.photos/id/44/800/600" alt="Peaceful tea time" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
              </div>
           </div>

           {/* Right: Form */}
           <div className="bg-emerald-50/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white shadow-xl relative animate-fadeInRight">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-gold-500 fill-gold-500"/>
                Đặt Lịch Hẹn Tư Vấn
              </h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Họ và tên</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white transition-all shadow-sm placeholder-emerald-900/30" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Số điện thoại</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white transition-all shadow-sm placeholder-emerald-900/30" placeholder="0869 566 982" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Chủ đề quan tâm</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white transition-all shadow-sm text-slate-700 appearance-none">
                      <option>Tư vấn Chữa lành Cá nhân</option>
                      <option>Tư vấn Hạnh phúc Gia đình</option>
                      <option>Khai phá Tiềm năng</option>
                      <option>Khác</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Lời nhắn của bạn</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white transition-all shadow-sm placeholder-emerald-900/30" placeholder="Chia sẻ sơ lược về vấn đề bạn đang gặp phải..."></textarea>
                </div>

                <button className="w-full py-4 bg-emerald-900 text-white font-bold rounded-xl shadow-lg hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg group mt-4">
                  <span>Gửi Thông Tin Ngay</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4 italic">
                  *Thông tin của bạn được cam kết bảo mật tuyệt đối.
                </p>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};