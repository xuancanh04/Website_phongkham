import React, { useState } from 'react';
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
    <section className="section-wrap" style={{ backgroundColor: '#ffffff' }} id="contact">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Kết Nối Trực Tiếp</span>
          </div>
          <h2 className="section-headline">Thông Tin Liên Hệ & Vị Trí Bệnh Viện</h2>
          <p className="section-subtitle">
            Hệ thống đường dây nóng tư vấn y khoa và tiếp nhận phản hồi luôn hoạt động 24/7. 
            Quý khách có thể gửi câu hỏi hoặc liên hệ trực tiếp qua số hotline.
          </p>
        </div>

        <div className="contact-split-grid">
          {/* Left: Contact Info Tiles & Map link */}
          <div>
            <div className="contact-cards-quad">
              <div className="contact-tile">
                <MapPin size={24} />
                <h5>Địa chỉ bệnh viện</h5>
                <p>{CLINIC_INFO.address}</p>
              </div>

              <div className="contact-tile">
                <Phone size={24} />
                <h5>Tổng đài CSKH</h5>
                <p>
                  Đặt lịch: <strong>{CLINIC_INFO.hotline}</strong><br />
                  Cấp cứu: <strong>{CLINIC_INFO.emergencyPhone}</strong>
                </p>
              </div>

              <div className="contact-tile">
                <Clock size={24} />
                <h5>Thời gian làm việc</h5>
                <p>
                  {CLINIC_INFO.operatingHours.weekdays}<br />
                  {CLINIC_INFO.operatingHours.sunday}
                </p>
              </div>

              <div className="contact-tile">
                <Mail size={24} />
                <h5>Email & Hợp tác</h5>
                <p>
                  {CLINIC_INFO.email}<br />
                  Phục vụ khám đoàn & cá nhân
                </p>
              </div>
            </div>

            {/* Google Maps Banner */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              height: '240px',
              backgroundColor: '#e2e8f0',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '24px'
            }}>
              <div>
                <MapPin size={36} color="#0284c7" style={{ margin: '0 auto 10px auto' }} />
                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '6px' }}>Bản Đồ Chỉ Đường Đến MediCare Plus</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '14px' }}>
                  {CLINIC_INFO.address} (Đối diện cổng BV Đại học Y Dược TP.HCM)
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-core btn-secondary-white"
                  style={{ fontSize: '0.85rem', padding: '8px 18px' }}
                >
                  Xem vị trí trên Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Direct Doctor Consultation Callback */}
          <div style={{
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px'
          }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--brand-navy)', marginBottom: '6px' }}>
              Đăng Ký Tư Vấn Y Khoa Miễn Phí
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Để lại thông tin và triệu chứng của bạn, Bác sĩ trực chuyên khoa sẽ liên hệ giải đáp miễn phí trong vòng 15 phút.
            </p>

            {sent ? (
              <div style={{
                backgroundColor: '#dcfce7',
                border: '1px solid #bbf7d0',
                color: '#166534',
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={36} color="#16a34a" style={{ margin: '0 auto 10px auto' }} />
                <strong>Yêu cầu tư vấn đã được gửi thành công!</strong>
                <p style={{ fontSize: '0.88rem', marginTop: '6px' }}>
                  Bác sĩ trực sẽ gọi vào số điện thoại {formState.phone} trong ít phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                    Họ và tên của bạn *
                  </label>
                  <input 
                    type="text" 
                    className="panel-input-box"
                    style={{ width: '100%' }}
                    placeholder="Nguyễn Văn A"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                    Số điện thoại nhận tư vấn *
                  </label>
                  <input 
                    type="tel" 
                    className="panel-input-box"
                    style={{ width: '100%' }}
                    placeholder="0912 345 678"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                    Nội dung câu hỏi / Tình trạng sức khỏe
                  </label>
                  <textarea 
                    className="panel-input-box"
                    style={{ width: '100%', height: '100px', resize: 'vertical' }}
                    placeholder="Mô tả triệu chứng hoặc thắc mắc về gói khám, chi phí bảo hiểm..."
                    value={formState.question}
                    onChange={(e) => setFormState({ ...formState, question: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-core btn-primary-glow" style={{ padding: '14px', marginTop: '6px', fontSize: '1rem' }}>
                  <Send size={18} />
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
