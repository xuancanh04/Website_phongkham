import React from 'react';
import { Newspaper, Calendar, Clock, ArrowRight } from 'lucide-react';
import { HEALTH_ARTICLES } from '../data/clinicData';

export default function HealthNews() {
  return (
    <section className="section-wrap" style={{ backgroundColor: 'var(--bg-page)' }} id="news">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Cẩm Nang Y Khoa</span>
          </div>
          <h2 className="section-headline">Kiến Thức & Lời Khuyên Sức Khỏe Gia Đình</h2>
          <p className="section-subtitle">
            Cập nhật những thông tin y học chính thống được biên soạn và tham vấn chuyên môn 
            trực tiếp bởi đội ngũ bác sĩ chuyên khoa cấp cao.
          </p>
        </div>

        <div className="news-deck">
          {HEALTH_ARTICLES.map((article) => (
            <article key={article.id} className="news-card-post">
              <div className="post-thumb">
                <img src={article.img} alt={article.title} />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-tag">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="post-headline">{article.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '18px', flexGrow: 1 }}>
                  {article.summary}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)'
                }}>
                  <span>BS: <strong>{article.author}</strong></span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    Đọc tiếp <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
