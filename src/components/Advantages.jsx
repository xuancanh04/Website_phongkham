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
    <section className="section-wrap" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Giá Trị Vượt Trội</span>
          </div>
          <h2 className="section-headline">Vì Sao Hơn 100.000 Bệnh Nhân Tin Chọn MediCare Plus?</h2>
          <p className="section-subtitle">
            Chúng tôi định nghĩa lại trải nghiệm y tế: An toàn y khoa chuẩn quốc tế, 
            không gian vô trùng tiện nghi và sự thấu hiểu đồng hành cùng người bệnh.
          </p>
        </div>

        <div className="advantages-grid">
          {CLINIC_ADVANTAGES.map((item) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <div key={item.id} className="advantage-card">
                <div className="advantage-icon-box">
                  <Icon size={28} />
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
