import { Star, CheckCircle2, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export default function Testimonials() {
  return (
    <section className="hospital-section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <HeartHandshake size={14} />
            <span>Niềm Tin Người Bệnh</span>
          </div>
          <h2 className="hospital-heading-h2">Cảm Nhận Thực Tế Từ Bệnh Nhân & Thân Nhân</h2>
          <p className="hospital-lead-desc">
            Sức khỏe và sự an tâm của người bệnh khi hồi phục chính là phần thưởng cao quý 
            và động lực lớn nhất của toàn thể đội ngũ y bác sĩ MediCare Plus.
          </p>
        </div>

        <div className="hosp-testimonials-row">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="hosp-quote-card">
              <div>
                <div className="hosp-quote-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="hosp-quote-body">
                  "{item.comment}"
                </p>
              </div>

              <div className="hosp-quote-author">
                <div>
                  <strong>{item.name} ({item.age} tuổi)</strong>
                  <span>{item.address} • Khám cùng {item.doctor}</span>
                </div>
                <div className="hosp-quote-verified">
                  <CheckCircle2 size={15} />
                  <span>Đã khám</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
