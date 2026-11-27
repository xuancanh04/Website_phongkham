import React from 'react';
import { PhoneCall, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { TEENNIE_INFO } from '../data/teennieData';

export default function TeennieFloating({ onOpenBooking }) {
  return (
    <div className="teennie-floating-dial">
      <a 
        href={`tel:${TEENNIE_INFO.hotline}`} 
        className="dial-btn call"
        title="Gọi hotline tư vấn niềng răng"
      >
        <PhoneCall size={18} />
        <span>Gọi {TEENNIE_INFO.hotline}</span>
      </a>

      <button 
        type="button" 
        className="dial-btn book"
        onClick={onOpenBooking}
        title="Đăng ký thăm khám 10 bước 0đ"
      >
        <Sparkles size={18} color="#fcb900" />
        <span>Khám 0đ & Nhận 5Tr</span>
      </button>
    </div>
  );
}
