import React from 'react';
import { Check, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/clinicData';

export default function Pricing({ onSelectPackage }) {
  return (
    <section className="section-wrap" style={{ backgroundColor: 'var(--bg-page)' }} id="pricing">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Minh Bạch - Công Khai</span>
          </div>
          <h2 className="section-headline">Bảng Giá Các Gói Khám Sức Khỏe Toàn Diện</h2>
          <p className="section-subtitle">
            Chi phí được niêm yết theo quy định Sở Y Tế, không phát sinh phụ phí ẩn. 
            Tất cả các gói khám đều được tư vấn chuyên sâu cùng Bác sĩ Chuyên khoa cấp cao.
          </p>
        </div>

        <div className="pricing-deck">
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pricing-plan-card ${pkg.isPopular ? 'featured' : ''}`}
            >
              {pkg.isPopular && (
                <div className="featured-ribbon">
                  Khuyên Dùng Nhiều Nhất
                </div>
              )}

              <div className="plan-head">
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: pkg.isPopular ? 'var(--primary)' : 'var(--text-muted)',
                  marginBottom: '6px'
                }}>
                  {pkg.badge}
                </span>
                <h3 className="plan-name">{pkg.name}</h3>
                <p className="plan-subtitle">{pkg.subtitle}</p>

                <div className="plan-price-wrap">
                  <span className="price-main">{pkg.price}</span>
                  <span className="price-strike">{pkg.originalPrice}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    backgroundColor: 'var(--emergency-soft)',
                    color: 'var(--emergency-red)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {pkg.discount}
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <ul className="plan-feature-list">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="plan-feature-item">
                    <Check size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  marginBottom: '18px',
                  lineHeight: '1.5'
                }}>
                  <strong>Khuyên dùng:</strong> {pkg.recommendedFor}
                </p>
                <button 
                  type="button" 
                  className={`btn-core ${pkg.isPopular ? 'btn-primary-glow' : 'btn-secondary-white'}`}
                  style={{ width: '100%', padding: '13px' }}
                  onClick={() => onSelectPackage(pkg)}
                >
                  <span>Đăng ký gói khám này</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
