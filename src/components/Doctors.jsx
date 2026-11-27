import React, { useState } from 'react';
import { Star, Clock, Calendar, Award, UserCheck, DollarSign } from 'lucide-react';
import { DOCTORS, SPECIALTIES } from '../data/clinicData';

export default function Doctors({ onSelectDoctor }) {
  const [activeSpecialty, setActiveSpecialty] = useState('all');

  const filteredDoctors = activeSpecialty === 'all'
    ? DOCTORS
    : DOCTORS.filter(doc => doc.specialtyId === activeSpecialty);

  return (
    <section className="section-wrap" style={{ backgroundColor: '#ffffff' }} id="doctors">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Hội Đồng Y Khoa</span>
          </div>
          <h2 className="section-headline">Đội Ngũ Chuyên Gia & Bác Sĩ Đầu Ngành</h2>
          <p className="section-subtitle">
            Hội tụ các Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II giàu y đức và kinh nghiệm 
            từng giữ cương vị chủ nhiệm bộ môn, trưởng phó khoa tại các bệnh viện trung ương.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="doctor-filter-bar">
          <button 
            type="button" 
            className={`doc-tab-btn ${activeSpecialty === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSpecialty('all')}
          >
            Tất cả bác sĩ ({DOCTORS.length})
          </button>
          {SPECIALTIES.map(spec => (
            <button 
              key={spec.id}
              type="button" 
              className={`doc-tab-btn ${activeSpecialty === spec.id ? 'active' : ''}`}
              onClick={() => setActiveSpecialty(spec.id)}
            >
              {spec.name}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="doctor-profile-grid">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-profile-card">
              <div className="doctor-photo-wrap">
                <img src={doctor.avatar} alt={doctor.name} />
                <span className="doctor-exp-tag">
                  {doctor.expYears} năm kinh nghiệm
                </span>
                <span className="doctor-rating-tag">
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  {doctor.rating} ({doctor.reviewCount})
                </span>
              </div>

              <div className="doctor-content-box">
                <span className="doc-specialty-title">{doctor.specialtyName}</span>
                <h3 className="doc-name">{doctor.name}</h3>
                <p className="doc-degree">{doctor.degree}</p>
                <p className="doc-history">{doctor.workHistory}</p>

                <div className="doc-schedule-card">
                  <div>
                    <Clock size={15} color="#0284c7" style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    <span>{doctor.schedule}</span>
                  </div>
                  <div>
                    <strong>{doctor.fee}</strong>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn-core btn-primary-glow"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onSelectDoctor(doctor)}
                >
                  <Calendar size={17} />
                  <span>Đặt khám cùng Bác sĩ</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
