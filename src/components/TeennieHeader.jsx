import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Sparkles, Menu, X, Smile } from 'lucide-react';
import { TEENNIE_INFO } from '../data/teennieData';

export default function TeennieHeader({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Topbar */}
      <div className="teennie-topbar">
        <div className="container topbar-flex">
          <div className="topbar-left-meta">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#38bdf8" />
              {TEENNIE_INFO.address}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="#38bdf8" />
              {TEENNIE_INFO.operatingHours}
            </span>
          </div>

          <div className="topbar-right-meta">
            <span className="topbar-badge-hotline">
              <Phone size={13} />
              Hotline: {TEENNIE_INFO.hotline}
            </span>
            <span style={{ color: '#fed7aa', fontSize: '0.8rem', fontWeight: 600 }}>
              ★ {TEENNIE_INFO.coFounder}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="teennie-header">
        <div className="container navbar-container">
          {/* Logo Teennie */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={TEENNIE_INFO.logoUrl} 
              alt="Nha khoa Teennie" 
              className="teennie-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--teennie-blue-dark)', lineHeight: 1 }}>
                TEENNIE <span style={{ color: 'var(--teennie-coral)' }}>CLINIC</span>
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--teennie-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Niềng Răng Học Đường
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="teennie-nav-list">
            <li className="teennie-nav-item"><a href="#problems">Tình trạng răng</a></li>
            <li className="teennie-nav-item"><a href="#methods">Phương pháp niềng</a></li>
            <li className="teennie-nav-item"><a href="#calculator">Trả góp 0%</a></li>
            <li className="teennie-nav-item"><a href="#before-after">Trước & Sau</a></li>
            <li className="teennie-nav-item"><a href="#why">5 Lý do chọn</a></li>
            <li className="teennie-nav-item"><a href="#doctors">Bác sĩ</a></li>
            <li className="teennie-nav-item"><a href="#faq">Hỏi đáp</a></li>
            <li className="teennie-nav-item"><a href="#contact">Liên hệ</a></li>
          </ul>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href={`tel:${TEENNIE_INFO.hotline}`}
              className="btn-teennie btn-blue-outline"
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              <Phone size={15} />
              <span>{TEENNIE_INFO.hotline}</span>
            </a>

            <button 
              type="button" 
              className="btn-teennie btn-coral-glow"
              onClick={onOpenBooking}
              style={{ padding: '11px 22px', fontSize: '0.92rem' }}
            >
              <Sparkles size={16} />
              <span>Khám 10 Bước 0đ</span>
            </button>

            <button 
              type="button"
              className="mobile-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'none' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--teennie-border)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: 'var(--shadow-teennie-lg)'
          }}>
            <a href="#problems" onClick={() => setMobileMenuOpen(false)}>Tình trạng răng của bạn</a>
            <a href="#methods" onClick={() => setMobileMenuOpen(false)}>Các phương pháp niềng</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Tính toán trả góp 0%</a>
            <a href="#before-after" onClick={() => setMobileMenuOpen(false)}>Khách hàng trước & sau</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>Vì sao chọn Teennie</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Đội ngũ bác sĩ</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Câu hỏi thường gặp</a>
            <button 
              type="button" 
              className="btn-teennie btn-coral-glow" 
              style={{ width: '100%', marginTop: '8px' }}
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
            >
              Đặt lịch khám 0đ ngay
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
