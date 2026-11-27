import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <div className="floating-cockpit">
      <a 
        href={`tel:${CLINIC_INFO.emergencyPhone}`} 
        className="cockpit-btn emergency"
        title="Gọi đường dây nóng cấp cứu khẩn cấp 24/7"
      >
        <PhoneCall size={19} />
        <span>Cấp cứu {CLINIC_INFO.emergencyPhone}</span>
      </a>

      <button 
        type="button" 
        className="cockpit-btn book"
        onClick={onOpenBooking}
        title="Đặt lịch khám trực tuyến nhanh"
      >
        <Calendar size={19} />
        <span>Đặt lịch khám</span>
      </button>
    </div>
  );
}
