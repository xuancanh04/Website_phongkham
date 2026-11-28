import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import BookingSection from '../components/BookingSection';

export default function BookingPage({ bookingDraft }) {
  const [searchParams] = useSearchParams();
  const paramKhoa = searchParams.get('khoa');
  const paramBacsi = searchParams.get('bacsi');

  const effectiveDraft = useMemo(() => {
    return {
      ...bookingDraft,
      specialtyId: paramKhoa || (bookingDraft && bookingDraft.specialtyId),
      doctorId: paramBacsi || (bookingDraft && bookingDraft.doctorId)
    };
  }, [bookingDraft, paramKhoa, paramBacsi]);

  return (
    <div className="portal-subpage">
      {/* 1. BREADCRUMB & PAGE HEADER */}
      <div className="portal-page-header">
        <div className="container">
          <nav className="portal-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <ChevronRight size={13} />
            <span>Đặt lịch khám</span>
          </nav>

          <h1 className="page-header-title">
            Đăng Ký Khám Bệnh & Khám BHYT Trực Tuyến
          </h1>
          <p className="page-header-desc">
            Chủ động lựa chọn Chuyên khoa, Bác sĩ điều trị và Khung giờ khám thuận tiện. 
            Hệ thống cấp ngay Mã số phiếu khám Quân Y 7A (QY7A-xxxxxx) và gửi xác nhận qua tin nhắn SMS, 
            giúp quý bệnh nhân đến khám được tiếp đón ưu tiên tại quầy số hóa, không cần bốc số chờ đợi.
          </p>
        </div>
      </div>

      {/* 2. REGISTRATION INSTRUCTION BANNER */}
      <div className="container" style={{ paddingTop: '30px' }}>
        <div className="portal-booking-guide-grid">
          <div className="guide-card">
            <span className="guide-step">01</span>
            <h4>Chọn Khoa & Bác Sĩ</h4>
            <p>Lựa chọn chuyên khoa phù hợp với triệu chứng và bác sĩ phụ trách khám.</p>
          </div>
          <div className="guide-card">
            <span className="guide-step">02</span>
            <h4>Chọn Ngày & Ca Khám</h4>
            <p>Chọn buổi sáng (07:00 - 11:30), chiều (13:00 - 16:30) hoặc ngoài giờ.</p>
          </div>
          <div className="guide-card">
            <span className="guide-step">03</span>
            <h4>Nhận Mã Số QY7A</h4>
            <p>Nhận ngay mã phiếu khám điện tử có giá trị tiếp đón ưu tiên tại bệnh viện.</p>
          </div>
          <div className="guide-card">
            <span className="guide-step">04</span>
            <h4>Hưởng 100% BHYT</h4>
            <p>Mang theo thẻ BHYT và CCCD đến quầy tiếp đón trực tiếp hưởng quyền lợi.</p>
          </div>
        </div>
      </div>

      {/* 3. BOOKING SECTION CONSOLE */}
      <BookingSection 
        bookingDraft={effectiveDraft}
        onBookingSuccess={() => {}}
      />
    </div>
  );
}
