import { useState } from 'react';
import { Phone, Clock, Calendar, Search, Menu, X, Bell } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Header({ onOpenBooking, onOpenLookup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="hosp-portal-header">
      {/* 1. TOP INSTITUTIONAL IDENTITY BAR */}
      <div className="portal-topbar">
        <div className="container portal-topbar-inner">
          {/* Official Emblem & Title */}
          <div className="portal-brand-wrap" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="portal-emblem">
              <svg viewBox="0 0 48 48" className="emblem-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield background */}
                <path d="M24 3L6 10V22C6 33.5 13.8 44.1 24 47C34.2 44.1 42 33.5 42 22V10L24 3Z" fill="#c51624" stroke="#eab308" strokeWidth="2.5" />
                {/* Gold wreath ring */}
                <circle cx="24" cy="24" r="14" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 2" fill="#991b1b" />
                {/* Red cross with white outline */}
                <rect x="21" y="14" width="6" height="20" rx="1.5" fill="#ffffff" />
                <rect x="14" y="21" width="20" height="6" rx="1.5" fill="#ffffff" />
                <rect x="22" y="15" width="4" height="18" rx="1" fill="#c51624" />
                <rect x="15" y="22" width="18" height="4" rx="1" fill="#c51624" />
                {/* Gold star */}
                <polygon points="24,19 25.5,23 29.5,23 26.2,25.5 27.5,29.5 24,27 20.5,29.5 21.8,25.5 18.5,23 22.5,23" fill="#facc15" />
              </svg>
            </div>
            <div className="portal-title-block">
              <div className="portal-parent-org">
                BỘ QUỐC PHÒNG • CỤC HẬU CẦN QUÂN KHU 7
              </div>
              <h1 className="portal-main-name">
                BỆNH VIỆN QUÂN Y 7A
              </h1>
              <div className="portal-sub-badges">
                <span className="portal-rank-tag">BỆNH VIỆN ĐA KHOA HẠNG I</span>
                <span className="portal-tag-dot">•</span>
                <span className="portal-hero-tag">ĐƠN VỊ ANH HÙNG LỰC LƯỢNG VŨ TRANG NHÂN DÂN</span>
              </div>
            </div>
          </div>

          {/* Right Direct Medical Helplines */}
          <div className="portal-helplines">
            <div className="helpline-card emergency-helpline">
              <div className="helpline-icon pulse-red">
                <Phone size={18} />
              </div>
              <div>
                <span className="helpline-label">TRỰC BAN CẤP CỨU 24/7</span>
                <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="helpline-num text-danger">
                  {CLINIC_INFO.emergencyPhone}
                </a>
              </div>
            </div>

            <div className="helpline-divider"></div>

            <div className="helpline-card">
              <div className="helpline-icon bg-navy-soft">
                <Clock size={18} />
              </div>
              <div>
                <span className="helpline-label">TỔNG ĐÀI ĐẶT KHÁM & BHYT</span>
                <a href={`tel:${CLINIC_INFO.hotline}`} className="helpline-num text-navy">
                  {CLINIC_INFO.hotline}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (DEEP MILITARY NAVY) */}
      <nav className="portal-navbar">
        <div className="container portal-nav-inner">
          <ul className="portal-menu">
            <li className="portal-menu-item active">
              <a href="#about">Trang chủ</a>
            </li>
            <li className="portal-menu-item">
              <a href="#advantages">Năng lực bệnh viện</a>
            </li>
            <li className="portal-menu-item">
              <a href="#specialties">Chuyên khoa mũi nhọn</a>
            </li>
            <li className="portal-menu-item">
              <a href="#doctors">Thầy thuốc Quân Y</a>
            </li>
            <li className="portal-menu-item">
              <a href="#facilities">Trang thiết bị y tế</a>
            </li>
            <li className="portal-menu-item">
              <a href="#pricing">Gói khám & BHYT</a>
            </li>
            <li className="portal-menu-item">
              <a href="#process">Quy trình khám</a>
            </li>
            <li className="portal-menu-item">
              <a href="#testimonials">Thư tri ân</a>
            </li>
            <li className="portal-menu-item">
              <a href="#news">Tin tức - Sự kiện</a>
            </li>
            <li className="portal-menu-item">
              <a href="#contact">Liên hệ</a>
            </li>
          </ul>

          <div className="portal-nav-actions">
            <button 
              type="button" 
              className="btn-portal-lookup"
              onClick={onOpenLookup}
              title="Tra cứu thông tin phiếu khám đã đăng ký"
            >
              <Search size={14} />
              <span>Tra cứu hồ sơ</span>
            </button>

            <button 
              type="button" 
              className="btn-portal-booking"
              onClick={onOpenBooking}
            >
              <Calendar size={15} />
              <span>ĐĂNG KÝ KHÁM</span>
            </button>

            <button 
              type="button"
              className="portal-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="portal-mobile-drawer">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Trang chủ</a>
            <a href="#advantages" onClick={() => setMobileMenuOpen(false)}>Năng lực bệnh viện</a>
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)}>Chuyên khoa lâm sàng</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Đội ngũ Thầy thuốc Quân Y</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Trang thiết bị y khoa</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Bảng giá gói khám & BHYT</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Quy trình khám bệnh</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Góc tri ân người bệnh</a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)}>Tin tức & Hoạt động y khoa</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Địa chỉ & Bản đồ viện</a>
            <div className="mobile-action-group">
              <button 
                type="button" 
                className="btn-portal-lookup"
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); onOpenLookup(); }}
              >
                Tra cứu
              </button>
              <button 
                type="button" 
                className="btn-portal-booking"
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              >
                Đăng ký khám
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 3. BREAKING INSTITUTIONAL ANNOUNCEMENT TICKER */}
      <div className="portal-marquee-bar">
        <div className="container portal-marquee-inner">
          <div className="marquee-badge">
            <Bell size={13} />
            <span>THÔNG BÁO BỆNH VIỆN</span>
          </div>
          <div className="marquee-text-wrap">
            <div className="marquee-text-content">
              <span>★ Bệnh Viện Quân Y 7A tiếp nhận khám chữa bệnh <strong>BHYT THÔNG TUYẾN TOÀN QUỐC</strong> cho mọi công dân và cán bộ chiến sĩ — Hưởng 100% quyền lợi đúng tuyến không cần giấy chuyển viện.</span>
              <span className="marquee-sep">|</span>
              <span>★ Khoa Hồi Sức Cấp Cứu trực chiến 24/24 tiếp nhận mọi ca cấp cứu ngoại viện: <strong>(028) 3923 7801</strong>.</span>
              <span className="marquee-sep">|</span>
              <span>★ Địa chỉ: Số 466 Nguyễn Trãi, Phường 8, Quận 5, TP. Hồ Chí Minh.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
