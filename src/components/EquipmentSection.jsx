import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';
import { EQUIPMENT_LIST } from '../data/clinicData';

export default function EquipmentSection() {
  return (
    <section className="section-wrap" style={{ backgroundColor: '#ffffff' }} id="facilities">
      <div className="container">
        <div className="section-header-centered">
          <div className="pill-badge">
            <span className="dot"></span>
            <span>Công Nghệ Y Khoa Tiên Tiến</span>
          </div>
          <h2 className="section-headline">Hệ Thống Trang Thiết Bị Chẩn Đoán Hiện Đại</h2>
          <p className="section-subtitle">
            MediCare Plus đầu tư đồng bộ hệ thống máy chẩn đoán hình ảnh và xét nghiệm tự động 
            thế hệ mới nhất từ các tập đoàn y tế hàng đầu thế giới: Siemens (Đức), GE Healthcare (Mỹ), Roche (Thụy Sĩ).
          </p>
        </div>

        <div className="equipment-grid">
          {EQUIPMENT_LIST.map((item, idx) => (
            <div key={idx} className="equipment-card">
              <div className="equipment-thumb">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="equipment-info">
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
