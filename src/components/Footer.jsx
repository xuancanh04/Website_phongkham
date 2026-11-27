import React from 'react';
import { HeartPulse, Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  return (
    <footer className="luxury-footer">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <HeartPulse size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  MediCare <span style={{ color: '#38bdf8' }}>Plus</span>
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Bệnh Viện Đa Khoa Quốc Tế
                </p>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '22px' }}>
              Cung cấp giải pháp chăm sóc sức khỏe chuẩn mực Hoa Kỳ, cam kết bảo mật hồ sơ 
              và tối ưu hóa phác đồ điều trị cho từng cá nhân và gia đình.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              color: '#38bdf8',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Award size={16} />
              <span>{CLINIC_INFO.accreditation}</span>
            </div>
          </div>

          {/* Specialties links */}
          <div>
            <h4 className="footer-col-title">Chuyên Khoa</h4>
            <ul className="footer-nav-list">
              <li><a href="#specialties" className="footer-nav-link">Khoa Nội Tổng Quát</a></li>
              <li><a href="#specialties" className="footer-nav-link">Khoa Tim Mạch Can Thiệp</a></li>
              <li><a href="#specialties" className="footer-nav-link">Khoa Sản Phụ Khoa</a></li>
              <li><a href="#specialties" className="footer-nav-link">Khoa Nhi & Tiêm Chủng</a></li>
              <li><a href="#specialties" className="footer-nav-link">Khoa Tai Mũi Họng</a></li>
              <li><a href="#specialties" className="footer-nav-link">Khoa Răng Hàm Mặt</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="footer-col-title">Dịch Vụ & Hỗ Trợ</h4>
            <ul className="footer-nav-list">
              <li><a href="#booking" className="footer-nav-link">Đặt lịch khám online</a></li>
              <li><a href="#pricing" className="footer-nav-link">Bảng giá gói khám tổng quát</a></li>
              <li><a href="#doctors" className="footer-nav-link">Danh sách Bác sĩ chuyên khoa</a></li>
              <li><a href="#facilities" className="footer-nav-link">Trang thiết bị công nghệ</a></li>
              <li><a href="#faqs" className="footer-nav-link">Chính sách thanh toán BHYT</a></li>
              <li><a href="#contact" className="footer-nav-link">Bảo mật thông tin người bệnh</a></li>
            </ul>
          </div>

          {/* Emergency & Address */}
          <div>
            <h4 className="footer-col-title">Đường Dây Nóng</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>CSKH: <strong>{CLINIC_INFO.hotline}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                <span style={{ color: '#fca5a5' }}>Cấp cứu: <strong>{CLINIC_INFO.emergencyPhone}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. {CLINIC_INFO.license}.</p>
          <p>Tuân thủ nghiêm ngặt Luật Khám bệnh, chữa bệnh Việt Nam và Tiêu chuẩn JCI.</p>
        </div>
      </div>
    </footer>
  );
}
