import { Newspaper, Calendar, User, ArrowRight, Bookmark } from 'lucide-react';
import { HEALTH_ARTICLES } from '../data/clinicData';

export default function HealthNews() {
  const featuredArticle = HEALTH_ARTICLES.find(a => a.isFeatured) || HEALTH_ARTICLES[0];
  const sideArticles = HEALTH_ARTICLES.filter(a => a.id !== featuredArticle.id);

  return (
    <section className="portal-section" id="news">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <Newspaper size={14} />
            <span>CỔNG THÔNG TIN Y KHOA & HOẠT ĐỘNG VIỆN</span>
          </div>
          <h2 className="portal-head-h2">
            Tin Tức Hoạt Động & Tiến Bộ Kỹ Thuật Quân Y
          </h2>
          <p className="portal-head-desc">
            Cập nhật thường xuyên các đề tài nghiên cứu khoa học, ca lâm sàng phẫu thuật thành công, 
            chính sách BHYT thông tuyến và công tác khám chữa bệnh dân quân y kết hợp.
          </p>
        </div>

        <div className="portal-news-layout">
          {/* Main Featured Big Article (Left) */}
          {featuredArticle && (
            <article className="portal-featured-article">
              <div className="featured-thumb-wrap">
                <img src={featuredArticle.img} alt={featuredArticle.title} className="featured-img" />
                <span className="featured-cat-tag">{featuredArticle.category}</span>
              </div>
              <div className="featured-article-body">
                <div className="article-meta-row">
                  <span className="article-date">
                    <Calendar size={13} />
                    {featuredArticle.publishDate || '25/11/2026'}
                  </span>
                  <span className="article-author">
                    <User size={13} />
                    {featuredArticle.author}
                  </span>
                </div>

                <h3 className="featured-title">
                  {featuredArticle.title}
                </h3>

                <p className="featured-summary">
                  {featuredArticle.summary}
                </p>

                <div className="featured-footer">
                  <a href="#booking" className="btn-article-read">
                    <span>Xem toàn văn báo cáo</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Articles List (Right) */}
          <div className="portal-side-news">
            <div className="side-news-header">
              <Bookmark size={15} />
              <h4>TIN HOẠT ĐỘNG & THÔNG BÁO MỚI</h4>
            </div>

            <div className="side-articles-list">
              {sideArticles.map((art) => (
                <article key={art.id} className="side-article-card">
                  <div className="side-thumb">
                    <img src={art.img} alt={art.title} />
                  </div>
                  <div className="side-body">
                    <div className="side-meta">
                      <span className="side-badge">{art.category}</span>
                      <span className="side-time">{art.publishDate || '15/11/2026'}</span>
                    </div>
                    <h5 className="side-title">{art.title}</h5>
                    <p className="side-desc">{art.summary}</p>
                    <div className="side-author-sign">
                      BS: {art.author}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
