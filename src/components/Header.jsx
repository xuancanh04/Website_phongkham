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
            <img 
              src="/logo_7a_brand.png" 
              alt="Logo Bệnh Viện Quân Y 7A - 7a Military Hospital" 
              className="portal-official-logo-img"
            />
            <div className="portal-brand-divider"></div>
            <div className="portal-title-block">
              <div className="portal-parent-org">
                CỤC HẬU CẦN QUÂN KHU 7
              </div>
              <h1 className="portal-main-name">
                BỆNH VIỆN QUÂN Y 7A
              </h1>
              <div className="portal-sub-badges">
                <span className="portal-rank-tag">BỆNH VIỆN ĐA KHOA HẠNG I</span>
                <span className="portal-tag-dot">•</span>
                <span className="portal-slogan-official">“Sự an toàn của người bệnh là ưu tiên hàng đầu của chúng tôi”</span>
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
              <a href="#specialties">Chuyên khoa</a>
            </li>
            <li className="portal-menu-item">
              <a href="#doctors">Bác sĩ Quân Y</a>
            </li>
            <li className="portal-menu-item">
              <a href="#pricing">Bảng giá & BHYT</a>
            </li>
            <li className="portal-menu-item">
              <a href="#news">Tin tức & Hoạt động</a>
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
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)}>Chuyên khoa</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Bác sĩ Quân Y</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Bảng giá & BHYT</a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)}>Tin tức & Hoạt động</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ & Bản đồ viện</a>
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
