import React from 'react';
import { Calendar, PhoneCall, Gift, CheckCircle, Percent, Sparkles, Smile, ArrowRight } from 'lucide-react';
import { TEENNIE_INFO, PROMOTIONS } from '../data/teennieData';

export default function TeennieHero({ onOpenBooking }) {
  return (
    <section className="teennie-hero-section">
      <div className="container">
        <div className="hero-teennie-grid">
          {/* Left Text */}
          <div>
            <div className="cofounder-badge">
              <Sparkles size={15} />
              <span>Nghệ sĩ Ngô Kiến Huy Đồng Sáng Lập</span>
            </div>

            <h1 className="teennie-hero-title">
              Nha Khoa Niềng Răng Học Đường TP.HCM – <br />
              <span className="highlight-coral">Đẹp Nhanh</span> Chỉ Sau <br />
              <span className="highlight-blue">6 – 36 Lần Hẹn</span>
            </h1>

            <p className="teennie-hero-lead">
              Teennie Clinic – Điểm đến niềng răng uy tín hàng đầu cho học sinh, sinh viên và người trẻ tại TP.HCM. 
              Bác sĩ chuyên khoa chỉnh nha đồng hành 1:1, chi phí minh bạch cùng chương trình trả góp 0% trực tiếp 
              giúp bạn chạm tay vào nụ cười rạng rỡ tự tin mà không lo gánh nặng tài chính!
            </p>

            {/* 3 Hot Promos */}
            <div className="teennie-promo-chips">
              <div className="promo-chip-item">
                <Gift size={18} />
                <span>{PROMOTIONS.studentDiscount} (Người đi làm giảm 3 triệu)</span>
              </div>
              <div className="promo-chip-item">
                <Percent size={18} />
                <span>{PROMOTIONS.installment}</span>
              </div>
              <div className="promo-chip-item">
                <CheckCircle size={18} />
                <span>{PROMOTIONS.freeExamPackage}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn-teennie btn-lg btn-coral-glow" 
                onClick={onOpenBooking}
              >
                <Sparkles size={18} />
                <span>Nhận ưu đãi 5 triệu & Khám 0đ</span>
              </button>

              <a 
                href={`tel:${TEENNIE_INFO.hotline}`} 
                className="btn-teennie btn-lg btn-blue-outline"
              >
                <PhoneCall size={17} />
                <span>Tư vấn: {TEENNIE_INFO.hotline}</span>
              </a>
            </div>
          </div>

          {/* Right Image Frame */}
          <div>
            <div className="hero-image-box">
              <img 
                src="https://teennie.vn/wp-content/uploads/2026/10/banner-nieng-rang-teennie-doi-ngu-bac-si.webp" 
                alt="Đội ngũ bác sĩ chỉnh nha Teennie Clinic" 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900";
                }}
              />

              <div className="floating-teennie-card">
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--teennie-coral-soft)',
                  color: 'var(--teennie-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Smile size={24} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--teennie-blue-dark)', display: 'block' }}>
                    10.000+ Ca Niềng Thành Công
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--teennie-muted)' }}>
                    Được các bạn học sinh - sinh viên tin yêu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
