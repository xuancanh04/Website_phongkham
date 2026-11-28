import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Bone, 
  HeartPulse, 
  Activity, 
  Baby, 
  Smile, 
  FlaskConical, 
  Calendar,
  ChevronRight,
  Building2,
  Search,
  X
} from 'lucide-react';
import { SPECIALTIES } from '../data/clinicData';

const ICON_MAP = {
  Bone: Bone,
  HeartPulse: HeartPulse,
  Stethoscope: Stethoscope,
  Activity: Activity,
  Baby: Baby,
  Smile: Smile,
  FlaskConical: FlaskConical
};

export default function SpecialtiesPage({ onSelectSpecialty }) {
  const [activeGroup, setActiveGroup] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Categorize specialties into military hospital blocks
  const categorized = useMemo(() => {
    return SPECIALTIES.map(spec => {
      let block = 'Khối Cận lâm sàng & Y học cổ truyền';
      if (spec.id === 'chan-thuong-chinh-hinh' || spec.id === 'ngoai-tong-hop' || spec.id === 'phu-san-an-dong' || spec.id === 'tao-hinh-tham-my') {
        block = 'Khối Ngoại khoa & Phẫu thuật';
      } else if (spec.id === 'tim-than-khop' || spec.id === 'than-nhan-tao' || spec.id === 'hoi-suc-cap-cuu' || spec.id === 'noi-than-kinh') {
        block = 'Khối Nội khoa & Hồi sức cấp cứu';
      }
      return { ...spec, block };
    });
  }, []);

  const filtered = useMemo(() => {
    return categorized.filter(s => {
      const matchGroup = activeGroup === 'all' || s.block === activeGroup;
      const term = searchTerm.trim().toLowerCase();
      const matchSearch = !term ||
        s.name.toLowerCase().includes(term) ||
        s.desc.toLowerCase().includes(term) ||
        s.lead.toLowerCase().includes(term) ||
        s.procedures.some(p => p.toLowerCase().includes(term));

      return matchGroup && matchSearch;
    });
  }, [categorized, activeGroup, searchTerm]);

  const handleBookSpec = (spec) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(spec);
    }
    navigate(`/dat-lich?khoa=${spec.id}`);
  };

  return (
    <div className="portal-subpage">
      {/* 1. BREADCRUMB & PAGE BANNER */}
      <div className="portal-page-header">
        <div className="container">
          <nav className="portal-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <ChevronRight size={13} />
            <span>Chuyên khoa</span>
          </nav>

          <h1 className="page-header-title">
            Hệ Thống Chuyên Khoa Lâm Sàng & Kỹ Thuật Cao
          </h1>
          <p className="page-header-desc">
            Bệnh Viện Quân Y 7A tổ chức các khối khoa phòng chuyên sâu đạt chuẩn Bệnh viện Đa khoa Hạng I: 
            Từ Mũi nhọn Chấn thương chỉnh hình cột sống (Khoa B1), Ngoại khoa phẫu thuật nội soi (Khoa B2), 
            Nội Tim mạch - Thận - Khớp (Khoa A1), Khoa Phụ Sản An Đông đến Đơn vị Thận nhân tạo Đức Fresenius.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '36px 20px 80px 20px' }}>
        {/* 2. SEARCH & CONTROLS TOOLBAR */}
        <div className="portal-search-toolbar">
          <div className="portal-search-input-wrap">
            <Search size={18} className="search-bar-icon" />
            <input 
              type="text" 
              className="portal-live-search-input"
              placeholder="Tìm chuyên khoa theo tên, triệu chứng (đau lưng, sản phụ, tim mạch, mổ nội soi)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="Tìm kiếm chuyên khoa"
            />
            {searchTerm && (
              <button 
                type="button" 
                className="portal-search-clear-btn"
                onClick={() => setSearchTerm('')}
                aria-label="Xóa từ khóa tìm kiếm"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="portal-results-count">
            Hiển thị <strong>{filtered.length}</strong> / {SPECIALTIES.length} Chuyên khoa
          </div>
        </div>

        {/* 3. SPECIALTY FILTER TABS */}
        <div className="page-filter-bar">
          <button 
            type="button" 
            className={`portal-filter-btn ${activeGroup === 'all' ? 'active' : ''}`}
            onClick={() => setActiveGroup('all')}
          >
            Tất cả chuyên khoa ({SPECIALTIES.length})
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeGroup === 'Khối Ngoại khoa & Phẫu thuật' ? 'active' : ''}`}
            onClick={() => setActiveGroup('Khối Ngoại khoa & Phẫu thuật')}
          >
            Khối Ngoại khoa & Phẫu thuật
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeGroup === 'Khối Nội khoa & Hồi sức cấp cứu' ? 'active' : ''}`}
            onClick={() => setActiveGroup('Khối Nội khoa & Hồi sức cấp cứu')}
          >
            Khối Nội khoa & Hồi sức
          </button>
          <button 
            type="button" 
            className={`portal-filter-btn ${activeGroup === 'Khối Cận lâm sàng & Y học cổ truyền' ? 'active' : ''}`}
            onClick={() => setActiveGroup('Khối Cận lâm sàng & Y học cổ truyền')}
          >
            Khối Cận lâm sàng & YHCT
          </button>
        </div>

        {/* 4. SPECIALTY CARDS GRID OR EMPTY STATE */}
        {filtered.length === 0 ? (
          <div className="portal-no-results-box">
            <Stethoscope size={36} className="text-muted" />
            <h3>Không tìm thấy chuyên khoa phù hợp</h3>
            <p>Không có kết quả nào khớp với từ khóa <strong>"{searchTerm}"</strong>.</p>
            <button 
              type="button" 
              className="btn-portal-search-submit"
              onClick={() => { setSearchTerm(''); setActiveGroup('all'); }}
            >
              Đặt lại bộ lọc tìm kiếm
            </button>
          </div>
        ) : (
          <div className="hosp-specialties-grid">
            {filtered.map((spec) => {
              const IconComponent = ICON_MAP[spec.icon] || Stethoscope;
              return (
                <div key={spec.id} className="hosp-spec-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div className="hosp-spec-icon">
                      <IconComponent size={24} />
                    </div>
                    <span className="hosp-spec-badge">{spec.tag}</span>
                  </div>

                  <h3>{spec.name}</h3>
                  <div className="hosp-spec-lead">Trưởng khoa: {spec.lead}</div>
                  <p className="hosp-spec-desc">{spec.desc}</p>

                  <div style={{ marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--portal-navy)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      Kỹ thuật chuyên sâu:
                    </span>
                    <div className="hosp-proc-tags">
                      {spec.procedures.map((proc, i) => (
                        <span key={i} className="hosp-proc-pill">{proc}</span>
                      ))}
                    </div>
                  </div>

                  <div className="hosp-spec-footer">
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                      {spec.doctorCount} Bác sĩ biên chế
                    </span>
                    <button 
                      type="button" 
                      onClick={() => handleBookSpec(spec)}
                      className="btn-portal-book-spec"
                    >
                      <Calendar size={13} />
                      <span>Đặt khám khoa này</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 5. CALLOUT BOX */}
        <div className="portal-subpage-callout" style={{ marginTop: '50px' }}>
          <Building2 size={24} className="text-military" />
          <div>
            <h4>BỆNH VIỆN TIẾP NHẬN BHYT THÔNG TUYẾN TẤT CẢ CÁC CHUYÊN KHOA</h4>
            <p>
              Tất cả các khoa phòng tại Bệnh Viện Quân Y 7A đều phục vụ khám BHYT thông tuyến đúng mức hưởng 100% 
              cho bộ đội, thân nhân và nhân dân toàn quốc. Bệnh nhân có thể đăng ký khám trước để không phải bốc số chờ đợi.
            </p>
          </div>
          <Link to="/dat-lich" className="btn-portal-booking" style={{ whiteSpace: 'nowrap' }}>
            ĐĂNG KÝ KHÁM NGAY
          </Link>
        </div>
      </div>
    </div>
  );
}
