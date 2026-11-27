import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', phone: '', question: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: '', phone: '', question: '' });
    }, 4000);
  };

  return (
    <section className="portal-section" id="contact">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <MapPin size={14} />
            <span>LIÊN HỆ & CHỈ DẪN ĐỊA LÝ</span>
          </div>
          <h2 className="portal-head-h2">Thông Tin Trực Ban & Chỉ Dẫn Đường Đến Bệnh Viện</h2>
          <p className="portal-head-desc">
            Bệnh Viện Quân Y 7A tọa lạc ngay trung tâm Quận 5, TP.HCM. Hệ thống trực ban tác chiến, 
            trực cấp cứu và đường dây nóng luôn duy trì 24/24 sẵn sàng phục vụ bộ đội và nhân dân.
          </p>
        </div>

        <div className="hosp-contact-grid">
          {/* Left: Contact Info Tiles */}
          <div>
            <div className="hosp-contact-tiles">
              <div className="hosp-tile">
                <MapPin size={22} />
                <h5>Địa chỉ bệnh viện</h5>
                <p>{CLINIC_INFO.address}</p>
              </div>

              <div className="hosp-tile">
                <Phone size={22} />
                <h5>Tổng đài CSKH</h5>
                <p>
                  Đặt lịch: <strong>{CLINIC_INFO.hotline}</strong><br />
                  Cấp cứu: <strong>{CLINIC_INFO.emergencyPhone}</strong>
                </p>
              </div>

              <div className="hosp-tile">
                <Clock size={22} />
                <h5>Thời gian làm việc</h5>
                <p>
                  {CLINIC_INFO.operatingHours.weekdays}<br />
                  {CLINIC_INFO.operatingHours.sunday}
                </p>
              </div>

              <div className="hosp-tile">
                <Mail size={22} />
                <h5>Email & Tiếp nhận</h5>
                <p>
                  {CLINIC_INFO.email}<br />
                  Khám sức khỏe đoàn thể & cá nhân
                </p>
              </div>
            </div>

            {/* Google Maps Location Preview Card */}
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-color)',
              padding: '22px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <MapPin size={32} color="var(--hospital-blue)" style={{ margin: '0 auto 8px auto' }} />
              <h4 style={{ color: 'var(--hospital-navy)', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
                Vị Trí Bệnh Viện Quân Y 7A
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: '14px' }}>
                {CLINIC_INFO.address} (Khuôn viên Quân y rộng rãi, có bãi đỗ xe ô tô và xe máy, Vệ binh quân đội trực bảo vệ 24/24)
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn-hosp btn-hosp-sm btn-hosp-secondary"
                style={{ display: 'inline-flex', margin: '0 auto' }}
              >
                Mở chỉ đường trên Google Maps
              </a>
            </div>
          </div>

          {/* Right: Direct Doctor Consultation Request */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--hospital-navy)', marginBottom: '6px' }}>
              Đăng Ký Tư Vấn Y Khoa Miễn Phí
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginBottom: '20px' }}>
              Để lại thông tin và triệu chứng của bạn, Điều dưỡng trực chuyên khoa sẽ liên hệ hỗ trợ giải đáp chu đáo trong 15 phút.
            </p>

            {sent ? (
              <div style={{
                backgroundColor: '#dcfce7',
                border: '1px solid #bbf7d0',
                color: '#166534',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={32} color="#16a34a" style={{ margin: '0 auto 8px auto' }} />
                <strong>Yêu cầu tư vấn đã được gửi thành công!</strong>
                <p style={{ fontSize: '0.84rem', marginTop: '6px' }}>
                  Điều dưỡng trực sẽ liên hệ số điện thoại {formState.phone} trong ít phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                    Họ và tên của bạn *
                  </label>
                  <input 
                    type="text" 
                    className="hosp-input"
                    style={{ width: '100%' }}
                    placeholder="Nguyễn Văn A"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                    Số điện thoại nhận tư vấn *
                  </label>
                  <input 
                    type="tel" 
                    className="hosp-input"
                    style={{ width: '100%' }}
                    placeholder="0912 345 678"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                    Nội dung câu hỏi / Tình trạng sức khỏe
                  </label>
                  <textarea 
                    className="hosp-input"
                    style={{ width: '100%', height: '88px', resize: 'vertical' }}
                    placeholder="Mô tả triệu chứng hoặc thắc mắc về gói khám, chi phí bảo hiểm BHYT..."
                    value={formState.question}
                    onChange={(e) => setFormState({ ...formState, question: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-hosp btn-hosp-md btn-hosp-primary" style={{ width: '100%', marginTop: '4px' }}>
                  <Send size={15} />
                  <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
