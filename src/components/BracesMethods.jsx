import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRACES_METHODS } from '../data/teennieData';

export default function BracesMethods({ onSelectMethod }) {
  return (
    <section className="teennie-section" style={{ backgroundColor: '#ffffff' }} id="methods">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <Sparkles size={16} />
            <span>Phương Pháp Đa Dạng</span>
          </div>
          <h2 className="teennie-title">Các Phương Pháp Niềng Răng Tại Teennie</h2>
          <p className="teennie-desc">
            Phù hợp với từng tình trạng răng và ngân sách của các bạn học sinh, sinh viên và người đi làm. 
            Tất cả khí cụ đều nhập khẩu chính hãng từ Hoa Kỳ & Thụy Sĩ.
          </p>
        </div>

        <div className="methods-deck">
          {BRACES_METHODS.map((method) => (
            <div 
              key={method.id}
              className={`method-card ${method.isPopular ? 'popular' : ''}`}
            >
              {method.isPopular && (
                <div className="popular-tag-badge">
                  Học Sinh - SV Chọn Nhiều Nhất
                </div>
              )}

              <div className="method-head">
                <h3 className="method-name">{method.name}</h3>
                <div className="method-tagline">{method.tagline}</div>

                <div className="method-price-row">
                  <span className="price-sale">{method.priceSale}</span>
                  <span className="price-range">({method.priceRange})</span>
                </div>

                <div style={{ marginTop: '8px' }}>
                  <span className="installment-highlight">
                    ★ {method.monthlyInstallment}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--teennie-muted)', lineHeight: '1.5', marginBottom: '18px' }}>
                {method.desc}
              </p>

              <ul className="method-feature-list">
                {method.features.map((feat, i) => (
                  <li key={i} className="method-feature-item">
                    <Check size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <button 
                  type="button" 
                  className={`btn-teennie ${method.isPopular ? 'btn-coral-glow' : 'btn-blue-outline'}`}
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => onSelectMethod(method)}
                >
                  <span>Đăng ký tư vấn phương pháp này</span>
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
