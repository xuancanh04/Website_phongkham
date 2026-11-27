import React from 'react';
import { Users, Award, CheckCircle } from 'lucide-react';
import { DOCTORS } from '../data/teennieData';

export default function TeennieDoctors({ onOpenBooking }) {
  return (
    <section className="teennie-section" style={{ backgroundColor: '#ffffff' }} id="doctors">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <Users size={16} />
            <span>Đội Ngũ Chuyên Gia</span>
          </div>
          <h2 className="teennie-title">Bác Sĩ Chỉnh Nha & Đội Ngũ Sáng Lập Teennie</h2>
          <p className="teennie-desc">
            Teennie Clinic quy tụ đội ngũ bác sĩ chuyên khoa chỉnh nha tay nghề cao cùng nghệ sĩ Ngô Kiến Huy 
            với tâm huyết kiến tạo hàng triệu nụ cười học đường Việt Nam.
          </p>
        </div>

        <div className="doctors-deck">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="doctor-item-card">
              <div className="doctor-photo-frame">
                <img 
                  src={doc.avatar} 
                  alt={doc.name} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>

              <div className="doctor-info-box">
                <span style={{ fontSize: '0.82rem', color: 'var(--teennie-coral)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                  {doc.title}
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--teennie-blue-dark)', marginBottom: '6px' }}>
                  {doc.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--teennie-muted)', fontWeight: 600, marginBottom: '10px' }}>
                  {doc.degree}
                </p>

                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid var(--teennie-border)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '0.82rem',
                  color: '#0f766e',
                  fontWeight: 600,
                  marginBottom: '14px'
                }}>
                  ✓ {doc.exp}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--teennie-text)', lineHeight: '1.55', marginBottom: '20px', flexGrow: 1 }}>
                  {doc.desc}
                </p>

                <button 
                  type="button" 
                  className="btn-teennie btn-coral-glow"
                  style={{ width: '100%', padding: '11px', fontSize: '0.92rem' }}
                  onClick={onOpenBooking}
                >
                  Đặt hẹn tư vấn cùng {doc.name.split('. ').pop()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
