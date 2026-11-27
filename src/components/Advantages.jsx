import React from 'react';
import { Award, Users, Cpu, ShieldCheck } from 'lucide-react';
import { CLINIC_ADVANTAGES } from '../data/clinicData';

const ICON_MAP = {
  Award: Award,
  Users: Users,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export default function Advantages() {
  return (
    <section className="hospital-section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <ShieldCheck size={14} />
            <span>Kỷ Luật & Y Đức Quân Y</span>
          </div>
          <h2 className="hospital-heading-h2">Vì Sao Bộ Đội & Nhân Dân Tin Chọn Bệnh Viện Quân Y 7A?</h2>
          <p className="hospital-lead-desc">
            Bệnh viện Đa khoa Hạng I tuyến cuối Quân khu 7: Bề dày truyền thống Anh hùng Lực lượng Vũ trang, 
            kỹ thuật phẫu thuật chấn thương chuyên sâu, máy móc đồng bộ và y đức tận tụy vì sức khỏe người bệnh.
          </p>
        </div>

        <div className="hosp-advantages-grid">
          {CLINIC_ADVANTAGES.map((item) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <div key={item.id} className="hosp-adv-card">
                <div className="hosp-adv-icon">
                  <Icon size={26} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
