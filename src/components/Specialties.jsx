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
    <section className="portal-section" id="specialties">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <ShieldCheck size={14} />
            <span>CÁC KHOA LÂM SÀNG & CẬN LÂM SÀNG TRỌNG ĐIỂM</span>
          </div>
          <h2 className="portal-head-h2">
            Hệ Thống Chuyên Khoa Mũi Nhọn Tuyến Quân Khu 7
          </h2>
          <p className="portal-head-desc">
            Bệnh Viện Quân Y 7A phát triển đồng bộ và chuyên sâu: Chấn thương Chỉnh hình cột sống (Khoa B1), 
            Nội Tim - Thận - Khớp (Khoa A1), Ngoại khoa nội soi (Khoa B2), Trung tâm Lọc máu Thận nhân tạo Đức và Khoa Y học cổ truyền.
          </p>
        </div>

        <div className="hosp-specialties-grid">
          {SPECIALTIES.map((spec) => {
            const IconComponent = ICON_MAP[spec.icon] || Stethoscope;
            return (
              <div key={spec.id} className="hosp-spec-card">
                <span className="hosp-spec-badge">{spec.tag}</span>
                <div className="hosp-spec-icon">
                  <IconComponent size={24} />
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
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                    {spec.doctorCount} Bác sĩ biên chế
                  </span>
                  <button 
                    type="button" 
                    onClick={() => onSelectSpecialty(spec)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--portal-navy)',
                      fontWeight: 800,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      fontSize: '0.82rem'
                    }}
                  >
                    Đăng ký khám <ArrowRight size={13} />
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
