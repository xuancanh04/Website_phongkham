import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { HEALTH_ARTICLES } from '../data/clinicData';

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? HEALTH_ARTICLES
    : HEALTH_ARTICLES.filter(a => a.category === activeCategory);

  const featured = HEALTH_ARTICLES[0];

  return (
    <div className="portal-subpage">
      {/* 1. BREADCRUMB & PAGE HEADER */}
      <div className="portal-page-header">
        <div className="container">
          <nav className="portal-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <ChevronRight size={13} />
            <span>Tin tức & Hoạt động</span>
          </nav>

          <h1 className="page-header-title">
            Tin Tức Hoạt Động & Nghiên Cứu Khoa Học Bệnh Viện Quân Y 7A
          </h1>
          <p className="page-header-desc">
            Cập nhật liên tục các báo cáo lâm sàng, kỹ thuật y khoa mới, công tác dân quân y kết hợp, 
            khám bệnh tình nghĩa và các chính sách khám chữa bệnh BHYT phục vụ bộ đội và nhân dân.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px 80px 20px' }}>
        {/* 2. CATEGORY TABS */}
        <div className="page-filter-bar">
          <button 
            type="button" 
            className={`portal-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Tất cả tin tức ({HEALTH_ARTICLES.length})
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeCategory === 'Thành Tựu Y Học Quân Y' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Thành Tựu Y Học Quân Y')}
          >
            Thành tựu kỹ thuật cao
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeCategory === 'Hoạt Động Dân Quân Y' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Hoạt Động Dân Quân Y')}
          >
            Hoạt động dân quân y
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeCategory === 'Chính Sách & Chế Độ BHYT' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Chính Sách & Chế Độ BHYT')}
          >
            Chính sách BHYT
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeCategory === 'Cẩm Nang Sức Khỏe' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Cẩm Nang Sức Khỏe')}
          >
            Cẩm nang y khoa
          </button>
        </div>

        {/* 3. FEATURED BANNER ARTICLE */}
        {featured && activeCategory === 'all' && (
          <div className="portal-news-hero-banner" style={{ marginBottom: '40px' }}>
            <div className="news-hero-img-box">
              <img src={featured.img} alt={featured.title} />
              <span className="featured-cat-tag">{featured.category}</span>
            </div>
            <div className="news-hero-content-box">
              <div className="article-meta-row">
                <span className="article-date">
                  <Calendar size={13} />
                  {featured.publishDate || '25/11/2026'}
                </span>
                <span className="article-author">
                  <User size={13} />
                  {featured.author}
                </span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <Link to="/dat-lich" className="btn-portal-search-submit" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                <span>Đặt lịch khám tư vấn kỹ thuật này</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {/* 4. ARTICLES GRID */}
        <div className="portal-news-grid-page">
          {filtered.map((art) => (
            <article key={art.id} className="portal-news-card-page">
              <div className="news-card-thumb">
                <img src={art.img} alt={art.title} />
                <span className="side-badge-pill">{art.category}</span>
              </div>
              <div className="news-card-body">
                <div className="article-meta-row" style={{ marginBottom: '6px' }}>
                  <span className="article-date">
                    <Calendar size={12} />
                    {art.publishDate || '15/11/2026'}
                  </span>
                  <span className="article-author">
                    <User size={12} />
                    {art.author}
                  </span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.summary}</p>
                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                  <span className="btn-article-read">
                    <span>Xem chi tiết thông báo</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
