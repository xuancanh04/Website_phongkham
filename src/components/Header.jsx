import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Search, Menu, X, ShieldCheck, HeartPulse, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Header({ onOpenBooking, onOpenLookup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Notice Bar */}
      <div className="top-notice-bar">
        <div className="container notice-bar-inner">
          <div className="notice-meta-group">
            <span className="live-status-pill">
              <span className="pulse-dot"></span>
              Đang mở cửa tiếp đón
            </span>
            <span className="notice-item">
              <Clock size={13} />
              {CLINIC_INFO.operatingHours.weekdays}
            </span>
            <span className="notice-item">
              <MapPin size={13} />
              {CLINIC_INFO.address}
            </span>
          </div>

          <div className="notice-meta-group">
            <span className="emergency-hotline-badge">
              <Phone size={13} />
              Cấp cứu 24/7: {CLINIC_INFO.emergencyPhone}
            </span>
            <span className="notice-item" style={{ fontSize: '0.78rem', color: '#93c5fd' }}>
              <Award size={13} />
              {CLINIC_INFO.accreditation}
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <nav className="header-glass">
        <div className="container header-container">
          {/* Brand Logo */}
          <div className="brand-entity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="brand-symbol">
              <HeartPulse size={26} strokeWidth={2.5} />
            </div>
            <div>
              <div className="brand-name">
                MediCare <span>Plus</span>
              </div>
              <div className="brand-caption">
                Bệnh Viện Đa Khoa Quốc Tế
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="nav-menu-list">
            <li className="nav-menu-item"><a href="#about">Về chúng tôi</a></li>
            <li className="nav-menu-item"><a href="#specialties">Chuyên khoa</a></li>
            <li className="nav-menu-item"><a href="#doctors">Bác sĩ</a></li>
            <li className="nav-menu-item"><a href="#booking">Đặt lịch hẹn</a></li>
            <li className="nav-menu-item"><a href="#pricing">Gói khám</a></li>
            <li className="nav-menu-item"><a href="#facilities">Trang thiết bị</a></li>
            <li className="nav-menu-item"><a href="#faqs">Hỏi đáp</a></li>
            <li className="nav-menu-item"><a href="#contact">Liên hệ</a></li>
          </ul>

          {/* Header Action CTAs */}
          <div className="header-actions-group">
            <button 
              type="button" 
              className="btn-core btn-secondary-white"
              onClick={onOpenLookup}
              title="Tra cứu lịch hẹn đã đặt"
            >
              <Search size={16} />
              <span>Tra cứu lịch</span>
            </button>

            <button 
              type="button" 
              className="btn-core btn-primary-glow"
              onClick={onOpenBooking}
            >
              <Calendar size={17} />
              <span>Đặt lịch khám</span>
            </button>

            <button 
              type="button" 
              className="btn-core btn-ghost mobile-menu-toggle"
              style={{ padding: '8px' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Giới thiệu bệnh viện</a>
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)}>Chuyên khoa điều trị</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Đội ngũ bác sĩ</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)}>Đặt lịch khám online</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Bảng giá gói khám</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Trang thiết bị y tế</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>Hỏi đáp y khoa</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ & Địa chỉ</a>
            <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <button 
                type="button" 
                className="btn-core btn-secondary-white" 
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); onOpenLookup(); }}
              >
                Tra cứu
              </button>
              <button 
                type="button" 
                className="btn-core btn-primary-glow" 
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              >
                Đặt khám
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
