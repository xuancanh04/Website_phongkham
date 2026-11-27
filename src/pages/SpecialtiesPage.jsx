import { useState } from 'react';
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
  Building2
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
  const navigate = useNavigate();

  // Categorize specialties into military hospital blocks
  const categorized = SPECIALTIES.map(spec => {
    let block = 'Khối Cận lâm sàng & Y học cổ truyền';
    if (spec.id === 'chan-thuong-chinh-hinh' || spec.id === 'ngoai-tong-hop' || spec.id === 'phu-san-an-dong' || spec.id === 'tao-hinh-tham-my') {
      block = 'Khối Ngoại khoa & Phẫu thuật';
    } else if (spec.id === 'tim-than-khop' || spec.id === 'than-nhan-tao' || spec.id === 'hoi-suc-cap-cuu' || spec.id === 'noi-than-kinh') {
      block = 'Khối Nội khoa & Hồi sức cấp cứu';
    }
    return { ...spec, block };
  });

  const filtered = activeGroup === 'all' 
    ? categorized 
    : categorized.filter(s => s.block === activeGroup);

  const handleBookSpec = (spec) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(spec);
    }
    navigate('/dat-lich');
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
            Nội Tim mạch - Thận - Khớp (Khoa A1) đến Đơn vị Thận nhân tạo Đức Fresenius.
          </p>
        </div>
      </div>

      {/* 2. SPECIALTY FILTER TABS */}
      <div className="container" style={{ padding: '40px 20px 80px 20px' }}>
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

        {/* 3. SPECIALTY CARDS GRID */}
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

        {/* 4. CALLOUT BOX */}
        <div className="portal-subpage-callout">
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
