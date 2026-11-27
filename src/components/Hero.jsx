import React, { useState } from 'react';
import { Calendar, PhoneCall, ShieldCheck, Award, Users, Star, Search, Stethoscope, CheckCircle2 } from 'lucide-react';
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
    <section className="hero-wrapper" id="about">
      <div className="container">
        <div className="hero-layout-grid">
          {/* Left Text Presentation */}
          <div>
            <div className="pill-badge">
              <span className="dot"></span>
              <span>Bệnh Viện Đạt Chuẩn JCI Hoa Kỳ</span>
            </div>

            <h1 className="hero-main-title">
              Chuẩn Mực Y Khoa Quốc Tế, <br />
              <span className="gradient-word">Tận Tâm Vì Sức Khỏe</span> Gia Đình
            </h1>

            <p className="hero-lead-text">
              Quy tụ đội ngũ Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa cấp cao từng công tác 
              tại BV Chợ Rẫy, Từ Dũ, Viện Tim TP.HCM. Ứng dụng hệ thống chẩn đoán hình ảnh và xét nghiệm 
              tự động thế hệ mới nhất từ Đức & Thụy Sĩ, đảm bảo phác đồ điều trị an toàn, chính xác và hiệu quả.
            </p>

            <div className="hero-btn-row">
              <a href="#booking" className="btn-core btn-primary-glow" style={{ padding: '14px 30px', fontSize: '1.02rem' }}>
                <Calendar size={19} />
                <span>Đặt lịch khám trực tuyến</span>
              </a>
              <a href={`tel:${CLINIC_INFO.hotline}`} className="btn-core btn-secondary-white" style={{ padding: '14px 26px' }}>
                <PhoneCall size={18} color="#0284c7" />
                <span>Tổng đài CSKH: {CLINIC_INFO.hotline}</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="hero-trust-bar">
              <div className="trust-metric">
                <h4>15<span>+</span></h4>
                <p>Năm đồng hành y tế</p>
              </div>
              <div className="trust-metric">
                <h4>50<span>+</span></h4>
                <p>Chuyên gia đầu ngành</p>
              </div>
              <div className="trust-metric">
                <h4>100k<span>+</span></h4>
                <p>Bệnh nhân tin cậy</p>
              </div>
              <div className="trust-metric">
                <h4>99.6<span>%</span></h4>
                <p>Tỷ lệ hài lòng</p>
              </div>
            </div>
          </div>

          {/* Right Visual Frame & Floating Badges */}
          <div className="hero-visual-frame">
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" 
                alt="Đội ngũ bác sĩ và phòng khám hiện đại MediCare Plus" 
              />
            </div>

            {/* Floating Credibility Card Top */}
            <div className="card-float card-float-top">
              <div className="float-content">
                <div className="float-icon teal">
                  <Award size={24} />
                </div>
                <div className="float-text">
                  <strong>100% Bác Sĩ Cấp Cao</strong>
                  <span>Phó Giáo sư, Tiến sĩ, Bác sĩ CKII</span>
                </div>
              </div>
            </div>

            {/* Floating Review Card Bottom */}
            <div className="card-float card-float-bottom">
              <div className="float-content">
                <div className="float-icon blue">
                  <Star size={24} fill="#f59e0b" color="#f59e0b" />
                </div>
                <div className="float-text">
                  <strong>Đánh Giá 4.9 / 5.0</strong>
                  <span>Hơn 14.000+ bệnh nhân đã khám</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking Widget */}
        <div className="quick-booking-panel">
          <form className="booking-panel-card" onSubmit={handleQuickSubmit}>
            <div className="booking-panel-grid">
              <div className="panel-input-group">
                <label>Chuyên khoa cần khám</label>
                <div className="panel-input-box">
                  <Stethoscope size={18} color="#0284c7" />
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

              <div className="panel-input-group">
                <label>Bác sĩ phụ trách</label>
                <div className="panel-input-box">
                  <Users size={18} color="#0284c7" />
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

              <div className="panel-input-group">
                <label>Ngày dự kiến khám</label>
                <div className="panel-input-box">
                  <Calendar size={18} color="#0284c7" />
                  <input 
                    type="date" 
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="btn-core btn-primary-glow" style={{ width: '100%', height: '48px' }}>
                  <Search size={18} />
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
