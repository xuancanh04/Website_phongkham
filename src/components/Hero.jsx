import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Users, 
  Search, 
  Stethoscope, 
  FileText, 
  HeartPulse, 
  ArrowRight,
  CreditCard,
  Ambulance,
  Building2
} from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES, DOCTORS } from '../data/clinicData';

export default function Hero({ onQuickSelectBooking }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  const filteredDoctors = selectedSpecialty
    ? DOCTORS.filter(d => d.specialtyId === selectedSpecialty)
    : DOCTORS;

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (onQuickSelectBooking) {
      onQuickSelectBooking({
        specialtyId: selectedSpecialty,
        doctorId: selectedDoctor,
        date: selectedDate
      });
    }
    navigate('/dat-lich');
  };

  return (
    <section className="portal-hero-section" id="about">
      <div className="container">
        {/* 1. INSTITUTIONAL HERO BANNER */}
        <div className="portal-hero-frame">
          <div className="portal-hero-content">
            <div className="portal-badge-gold">
              <ShieldCheck size={16} />
              <span>BỆNH VIỆN ĐA KHOA HẠNG I • TUYẾN CUỐI QUÂN KHU 7</span>
            </div>

            <h1 className="portal-hero-title">
              Y Đức Chuẩn Mực — Kỹ Thuật Chuyên Sâu <br />
              <span className="gold-accent">Hết Lòng Phụng Sự Bộ Đội Và Nhân Dân</span>
            </h1>

            <p className="portal-hero-desc">
              Bệnh Viện Quân Y 7A (Số 466 Nguyễn Trãi, Phường 8, Quận 5, TP.HCM) là cơ sở y tế tuyến cuối của Quân khu 7. 
              Bệnh viện tiếp nhận khám chữa bệnh <strong>BHYT thông tuyến toàn quốc cho mọi người dân</strong>, phát triển vượt bậc 
              về Chấn thương Chỉnh hình cột sống (Khoa B1), Thay khớp nhân tạo, Ngoại khoa nội soi, Nội Tim - Thận - Khớp, 
              Đơn nguyên Lọc máu Thận nhân tạo Đức và Cấp cứu điều trị 24/7.
            </p>

            <div className="portal-hero-ctas">
              <Link to="/dat-lich" className="btn-portal-hero-primary">
                <Calendar size={17} />
                <span>ĐĂNG KÝ LỊCH KHÁM TRỰC TUYẾN</span>
              </Link>

              <a href={`tel:${CLINIC_INFO.hotline}`} className="btn-portal-hero-outline">
                <PhoneCall size={17} />
                <span>TỔNG ĐÀI QUÂN Y 7A: {CLINIC_INFO.hotline}</span>
              </a>
            </div>

            {/* Official Metrics Bar */}
            <div className="portal-metrics-grid">
              <div className="metric-box">
                <div className="metric-val">Hạng I</div>
                <div className="metric-sub">Tuyến Cuối Quân Khu 7</div>
              </div>
              <div className="metric-box">
                <div className="metric-val">100%</div>
                <div className="metric-sub">BHYT Thông Tuyến Toàn Quốc</div>
              </div>
              <div className="metric-box">
                <div className="metric-val">500+</div>
                <div className="metric-sub">Giường Bệnh Nội Trú</div>
              </div>
              <div className="metric-box">
                <div className="metric-val">50+ Năm</div>
                <div className="metric-sub">Anh Hùng LLVT Nhân Dân</div>
              </div>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="portal-hero-imagery">
            <div className="imagery-main-card">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" 
                alt="Đội ngũ Thầy thuốc Quân Y Bệnh Viện 7A" 
                className="imagery-photo"
              />
              <div className="imagery-overlay">
                <div className="imagery-caption">
                  <strong>BỆNH VIỆN QUÂN Y 7A - CỤC HẬU CẦN QUÂN KHU 7</strong>
                  <span>Số 466 Nguyễn Trãi, Phường 8, Quận 5, TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>

            {/* Director Endorsement Card */}
            <div className="imagery-badge-card">
              <div className="badge-avatar-icon">
                <Award size={24} />
              </div>
              <div>
                <div className="badge-lead-title">GIÁM ĐỐC BỆNH VIỆN</div>
                <div className="badge-lead-name">Đại tá, PGS. TS. BS. Lê Quang Trí</div>
                <div className="badge-lead-desc">Chuyên gia đầu ngành Phẫu thuật Chấn thương Chỉnh hình & Cột sống</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CỔNG TIỆN ÍCH DỊCH VỤ Y TẾ TRỰC TUYẾN (QUICK ACCESS CARDS) */}
        <div className="portal-quick-services">
          <div className="quick-services-header">
            <div className="quick-title-group">
              <Building2 size={20} className="text-military" />
              <h3>CỔNG TIỆN ÍCH KHÁM CHỮA BỆNH TRỰC TUYẾN</h3>
            </div>
            <span className="quick-sub-text">Hệ thống dịch vụ y tế phục vụ Bộ đội & Nhân dân 24/7</span>
          </div>

          <div className="quick-cards-grid">
            {/* Card 1 */}
            <Link to="/dat-lich" className="quick-service-item">
              <div className="quick-icon-wrap bg-blue-icon">
                <Calendar size={22} />
              </div>
              <div className="quick-info">
                <h4>ĐẶT LỊCH KHÁM BỆNH</h4>
                <p>Đăng ký lịch hẹn trực tuyến, chọn chuyên khoa & bác sĩ, giảm thời gian chờ đợi.</p>
                <span className="quick-link-act">Đăng ký ngay <ArrowRight size={13} /></span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/dat-lich" className="quick-service-item">
              <div className="quick-icon-wrap bg-teal-icon">
                <FileText size={22} />
              </div>
              <div className="quick-info">
                <h4>TRA CỨU HỒ SƠ & LỊCH HẸN</h4>
                <p>Tra cứu tình trạng phiếu khám, xem thông tin chuẩn bị trước khi đến bệnh viện.</p>
                <span className="quick-link-act">Tra cứu ngay <ArrowRight size={13} /></span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/bang-gia" className="quick-service-item">
              <div className="quick-icon-wrap bg-green-icon">
                <ShieldCheck size={22} />
              </div>
              <div className="quick-info">
                <h4>KHÁM CHỮA BỆNH BHYT</h4>
                <p>Hưởng 100% quyền lợi BHYT thông tuyến toàn quốc cho mọi đối tượng nhân dân.</p>
                <span className="quick-link-act">Xem chính sách <ArrowRight size={13} /></span>
              </div>
            </Link>

            {/* Card 4 */}
            <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="quick-service-item highlight-emergency">
              <div className="quick-icon-wrap bg-red-icon">
                <Ambulance size={22} />
              </div>
              <div className="quick-info">
                <h4>TRỰC BAN CẤP CỨU 24/7</h4>
                <p>Tiếp nhận cấp cứu đa chấn thương, ngoại khoa, đột quỵ và xe cấp cứu ngoại viện.</p>
                <span className="quick-link-act text-danger">Gọi cấp cứu: {CLINIC_INFO.emergencyPhone}</span>
              </div>
            </a>

            {/* Card 5 */}
            <Link to="/chuyen-khoa" className="quick-service-item">
              <div className="quick-icon-wrap bg-navy-icon">
                <HeartPulse size={22} />
              </div>
              <div className="quick-info">
                <h4>MŨI NHỌN CHẤN THƯƠNG CHỈNH HÌNH</h4>
                <p>Bơm xi măng sinh học phục hồi cột sống (Khoa B1), phẫu thuật thay khớp háng/gối.</p>
                <span className="quick-link-act">Tìm hiểu kỹ thuật <ArrowRight size={13} /></span>
              </div>
            </Link>

            {/* Card 6 */}
            <Link to="/bang-gia" className="quick-service-item">
              <div className="quick-icon-wrap bg-amber-icon">
                <CreditCard size={22} />
              </div>
              <div className="quick-info">
                <h4>BẢNG GIÁ VIỆN PHÍ CÔNG KHAI</h4>
                <p>Minh bạch chi phí khám, xét nghiệm và điều trị theo khung quy định Bộ Y tế.</p>
                <span className="quick-link-act">Xem bảng giá <ArrowRight size={13} /></span>
              </div>
            </Link>
          </div>
        </div>

        {/* 3. QUICK SEARCH & BOOKING BAR */}
        <div className="portal-searchbar-wrap">
          <form className="portal-searchbar-card" onSubmit={handleQuickSubmit}>
            <div className="searchbar-legend">
              <Search size={16} />
              <span>TRA CỨU & ĐĂNG KÝ NHANH LỊCH KHÁM CHUYÊN KHOA</span>
            </div>

            <div className="portal-searchbar-grid">
              <div className="searchbar-field">
                <label>1. Chọn Chuyên khoa lâm sàng</label>
                <div className="searchbar-input-box">
                  <Stethoscope size={16} className="text-military" />
                  <select 
                    value={selectedSpecialty}
                    onChange={(e) => {
                      setSelectedSpecialty(e.target.value);
                      setSelectedDoctor('');
                    }}
                  >
                    <option value="">-- Tất cả chuyên khoa Quân Y 7A --</option>
                    {SPECIALTIES.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="searchbar-field">
                <label>2. Bác sĩ phụ trách thăm khám</label>
                <div className="searchbar-input-box">
                  <Users size={16} className="text-military" />
                  <select 
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                  >
                    <option value="">-- Chọn bác sĩ phụ trách (Tùy chọn) --</option>
                    {filteredDoctors.map(d => (
                      <option key={d.id} value={d.id}>{d.name} ({d.specialtyName})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="searchbar-field">
                <label>3. Ngày dự kiến đến khám</label>
                <div className="searchbar-input-box">
                  <Calendar size={16} className="text-military" />
                  <input 
                    type="date" 
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="searchbar-submit-cell">
                <button type="submit" className="btn-portal-search-submit">
                  <Search size={16} />
                  <span>TIẾP TỤC ĐẶT HẸN</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
