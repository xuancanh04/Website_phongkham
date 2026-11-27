import React, { useState } from 'react';
import { Search, X, Calendar, User, Phone, Trash2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function LookupModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const allBookings = JSON.parse(localStorage.getItem('qy7a_appointments') || localStorage.getItem('medicare_appointments') || '[]');
      const cleanTerm = searchTerm.trim().toLowerCase();

      const matched = allBookings.filter(b => 
        (b.phone && b.phone.replace(/\s/g, '').includes(cleanTerm)) ||
        (b.bookingCode && b.bookingCode.toLowerCase().includes(cleanTerm)) ||
        (b.fullName && b.fullName.toLowerCase().includes(cleanTerm))
      );

      setResults(matched);
      setSearched(true);
    } catch (e) {
      console.error(e);
      setResults([]);
      setSearched(true);
    }
  };

  const handleCancelBooking = (code) => {
    if (window.confirm(`Bạn có chắc chắn muốn hủy phiếu khám mã ${code}?`)) {
      try {
        const allBookings = JSON.parse(localStorage.getItem('qy7a_appointments') || localStorage.getItem('medicare_appointments') || '[]');
        const updated = allBookings.map(b => {
          if (b.bookingCode === code) {
            return { ...b, status: 'Đã hủy theo yêu cầu' };
          }
          return b;
        });
        localStorage.setItem('qy7a_appointments', JSON.stringify(updated));
        setResults(prev => prev.map(b => b.bookingCode === code ? { ...b, status: 'Đã hủy theo yêu cầu' } : b));
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="hosp-modal-backdrop" onClick={onClose}>
      <div className="hosp-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="hosp-modal-head">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--hospital-navy)' }}>
            Tra Cứu Lịch Hẹn Khám Bệnh - Quân Y 7A
          </h3>
          <button 
            type="button" 
            onClick={onClose}
            className="hosp-modal-close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '18px' }}>
            Nhập <strong>Số điện thoại</strong> hoặc <strong>Mã phiếu khám (QY7A-xxxxxx)</strong> để tra cứu lịch hẹn đã đăng ký:
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '22px' }}>
            <input 
              type="text" 
              className="hosp-input"
              style={{ flex: 1 }}
              placeholder="Ví dụ: 0912345678 hoặc QY7A-123456"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn-hosp btn-hosp-md btn-hosp-primary">
              <Search size={15} />
              <span>Tra cứu</span>
            </button>
          </form>

          {searched && (
            <div>
              {results && results.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '360px', overflowY: 'auto' }}>
                  <p style={{ fontSize: '0.86rem', color: '#16a34a', fontWeight: 700 }}>
                    Tìm thấy {results.length} phiếu hẹn:
                  </p>
                  {results.map((booking) => (
                    <div 
                      key={booking.bookingCode} 
                      style={{
                        backgroundColor: 'var(--bg-page)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          backgroundColor: 'var(--hospital-blue-light)',
                          color: 'var(--hospital-blue)',
                          fontWeight: 800,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.84rem'
                        }}>
                          {booking.bookingCode}
                        </span>
                        <span style={{
                          backgroundColor: booking.status === 'Đã xác nhận' ? '#dcfce7' : '#fee2e2',
                          color: booking.status === 'Đã xác nhận' ? '#166534' : '#991b1b',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}>
                          {booking.status}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.9rem', color: 'var(--hospital-navy)' }}>
                        <strong>Bệnh nhân:</strong> {booking.fullName} ({booking.phone})
                      </div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        <strong>Chuyên khoa:</strong> {booking.specialtyName}
                      </div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        <strong>Bác sĩ khám:</strong> {booking.doctorName}
                      </div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--hospital-blue)', fontWeight: 600 }}>
                        <strong>Thời gian:</strong> {booking.appointmentDate} lúc {booking.timeSlot}
                      </div>

                      {booking.status === 'Đã xác nhận' && (
                        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--border-color)', textAlign: 'right' }}>
                          <button 
                            type="button" 
                            onClick={() => handleCancelBooking(booking.bookingCode)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--hospital-red)',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <Trash2 size={13} /> Hủy lịch hẹn này
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '28px 16px',
                  backgroundColor: 'var(--bg-page)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-muted)'
                }}>
                  <AlertCircle size={32} color="#94a3b8" style={{ marginBottom: '8px' }} />
                  <p style={{ fontWeight: 600, color: 'var(--hospital-navy)', fontSize: '0.92rem' }}>Không tìm thấy lịch hẹn khớp với từ khóa.</p>
                  <p style={{ fontSize: '0.82rem' }}>Quý khách vui lòng kiểm tra lại số điện thoại hoặc mã phiếu khám.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
