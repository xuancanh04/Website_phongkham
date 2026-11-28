import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ShieldCheck, 
  ChevronRight, 
  CreditCard, 
  FileText, 
  HelpCircle,
  Calendar,
  Calculator,
  Search,
  X,
  Info
} from 'lucide-react';
import { PRICING_PACKAGES, CLINIC_FAQS } from '../data/clinicData';

const HIGH_TECH_SERVICES = [
  { id: 1, name: 'Khám Bệnh Lâm Sàng (Chuyên khoa / Ngoại trú)', bhyt: '100% theo khung BHYT (0đ)', service: '100.000 đ - 150.000 đ', note: 'Áp dụng cho mọi ngày trong tuần', type: 'kham' },
  { id: 2, name: 'Chụp Cộng Hưởng Từ MRI 1.5 Tesla (Siemens Đức)', bhyt: 'Thanh toán BHYT đúng tuyến', service: '1.800.000 đ - 2.500.000 đ', note: 'Không dùng tia X, dựng hình mô mềm, khớp, sọ não', type: 'cdha' },
  { id: 3, name: 'Chụp Cắt Lớp Vi Tính CT-Scanner 128 Dãy', bhyt: 'Thanh toán BHYT đúng tuyến', service: '1.200.000 đ - 1.800.000 đ', note: 'Dựng hình mạch máu & đa chấn thương chỉ vài giây', type: 'cdha' },
  { id: 4, name: 'Lọc Máu Thận Nhân Tạo Chu Kỳ (Fresenius 4008S)', bhyt: 'Được BHYT chi trả 100% đúng tuyến', service: '550.000 đ / lượt lọc', note: 'Màng lọc High-flux, hệ thống nước RO vô trùng', type: 'than' },
  { id: 5, name: 'Bơm Xi Măng Sinh Học Tạo Hình Đốt Sống (Vertebroplasty)', bhyt: 'BHYT chi trả theo danh mục kỹ thuật', service: 'Theo phác đồ hội chẩn B1', note: 'Thế mạnh độc quyền do PGS.TS Lê Quang Trí chủ trì', type: 'phauthuat' },
  { id: 6, name: 'Phẫu Thuật Nội Soi Tiêu Hóa (Ruột thừa, túi mật, trĩ Longo)', bhyt: 'Thanh toán BHYT đúng tuyến', service: 'Theo biểu phí Bệnh viện Hạng I', note: 'Ít đau, phục hồi nhanh sau 24-48 giờ', type: 'phauthuat' },
  { id: 7, name: 'Siêu Âm Tim & Mạch Máu Doppler Màu 4D', bhyt: 'Thanh toán BHYT đúng tuyến', service: '250.000 đ - 400.000 đ', note: 'Khảo sát huyết khối, van tim, mạch máu chi dưới', type: 'cdha' },
  { id: 8, name: 'Nội Soi Thực Quản - Dạ Dày - Đại Tràng Tiền Mê (Không Đau)', bhyt: 'Hỗ trợ BHYT một phần kỹ thuật', service: '900.000 đ - 1.600.000 đ', note: 'Bác sĩ gây mê theo dõi sát sao, êm ái, tỉnh sau 15p', type: 'phauthuat' },
  { id: 9, name: 'Phục Hồi Chức Năng & Cấy Chỉ YHCT (Khoa A5)', bhyt: 'BHYT thanh toán theo phác đồ', service: '120.000 đ - 250.000 đ', note: 'Điều trị di chứng đột quỵ, đau dây thần kinh tọa', type: 'yhct' }
];

export default function PricingPage({ onSelectPackage }) {
  const navigate = useNavigate();

  // BHYT Calculator States
  const [patientCardType, setPatientCardType] = useState('dn');
  const [serviceEstimateType, setServiceEstimateType] = useState('kham');
  const [feeSearch, setFeeSearch] = useState('');
  const [activeFeeFilter, setActiveFeeFilter] = useState('all');

  const handleBookPkg = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage(pkg);
    }
    navigate('/dat-lich');
  };

  // Calculation logic
  const bhytResult = useMemo(() => {
    let rate = 80;
    let cardLabel = 'BHYT Doanh nghiệp / Hộ gia đình';
    let note = 'Áp dụng mức hưởng 80% chi phí trong danh mục BHYT. Bệnh viện Quân Y 7A tiếp nhận thẻ toàn quốc không cần giấy chuyển tuyến.';

    if (patientCardType === 'qn') {
      rate = 100;
      cardLabel = 'Sĩ quan, Quân nhân, Thân nhân Quân đội, Thương binh (QN, CA, CY)';
      note = 'Hưởng 100% chi phí khám chữa bệnh và không áp dụng giới hạn tỷ lệ thanh toán thuốc/vật tư y tế.';
    } else if (patientCardType === 'cc') {
      rate = 100;
      cardLabel = 'Người có công với CM, Trẻ em < 6 tuổi, Hộ nghèo (CC, TE, HN)';
      note = 'Hưởng 100% chi phí khám chữa bệnh đúng tuyến theo quy định Nhà nước.';
    } else if (patientCardType === 'cn') {
      rate = 95;
      cardLabel = 'Hộ cận nghèo, Người bảo trợ xã hội (CN, BT)';
      note = 'BHYT chi trả 95% chi phí trong danh mục, người bệnh đồng chi trả 5%.';
    }

    let approxCost = 'Khoảng 0 đ - 50.000 đ';
    if (serviceEstimateType === 'kham') {
      approxCost = rate === 100 ? '0 đ' : 'Chỉ từ 10.000 đ - 40.000 đ (theo định mức)';
    } else if (serviceEstimateType === 'mri') {
      approxCost = rate === 100 ? 'Được BHYT chi trả theo định mức' : `Đồng chi trả khoảng ${100 - rate}% định mức BHYT`;
    } else if (serviceEstimateType === 'phauthuat') {
      approxCost = rate === 100 ? 'BHYT chi trả 100% danh mục' : `BHYT chi trả ${rate}%, người bệnh đồng chi trả ${100 - rate}%`;
    }

    return { rate, cardLabel, note, approxCost };
  }, [patientCardType, serviceEstimateType]);

  const filteredFeeServices = useMemo(() => {
    return HIGH_TECH_SERVICES.filter(svc => {
      const matchType = activeFeeFilter === 'all' || svc.type === activeFeeFilter;
      const term = feeSearch.trim().toLowerCase();
      const matchSearch = !term ||
        svc.name.toLowerCase().includes(term) ||
        svc.note.toLowerCase().includes(term) ||
        svc.service.toLowerCase().includes(term);

      return matchType && matchSearch;
    });
  }, [activeFeeFilter, feeSearch]);

  return (
    <div className="portal-subpage">
      {/* 1. BREADCRUMB & PAGE HEADER */}
      <div className="portal-page-header">
        <div className="container">
          <nav className="portal-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <ChevronRight size={13} />
            <span>Bảng giá & BHYT</span>
          </nav>

          <h1 className="page-header-title">
            Công Khai Bảng Giá Viện Phí & Chính Sách BHYT Toàn Quốc
          </h1>
          <p className="page-header-desc">
            Toàn bộ chi phí khám chữa bệnh, chẩn đoán hình ảnh và phẫu thuật tại Bệnh Viện Quân Y 7A 
            được niêm yết công khai theo đúng quy định của Bộ Y Tế và Bộ Quốc Phòng. 
            Mọi công dân có thẻ BHYT trên phạm vi toàn quốc đều được thanh toán 100% quyền lợi đúng tuyến.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '36px 20px 80px 20px' }}>
        {/* 2. BHYT POLICY HIGHLIGHT BAR */}
        <div className="portal-bhyt-notice-box">
          <ShieldCheck size={32} className="text-military" style={{ flexShrink: 0 }} />
          <div>
            <h3>CHÍNH SÁCH BHYT THÔNG TUYẾN TẠI BỆNH VIỆN QUÂN Y 7A</h3>
            <p>
              Căn cứ Luật Bảo hiểm y tế: Bệnh nhân có thẻ BHYT đăng ký ban đầu tại bất kỳ Trạm y tế, Trung tâm y tế 
              hoặc Bệnh viện nào trên toàn quốc khi đến khám ngoại trú hoặc điều trị nội trú tại Bệnh Viện Quân Y 7A 
              đều được hưởng <strong>100% mức quyền lợi quy định trên thẻ mà KHÔNG CẦN GIẤY CHUYỂN TUYẾN</strong>.
            </p>
          </div>
        </div>

        {/* 3. INTERACTIVE BHYT BENEFIT CALCULATOR */}
        <div className="portal-calculator-wrap">
          <div className="portal-calc-head">
            <Calculator size={20} className="text-military" />
            <div>
              <h3>Công Cụ Ước Tính Quyền Lợi Thẻ BHYT Khi Khám Tại Viện 7A</h3>
              <p>Chọn loại thẻ và dịch vụ dự kiến để biết mức chi trả bảo hiểm của bạn.</p>
            </div>
          </div>

          <div className="portal-calc-grid">
            <div className="portal-calc-inputs">
              <div className="calc-form-group">
                <label className="calc-label">1. Loại thẻ BHYT của bạn:</label>
                <div className="calc-radio-group">
                  <label className={`calc-radio-card ${patientCardType === 'qn' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="cardType" 
                      value="qn" 
                      checked={patientCardType === 'qn'} 
                      onChange={() => setPatientCardType('qn')} 
                    />
                    <div>
                      <strong>Quân nhân / Sĩ quan / Thân nhân (QN, CA)</strong>
                      <span>Mức hưởng tối đa 100% viện phí</span>
                    </div>
                  </label>

                  <label className={`calc-radio-card ${patientCardType === 'cc' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="cardType" 
                      value="cc" 
                      checked={patientCardType === 'cc'} 
                      onChange={() => setPatientCardType('cc')} 
                    />
                    <div>
                      <strong>Người có công / Trẻ &lt; 6 tuổi / Hộ nghèo (CC, TE)</strong>
                      <span>Mức hưởng 100% đúng tuyến</span>
                    </div>
                  </label>

                  <label className={`calc-radio-card ${patientCardType === 'dn' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="cardType" 
                      value="dn" 
                      checked={patientCardType === 'dn'} 
                      onChange={() => setPatientCardType('dn')} 
                    />
                    <div>
                      <strong>Người lao động / BHYT Hộ gia đình (DN, GD)</strong>
                      <span>Mức hưởng thông dụng 80% đúng tuyến</span>
                    </div>
                  </label>

                  <label className={`calc-radio-card ${patientCardType === 'cn' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="cardType" 
                      value="cn" 
                      checked={patientCardType === 'cn'} 
                      onChange={() => setPatientCardType('cn')} 
                    />
                    <div>
                      <strong>Hộ cận nghèo / Bảo trợ xã hội (CN, BT)</strong>
                      <span>Mức hưởng 95% đúng tuyến</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="calc-form-group" style={{ marginTop: '16px' }}>
                <label className="calc-label">2. Nhu cầu khám dự kiến:</label>
                <div className="calc-chips-row">
                  <button 
                    type="button" 
                    className={`calc-chip-btn ${serviceEstimateType === 'kham' ? 'active' : ''}`}
                    onClick={() => setServiceEstimateType('kham')}
                  >
                    Khám bệnh ngoại trú
                  </button>
                  <button 
                    type="button" 
                    className={`calc-chip-btn ${serviceEstimateType === 'mri' ? 'active' : ''}`}
                    onClick={() => setServiceEstimateType('mri')}
                  >
                    Chụp MRI / CT Kỹ thuật cao
                  </button>
                  <button 
                    type="button" 
                    className={`calc-chip-btn ${serviceEstimateType === 'phauthuat' ? 'active' : ''}`}
                    onClick={() => setServiceEstimateType('phauthuat')}
                  >
                    Phẫu thuật nội soi / Cột sống
                  </button>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="portal-calc-result-box">
              <span className="calc-result-badge">KẾT QUẢ DỰ TÍNH QUYỀN LỢI</span>
              <div className="calc-percentage-hero">
                <span className="calc-pct-num">{bhytResult.rate}%</span>
                <span className="calc-pct-text">BHYT CHI TRẢ ĐÚNG TUYẾN</span>
              </div>

              <div className="calc-result-details">
                <div className="calc-detail-row">
                  <span>Mức hỗ trợ:</span>
                  <strong>{bhytResult.rate}% chi phí trong danh mục</strong>
                </div>
                <div className="calc-detail-row">
                  <span>Khoản chi trả ước tính:</span>
                  <strong className="text-military">{bhytResult.approxCost}</strong>
                </div>
                <div className="calc-detail-note">
                  <Info size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{bhytResult.note}</span>
                </div>
              </div>

              <Link 
                to="/dat-lich" 
                className="btn-portal-booking"
                style={{ width: '100%', textAlign: 'center', marginTop: '16px' }}
              >
                ĐĂNG KÝ KHÁM BHYT NGAY
              </Link>
            </div>
          </div>
        </div>

        {/* 4. HEALTH CHECKUP PACKAGES */}
        <div style={{ marginBottom: '60px' }}>
          <div className="portal-section-head" style={{ marginBottom: '32px' }}>
            <div className="portal-tag-pill">
              <CreditCard size={14} />
              <span>GÓI KHÁM ĐỊNH KỲ & CHUYÊN SÂU</span>
            </div>
            <h2 className="portal-head-h2">Các Gói Khám Tầm Soát Sức Khỏe Tiêu Chuẩn</h2>
            <p className="portal-head-desc">
              Thiết kế khoa học, tiết kiệm chi phí, giúp phát hiện sớm các bệnh lý cơ xương khớp, tim mạch, đột quỵ và chức năng gan thận.
            </p>
          </div>

          <div className="hosp-pricing-deck">
            {PRICING_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`hosp-plan-card ${pkg.isPopular ? 'featured' : ''}`}
              >
                {pkg.isPopular && (
                  <div className="hosp-featured-ribbon">
                    Thế Mạnh Mũi Nhọn Quân Y 7A
                  </div>
                )}

                <span style={{
                  display: 'inline-block',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: pkg.isPopular ? 'var(--portal-navy)' : 'var(--text-muted)',
                  marginBottom: '6px'
                }}>
                  {pkg.badge}
                </span>
                <h3 className="hosp-plan-name">{pkg.name}</h3>
                <p className="hosp-plan-sub">{pkg.subtitle}</p>

                <div className="hosp-price-row">
                  <span className="hosp-price-current">{pkg.price}</span>
                  <span className="hosp-price-old">{pkg.originalPrice}</span>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    color: 'var(--portal-red)',
                    backgroundColor: 'var(--portal-red-light)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {pkg.discount}
                  </span>
                </div>

                <ul className="hosp-feature-list">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="hosp-feature-item">
                      <Check size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  type="button" 
                  className={pkg.isPopular ? 'btn-portal-booking' : 'btn-portal-search-submit'}
                  style={{ width: '100%', height: '42px', marginTop: 'auto' }}
                  onClick={() => handleBookPkg(pkg)}
                >
                  <Calendar size={15} />
                  <span>Đăng ký gói khám này</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 5. SEARCHABLE & FILTERABLE HIGH-TECH FEE TABLE */}
        <div className="portal-fee-table-wrap">
          <div className="side-news-header" style={{ marginBottom: '16px' }}>
            <FileText size={16} />
            <h4>BẢNG GIÁ NIÊM YẾT DỊCH VỤ CẬN LÂM SÀNG & KỸ THUẬT CAO (BỘ Y TẾ)</h4>
          </div>

          <div className="fee-table-toolbar">
            <div className="portal-search-input-wrap" style={{ maxWidth: '350px' }}>
              <Search size={16} className="search-bar-icon" />
              <input 
                type="text" 
                className="portal-live-search-input"
                placeholder="Tìm dịch vụ: MRI, CT, Lọc máu, Nội soi..."
                value={feeSearch}
                onChange={e => setFeeSearch(e.target.value)}
                aria-label="Tìm kiếm dịch vụ viện phí"
              />
              {feeSearch && (
                <button 
                  type="button" 
                  className="portal-search-clear-btn"
                  onClick={() => setFeeSearch('')}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="fee-filters">
              <button 
                type="button" 
                className={`portal-filter-btn ${activeFeeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFeeFilter('all')}
              >
                Tất cả ({HIGH_TECH_SERVICES.length})
              </button>
              <button 
                type="button" 
                className={`portal-filter-btn ${activeFeeFilter === 'cdha' ? 'active' : ''}`}
                onClick={() => setActiveFeeFilter('cdha')}
              >
                Chẩn đoán hình ảnh (MRI/CT)
              </button>
              <button 
                type="button" 
                className={`portal-filter-btn ${activeFeeFilter === 'than' ? 'active' : ''}`}
                onClick={() => setActiveFeeFilter('than')}
              >
                Thận nhân tạo
              </button>
              <button 
                type="button" 
                className={`portal-filter-btn ${activeFeeFilter === 'phauthuat' ? 'active' : ''}`}
                onClick={() => setActiveFeeFilter('phauthuat')}
              >
                Phẫu thuật & Ngoại khoa
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="portal-fee-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>STT</th>
                  <th>Tên Dịch Vụ / Kỹ Thuật Y Khoa</th>
                  <th>Quyền Lợi BHYT Chi Trả</th>
                  <th>Giá Khám Dịch Vụ</th>
                  <th>Ghi Chú Kỹ Thuật</th>
                </tr>
              </thead>
              <tbody>
                {filteredFeeServices.map((svc, idx) => (
                  <tr key={svc.id}>
                    <td>{(idx + 1).toString().padStart(2, '0')}</td>
                    <td><strong>{svc.name}</strong></td>
                    <td>
                      <span className="badge-bhyt-coverage">
                        {svc.bhyt}
                      </span>
                    </td>
                    <td><strong>{svc.service}</strong></td>
                    <td style={{ color: 'var(--text-muted)' }}>{svc.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. FAQS */}
        <div style={{ marginTop: '50px' }}>
          <div className="side-news-header" style={{ marginBottom: '16px' }}>
            <HelpCircle size={16} />
            <h4>HỎI ĐÁP QUYỀN LỢI BHYT KHI ĐẾN KHÁM TẠI BỆNH VIỆN QUÂN Y 7A</h4>
          </div>

          <div className="hosp-faq-stack">
            {CLINIC_FAQS.map((faq, idx) => (
              <div key={idx} className="hosp-faq-card open">
                <div className="hosp-faq-btn" style={{ cursor: 'default' }}>
                  <span>{idx + 1}. {faq.q}</span>
                </div>
                <div className="hosp-faq-answer">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
