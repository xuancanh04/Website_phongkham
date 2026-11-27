import React, { useState } from 'react';
import { Phone, MapPin, Clock, Sparkles, Menu, X } from 'lucide-react';
import { TEENNIE_INFO } from '../data/teennieData';

export default function TeennieHeader({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header-wrapper">
      {/* Topbar */}
      <div className="teennie-topbar">
        <div className="container topbar-flex">
          <div className="topbar-left-meta">
            <span className="topbar-meta-item">
              <MapPin size={13} color="#38bdf8" />
              <span>{TEENNIE_INFO.address}</span>
            </span>
            <span className="topbar-meta-item">
              <Clock size={13} color="#38bdf8" />
              <span>{TEENNIE_INFO.operatingHours}</span>
            </span>
          </div>

          <div className="topbar-right-meta">
            <a href={`tel:${TEENNIE_INFO.hotline}`} className="topbar-badge-hotline">
              <Phone size={12} />
              <span>Hotline: {TEENNIE_INFO.hotline}</span>
            </a>
            <span className="topbar-founder-tag">
              ★ {TEENNIE_INFO.coFounder}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="teennie-header">
        <div className="container navbar-container">
          {/* Logo Teennie */}
          <div className="brand-clickable" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={TEENNIE_INFO.logoUrl} 
              alt="Nha khoa Teennie" 
              className="teennie-logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="brand-text-wrap">
              <div className="brand-primary-name">
                TEENNIE <span className="brand-accent-coral">CLINIC</span>
              </div>
              <div className="brand-subline">
                Niềng Răng Học Đường
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="teennie-nav-list">
            <li className="teennie-nav-item"><a href="#problems">Tình trạng răng</a></li>
            <li className="teennie-nav-item"><a href="#methods">Phương pháp niềng</a></li>
            <li className="teennie-nav-item"><a href="#calculator">Bảng giá & Trả góp</a></li>
            <li className="teennie-nav-item"><a href="#before-after">Trước & Sau</a></li>
            <li className="teennie-nav-item"><a href="#why">5 Lý do chọn</a></li>
            <li className="teennie-nav-item"><a href="#doctors">Bác sĩ</a></li>
            <li className="teennie-nav-item"><a href="#faq">Hỏi đáp</a></li>
            <li className="teennie-nav-item"><a href="#contact">Liên hệ</a></li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions-wrap">
            <a 
              href={`tel:${TEENNIE_INFO.hotline}`}
              className="btn-teennie btn-sm btn-blue-outline hotline-pill"
            >
              <Phone size={13} color="#009efd" />
              <span>{TEENNIE_INFO.hotline}</span>
            </a>

            <button 
              type="button" 
              className="btn-teennie btn-md btn-coral-glow cta-book-pill"
              onClick={onOpenBooking}
            >
              <Sparkles size={15} />
              <span>Khám 10 Bước 0đ</span>
            </button>

            {/* Mobile menu trigger */}
            <button 
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer-pane">
            <a href="#problems" onClick={() => setMobileMenuOpen(false)}>Tình trạng răng</a>
            <a href="#methods" onClick={() => setMobileMenuOpen(false)}>Phương pháp niềng</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Bảng giá & Trả góp 0%</a>
            <a href="#before-after" onClick={() => setMobileMenuOpen(false)}>Hình ảnh Trước & Sau</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>5 Lý do chọn Teennie</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Đội ngũ Bác sĩ</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Câu hỏi thường gặp</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Thông tin liên hệ</a>
            <button 
              type="button" 
              className="btn-teennie btn-md btn-coral-glow" 
              style={{ width: '100%', marginTop: '8px' }}
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
            >
              Đặt Lịch Khám 10 Bước 0đ
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
