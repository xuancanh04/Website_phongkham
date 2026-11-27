import { HeartPulse, Phone, Mail, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="hosp-footer">
      <div className="container">
        <div className="hosp-footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'var(--hospital-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <HeartPulse size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  QUÂN Y <span style={{ color: '#38bdf8' }}>7A</span>
                </h3>
                <p style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Cục Hậu Cần Quân Khu 7
                </p>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Bệnh viện Đa khoa Hạng I tuyến cuối Quân khu 7. Y đức chuẩn mực, kỷ luật quân đội, 
              kỹ thuật chuyên sâu, hết lòng phục vụ sức khỏe thương bệnh binh, bộ đội và nhân dân.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.76rem',
              color: '#38bdf8',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Award size={14} />
              <span>{CLINIC_INFO.accreditation}</span>
            </div>
          </div>

          {/* Specialties links */}
          <div>
            <h5 className="hosp-footer-h5">Chuyên Khoa Mũi Nhọn</h5>
            <ul className="hosp-footer-list">
              <li><a href="#specialties">Khoa Chấn Thương Chỉnh Hình (B1)</a></li>
              <li><a href="#specialties">Khoa Nội Tim - Thận - Khớp (A1)</a></li>
              <li><a href="#specialties">Khoa Ngoại Tổng Hợp (B2)</a></li>
              <li><a href="#specialties">Khoa Thận Nhân Tạo (Lọc Máu)</a></li>
              <li><a href="#specialties">Khoa Hồi Sức Cấp Cứu (ICU)</a></li>
              <li><a href="#specialties">Khoa Y Học Cổ Truyền (A5)</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h5 className="hosp-footer-h5">Dịch Vụ & Tiện Ích</h5>
            <ul className="hosp-footer-list">
              <li><a href="#booking">Đặt lịch khám online</a></li>
              <li><a href="#pricing">Bảng giá gói khám tổng quát</a></li>
              <li><a href="#doctors">Danh sách Bác sĩ chuyên khoa</a></li>
              <li><a href="#facilities">Trang thiết bị chẩn đoán</a></li>
              <li><a href="#faqs">Chính sách thanh toán BHYT</a></li>
              <li><a href="#contact">Đăng ký tư vấn y khoa</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="hosp-footer-h5">Trực Cấp Cứu & Liên Hệ</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', gap: '8px', color: '#cbd5e1' }}>
                <MapPin size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', color: '#cbd5e1' }}>
                <Phone size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>Tổng đài: <strong>{CLINIC_INFO.hotline}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '8px', color: '#cbd5e1' }}>
                <Phone size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                <span>Cấp cứu 24/7: <strong style={{ color: '#f87171' }}>{CLINIC_INFO.emergencyPhone}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '8px', color: '#cbd5e1' }}>
                <Mail size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Bệnh viện Đa khoa Hạng I tuyến cuối Quân khu 7 - Bộ Quốc Phòng.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#faqs" style={{ color: '#94a3b8' }}>Chính sách bảo mật</a>
            <a href="#faqs" style={{ color: '#94a3b8' }}>Quy định khám chữa bệnh</a>
            <a href="#faqs" style={{ color: '#94a3b8' }}>Quyền lợi BHYT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
