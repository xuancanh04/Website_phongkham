import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export default function Testimonials() {
  return (
    <section className="section-wrap" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Niềm Tin Người Bệnh</span>
          </div>
          <h2 className="section-headline">Cảm Nhận Thực Tế Từ Bệnh Nhân & Thân Nhân</h2>
          <p className="section-subtitle">
            Hạnh phúc của người bệnh khi hồi phục sức khỏe chính là phần thưởng và động lực 
            lớn nhất cho toàn thể cán bộ nhân viên y tế tại MediCare Plus.
          </p>
        </div>

        <div className="testimonials-row">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-quote-card">
              <div>
                <div className="quote-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="quote-body">
                  "{item.comment}"
                </p>
              </div>

              <div className="quote-author">
                <div>
                  <strong>{item.name} ({item.age} tuổi)</strong>
                  <span>{item.address} • Khám cùng {item.doctor}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontSize: '0.8rem', fontWeight: 700 }}>
                  <CheckCircle2 size={16} />
                  <span>Xác thực</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
