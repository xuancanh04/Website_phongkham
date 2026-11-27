import { Link } from 'react-router-dom';
import { PhoneCall, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingActions() {
  return (
    <div className="hosp-floating-cockpit">
      <a 
        href={`tel:${CLINIC_INFO.emergencyPhone}`} 
        className="hosp-float-btn emergency"
        title="Gọi đường dây nóng cấp cứu khẩn cấp 24/7"
      >
        <PhoneCall size={16} />
        <span>Cấp cứu: {CLINIC_INFO.emergencyPhone}</span>
      </a>

      <Link 
        to="/dat-lich" 
        className="hosp-float-btn book"
        title="Đặt lịch khám trực tuyến"
      >
        <Calendar size={16} />
        <span>Đặt lịch khám</span>
      </Link>
    </div>
  );
}
