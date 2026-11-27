import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { CLINIC_FAQS } from '../data/clinicData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="portal-section" id="faqs">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <HelpCircle size={14} />
            <span>HƯỚNG DẪN NGƯỜI BỆNH & CHÍNH SÁCH BHYT</span>
          </div>
          <h2 className="portal-head-h2">Những Câu Hỏi Thường Gặp Về Khám Chữa Bệnh</h2>
          <p className="portal-head-desc">
            Giải đáp chi tiết các thắc mắc về quyền lợi hưởng BHYT thông tuyến, thủ tục nhập viện, 
            kỹ thuật bơm xi măng sinh học cột sống và lịch khám bệnh tại Bệnh Viện Quân Y 7A.
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
