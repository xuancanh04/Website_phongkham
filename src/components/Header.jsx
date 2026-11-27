import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Clock, Calendar, Search, Menu, X, Bell } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Header({ onOpenLookup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="hosp-portal-header">
      {/* 1. TOP INSTITUTIONAL IDENTITY BAR */}
      <div className="portal-topbar">
        <div className="container portal-topbar-inner">
          {/* Official Emblem & Title */}
          <Link to="/" className="portal-brand-wrap">
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
          </Link>

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
            <li className="portal-menu-item">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Trang chủ
              </NavLink>
            </li>
            <li className="portal-menu-item">
              <NavLink to="/chuyen-khoa" className={({ isActive }) => isActive ? 'active' : ''}>
                Chuyên khoa
              </NavLink>
            </li>
            <li className="portal-menu-item">
              <NavLink to="/bac-si" className={({ isActive }) => isActive ? 'active' : ''}>
                Bác sĩ Quân Y
              </NavLink>
            </li>
            <li className="portal-menu-item">
              <NavLink to="/bang-gia" className={({ isActive }) => isActive ? 'active' : ''}>
                Bảng giá & BHYT
              </NavLink>
            </li>
            <li className="portal-menu-item">
              <NavLink to="/tin-tuc" className={({ isActive }) => isActive ? 'active' : ''}>
                Tin tức & Hoạt động
              </NavLink>
            </li>
            <li className="portal-menu-item">
              <NavLink to="/lien-he" className={({ isActive }) => isActive ? 'active' : ''}>
                Liên hệ
              </NavLink>
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

            <Link 
              to="/dat-lich" 
              className="btn-portal-booking"
            >
              <Calendar size={15} />
              <span>ĐĂNG KÝ KHÁM</span>
            </Link>

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
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Trang chủ</Link>
            <Link to="/chuyen-khoa" onClick={() => setMobileMenuOpen(false)}>Chuyên khoa</Link>
            <Link to="/bac-si" onClick={() => setMobileMenuOpen(false)}>Bác sĩ Quân Y</Link>
            <Link to="/bang-gia" onClick={() => setMobileMenuOpen(false)}>Bảng giá & BHYT</Link>
            <Link to="/tin-tuc" onClick={() => setMobileMenuOpen(false)}>Tin tức & Hoạt động</Link>
            <Link to="/lien-he" onClick={() => setMobileMenuOpen(false)}>Liên hệ & Bản đồ viện</Link>
            <div className="mobile-action-group">
              <button 
                type="button" 
                className="btn-portal-lookup"
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); onOpenLookup(); }}
              >
                Tra cứu
              </button>
              <Link 
                to="/dat-lich"
                className="btn-portal-booking"
                style={{ flex: 1, textAlign: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Đăng ký khám
              </Link>
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
