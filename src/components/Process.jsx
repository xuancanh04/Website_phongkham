import React from 'react';
import { Smartphone, ClipboardCheck, UserCheck, Stethoscope } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Smartphone,
      title: '1. Đặt Hẹn Online',
      desc: 'Chọn chuyên khoa, bác sĩ và khung giờ trên website. Nhận ngay mã số phiếu hẹn và tin nhắn xác nhận.'
    },
    {
      num: '02',
      icon: ClipboardCheck,
      title: '2. Tiếp Đón & Sàng Lọc',
      desc: 'Đến quầy tiếp tân xuất trình mã hẹn, điều dưỡng đo huyết áp, mạch, nhiệt độ và hướng dẫn vào phòng khám.'
    },
    {
      num: '03',
      icon: Stethoscope,
      title: '3. Khám Chuyên Khoa',
      desc: 'Bác sĩ chuyên khoa thăm khám kỹ lưỡng, chỉ định các cận lâm sàng (siêu âm, xét nghiệm máu, X-quang) nếu cần.'
    },
    {
      num: '04',
      icon: UserCheck,
      title: '4. Kết Quả & Đơn Thuốc',
      desc: 'Bác sĩ giải thích tường tận kết quả, kê đơn thuốc điện tử, tư vấn chế độ dinh dưỡng và lịch tái khám.'
    }
  ];

  return (
    <section className="section-padding process-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <ClipboardCheck size={16} />
            <span>Quy Trình Chuẩn Y Khoa</span>
          </div>
          <h2 className="section-title">4 Bước Khám Chữa Bệnh Nhanh Chóng</h2>
          <p className="section-desc">
            Quy trình khép kín giúp tiết kiệm tối đa thời gian của người bệnh, 
            trung bình chỉ mất 45 - 60 phút cho một lần khám tổng quát.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="process-card">
                <span className="step-number">{step.num}</span>
                <div className="step-icon-wrap">
                  <Icon size={28} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
