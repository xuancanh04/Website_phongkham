import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  QrCode,
  Printer,
  Sparkles,
  Check
} from 'lucide-react';
import { SPECIALTIES, DOCTORS, TIME_SLOTS, CLINIC_INFO } from '../data/clinicData';

export default function BookingSection({ bookingDraft, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: 'Nam',
    birthYear: '1992',
    specialtyId: '',
    doctorId: '',
    appointmentDate: '',
    timeSlot: '',
    insuranceType: 'none',
    symptoms: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Sync draft from external selection (Hero, Doctors, Specialties, Pricing)
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
    if (!formData.timeSlot) err.timeSlot = 'Vui lòng chọn một khung giờ khám';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const randomCode = 'MCP-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      ...formData,
      bookingCode: randomCode,
      specialtyName: selectedSpecialtyObj ? selectedSpecialtyObj.name : 'Khám tổng quát',
      doctorName: selectedDoctorObj ? selectedDoctorObj.name : 'Bác sĩ phân bổ tự động',
      createdAt: new Date().toISOString(),
      status: 'Đã xác nhận'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('medicare_appointments') || '[]');
      localStorage.setItem('medicare_appointments', JSON.stringify([newBooking, ...existing]));
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
      birthYear: '1992',
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
    <section className="section-wrap booking-console-wrapper" id="booking">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Chủ Động Thời Gian</span>
          </div>
          <h2 className="section-headline">Đặt Lịch Khám Trực Tuyến - Không Cần Chờ Đợi</h2>
          <p className="section-subtitle">
            Hệ thống phân bổ lịch khám thông minh giúp quý khách vào thẳng phòng bác sĩ đúng giờ hẹn, 
            tiết kiệm trung bình 90 phút so với việc lấy số trực tiếp tại bệnh viện.
          </p>
        </div>

        <div className="booking-console-card">
          {/* Left Form Area */}
          <div className="booking-form-pane">
            {confirmedBooking ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  backgroundColor: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <Check size={40} strokeWidth={3} />
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-navy)', marginBottom: '8px' }}>
                  Đăng Ký Khám Thành Công!
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Thông tin lịch hẹn đã được lưu trên hệ thống và gửi xác nhận qua SMS đến số <strong>{confirmedBooking.phone}</strong>.
                </p>

                {/* Digital Hospital Pass Presentation */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
                  border: '2px dashed var(--primary)',
                  borderRadius: '16px',
                  padding: '24px',
                  maxWidth: '500px',
                  margin: '0 auto 28px auto',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #cbd5e1', paddingBottom: '12px' }}>
                    <div>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--brand-navy)' }}>{CLINIC_INFO.shortName}</strong>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>PHIẾU KHÁM BỆNH ĐIỆN TỬ</p>
                    </div>
                    <span style={{
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      letterSpacing: '0.05em'
                    }}>
                      {confirmedBooking.bookingCode}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div><strong>Bệnh nhân:</strong> {confirmedBooking.fullName} ({confirmedBooking.gender}, {confirmedBooking.birthYear})</div>
                    <div><strong>Chuyên khoa:</strong> {confirmedBooking.specialtyName}</div>
                    <div><strong>Bác sĩ khám:</strong> {confirmedBooking.doctorName}</div>
                    <div><strong>Thời gian:</strong> <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{confirmedBooking.appointmentDate} • Khung giờ {confirmedBooking.timeSlot}</span></div>
                    <div><strong>Địa điểm:</strong> {CLINIC_INFO.address}</div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#fffbeb',
                  border: '1px solid #fef3c7',
                  color: '#92400e',
                  padding: '14px 20px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  textAlign: 'left',
                  marginBottom: '28px',
                  lineHeight: '1.6'
                }}>
                  <strong>Lưu ý trước khi đi khám:</strong> Quý khách vui lòng đến trước giờ hẹn 10 phút tại Quầy Lễ Tân (Tầng 1), xuất trình mã hẹn <strong>{confirmedBooking.bookingCode}</strong> để được hướng dẫn ưu tiên vào buồng khám.
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button 
                    type="button" 
                    className="btn-core btn-secondary-white"
                    onClick={() => window.print()}
                  >
                    <Printer size={16} />
                    <span>In phiếu hẹn</span>
                  </button>
                  <button 
                    type="button" 
                    className="btn-core btn-primary-glow"
                    onClick={handleReset}
                  >
                    <span>Đặt lịch khám khác</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Họ và tên bệnh nhân <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text"
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {errors.fullName && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.fullName}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Số điện thoại nhận tin SMS <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="tel"
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                  </div>

                  {/* Gender & Birth Year */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Giới tính & Năm sinh
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <select 
                        className="panel-input-box"
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
                        className="panel-input-box"
                        style={{ width: '55%' }}
                        placeholder="Năm sinh"
                        value={formData.birthYear}
                        onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Email nhận kết quả xét nghiệm
                    </label>
                    <input 
                      type="email"
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      placeholder="nguyenvana@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Specialty */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Chuyên khoa khám <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select 
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      value={formData.specialtyId}
                      onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value, doctorId: '' })}
                    >
                      <option value="">-- Chọn chuyên khoa --</option>
                      {SPECIALTIES.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                    {errors.specialtyId && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.specialtyId}</span>}
                  </div>

                  {/* Doctor */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Bác sĩ chỉ định
                    </label>
                    <select 
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      value={formData.doctorId}
                      onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                    >
                      <option value="">-- Phân bổ bác sĩ chuyên môn phù hợp --</option>
                      {filteredDoctors.map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.specialtyName})</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Ngày đến khám <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="date"
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    />
                    {errors.appointmentDate && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.appointmentDate}</span>}
                  </div>

                  {/* Insurance Option */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Hình thức bảo hiểm
                    </label>
                    <select 
                      className="panel-input-box"
                      style={{ width: '100%' }}
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    >
                      <option value="none">Tự túc (Không dùng bảo hiểm)</option>
                      <option value="bhyt">Bảo hiểm Y tế nhà nước (BHYT)</option>
                      <option value="private">Bảo lãnh viện phí tư nhân (PVI, Bảo Việt, Manulife...)</option>
                    </select>
                  </div>

                  {/* Interactive Time Slots */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Khung giờ khám dự kiến <span style={{ color: '#ef4444' }}>*</span>
                    </label>

                    <div className="slot-category-title">Buổi sáng (07:30 - 11:30)</div>
                    <div className="slot-grid-chips">
                      {TIME_SLOTS.morning.map(slot => (
                        <div 
                          key={slot}
                          className={`slot-chip-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>

                    <div className="slot-category-title">Buổi chiều (13:30 - 17:15)</div>
                    <div className="slot-grid-chips">
                      {TIME_SLOTS.afternoon.map(slot => (
                        <div 
                          key={slot}
                          className={`slot-chip-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>

                    <div className="slot-category-title">Buổi tối (17:30 - 19:45)</div>
                    <div className="slot-grid-chips">
                      {TIME_SLOTS.evening.map(slot => (
                        <div 
                          key={slot}
                          className={`slot-chip-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                    {errors.timeSlot && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px', display: 'block' }}>{errors.timeSlot}</span>}
                  </div>

                  {/* Symptoms description */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-navy)', marginBottom: '6px' }}>
                      Triệu chứng bệnh hoặc ghi chú cho bác sĩ
                    </label>
                    <textarea 
                      className="panel-input-box"
                      style={{ width: '100%', height: '80px', resize: 'vertical' }}
                      placeholder="Mô tả triệu chứng (vd: đau ngực khi vận động, ho khan 3 ngày nay, muốn xét nghiệm mỡ máu...)"
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  {/* Submit Action */}
                  <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                    <button type="submit" className="btn-core btn-primary-glow" style={{ width: '100%', padding: '15px', fontSize: '1.05rem' }}>
                      <Calendar size={20} />
                      <span>Xác Nhận Đặt Phiếu Khám Ngay</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Live Ticket Preview Pane */}
          <div className="booking-summary-pane">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                <Sparkles size={16} />
                <span>Xem Trước Phiếu Hẹn Trực Tuyến</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Thông Tin Lịch Khám
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6' }}>
                Hệ thống tự động cập nhật thời gian thực theo từng thông tin bạn lựa chọn trên biểu mẫu.
              </p>

              {/* Live Ticket Card */}
              <div className="digital-ticket">
                <div className="ticket-header">
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.05rem' }}>{CLINIC_INFO.shortName}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MÃ DỰ KIẾN: MCP-PREVIEW</span>
                  </div>
                  <div style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <QrCode size={22} color="#38bdf8" />
                  </div>
                </div>

                <div className="ticket-row">
                  <span>Họ tên bệnh nhân:</span>
                  <strong>{formData.fullName || 'Chưa nhập'}</strong>
                </div>
                <div className="ticket-row">
                  <span>Số điện thoại:</span>
                  <strong>{formData.phone || 'Chưa nhập'}</strong>
                </div>
                <div className="ticket-row">
                  <span>Chuyên khoa:</span>
                  <strong style={{ color: '#38bdf8' }}>{selectedSpecialtyObj ? selectedSpecialtyObj.name : 'Chưa chọn'}</strong>
                </div>
                <div className="ticket-row">
                  <span>Bác sĩ chỉ định:</span>
                  <strong>{selectedDoctorObj ? selectedDoctorObj.name : 'Phân bổ tự động'}</strong>
                </div>
                <div className="ticket-row">
                  <span>Ngày khám:</span>
                  <strong>{formData.appointmentDate || 'Chưa chọn ngày'}</strong>
                </div>
                <div className="ticket-row">
                  <span>Khung giờ hẹn:</span>
                  <strong style={{ color: '#34d399' }}>{formData.timeSlot || 'Chưa chọn giờ'}</strong>
                </div>
                <div className="ticket-row">
                  <span>Bảo hiểm:</span>
                  <strong>{formData.insuranceType === 'bhyt' ? 'Áp dụng BHYT' : formData.insuranceType === 'private' ? 'Bảo lãnh tư nhân' : 'Tự túc'}</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.82rem' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Cam kết bảo mật 100% hồ sơ bệnh án theo tiêu chuẩn HIPAA y khoa.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
