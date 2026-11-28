import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, Award, Search, X, CheckCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { DOCTORS, SPECIALTIES } from '../data/clinicData';

export default function DoctorsPage({ onSelectDoctor }) {
  const [activeSpecialty, setActiveSpecialty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);
  const navigate = useNavigate();

  // Specialty count mapping
  const specialtyCounts = useMemo(() => {
    const counts = {};
    DOCTORS.forEach(doc => {
      counts[doc.specialtyId] = (counts[doc.specialtyId] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(doc => {
      const matchSpecialty = activeSpecialty === 'all' || doc.specialtyId === activeSpecialty;
      const term = searchTerm.trim().toLowerCase();
      const matchSearch = !term || 
        doc.name.toLowerCase().includes(term) ||
        doc.title.toLowerCase().includes(term) ||
        doc.degree.toLowerCase().includes(term) ||
        doc.specialtyName.toLowerCase().includes(term) ||
        doc.workHistory.toLowerCase().includes(term);

      return matchSpecialty && matchSearch;
    });
  }, [activeSpecialty, searchTerm]);

  const handleBookDoctor = (doc) => {
    if (onSelectDoctor) {
      onSelectDoctor(doc);
    }
    navigate(`/dat-lich?bacsi=${doc.id}&khoa=${doc.specialtyId}`);
  };

  return (
    <div className="portal-subpage">
      {/* 1. BREADCRUMB & PAGE HEADER */}
      <div className="portal-page-header">
        <div className="container">
          <nav className="portal-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <ChevronRight size={13} />
            <span>Bác sĩ Quân Y</span>
          </nav>

          <h1 className="page-header-title">
            Ban Giám Đốc & Đội Ngũ Thầy Thuốc Quân Y 7A
          </h1>
          <p className="page-header-desc">
            Quy tụ các Đại tá, Thượng tá, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa cấp cao của Quân đội. 
            Mỗi thầy thuốc là tấm gương sáng về y đức “Lương y như từ mẫu”, tác phong Bộ đội Cụ Hồ, 
            trực tiếp thăm khám lâm sàng, hội chẩn chuyên sâu và phẫu thuật kỹ thuật cao.
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
              placeholder="Tìm theo tên Bác sĩ, cấp hàm (Đại tá, Thượng tá), chuyên môn..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="Tìm kiếm bác sĩ"
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
            Hiển thị <strong>{filteredDoctors.length}</strong> / {DOCTORS.length} Thầy thuốc
          </div>
        </div>

        {/* 3. SPECIALTY FILTER CHIPS */}
        <div className="page-filter-bar">
          <button 
            type="button" 
            className={`portal-filter-btn ${activeSpecialty === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSpecialty('all')}
          >
            Tất cả bác sĩ ({DOCTORS.length})
          </button>
          {SPECIALTIES.map(spec => {
            const count = specialtyCounts[spec.id] || 0;
            if (count === 0) return null;
            return (
              <button 
                key={spec.id}
                type="button" 
                className={`portal-filter-btn ${activeSpecialty === spec.id ? 'active' : ''}`}
                onClick={() => setActiveSpecialty(spec.id)}
              >
                {spec.name} <span className="chip-badge">({count})</span>
              </button>
            );
          })}
        </div>

        {/* 4. DOCTORS GRID OR EMPTY STATE */}
        {filteredDoctors.length === 0 ? (
          <div className="portal-no-results-box">
            <Stethoscope size={36} className="text-muted" />
            <h3>Không tìm thấy bác sĩ phù hợp</h3>
            <p>Không có kết quả nào khớp với từ khóa <strong>"{searchTerm}"</strong> trong chuyên khoa đã chọn.</p>
            <button 
              type="button" 
              className="btn-portal-search-submit"
              onClick={() => { setSearchTerm(''); setActiveSpecialty('all'); }}
            >
              Đặt lại bộ lọc tìm kiếm
            </button>
          </div>
        ) : (
          <div className="hosp-doctors-grid">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="hosp-doc-card">
                <div className="hosp-doc-photo">
                  <img src={doctor.avatar} alt={doctor.name} loading="lazy" />
                  <span className="hosp-doc-exp">
                    {doctor.expYears} năm kinh nghiệm
                  </span>
                  {doctor.name.includes('Lê Quang Trí') && (
                    <span className="hosp-doc-badge-director">
                      <ShieldCheck size={12} /> Giám Đốc Viện
                    </span>
                  )}
                </div>

                <div className="hosp-doc-body">
                  <span className="hosp-doc-spec-name">{doctor.specialtyName}</span>
                  <h3 className="hosp-doc-name">{doctor.name}</h3>
                  <p className="hosp-doc-deg">{doctor.degree}</p>
                  <p className="hosp-doc-history">{doctor.workHistory}</p>

                  <div className="hosp-doc-sched">
                    <div>
                      <Clock size={13} color="var(--portal-navy)" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                      <span>{doctor.schedule}</span>
                    </div>
                    <div>
                      <strong>{doctor.fee}</strong>
                    </div>
                  </div>

                  <div className="hosp-doc-actions">
                    <button
                      type="button"
                      className="btn-portal-doc-detail"
                      onClick={() => setSelectedDoctorModal(doctor)}
                    >
                      Hồ sơ & Lịch khám
                    </button>
                    <button 
                      type="button" 
                      className="btn-portal-book-doctor"
                      onClick={() => handleBookDoctor(doctor)}
                    >
                      <Calendar size={14} />
                      <span>Đăng ký khám</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. DOCTOR DETAIL MODAL */}
        {selectedDoctorModal && (
          <div 
            className="omni-search-backdrop" 
            onClick={() => setSelectedDoctorModal(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Thông tin chi tiết thầy thuốc"
          >
            <div className="doc-modal-container" onClick={e => e.stopPropagation()}>
              <div className="doc-modal-header">
                <h3>Hồ Sơ Chuyên Môn Thầy Thuốc</h3>
                <button 
                  type="button" 
                  className="omni-clear-btn" 
                  onClick={() => setSelectedDoctorModal(null)}
                  aria-label="Đóng cửa sổ"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="doc-modal-content">
                <div className="doc-modal-hero">
                  <img src={selectedDoctorModal.avatar} alt={selectedDoctorModal.name} className="doc-modal-avatar" />
                  <div>
                    <span className="portal-rank-tag">{selectedDoctorModal.specialtyName}</span>
                    <h2 className="doc-modal-name">{selectedDoctorModal.name}</h2>
                    <p className="doc-modal-title">{selectedDoctorModal.title} - {selectedDoctorModal.degree}</p>
                    <div className="doc-modal-meta">
                      <span><strong>Kinh nghiệm:</strong> {selectedDoctorModal.expYears} năm</span>
                      <span>•</span>
                      <span><strong>Đánh giá:</strong> {selectedDoctorModal.rating} ★ ({selectedDoctorModal.reviewCount} lượt)</span>
                    </div>
                  </div>
                </div>

                <div className="doc-modal-section">
                  <h4>Quá Trình Đào Tạo & Công Tác</h4>
                  <p>{selectedDoctorModal.workHistory}</p>
                </div>

                <div className="doc-modal-section">
                  <h4>Lịch Khám Bệnh & Hội Chẩn</h4>
                  <div className="doc-schedule-card">
                    <Clock size={16} className="text-military" />
                    <div>
                      <strong>Khung giờ khám:</strong> {selectedDoctorModal.schedule}
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        Địa chỉ: Bệnh Viện Quân Y 7A - 466 Nguyễn Trãi, Phường 8, Quận 5, TP.HCM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="doc-modal-section">
                  <h4>Quyền Lợi Bảo Hiểm Y Tế</h4>
                  <ul className="doc-modal-bullets">
                    <li><CheckCircle size={14} className="text-military" /> Áp dụng BHYT đúng tuyến toàn quốc cho mọi thẻ.</li>
                    <li><CheckCircle size={14} className="text-military" /> Tiếp nhận đăng ký trước qua cổng điện tử, ưu tiên vào phòng khám không chờ bốc số.</li>
                  </ul>
                </div>

                <div className="doc-modal-footer">
                  <button 
                    type="button" 
                    className="btn-portal-search-submit"
                    onClick={() => setSelectedDoctorModal(null)}
                  >
                    Đóng
                  </button>
                  <button 
                    type="button" 
                    className="btn-portal-booking"
                    onClick={() => {
                      const doc = selectedDoctorModal;
                      setSelectedDoctorModal(null);
                      handleBookDoctor(doc);
                    }}
                  >
                    <Calendar size={15} />
                    <span>Đặt Lịch Với Bác Sĩ Này</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. HOSPITAL ETHICS QUOTE */}
        <div className="portal-subpage-callout" style={{ marginTop: '50px' }}>
          <Award size={24} className="text-military" />
          <div>
            <h4>LỊCH KHÁM CHUYÊN GIA & HỘI CHẨN ĐA CHUYÊN KHOA</h4>
            <p>
              Đối với các ca bệnh cột sống phức tạp, suy thận mạn giai đoạn cuối, đái tháo đường biến chứng, 
              Bệnh viện Quân Y 7A tổ chức hội chẩn chuyên sâu do Đại tá, PGS.TS.BS Lê Quang Trí cùng các Trưởng khoa đầu ngành trực tiếp chủ trì.
            </p>
          </div>
          <Link to="/dat-lich" className="btn-portal-booking" style={{ whiteSpace: 'nowrap' }}>
            ĐẶT LỊCH HỘI CHẨN
          </Link>
        </div>
      </div>
    </div>
  );
}
