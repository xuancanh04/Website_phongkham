import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { CLINIC_FAQS } from '../data/clinicData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="hospital-section" style={{ backgroundColor: 'var(--bg-page)' }} id="faqs">
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <HelpCircle size={14} />
            <span>Hỏi Đáp Y Khoa</span>
          </div>
          <h2 className="hospital-heading-h2">Những Câu Hỏi Thường Gặp Của Bệnh Nhân</h2>
          <p className="hospital-lead-desc">
            Giải đáp chi tiết các thắc mắc về quyền lợi hưởng BHYT, lưu ý trước khi xét nghiệm máu 
            và quy trình trả kết quả khám nhanh tại MediCare Plus.
          </p>
        </div>

        <div className="hosp-faq-stack">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`hosp-faq-card ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="hosp-faq-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="var(--hospital-blue)" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {isOpen && (
                  <div className="hosp-faq-answer">
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
