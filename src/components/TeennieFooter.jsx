import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { TEENNIE_INFO } from '../data/teennieData';

export default function TeennieFooter() {
  return (
    <footer className="teennie-footer" id="contact">
      <div className="container">
        <div className="footer-grid-quad">
          {/* Col 1: Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img 
                src={TEENNIE_INFO.logoUrl} 
                alt="Teennie Clinic" 
                style={{ height: '42px', width: 'auto' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <h4 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 900 }}>
                TEENNIE <span style={{ color: 'var(--teennie-coral)' }}>CLINIC</span>
              </h4>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '18px' }}>
              Nha khoa chuyên sâu niềng răng học đường TP.HCM, do nghệ sĩ Ngô Kiến Huy và các cộng sự 
              chuyên môn đồng sáng lập. Thuộc hệ sinh thái San Dental.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.78rem',
              color: '#38bdf8'
            }}>
              <ShieldCheck size={16} />
              <span>{TEENNIE_INFO.license}</span>
            </div>
          </div>

          {/* Col 2: Dịch vụ Niềng */}
          <div>
            <h5 className="footer-title-h5">Niềng Răng Học Đường</h5>
            <ul className="footer-links-col">
              <li><a href="#methods">Mắc cài kim loại kinh điển</a></li>
              <li><a href="#methods">Mắc cài kim loại tự đóng</a></li>
              <li><a href="#methods">Mắc cài sứ thẩm mỹ</a></li>
              <li><a href="#methods">Niềng răng trong suốt Invisalign</a></li>
              <li><a href="#calculator">Chính sách trả góp 0%</a></li>
            </ul>
          </div>

          {/* Col 3: Hỗ trợ khách hàng */}
          <div>
            <h5 className="footer-title-h5">Khách Hàng & Ưu Đãi</h5>
            <ul className="footer-links-col">
              <li><a href="#booking">Gói khám 10 bước 0đ</a></li>
              <li><a href="#before-after">Hình ảnh trước và sau niềng</a></li>
              <li><a href="#doctors">Đội ngũ bác sĩ chỉnh nha</a></li>
              <li><a href="#faq">Câu hỏi thường gặp</a></li>
              <li><a href="#why">Chính sách bảo hành nụ cười</a></li>
            </ul>
          </div>

          {/* Col 4: Thông tin liên hệ */}
          <div>
            <h5 className="footer-title-h5">Thông Tin Phòng Khám</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={18} color="var(--teennie-coral)" style={{ flexShrink: 0 }} />
                <span>{TEENNIE_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>Hotline: <strong style={{ color: '#ffffff' }}>{TEENNIE_INFO.hotline}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Clock size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>Giờ làm việc: {TEENNIE_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem'
        }}>
          <p>© {new Date().getFullYear()} {TEENNIE_INFO.name}. Tất cả các quyền được bảo lưu.</p>
          <p>Thiết kế phỏng theo phong cách nhận diện chính thức của teennie.vn</p>
        </div>
      </div>
    </footer>
  );
}
