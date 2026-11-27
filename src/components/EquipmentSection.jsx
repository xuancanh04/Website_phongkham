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
            <span>Công Nghệ Chẩn Đoán Thế Hệ Mới</span>
          </div>
          <h2 className="hospital-heading-h2">Hệ Thống Thiết Bị Chẩn Đoán Đạt Chuẩn Quốc Tế</h2>
          <p className="hospital-lead-desc">
            MediCare Plus đầu tư đồng bộ hệ thống máy chẩn đoán hình ảnh và xét nghiệm sinh hóa - huyết học tự động 
            thế hệ mới từ các tập đoàn y tế hàng đầu: Siemens (Đức), GE Healthcare (Mỹ) và Roche (Thụy Sĩ).
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
