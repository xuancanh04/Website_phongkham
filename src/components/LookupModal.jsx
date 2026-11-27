import React, { useState } from 'react';
import { Search, X, Calendar, User, Phone, MapPin, AlertCircle, Trash2, CheckCircle2 } from 'lucide-react';
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
      const allBookings = JSON.parse(localStorage.getItem('medicare_appointments') || '[]');
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
        const allBookings = JSON.parse(localStorage.getItem('medicare_appointments') || '[]');
        const updated = allBookings.map(b => {
          if (b.bookingCode === code) {
            return { ...b, status: 'Đã hủy theo yêu cầu' };
          }
          return b;
        });
        localStorage.setItem('medicare_appointments', JSON.stringify(updated));
        setResults(prev => prev.map(b => b.bookingCode === code ? { ...b, status: 'Đã hủy theo yêu cầu' } : b));
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="modal-backdrop-blur" onClick={onClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
        <div style={{
          padding: '24px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy)' }}>
            Tra Cứu Lịch Hẹn Khám Bệnh
          </h3>
          <button 
            type="button" 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            <X size={22} />
          </button>
        </div>

        <div style={{ padding: '28px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px' }}>
            Nhập <strong>Số điện thoại</strong> hoặc <strong>Mã phiếu hẹn (MCP-xxxxxx)</strong> đã đăng ký để kiểm tra trạng thái phiếu khám:
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '26px' }}>
            <input 
              type="text" 
              className="panel-input-box"
              style={{ flex: 1 }}
              placeholder="Ví dụ: 0912345678 hoặc MCP-123456"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn-core btn-primary-glow" style={{ padding: '12px 20px' }}>
              <Search size={18} />
              <span>Tra cứu</span>
            </button>
          </form>

          {searched && (
            <div>
              {results && results.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{ fontSize: '0.9rem', color: '#16a34a', fontWeight: 700 }}>
                    Tìm thấy {results.length} phiếu khám:
                  </p>
                  {results.map((booking) => (
                    <div 
                      key={booking.bookingCode} 
                      style={{
                        backgroundColor: 'var(--bg-page)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          backgroundColor: 'var(--primary-soft)',
                          color: 'var(--primary)',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.9rem'
                        }}>
                          {booking.bookingCode}
                        </span>
                        <span style={{
                          backgroundColor: booking.status === 'Đã xác nhận' ? '#dcfce7' : '#fee2e2',
                          color: booking.status === 'Đã xác nhận' ? '#166534' : '#991b1b',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '4px'
                        }}>
                          {booking.status}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.95rem', color: 'var(--brand-navy)' }}>
                        <strong>Bệnh nhân:</strong> {booking.fullName} ({booking.phone})
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <strong>Chuyên khoa:</strong> {booking.specialtyName}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <strong>Bác sĩ khám:</strong> {booking.doctorName}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                        <strong>Thời gian:</strong> {booking.appointmentDate} lúc {booking.timeSlot}
                      </div>

                      {booking.status === 'Đã xác nhận' && (
                        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #cbd5e1', textAlign: 'right' }}>
                          <button 
                            type="button" 
                            onClick={() => handleCancelBooking(booking.bookingCode)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ef4444',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <Trash2 size={14} /> Hủy lịch hẹn này
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '36px 16px',
                  backgroundColor: 'var(--bg-page)',
                  borderRadius: '12px',
                  color: 'var(--text-muted)'
                }}>
                  <AlertCircle size={40} color="#94a3b8" style={{ marginBottom: '12px' }} />
                  <p style={{ fontWeight: 600, color: 'var(--brand-navy)' }}>Không tìm thấy lịch hẹn khớp với từ khóa.</p>
                  <p style={{ fontSize: '0.85rem' }}>Quý khách vui lòng kiểm tra lại số điện thoại hoặc mã phiếu khám.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
