import React from 'react';
import { 
  Stethoscope, 
  Baby, 
  HeartHandshake, 
  HeartPulse, 
  Activity, 
  Bone, 
  Smile, 
  FlaskConical, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SPECIALTIES } from '../data/clinicData';

const ICON_MAP = {
  Stethoscope: Stethoscope,
  Baby: Baby,
  HeartHandshake: HeartHandshake,
  HeartPulse: HeartPulse,
  Activity: Activity,
  Bone: Bone,
  Smile: Smile,
  FlaskConical: FlaskConical
};

export default function Specialties({ onSelectSpecialty }) {
  return (
    <section className="section-wrap" style={{ backgroundColor: 'var(--bg-page)' }} id="specialties">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Chuyên Khoa Mũi Nhọn</span>
          </div>
          <h2 className="section-headline">Các Chuyên Khoa Khám Chữa Bệnh Trọng Điểm</h2>
          <p className="section-subtitle">
            Hệ thống 8 chuyên khoa được đầu tư đồng bộ, khép kín với phác đồ điều trị đa chuyên khoa 
            giúp tối ưu hóa chẩn đoán và rút ngắn thời gian hồi phục cho người bệnh.
          </p>
        </div>

        <div className="specialties-container">
          {SPECIALTIES.map((spec) => {
            const IconComponent = ICON_MAP[spec.icon] || Stethoscope;
            return (
              <div key={spec.id} className="specialty-item-card">
                <span className="specialty-badge-ribbon">{spec.tag}</span>
                <div className="specialty-icon-container">
                  <IconComponent size={28} />
                </div>
                <h3>{spec.name}</h3>
                <div className="specialty-lead-doctor">
                  Trưởng khoa: {spec.lead}
                </div>
                <p className="specialty-description">{spec.desc}</p>

                {/* Procedure Pills */}
                <div className="procedure-pill-list">
                  {spec.procedures.slice(0, 3).map((proc, i) => (
                    <span key={i} className="procedure-pill">{proc}</span>
                  ))}
                </div>

                <div className="specialty-footer-action">
                  <span className="specialty-doctor-count">
                    {spec.doctorCount} Bác sĩ • {spec.patientsAnnual} ca/năm
                  </span>
                  <button 
                    type="button" 
                    onClick={() => onSelectSpecialty(spec.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary)',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      fontSize: '0.88rem'
                    }}
                  >
                    Đặt khám <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
