import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, Award } from 'lucide-react';
import { DOCTORS, SPECIALTIES } from '../data/clinicData';

export default function DoctorsPage({ onSelectDoctor }) {
  const [activeSpecialty, setActiveSpecialty] = useState('all');
  const navigate = useNavigate();

  const filteredDoctors = activeSpecialty === 'all'
    ? DOCTORS
    : DOCTORS.filter(doc => doc.specialtyId === activeSpecialty);

  const handleBookDoctor = (doc) => {
    if (onSelectDoctor) {
      onSelectDoctor(doc);
    }
    navigate('/dat-lich');
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

      <div className="container" style={{ padding: '40px 20px 80px 20px' }}>
        {/* 2. SPECIALTY FILTER CHIPS */}
        <div className="page-filter-bar">
          <button 
            type="button" 
            className={`portal-filter-btn ${activeSpecialty === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSpecialty('all')}
          >
            Tất cả bác sĩ ({DOCTORS.length})
          </button>
          {SPECIALTIES.map(spec => (
            <button 
              key={spec.id}
              type="button" 
              className={`portal-filter-btn ${activeSpecialty === spec.id ? 'active' : ''}`}
              onClick={() => setActiveSpecialty(spec.id)}
            >
              {spec.name}
            </button>
          ))}
        </div>

        {/* 3. DOCTORS GRID */}
        <div className="hosp-doctors-grid">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="hosp-doc-card">
              <div className="hosp-doc-photo">
                <img src={doctor.avatar} alt={doctor.name} />
                <span className="hosp-doc-exp">
                  {doctor.expYears} năm kinh nghiệm
                </span>
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

                <button 
                  type="button" 
                  className="btn-portal-book-doctor"
                  onClick={() => handleBookDoctor(doctor)}
                >
                  <Calendar size={15} />
                  <span>Đăng ký khám cùng Bác sĩ</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4. HOSPITAL ETHICS QUOTE */}
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
