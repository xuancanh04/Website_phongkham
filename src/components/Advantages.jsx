import { Award, Users, Cpu, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';
import { CLINIC_ADVANTAGES } from '../data/clinicData';

const ICON_MAP = {
  Award: Award,
  Users: Users,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export default function Advantages() {
  return (
    <section className="portal-section bg-surface" id="advantages">
      <div className="container">
        <div className="portal-section-head">
          <div className="portal-tag-pill">
            <Building2 size={14} />
            <span>UY TÍN & NĂNG LỰC ĐIỀU TRỊ TUYẾN CUỐI</span>
          </div>
          <h2 className="portal-head-h2">
            Thế Mạnh Mũi Nhọn Của Bệnh Viện Đa Khoa Quân Y Hạng I
          </h2>
          <p className="portal-head-desc">
            Trực thuộc Cục Hậu Cần Quân Khu 7 — Kế thừa truyền thống vẻ vang Đơn vị Anh hùng Lực lượng Vũ trang Nhân dân, 
            kết hợp kỷ luật quân đội, y đức mẫu mực và công nghệ phẫu thuật y khoa hiện đại.
          </p>
        </div>

        <div className="portal-adv-grid">
          {CLINIC_ADVANTAGES.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <div key={item.id} className="portal-adv-card">
                <div className="adv-card-header">
                  <div className="adv-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="adv-order-index">0{idx + 1}</span>
                </div>
                <h3 className="adv-card-title">{item.title}</h3>
                <p className="adv-card-desc">{item.desc}</p>
                <div className="adv-card-footer">
                  <span className="adv-verified-tag">
                    <CheckCircle2 size={13} />
                    <span>Tiêu chuẩn Quân y Hạng I</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
