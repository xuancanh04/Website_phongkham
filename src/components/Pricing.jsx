import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/clinicData';

export default function Pricing({ onSelectPackage }) {
  return (
    <section className="portal-section bg-surface" id="pricing">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <ShieldCheck size={14} />
            <span>THÔNG TUYẾN BHYT & CÔNG KHAI VIỆN PHÍ</span>
          </div>
          <h2 className="portal-head-h2">Bảng Giá Các Gói Khám & Tầm Soát Sức Khỏe</h2>
          <p className="portal-head-desc">
            Chi phí được niêm yết công khai theo quy định của Bộ Quốc Phòng và Bộ Y Tế. Người có thẻ BHYT toàn quốc 
            được thanh toán 100% quyền lợi đúng tuyến. Thăm khám và tư vấn trực tiếp bởi đội ngũ Thầy thuốc Quân y.
          </p>
        </div>

        <div className="hosp-pricing-deck">
          {PRICING_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`hosp-plan-card ${pkg.isPopular ? 'featured' : ''}`}
            >
              {pkg.isPopular && (
                <div className="hosp-featured-ribbon">
                  Khuyên Dùng Nhiều Nhất
                </div>
              )}

              <span style={{
                display: 'inline-block',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: pkg.isPopular ? 'var(--hospital-blue)' : 'var(--text-muted)',
                marginBottom: '6px'
              }}>
                {pkg.badge}
              </span>
              <h3 className="hosp-plan-name">{pkg.name}</h3>
              <p className="hosp-plan-sub">{pkg.subtitle}</p>

              <div className="hosp-price-row">
                <span className="hosp-price-current">{pkg.price}</span>
                <span className="hosp-price-old">{pkg.originalPrice}</span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  backgroundColor: '#fee2e2',
                  color: 'var(--hospital-red)',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}>
                  {pkg.discount}
                </span>
              </div>

              {/* Danh sách danh mục xét nghiệm & chẩn đoán */}
              <ul className="hosp-feature-list">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="hosp-feature-item">
                    <Check size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  marginBottom: '16px',
                  lineHeight: '1.45'
                }}>
                  <strong>Phù hợp:</strong> {pkg.recommendedFor}
                </p>
                <button 
                  type="button" 
                  className={`btn-hosp btn-hosp-md ${pkg.isPopular ? 'btn-hosp-primary' : 'btn-hosp-secondary'}`}
                  style={{ width: '100%' }}
                  onClick={() => onSelectPackage(pkg)}
                >
                  <span>Đăng ký gói khám này</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
