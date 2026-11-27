import { BookOpen, ArrowRight } from 'lucide-react';
import { HEALTH_ARTICLES } from '../data/clinicData';

export default function HealthNews() {
  return (
    <section className="hospital-section" style={{ backgroundColor: '#ffffff' }} id="news">
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <BookOpen size={14} />
            <span>Cẩm Nang Y Khoa</span>
          </div>
          <h2 className="hospital-heading-h2">Kiến Thức & Lời Khuyên Sức Khỏe Gia Đình</h2>
          <p className="hospital-lead-desc">
            Cập nhật các bài viết y học chính thống được biên soạn và tham vấn chuyên môn 
            trực tiếp từ đội ngũ bác sĩ chuyên khoa đầu ngành.
          </p>
        </div>

        <div className="hosp-news-deck">
          {HEALTH_ARTICLES.map((article) => (
            <article key={article.id} className="hosp-news-card">
              <div className="hosp-news-thumb">
                <img src={article.img} alt={article.title} />
              </div>
              <div className="hosp-news-body">
                <div className="hosp-news-meta">
                  <span className="hosp-news-tag">{article.category}</span>
                  <span className="hosp-news-time">{article.readTime}</span>
                </div>
                <h3 className="hosp-news-title">{article.title}</h3>
                <p className="hosp-news-desc">
                  {article.summary}
                </p>
                <div className="hosp-news-footer">
                  <span>BS: <strong>{article.author}</strong></span>
                  <a href="#booking" className="hosp-news-link">
                    Đọc tiếp <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
