import { HeartHandshake, Mail, Calendar, MapPin, Building, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export default function Testimonials() {
  return (
    <section className="portal-section bg-surface" id="testimonials">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <HeartHandshake size={14} />
            <span>NGHĨA TÌNH QUÂN DÂN</span>
          </div>
          <h2 className="portal-head-h2">
            Góc Tri Ân & Thư Cảm Ơn Của Người Bệnh
          </h2>
          <p className="portal-head-desc">
            Sự tin cậy và phục hồi sức khỏe của thương bệnh binh, cán bộ chiến sĩ và nhân dân là niềm tự hào 
            và phần thưởng cao quý nhất đối với tập thể Thầy thuốc Bệnh Viện Quân Y 7A.
          </p>
        </div>

        <div className="portal-letters-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="portal-letter-card">
              <div className="letter-card-top">
                <div className="letter-seal-icon">
                  <Quote size={20} />
                </div>
                <div className="letter-header-meta">
                  <span className="letter-date">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                  <span className="letter-dept-badge">{item.department}</span>
                </div>
              </div>

              <div className="letter-recipient-line">
                <Mail size={13} />
                <strong>{item.recipient}</strong>
              </div>

              <blockquote className="letter-body-quote">
                "{item.excerpt}"
              </blockquote>

              <div className="letter-author-block">
                <div className="author-name">{item.author}</div>
                <div className="author-addr">
                  <MapPin size={12} />
                  <span>{item.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote about medical ethics */}
        <div className="portal-ethics-callout">
          <Building size={18} />
          <span>
            Bệnh viện Quân Y 7A luôn duy trì hòm thư góp ý và đường dây nóng 24/7 nhằm lắng nghe mọi phản hồi, 
            không ngừng nâng cao chất lượng khám chữa bệnh phục vụ bộ đội và nhân dân.
          </span>
        </div>
      </div>
    </section>
  );
}
