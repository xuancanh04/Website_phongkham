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
            <span>Giá Trị Y Khoa Vượt Trội</span>
          </div>
          <h2 className="hospital-heading-h2">Vì Sao Hơn 100.000 Bệnh Nhân Tin Chọn MediCare Plus?</h2>
          <p className="hospital-lead-desc">
            Chúng tôi định chuẩn trải nghiệm y tế hiện đại: An toàn tuyệt đối, phác đồ điều trị 
            chuẩn quốc tế, chi phí minh bạch và sự đồng hành chu đáo cùng sức khỏe người bệnh.
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
