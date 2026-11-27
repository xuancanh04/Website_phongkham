import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="hosp-footer">
      <div className="container">
        <div className="hosp-footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '4px 8px',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                <img 
                  src="/logo_7a_brand.png" 
                  alt="Logo Bệnh Viện Quân Y 7A" 
                  style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  QUÂN Y <span style={{ color: '#ef4444' }}>7A</span>
                </h3>
                <p style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Cục Hậu Cần Quân Khu 7
                </p>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Bệnh viện Đa khoa Hạng I tuyến cuối Quân khu 7. “Sự an toàn của người bệnh là ưu tiên hàng đầu của chúng tôi” 
              — Hiện đại, Chuyên sâu, Thân thiện.
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
              <li><Link to="/chuyen-khoa">Khoa Chấn Thương Chỉnh Hình (B1)</Link></li>
              <li><Link to="/chuyen-khoa">Khoa Nội Tim - Thận - Khớp (A1)</Link></li>
              <li><Link to="/chuyen-khoa">Khoa Ngoại Tổng Hợp (B2)</Link></li>
              <li><Link to="/chuyen-khoa">Khoa Thận Nhân Tạo (Lọc Máu)</Link></li>
              <li><Link to="/chuyen-khoa">Khoa Hồi Sức Cấp Cứu (ICU)</Link></li>
              <li><Link to="/chuyen-khoa">Khoa Y Học Cổ Truyền (A5)</Link></li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h5 className="hosp-footer-h5">Dịch Vụ & Tiện Ích</h5>
            <ul className="hosp-footer-list">
              <li><Link to="/dat-lich">Đăng ký lịch khám trực tuyến</Link></li>
              <li><Link to="/bang-gia">Bảng giá viện phí & gói khám</Link></li>
              <li><Link to="/bac-si">Danh sách Bác sĩ chuyên khoa</Link></li>
              <li><Link to="/bang-gia">Chính sách thanh toán BHYT</Link></li>
              <li><Link to="/tin-tuc">Tin tức & hoạt động y khoa</Link></li>
              <li><Link to="/lien-he">Thông tin liên hệ & bản đồ</Link></li>
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
