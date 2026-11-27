import React from 'react';
import { Star, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/teennieData';

export default function BeforeAfterShowcase({ onOpenBooking }) {
  return (
    <section className="teennie-section" style={{ backgroundColor: '#ffffff' }} id="before-after">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <Sparkles size={16} />
            <span>Hình Ảnh Người Thật Việc Thật</span>
          </div>
          <h2 className="teennie-title">Nụ Cười Thay Đổi Sau Niềng Răng Tại Teennie</h2>
          <p className="teennie-desc">
            Hàng ngàn bạn trẻ đã tự tin lột xác nụ cười, sở hữu góc nghiêng thần thái chỉ sau 6 – 36 lần hẹn 
            cùng các bác sĩ chuyên gia tại Teennie Clinic.
          </p>
        </div>

        <div className="before-after-grid">
          {BEFORE_AFTER_CASES.map((item) => (
            <div key={item.id} className="ba-card">
              <div className="ba-image-wrap">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <span className="ba-appointments-pill">
                  {item.appointments}
                </span>
              </div>

              <div className="ba-content">
                <span className="ba-problem-tag">{item.problem}</span>
                <h4 className="ba-name">{item.name}</h4>

                <div style={{ fontSize: '0.85rem', color: '#0f766e', fontWeight: 700, marginBottom: '8px' }}>
                  ✓ Kết quả: {item.result}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--teennie-muted)', marginBottom: '14px' }}>
                  Phương pháp: <strong>{item.method}</strong>
                </div>

                <p className="ba-quote">
                  "{item.quote}"
                </p>

                <button 
                  type="button" 
                  className="btn-teennie btn-blue-outline"
                  style={{ width: '100%', padding: '10px', fontSize: '0.85rem', marginTop: 'auto' }}
                  onClick={onOpenBooking}
                >
                  Nhận tư vấn tình trạng tương tự
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
