import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { CLINIC_FAQS } from '../data/clinicData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-wrap" style={{ backgroundColor: 'var(--bg-page)' }} id="faqs">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Hỏi Đáp Y Khoa</span>
          </div>
          <h2 className="section-headline">Những Câu Hỏi Thường Gặp Của Bệnh Nhân</h2>
          <p className="section-subtitle">
            Giải đáp chi tiết các thắc mắc phổ biến về chính sách BHYT, chuẩn bị trước khi lấy máu xét nghiệm 
            và quy trình trả kết quả tại MediCare Plus.
          </p>
        </div>

        <div className="faq-stack">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="#0284c7" /> : <ChevronDown size={20} color="#64748b" />}
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
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
