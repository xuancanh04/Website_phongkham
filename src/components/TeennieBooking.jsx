import React, { useState } from 'react';
import { Calendar, Phone, User, Sparkles, CheckCircle2, Gift, MapPin } from 'lucide-react';
import { TEENNIE_INFO, PROMOTIONS } from '../data/teennieData';

export default function TeennieBooking({ bookingDraft }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    targetGroup: 'student', // student or worker
    problem: 'Răng hô',
    method: 'Mắc Cài Kim Loại Kinh Điển',
    date: ''
  });

  const [confirmed, setConfirmed] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const voucherCode = 'TEEN-' + (formData.targetGroup === 'student' ? '5M-' : '3M-') + Math.floor(1000 + Math.random() * 9000);
    const booking = {
      ...formData,
      voucherCode,
      createdAt: new Date().toISOString()
    };

    setConfirmed(booking);
  };

  return (
    <section className="teennie-section booking-teennie-section" id="booking">
      <div className="container">
        <div className="booking-teennie-box">
          {/* Left Promo Area */}
          <div className="booking-left-promo">
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--teennie-coral-soft)',
                color: 'var(--teennie-coral)',
                padding: '5px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '14px'
              }}>
                <Gift size={16} />
                <span>Ưu Đãi Đặc Biệt Tháng Này</span>
              </div>

              <h2 style={{ fontSize: '1.95rem', fontWeight: 900, color: 'var(--teennie-blue-dark)', lineHeight: 1.25, marginBottom: '12px' }}>
                Đăng Ký Thăm Khám 10 Bước 0đ & Nhận Ngay Voucher Giảm 5 Triệu
              </h2>

              <p style={{ color: 'var(--teennie-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Gói quà tặng trị giá <strong>1.500.000đ</strong> bao gồm: Chụp phim Cone Beam CT 3D toàn hàm, 
                scan dấu răng iTero Element 5D và tư vấn phác đồ 1:1 trực tiếp cùng Bác sĩ Chuyên khoa chỉnh nha.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span><strong>Giảm 5.000.000đ</strong> cho Học sinh - Sinh viên</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span><strong>Giảm 3.000.000đ</strong> cho Người đi làm</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>Trả góp 0% chỉ từ <strong>1 triệu/tháng</strong></span>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '28px',
              paddingTop: '16px',
              borderTop: '1px solid var(--teennie-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <MapPin size={20} color="var(--teennie-coral)" />
              <div style={{ fontSize: '0.82rem', color: 'var(--teennie-muted)' }}>
                Địa chỉ: <strong>{TEENNIE_INFO.address}</strong>
              </div>
            </div>
          </div>

          {/* Right Form Area */}
          <div>
            {confirmed ? (
              <div style={{
                textAlign: 'center',
                backgroundColor: 'var(--teennie-bg-soft)',
                border: '2px dashed var(--teennie-coral)',
                borderRadius: '16px',
                padding: '28px 20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px auto'
                }}>
                  <Sparkles size={28} />
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--teennie-blue-dark)', marginBottom: '6px' }}>
                  Đăng Ký Thành Công!
                </h3>
                <p style={{ color: 'var(--teennie-muted)', fontSize: '0.86rem', marginBottom: '18px' }}>
                  Bác sĩ Teennie Clinic sẽ gọi lại xác nhận khung giờ thăm khám qua số <strong>{confirmed.phone}</strong>.
                </p>

                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '14px',
                  borderRadius: '10px',
                  border: '1px solid #fed7aa',
                  marginBottom: '18px',
                  textAlign: 'left',
                  fontSize: '0.86rem',
                  lineHeight: '1.6'
                }}>
                  <div><strong>Mã Voucher Ưu Đãi:</strong> <span style={{ color: 'var(--teennie-coral)', fontWeight: 800 }}>{confirmed.voucherCode}</span></div>
                  <div><strong>Khách hàng:</strong> {confirmed.fullName}</div>
                  <div><strong>Tình trạng:</strong> {confirmed.problem}</div>
                  <div><strong>Ngày dự kiến khám:</strong> {confirmed.date || 'Sớm nhất trong tuần'}</div>
                  <div><strong>Địa điểm:</strong> {TEENNIE_INFO.address}</div>
                </div>

                <button 
                  type="button" 
                  className="btn-teennie btn-md btn-coral-glow"
                  onClick={() => setConfirmed(null)}
                >
                  Đăng ký cho bạn bè / người thân
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input-teennie-group">
                  <label>Họ và tên của bạn *</label>
                  <input 
                    type="text" 
                    className="input-teennie-ctrl"
                    placeholder="Ví dụ: Nguyễn Minh Anh"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="input-teennie-group">
                  <label>Số điện thoại liên hệ *</label>
                  <input 
                    type="tel" 
                    className="input-teennie-ctrl"
                    placeholder="0912 345 678"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="input-teennie-group">
                  <label>Đối tượng nhận ưu đãi</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      className={`term-chip ${formData.targetGroup === 'student' ? 'active' : ''}`}
                      style={{ flex: 1 }}
                      onClick={() => setFormData({ ...formData, targetGroup: 'student' })}
                    >
                      Học sinh - Sinh viên (Giảm 5tr)
                    </button>
                    <button
                      type="button"
                      className={`term-chip ${formData.targetGroup === 'worker' ? 'active' : ''}`}
                      style={{ flex: 1 }}
                      onClick={() => setFormData({ ...formData, targetGroup: 'worker' })}
                    >
                      Người đi làm (Giảm 3tr)
                    </button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="input-teennie-group">
                    <label>Tình trạng răng hiện tại</label>
                    <select 
                      className="input-teennie-ctrl"
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    >
                      <option value="Răng hô">Răng hô (vẩu)</option>
                      <option value="Răng móm">Răng móm (cắn ngược)</option>
                      <option value="Răng thưa">Răng thưa (hở kẽ)</option>
                      <option value="Răng lệch lạc">Răng lệch lạc chen chúc</option>
                      <option value="Khớp cắn sâu">Khớp cắn sâu</option>
                      <option value="Khớp cắn chéo">Khớp cắn chéo</option>
                      <option value="Chưa rõ">Chưa rõ tình trạng</option>
                    </select>
                  </div>

                  <div className="input-teennie-group">
                    <label>Ngày bạn muốn đến khám</label>
                    <input 
                      type="date"
                      className="input-teennie-ctrl"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-teennie btn-lg btn-coral-glow"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Sparkles size={18} />
                  <span>Xác Nhận Đặt Hẹn 0đ & Nhận Voucher</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
