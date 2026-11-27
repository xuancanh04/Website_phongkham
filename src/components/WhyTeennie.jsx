import React from 'react';
import { Award, Clock, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WHY_TEENNIE } from '../data/teennieData';

export default function WhyTeennie() {
  return (
    <section className="teennie-section" style={{ backgroundColor: 'var(--teennie-bg-soft)' }} id="why">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <Award size={16} />
            <span>Cam Kết Vàng</span>
          </div>
          <h2 className="teennie-title">5 Lý Do Nên Chọn Niềng Răng Tại Teennie</h2>
          <p className="teennie-desc">
            Tỉ mỉ, chỉn chu và minh bạch trong từng khâu thăm khám. Chúng tôi đồng hành cùng bạn 
            tạo nên nụ cười rạng rỡ và tự tin nhất cho tương lai.
          </p>
        </div>

        <div className="reasons-timeline-grid">
          {WHY_TEENNIE.map((r) => (
            <div key={r.step} className="reason-card">
              <div className="reason-number">{r.step}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
