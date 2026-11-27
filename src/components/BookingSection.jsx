import { useState, useEffect } from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  QrCode, 
  Printer, 
  Check 
} from 'lucide-react';
import { SPECIALTIES, DOCTORS, TIME_SLOTS, CLINIC_INFO } from '../data/clinicData';

export default function BookingSection({ bookingDraft, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: 'Nam',
    birthYear: '1990',
    specialtyId: '',
    doctorId: '',
    appointmentDate: '',
    timeSlot: '',
    insuranceType: 'none',
    symptoms: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (bookingDraft) {
      setFormData(prev => ({
        ...prev,
        specialtyId: bookingDraft.specialtyId || prev.specialtyId,
        doctorId: bookingDraft.doctorId || prev.doctorId,
        appointmentDate: bookingDraft.date || prev.appointmentDate,
        symptoms: bookingDraft.symptoms || prev.symptoms
      }));
    }
  }, [bookingDraft]);

  const selectedSpecialtyObj = SPECIALTIES.find(s => s.id === formData.specialtyId);
  const selectedDoctorObj = DOCTORS.find(d => d.id === formData.doctorId);
  const filteredDoctors = formData.specialtyId
    ? DOCTORS.filter(d => d.specialtyId === formData.specialtyId)
    : DOCTORS;

  const validate = () => {
    const err = {};
    if (!formData.fullName.trim()) err.fullName = 'Vui lòng nhập họ và tên người bệnh';
    if (!formData.phone.trim()) {
      err.phone = 'Vui lòng nhập số điện thoại liên hệ';
    } else if (!/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(formData.phone.trim().replace(/\s/g, ''))) {
      err.phone = 'Số điện thoại không đúng định dạng (10 số)';
    }
    if (!formData.specialtyId) err.specialtyId = 'Vui lòng chọn chuyên khoa khám';
    if (!formData.appointmentDate) err.appointmentDate = 'Vui lòng chọn ngày đến khám';
    if (!formData.timeSlot) err.timeSlot = 'Vui lòng chọn khung giờ khám';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const randomCode = 'QY7A-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      ...formData,
      bookingCode: randomCode,
      specialtyName: selectedSpecialtyObj ? selectedSpecialtyObj.name : 'Khám tổng quát',
      doctorName: selectedDoctorObj ? selectedDoctorObj.name : 'Bác sĩ phân bổ tự động',
      createdAt: new Date().toISOString(),
      status: 'Đã xác nhận'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('qy7a_appointments') || localStorage.getItem('medicare_appointments') || '[]');
      localStorage.setItem('qy7a_appointments', JSON.stringify([newBooking, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setConfirmedBooking(newBooking);
    if (onBookingSuccess) onBookingSuccess(newBooking);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      gender: 'Nam',
      birthYear: '1990',
      specialtyId: '',
      doctorId: '',
      appointmentDate: '',
      timeSlot: '',
      insuranceType: 'none',
      symptoms: ''
    });
    setErrors({});
  };

  return (
    <section className="hospital-section hosp-booking-wrap" id="booking">
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <Calendar size={14} />
            <span>Tiết Kiệm Thời Gian</span>
          </div>
          <h2 className="hospital-heading-h2">Đặt Lịch Khám Bệnh Trực Tuyến</h2>
          <p className="hospital-lead-desc">
            Chủ động chọn chuyên khoa, bác sĩ và khung giờ mong muốn mà không cần xếp hàng lấy số. 
            Hệ thống cấp mã phiếu khám và tin nhắn xác nhận tức thì.
          </p>
        </div>

        <div className="hosp-booking-box">
          {/* Left Form Area */}
          <div className="hosp-form-pane">
            {confirmedBooking ? (
              <div style={{ textAlign: 'center', padding: '14px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <Check size={36} strokeWidth={3} />
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--hospital-navy)', marginBottom: '6px' }}>
                  Đăng Ký Khám Thành Công!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Thông tin lịch hẹn đã được gửi đến số điện thoại <strong>{confirmedBooking.phone}</strong>.
                </p>

                {/* Digital Hospital Pass */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
                  border: '2px dashed var(--hospital-blue)',
                  borderRadius: '14px',
                  padding: '20px',
                  maxWidth: '460px',
                  margin: '0 auto 22px auto',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #cbd5e1', paddingBottom: '10px' }}>
                    <div>
                      <strong style={{ fontSize: '1.05rem', color: 'var(--hospital-navy)' }}>{CLINIC_INFO.shortName}</strong>
                      <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>PHIẾU KHÁM BỆNH ĐIỆN TỬ</p>
                    </div>
                    <span style={{
                      backgroundColor: 'var(--hospital-blue)',
                      color: '#ffffff',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.95rem'
                    }}>
                      {confirmedBooking.bookingCode}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div><strong>Bệnh nhân:</strong> {confirmedBooking.fullName} ({confirmedBooking.gender}, {confirmedBooking.birthYear})</div>
                    <div><strong>Chuyên khoa:</strong> {confirmedBooking.specialtyName}</div>
                    <div><strong>Bác sĩ khám:</strong> {confirmedBooking.doctorName}</div>
                    <div><strong>Thời gian:</strong> <span style={{ color: 'var(--hospital-blue)', fontWeight: 700 }}>{confirmedBooking.appointmentDate} • {confirmedBooking.timeSlot}</span></div>
                    <div><strong>Địa điểm:</strong> {CLINIC_INFO.address}</div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#fffbeb',
                  border: '1px solid #fef3c7',
                  color: '#92400e',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  textAlign: 'left',
                  marginBottom: '22px'
                }}>
                  <strong>Lưu ý:</strong> Quý khách vui lòng đến trước 10 phút tại Quầy Tiếp Đón Khu A (Khoa Khám Bệnh - Tầng trệt, 466 Nguyễn Trãi, Q.5) và xuất trình mã <strong>{confirmedBooking.bookingCode}</strong> để được phân luồng ưu tiên.
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button 
                    type="button" 
                    className="btn-hosp btn-hosp-md btn-hosp-secondary"
                    onClick={() => window.print()}
                  >
                    <Printer size={15} />
                    <span>In phiếu hẹn</span>
                  </button>
                  <button 
                    type="button" 
                    className="btn-hosp btn-hosp-md btn-hosp-primary"
                    onClick={handleReset}
                  >
                    <span>Đặt thêm lịch khám khác</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Họ và tên bệnh nhân <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text"
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {errors.fullName && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '3px', display: 'block' }}>{errors.fullName}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Số điện thoại nhận tin SMS <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="tel"
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '3px', display: 'block' }}>{errors.phone}</span>}
                  </div>

                  {/* Gender & Birth Year */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Giới tính & Năm sinh
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <select 
                        className="hosp-quick-input"
                        style={{ width: '45%' }}
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                      </select>
                      <input 
                        type="number"
                        className="hosp-quick-input"
                        style={{ width: '55%' }}
                        placeholder="Năm sinh"
                        value={formData.birthYear}
                        onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Email nhận kết quả xét nghiệm
                    </label>
                    <input 
                      type="email"
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      placeholder="nguyenvana@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Specialty */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Chuyên khoa khám <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select 
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      value={formData.specialtyId}
                      onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value, doctorId: '' })}
                    >
                      <option value="">-- Chọn chuyên khoa --</option>
                      {SPECIALTIES.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                    {errors.specialtyId && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '3px', display: 'block' }}>{errors.specialtyId}</span>}
                  </div>

                  {/* Doctor */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Bác sĩ chỉ định
                    </label>
                    <select 
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      value={formData.doctorId}
                      onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                    >
                      <option value="">-- Bệnh viện tự phân bổ bác sĩ tốt nhất --</option>
                      {filteredDoctors.map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.specialtyName})</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Ngày đến khám <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="date"
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    />
                    {errors.appointmentDate && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '3px', display: 'block' }}>{errors.appointmentDate}</span>}
                  </div>

                  {/* Insurance */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '5px' }}>
                      Hình thức bảo hiểm
                    </label>
                    <select 
                      className="hosp-quick-input"
                      style={{ width: '100%' }}
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    >
                      <option value="none">Tự túc (Không bảo hiểm)</option>
                      <option value="bhyt">Bảo hiểm Y tế nhà nước (BHYT)</option>
                      <option value="private">Bảo lãnh viện phí tư nhân (PVI, Bảo Việt, Manulife...)</option>
                    </select>
                  </div>

                  {/* Time slots */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '4px' }}>
                      Khung giờ khám dự kiến <span style={{ color: '#ef4444' }}>*</span>
                    </label>

                    <div className="hosp-slot-title">Buổi sáng (07:30 - 11:30)</div>
                    <div className="hosp-slots-grid">
                      {(TIME_SLOTS?.morning || []).map(slot => (
                        <div 
                          key={slot}
                          className={`hosp-slot-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>

                    <div className="hosp-slot-title">Buổi chiều (13:30 - 17:15)</div>
                    <div className="hosp-slots-grid">
                      {(TIME_SLOTS?.afternoon || []).map(slot => (
                        <div 
                          key={slot}
                          className={`hosp-slot-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>

                    <div className="hosp-slot-title">Buổi tối (17:30 - 19:45)</div>
                    <div className="hosp-slots-grid">
                      {(TIME_SLOTS?.evening || []).map(slot => (
                        <div 
                          key={slot}
                          className={`hosp-slot-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                    {errors.timeSlot && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.timeSlot}</span>}
                  </div>

                  {/* Symptoms */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--hospital-navy)', marginBottom: '4px' }}>
                      Mô tả triệu chứng hoặc lý do khám
                    </label>
                    <textarea 
                      className="hosp-quick-input"
                      style={{ width: '100%', height: '68px', padding: '10px 14px', resize: 'vertical' }}
                      placeholder="Ví dụ: Đau ngực khi gắng sức, sốt ho 2 ngày nay..."
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ gridColumn: '1 / -1', marginTop: '6px' }}>
                    <button type="submit" className="btn-hosp btn-hosp-lg btn-hosp-primary" style={{ width: '100%' }}>
                      <Calendar size={18} />
                      <span>Xác Nhận Đặt Lịch Khám Bệnh</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Summary Area */}
          <div className="hosp-summary-pane">
            <div>
              <div style={{ color: '#38bdf8', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Hệ Thống Tiếp Đón Trực Tuyến
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Thông Tin Phiếu Hẹn
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: '1.6' }}>
                Thông tin được cập nhật trực tiếp theo từng lựa chọn của quý khách trên biểu mẫu đăng ký.
              </p>

              <div className="hosp-digital-ticket">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                  <div>
                    <strong style={{ fontSize: '1rem' }}>{CLINIC_INFO.shortName}</strong>
                    <p style={{ fontSize: '0.72rem', color: '#94a3b8' }}>MÃ DỰ KIẾN: QY7A-ONLINE</p>
                  </div>
                  <QrCode size={24} color="#38bdf8" />
                </div>

                <div className="hosp-ticket-line">
                  <span>Bệnh nhân:</span>
                  <strong>{formData.fullName || 'Chưa nhập'}</strong>
                </div>
                <div className="hosp-ticket-line">
                  <span>Số điện thoại:</span>
                  <strong>{formData.phone || 'Chưa nhập'}</strong>
                </div>
                <div className="hosp-ticket-line">
                  <span>Chuyên khoa:</span>
                  <strong style={{ color: '#38bdf8' }}>{selectedSpecialtyObj ? selectedSpecialtyObj.name : 'Chưa chọn'}</strong>
                </div>
                <div className="hosp-ticket-line">
                  <span>Bác sĩ khám:</span>
                  <strong>{selectedDoctorObj ? selectedDoctorObj.name : 'Phân bổ tự động'}</strong>
                </div>
                <div className="hosp-ticket-line">
                  <span>Ngày hẹn:</span>
                  <strong>{formData.appointmentDate || 'Chưa chọn'}</strong>
                </div>
                <div className="hosp-ticket-line">
                  <span>Khung giờ:</span>
                  <strong style={{ color: '#34d399' }}>{formData.timeSlot || 'Chưa chọn'}</strong>
                </div>
                <div className="hosp-ticket-line">
                  <span>Bảo hiểm:</span>
                  <strong>{formData.insuranceType === 'bhyt' ? 'Áp dụng BHYT' : formData.insuranceType === 'private' ? 'Bảo lãnh tư nhân' : 'Tự túc'}</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.8rem' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Bảo mật 100% hồ sơ bệnh án theo tiêu chuẩn Luật Khám chữa bệnh.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
