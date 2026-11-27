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
    <section className="hospital-section" style={{ backgroundColor: 'var(--bg-page)' }} id="specialties">
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <ShieldCheck size={14} />
            <span>Chuyên Khoa Mũi Nhọn Tuyến Quân Khu 7</span>
          </div>
          <h2 className="hospital-heading-h2">Các Chuyên Khoa Lâm Sàng & Cận Lâm Sàng Trọng Điểm</h2>
          <p className="hospital-lead-desc">
            Bệnh Viện Quân Y 7A phát triển đồng bộ các chuyên khoa mũi nhọn: Chấn thương chỉnh hình cột sống (Khoa B1), 
            Nội tim - thận - khớp (Khoa A1), Ngoại khoa nội soi (Khoa B2), Trung tâm Lọc máu Thận nhân tạo và Y học cổ truyền.
          </p>
        </div>

        <div className="hosp-specialties-grid">
          {SPECIALTIES.map((spec) => {
            const IconComponent = ICON_MAP[spec.icon] || Stethoscope;
            return (
              <div key={spec.id} className="hosp-spec-card">
                <span className="hosp-spec-badge">{spec.tag}</span>
                <div className="hosp-spec-icon">
                  <IconComponent size={26} />
                </div>
                <h3>{spec.name}</h3>
                <div className="hosp-spec-lead">Trưởng khoa: {spec.lead}</div>
                <p className="hosp-spec-desc">{spec.desc}</p>

                <div className="hosp-proc-tags">
                  {spec.procedures.slice(0, 3).map((proc, i) => (
                    <span key={i} className="hosp-proc-pill">{proc}</span>
                  ))}
                </div>

                <div className="hosp-spec-footer">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {spec.doctorCount} Bác sĩ trực
                  </span>
                  <button 
                    type="button" 
                    onClick={() => onSelectSpecialty(spec.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--hospital-blue)',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      fontSize: '0.86rem'
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
