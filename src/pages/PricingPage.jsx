import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ShieldCheck, 
  ChevronRight, 
  CreditCard, 
  FileText, 
  HelpCircle,
  Calendar
} from 'lucide-react';
import { PRICING_PACKAGES, CLINIC_FAQS } from '../data/clinicData';

export default function PricingPage({ onSelectPackage }) {
  const navigate = useNavigate();

  const handleBookPkg = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage(pkg);
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

      <div className="container" style={{ padding: '40px 20px 80px 20px' }}>
        {/* 2. BHYT POLICY HIGHLIGHT BAR */}
        <div className="portal-bhyt-notice-box">
          <ShieldCheck size={28} className="text-military" style={{ flexShrink: 0 }} />
          <div>
            <h3>CHÍNH SÁCH BHYT THÔNG TUYẾN TẠI BỆNH VIỆN QUÂN Y 7A</h3>
            <p>
              Căn cứ Luật Bảo hiểm y tế: Bệnh nhân có thẻ BHYT đăng ký ban đầu tại bất kỳ Trạm y tế, Trung tâm y tế 
              hoặc Bệnh viện nào trên toàn quốc khi đến khám ngoại trú hoặc điều trị nội trú tại Bệnh Viện Quân Y 7A 
              đều được hưởng <strong>100% mức quyền lợi quy định trên thẻ mà KHÔNG CẦN GIẤY CHUYỂN TUYẾN</strong>.
            </p>
          </div>
        </div>

        {/* 3. HEALTH CHECKUP PACKAGES */}
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

        {/* 4. NIÊM YẾT GIÁ KỸ THUẬT CAO */}
        <div className="portal-fee-table-wrap">
          <div className="side-news-header" style={{ marginBottom: '16px' }}>
            <FileText size={16} />
            <h4>BẢNG GIÁ NIÊM YẾT MỘT SỐ DỊCH VỤ CẬN LÂM SÀNG & KỸ THUẬT CAO (THAM KHẢO)</h4>
          </div>

          <table className="portal-fee-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Dịch Vụ / Kỹ Thuật Y Khoa</th>
                <th>Giá Thu BHYT Chi Trả</th>
                <th>Giá Khám Dịch Vụ / Yêu Cầu</th>
                <th>Ghi Chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td><strong>Khám Bệnh Lâm Sàng (Chuyên khoa / Tổng quát)</strong></td>
                <td>Theo khung BHYT (0đ khi đủ quyền lợi)</td>
                <td>100.000 đ - 150.000 đ</td>
                <td>Khám Thứ 7 & ngày thường</td>
              </tr>
              <tr>
                <td>02</td>
                <td><strong>Chụp Cộng Hưởng Từ MRI 1.5 Tesla (Có/Không thuốc)</strong></td>
                <td>Thanh toán theo tỷ lệ BHYT đúng tuyến</td>
                <td>1.800.000 đ - 2.500.000 đ</td>
                <td>Máy Siemens Magnetom Đức</td>
              </tr>
              <tr>
                <td>03</td>
                <td><strong>Chụp Cắt Lớp Vi Tính CT-Scanner Đa Dãy</strong></td>
                <td>Thanh toán theo tỷ lệ BHYT đúng tuyến</td>
                <td>1.200.000 đ - 1.800.000 đ</td>
                <td>Dựng hình 3D mạch máu & xương</td>
              </tr>
              <tr>
                <td>04</td>
                <td><strong>Lọc Máu Thận Nhân Tạo Chu Kỳ (Máy Fresenius Đức)</strong></td>
                <td>Được BHYT chi trả 100% đúng tuyến</td>
                <td>550.000 đ / lượt lọc</td>
                <td>Vô trùng tuyệt đối</td>
              </tr>
              <tr>
                <td>05</td>
                <td><strong>Kỹ Thuật Bơm Xi Măng Sinh Học Đốt Sống (Vertebroplasty)</strong></td>
                <td>BHYT thanh toán theo danh mục kỹ thuật</td>
                <td>Theo phác đồ hội chẩn B1</td>
                <td>PGS.TS Lê Quang Trí chủ trì</td>
              </tr>
              <tr>
                <td>06</td>
                <td><strong>Phẫu Thuật Nội Soi Ổ Bụng (Ruột thừa, túi mật, trĩ Longo)</strong></td>
                <td>Thanh toán BHYT đúng tuyến</td>
                <td>Theo quy định Bệnh viện Hạng I</td>
                <td>Khoa Ngoại Tổng Hợp (B2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. FAQS */}
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
