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
              <span>Bệnh Viện Đạt Chuẩn JCI Hoa Kỳ & Giấy Phép Bộ Y Tế</span>
            </div>

            <h1 className="hosp-hero-h1">
              Chăm Sóc Y Khoa <span className="blue">Chuẩn Quốc Tế</span>, <br />
              Tận Tâm Vì Sức Khỏe Gia Đình
            </h1>

            <p className="hosp-hero-lead">
              Bệnh viện Đa khoa Quốc tế MediCare Plus quy tụ đội ngũ Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa cấp cao 
              từng công tác tại BV Chợ Rẫy, Từ Dũ, Viện Tim TP.HCM. Hệ thống trang thiết bị chẩn đoán hình ảnh và xét nghiệm 
              tự động thế hệ mới từ Đức & Thụy Sĩ, đảm bảo chẩn đoán chính xác và phác đồ điều trị an toàn, tối ưu.
            </p>

            <div className="hosp-hero-btns">
              <a href="#booking" className="btn-hosp btn-hosp-lg btn-hosp-primary btn-hosp-pill">
                <Calendar size={18} />
                <span>Đặt lịch khám trực tuyến</span>
              </a>

              <a href={`tel:${CLINIC_INFO.hotline}`} className="btn-hosp btn-hosp-lg btn-hosp-secondary btn-hosp-pill">
                <PhoneCall size={17} color="#0284c7" />
                <span>Tổng đài CSKH: {CLINIC_INFO.hotline}</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="hosp-stats-bar">
              <div className="hosp-stat-col">
                <h4>15<span>+</span></h4>
                <p>Năm đồng hành y tế</p>
              </div>
              <div className="hosp-stat-col">
                <h4>50<span>+</span></h4>
                <p>Bác sĩ chuyên khoa</p>
              </div>
              <div className="hosp-stat-col">
                <h4>100k<span>+</span></h4>
                <p>Lượt khám mỗi năm</p>
              </div>
              <div className="hosp-stat-col">
                <h4>99.6<span>%</span></h4>
                <p>Bệnh nhân hài lòng</p>
              </div>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="hosp-hero-visual">
            <div className="hosp-hero-img-box">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900" 
                alt="Bác sĩ thăm khám bệnh nhân tại Bệnh viện MediCare Plus" 
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
                  100% Bác Sĩ Cấp Cao
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Nguyên Trưởng/Phó khoa BV Chợ Rẫy, Từ Dũ
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
