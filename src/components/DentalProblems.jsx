import React, { useState } from 'react';
import { HelpCircle, ArrowRight, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { DENTAL_PROBLEMS } from '../data/teennieData';

export default function DentalProblems({ onSelectProblem }) {
  const [selectedId, setSelectedId] = useState(DENTAL_PROBLEMS[0].id);

  const activeProblem = DENTAL_PROBLEMS.find(p => p.id === selectedId) || DENTAL_PROBLEMS[0];

  return (
    <section className="teennie-section" style={{ backgroundColor: 'var(--teennie-bg-soft)' }} id="problems">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <Sparkles size={16} />
            <span>Tự Chẩn Đoán Ban Đầu</span>
          </div>
          <h2 className="teennie-title">Răng Của Bạn / Con Đang Gặp Vấn Đề Gì?</h2>
          <p className="teennie-desc">
            Chọn tình trạng răng hiện tại để xem phác đồ điều trị, thời gian dự kiến và giải pháp tối ưu từ bác sĩ chỉnh nha Teennie.
          </p>
        </div>

        {/* 6 Tabs Grid */}
        <div className="problems-grid">
          {DENTAL_PROBLEMS.map((problem) => (
            <div 
              key={problem.id}
              className={`problem-card-tab ${selectedId === problem.id ? 'active' : ''}`}
              onClick={() => setSelectedId(problem.id)}
            >
              <h4>{problem.title}</h4>
              <span className="badge">{problem.tag}</span>
            </div>
          ))}
        </div>

        {/* Selected Problem Detail Card */}
        <div className="problem-detail-box">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--teennie-coral)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '8px' }}>
              <Clock size={18} />
              <span>Thời gian điều trị dự kiến: {activeProblem.duration}</span>
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--teennie-blue-dark)', marginBottom: '12px' }}>
              Giải pháp cho {activeProblem.title}
            </h3>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
              <strong>Mô tả tình trạng:</strong> {activeProblem.desc}
            </p>

            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #fed7aa',
              padding: '16px 20px',
              borderRadius: '12px',
              marginBottom: '24px'
            }}>
              <strong style={{ color: 'var(--teennie-blue-dark)', display: 'block', marginBottom: '6px' }}>
                Phác đồ khuyến nghị từ Teennie Clinic:
              </strong>
              <p style={{ color: '#0f766e', fontSize: '0.92rem', margin: 0 }}>
                {activeProblem.solution}
              </p>
            </div>

            <button 
              type="button" 
              className="btn-teennie btn-coral-glow"
              onClick={() => onSelectProblem(activeProblem)}
            >
              <span>Nhận phác đồ chi tiết cho tình trạng này</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid var(--teennie-border)',
            boxShadow: 'var(--shadow-teennie-sm)'
          }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--teennie-blue-dark)', marginBottom: '14px' }}>
              Đặc quyền khi khám tại Teennie:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#334155' }}>
              <li style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span>Chụp phim X-Quang 3D Cone Beam CT miễn phí</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span>Scan mẫu hàm iTero Element 5D giả lập nụ cười tương lai</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span>Bác sĩ chuyên khoa chỉnh nha tư vấn 1:1 miễn phí</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span>Trả góp 0% chỉ từ 1 triệu/tháng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
