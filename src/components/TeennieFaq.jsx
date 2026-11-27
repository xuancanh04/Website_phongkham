import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { TEENNIE_FAQS } from '../data/teennieData';

export default function TeennieFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="teennie-section" style={{ backgroundColor: '#ffffff' }} id="faq">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <HelpCircle size={16} />
            <span>Hỏi Đáp Chuyên Gia</span>
          </div>
          <h2 className="teennie-title">Ba Mẹ Và Các Bạn Hay Hỏi</h2>
          <p className="teennie-desc">
            Tổng hợp những thắc mắc phổ biến nhất của các bạn học sinh - sinh viên và phụ huynh 
            khi tìm hiểu về niềng răng tại Teennie Clinic.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {TEENNIE_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                style={{
                  border: '1.5px solid var(--teennie-border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--teennie-coral)' : 'var(--teennie-border)'
                }}
              >
                <button
                  type="button"
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    textAlign: 'left',
                    background: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '1.02rem',
                    fontWeight: 800,
                    color: 'var(--teennie-blue-dark)'
                  }}
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--teennie-coral)" /> : <ChevronDown size={20} color="#94a3b8" />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 22px 18px 22px', fontSize: '0.92rem', color: '#475569', lineHeight: '1.65' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
