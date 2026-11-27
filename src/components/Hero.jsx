import React, { useState } from 'react';
import { Calendar, PhoneCall, ShieldCheck, Award, Users, Star, Search, Stethoscope } from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES, DOCTORS } from '../data/clinicData';

export default function Hero({ onQuickSelectBooking }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredDoctors = selectedSpecialty
    ? DOCTORS.filter(d => d.specialtyId === selectedSpecialty)
    : DOCTORS;

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onQuickSelectBooking({
      specialtyId: selectedSpecialty,
      doctorId: selectedDoctor,
      date: selectedDate
    });
  };

  return (
    <section className="hosp-hero-wrap" id="about">
      <div className="container">
        <div className="hosp-hero-grid">
          {/* Left Text */}
          <div>
            <div className="hospital-badge-tag">
              <ShieldCheck size={15} />
              <span>Bệnh Viện Đa Khoa Hạng I - Tuyến Cuối Quân Khu 7</span>
            </div>

            <h1 className="hosp-hero-h1">
              Y Đức Chuẩn Mực, <span className="blue">Kỹ Thuật Chuyên Sâu</span>, <br />
              Hết Lòng Vì Bộ Đội & Nhân Dân
            </h1>

            <p className="hosp-hero-lead">
              Bệnh Viện Quân Y 7A (466 Nguyễn Trãi, Phường 8, Quận 5, TP.HCM) là bệnh viện đa khoa tuyến cuối trực thuộc Cục Hậu Cần Quân Khu 7. 
              Thế mạnh vượt trội về Chấn thương Chỉnh hình cột sống (Khoa B1), Ngoại khoa nội soi, Nội Tim - Thận - Khớp, Thận nhân tạo Fresenius (Đức) 
              và tiếp nhận khám BHYT thông tuyến toàn quốc cho mọi người dân.
            </p>

            <div className="hosp-hero-btns">
              <a href="#booking" className="btn-hosp btn-hosp-lg btn-hosp-primary btn-hosp-pill">
                <Calendar size={18} />
                <span>Đăng ký lịch khám trực tuyến</span>
              </a>

              <a href={`tel:${CLINIC_INFO.hotline}`} className="btn-hosp btn-hosp-lg btn-hosp-secondary btn-hosp-pill">
                <PhoneCall size={17} color="#0284c7" />
                <span>Tổng đài Quân y 7A: {CLINIC_INFO.hotline}</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="hosp-stats-bar">
              <div className="hosp-stat-col">
                <h4>Hạng <span>I</span></h4>
                <p>Tuyến cuối Quân khu 7</p>
              </div>
              <div className="hosp-stat-col">
                <h4>100<span>%</span></h4>
                <p>Thông tuyến BHYT toàn quốc</p>
              </div>
              <div className="hosp-stat-col">
                <h4>50<span>+</span></h4>
                <p>Năm truyền thống y đức</p>
              </div>
              <div className="hosp-stat-col">
                <h4>30k<span>+</span></h4>
                <p>Ca phẫu thuật thành công</p>
              </div>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="hosp-hero-visual">
            <div className="hosp-hero-img-box">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" 
                alt="Đội ngũ thầy thuốc Bệnh Viện Quân Y 7A" 
              />
            </div>

            <div className="hosp-hero-badge-float">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--hospital-blue-light)',
                color: 'var(--hospital-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={22} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9rem', color: 'var(--hospital-navy)', display: 'block' }}>
                  Bệnh Viện Hạng I Quân Khu 7
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Đại tá, PGS. TS. BS. Lê Quang Trí Giám Đốc
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking Bar */}
        <div className="hosp-quickbar-wrap">
          <form className="hosp-quickbar-card" onSubmit={handleQuickSubmit}>
            <div className="hosp-quickbar-grid">
              <div className="hosp-quick-field">
                <label>Chuyên khoa cần khám</label>
                <div className="hosp-quick-input">
                  <Stethoscope size={16} color="#0284c7" />
                  <select 
                    value={selectedSpecialty}
                    onChange={(e) => {
                      setSelectedSpecialty(e.target.value);
                      setSelectedDoctor('');
                    }}
                  >
                    <option value="">-- Tất cả chuyên khoa --</option>
                    {SPECIALTIES.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="hosp-quick-field">
                <label>Bác sĩ phụ trách</label>
                <div className="hosp-quick-input">
                  <Users size={16} color="#0284c7" />
                  <select 
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                  >
                    <option value="">-- Chọn bác sĩ (Tùy chọn) --</option>
                    {filteredDoctors.map(d => (
                      <option key={d.id} value={d.id}>{d.name} ({d.specialtyName})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="hosp-quick-field">
                <label>Ngày dự kiến khám</label>
                <div className="hosp-quick-input">
                  <Calendar size={16} color="#0284c7" />
                  <input 
                    type="date" 
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="btn-hosp btn-hosp-md btn-hosp-primary" style={{ width: '100%', height: '42px' }}>
                  <Search size={16} />
                  <span>Tìm & Đặt khám</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
