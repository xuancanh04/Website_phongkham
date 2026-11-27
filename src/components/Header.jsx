import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Search, Menu, X, HeartPulse, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Header({ onOpenBooking, onOpenLookup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="hosp-header-wrap">
      {/* Slim Modern Topbar */}
      <div className="hosp-topbar">
        <div className="container hosp-topbar-inner">
          <div className="hosp-meta-row">
            <span className="hosp-live-pill">
              <span className="hosp-pulse-dot"></span>
              Đang mở cửa
            </span>
            <span className="hosp-meta-item">
              <Clock size={12} />
              <span>07:00 - 16:30</span>
            </span>
            <span className="hosp-meta-divider">|</span>
            <span className="hosp-meta-item">
              <MapPin size={12} />
              <span>466 Nguyễn Trãi, Q.5, TP.HCM</span>
            </span>
          </div>

          <div className="hosp-meta-row">
            <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="hosp-emergency-badge">
              <Phone size={11} />
              <span>Cấp cứu: {CLINIC_INFO.emergencyPhone}</span>
            </a>
            <span className="hosp-meta-divider">|</span>
            <span className="hosp-meta-item hosp-accredit-item">
              <Award size={12} />
              <span>Bệnh Viện Hạng I Quân Khu 7</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="hosp-main-header">
        <div className="container hosp-nav-container">
          {/* Logo Bệnh Viện Quân Y 7A */}
          <div className="hosp-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="hosp-logo-icon">
              <HeartPulse size={22} strokeWidth={2.5} />
            </div>
            <div>
              <div className="hosp-brand-title">
                QUÂN Y <span>7A</span>
              </div>
              <div className="hosp-brand-sub">
                Cục Hậu Cần Quân Khu 7
              </div>
            </div>
          </div>

          {/* Nav Menu */}
          <ul className="hosp-menu-list">
            <li className="hosp-menu-item"><a href="#specialties">Chuyên khoa</a></li>
            <li className="hosp-menu-item"><a href="#doctors">Bác sĩ</a></li>
            <li className="hosp-menu-item"><a href="#pricing">Gói khám</a></li>
            <li className="hosp-menu-item"><a href="#facilities">Trang thiết bị</a></li>
            <li className="hosp-menu-item"><a href="#process">Quy trình</a></li>
            <li className="hosp-menu-item"><a href="#faqs">Hỏi đáp BHYT</a></li>
            <li className="hosp-menu-item"><a href="#contact">Liên hệ</a></li>
          </ul>

          {/* Action CTAs */}
          <div className="hosp-nav-actions">
            <button 
              type="button" 
              className="btn-hosp btn-hosp-sm btn-hosp-secondary"
              onClick={onOpenLookup}
              title="Tra cứu phiếu khám đã đăng ký"
            >
              <Search size={14} />
              <span>Tra cứu lịch</span>
            </button>

            <button 
              type="button" 
              className="btn-hosp btn-hosp-sm btn-hosp-primary btn-hosp-pill"
              onClick={onOpenBooking}
            >
              <Calendar size={14} />
              <span>Đặt lịch khám</span>
            </button>

            <button 
              type="button"
              className="hosp-mobile-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="hosp-mobile-drawer">
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)}>Chuyên khoa y tế</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Đội ngũ bác sĩ</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Bảng giá gói khám</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Trang thiết bị y khoa</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Quy trình khám bệnh</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>Hỏi đáp thanh toán BHYT</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ & Bản đồ</a>
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <button 
                type="button" 
                className="btn-hosp btn-hosp-md btn-hosp-secondary" 
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); onOpenLookup(); }}
              >
                Tra cứu
              </button>
              <button 
                type="button" 
                className="btn-hosp btn-hosp-md btn-hosp-primary" 
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
