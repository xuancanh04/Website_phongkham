import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';
import { EQUIPMENT_LIST } from '../data/clinicData';

export default function EquipmentSection() {
  return (
    <section className="hospital-section" style={{ backgroundColor: '#ffffff' }} id="facilities">
      <div className="container">
        <div className="section-head-wrap">
          <div className="hospital-badge-tag">
            <Cpu size={14} />
            <span>Trang Thiết Bị Kỹ Thuật Cao Tuyến Quân Khu</span>
          </div>
          <h2 className="hospital-heading-h2">Hệ Thống Thiết Bị Chẩn Đoán & Phẫu Thuật Hiện Đại</h2>
          <p className="hospital-lead-desc">
            Bệnh Viện Quân Y 7A được Bộ Quốc Phòng và Quân khu 7 đầu tư đồng bộ hệ thống máy chụp cộng hưởng từ MRI 1.5 Tesla, 
            CT-Scanner đa lát cắt, máy tăng sáng truyền hình C-Arm phẫu thuật cột sống và trung tâm chạy thận nhân tạo Fresenius (Đức).
          </p>
        </div>

        <div className="hosp-equip-grid">
          {EQUIPMENT_LIST.map((item, idx) => (
            <div key={idx} className="hosp-equip-card">
              <div className="hosp-equip-thumb">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="hosp-equip-body">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
