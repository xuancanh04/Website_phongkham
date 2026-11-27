import { Smartphone, ClipboardCheck, UserCheck, Stethoscope } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Smartphone,
      title: '1. Đăng Ký Lịch Khám',
      desc: 'Chọn chuyên khoa, bác sĩ và giờ khám trên website. Nhận ngay mã số phiếu khám và tin nhắn SMS xác nhận.'
    },
    {
      num: '02',
      icon: ClipboardCheck,
      title: '2. Tiếp Đón & Đo Sinh Hiệu',
      desc: 'Đến quầy tiếp tân ưu tiên theo mã hẹn. Điều dưỡng viên đo huyết áp, nhịp tim, chiều cao cân nặng chu đáo.'
    },
    {
      num: '03',
      icon: Stethoscope,
      title: '3. Khám Chuyên Khoa',
      desc: 'Bác sĩ chuyên khoa thăm khám lâm sàng kỹ lưỡng, chỉ định siêu âm, xét nghiệm hoặc chụp X-quang nếu cần.'
    },
    {
      num: '04',
      icon: UserCheck,
      title: '4. Kết Quả & Kê Đơn Thuốc',
      desc: 'Bác sĩ phân tích chi tiết kết quả, tư vấn phác đồ điều trị, kê đơn thuốc điện tử và hẹn lịch theo dõi định kỳ.'
    }
  ];

  return (
    <section className="portal-section bg-surface" id="process">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <ClipboardCheck size={14} />
            <span>QUY TRÌNH TIẾP ĐÓN CHUẨN MỰC QUÂN Y</span>
          </div>
          <h2 className="portal-head-h2">4 Bước Khám Chữa Bệnh Nhanh Chóng — Chu Đáo</h2>
          <p className="portal-head-desc">
            Mô hình tiếp đón và khám bệnh khép kín, ứng dụng quản lý số hóa thông tin giúp tiết kiệm tối đa thời gian chờ đợi 
            cho người bệnh có thẻ BHYT và cán bộ chiến sĩ quân đội.
          </p>
        </div>

        <div className="hosp-proc-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="hosp-step-box">
                <span className="hosp-step-num">{step.num}</span>
                <div className="hosp-step-icon">
                  <Icon size={24} />
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
