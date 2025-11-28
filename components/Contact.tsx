import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="lien-he" className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white tracking-widest">LINH ĐAN</h3>
            <p className="text-emerald-100/80 font-light leading-relaxed">
              Nơi chữa lành tâm hồn, ươm mầm hạnh phúc và tìm lại sự bình an đích thực trong mỗi chúng ta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-gold-400">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              <li><a href="#ve-chung-toi" className="text-emerald-100/70 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#dich-vu" className="text-emerald-100/70 hover:text-white transition-colors">Dịch vụ chữa lành</a></li>
              <li><a href="#triet-ly" className="text-emerald-100/70 hover:text-white transition-colors">Triết lý sống</a></li>
              <li><a href="#" className="text-emerald-100/70 hover:text-white transition-colors">Blog chia sẻ</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-gold-400">Thông Tin Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <span className="text-emerald-100/80">27, Ngõ 5,Dư Xá Hạ, Hòa Xá, TP. Hà Nội</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href="tel:0931796363" className="text-emerald-100/80 hover:text-white font-bold text-lg">0869 566 982</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-emerald-100/80"> mentorlinhdan@gmai.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Form */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-gold-400">Đăng Ký Tư Vấn</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Họ tên của bạn" 
                className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-800 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-emerald-400/50"
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại" 
                className="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-800 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-emerald-400/50"
              />
              <button className="w-full py-3 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-colors shadow-lg">
                Gửi Thông Tin
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 text-center">
          <p className="text-emerald-100/40 text-sm">
            © 2025 Linh Đan - Chữa Lành & Bình An Nội Tâm. Bản Quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};