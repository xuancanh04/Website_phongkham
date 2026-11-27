import React, { useState } from 'react';
import { Star, Clock, Calendar, Award, UserCheck } from 'lucide-react';
import { DOCTORS, SPECIALTIES } from '../data/clinicData';

export default function Doctors({ onSelectDoctor }) {
  const [activeSpecialty, setActiveSpecialty] = useState('all');

  const filteredDoctors = activeSpecialty === 'all'
    ? DOCTORS
    : DOCTORS.filter(doc => doc.specialtyId === activeSpecialty);

  return (
    <section className="hospital-section" style={{ backgroundColor: '#ffffff' }} id="doctors">
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <UserCheck size={14} />
            <span>Đội Ngũ Thầy Thuốc Quân Y</span>
          </div>
          <h2 className="hospital-heading-h2">Ban Giám Đốc & Chủ Nhiệm Khoa Đầu Ngành</h2>
          <p className="hospital-lead-desc">
            Quy tụ các Đại tá, Thượng tá, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa cấp cao của Bệnh Viện Quân Y 7A 
            trực tiếp thăm khám lâm sàng, hội chẩn chuyên sâu và thực hiện các ca phẫu thuật kỹ thuật cao.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="hosp-doc-filter-row">
          <button 
            type="button" 
            className={`hosp-filter-chip ${activeSpecialty === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSpecialty('all')}
          >
            Tất cả bác sĩ ({DOCTORS.length})
          </button>
          {SPECIALTIES.map(spec => (
            <button 
              key={spec.id}
              type="button" 
              className={`hosp-filter-chip ${activeSpecialty === spec.id ? 'active' : ''}`}
              onClick={() => setActiveSpecialty(spec.id)}
            >
              {spec.name}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="hosp-doctors-grid">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="hosp-doc-card">
              <div className="hosp-doc-photo">
                <img src={doctor.avatar} alt={doctor.name} />
                <span className="hosp-doc-exp">
                  {doctor.expYears} năm kinh nghiệm
                </span>
              </div>

              <div className="hosp-doc-body">
                <span className="hosp-doc-spec-name">{doctor.specialtyName}</span>
                <h3 className="hosp-doc-name">{doctor.name}</h3>
                <p className="hosp-doc-deg">{doctor.degree}</p>
                <p className="hosp-doc-history">{doctor.workHistory}</p>

                <div className="hosp-doc-sched">
                  <div>
                    <Clock size={14} color="#0284c7" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                    <span>{doctor.schedule}</span>
                  </div>
                  <div>
                    <strong>{doctor.fee}</strong>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn-hosp btn-hosp-md btn-hosp-primary"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onSelectDoctor(doctor)}
                >
                  <Calendar size={16} />
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
