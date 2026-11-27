import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChevronRight, Ambulance } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactPage() {
  return (
    <div className="portal-subpage">
      {/* 1. BREADCRUMB & PAGE HEADER */}
      <div className="portal-page-header">
        <div className="container">
          <nav className="portal-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <ChevronRight size={13} />
            <span>Liên hệ</span>
          </nav>

          <h1 className="page-header-title">
            Thông Tin Trực Ban Tác Chiến, Cấp Cứu & Liên Hệ Quân Y 7A
          </h1>
          <p className="page-header-desc">
            Bệnh Viện Quân Y 7A đóng quân tại trung tâm Quận 5, TP.HCM. 
            Lực lượng thường trực cấp cứu, bảo vệ và ban trực ban tác chiến hoạt động 24/24 sẵn sàng tiếp nhận, 
            ứng cứu mọi tình huống khẩn cấp cho lực lượng vũ trang và nhân dân.
          </p>
        </div>
      </div>

      {/* 2. DIRECT CONTACT INFO TILES */}
      <div className="container" style={{ paddingTop: '40px' }}>
        <div className="portal-contact-top-grid">
          <div className="contact-info-tile emergency-tile">
            <Ambulance size={28} />
            <div>
              <span className="tile-label">TRỰC BAN CẤP CỨU 24/7</span>
              <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="tile-value text-danger">
                {CLINIC_INFO.emergencyPhone}
              </a>
              <p>Tiếp nhận cấp cứu đa chấn thương và vận chuyển khẩn cấp.</p>
            </div>
          </div>

          <div className="contact-info-tile">
            <Phone size={28} className="text-military" />
            <div>
              <span className="tile-label">TỔNG ĐÀI ĐẶT KHÁM & BHYT</span>
              <a href={`tel:${CLINIC_INFO.hotline}`} className="tile-value text-navy">
                {CLINIC_INFO.hotline}
              </a>
              <p>Tư vấn chế độ BHYT và giải đáp thắc mắc người bệnh.</p>
            </div>
          </div>

          <div className="contact-info-tile">
            <MapPin size={28} className="text-military" />
            <div>
              <span className="tile-label">ĐỊA CHỈ BỆNH VIỆN</span>
              <div className="tile-value-text">
                {CLINIC_INFO.address}
              </div>
              <p>Bãi đỗ xe máy & xe ô tô rộng rãi, an toàn có vệ binh trông giữ.</p>
            </div>
          </div>

          <div className="contact-info-tile">
            <Clock size={28} className="text-military" />
            <div>
              <span className="tile-label">THỜI GIAN LÀM VIỆC</span>
              <div className="tile-value-text">
                Thứ 2 - Thứ 6: 07h00 - 16h30
              </div>
              <p>Thứ 7: 07h00 - 12h00 | Cấp cứu: 24/24 tất cả các ngày.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTACT SECTION FORM & MAP */}
      <ContactSection />
    </div>
  );
}
