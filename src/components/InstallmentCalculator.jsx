import React, { useState } from 'react';
import { Calculator, Percent, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRACES_METHODS } from '../data/teennieData';

export default function InstallmentCalculator({ onSelectPlan }) {
  const [selectedMethodId, setSelectedMethodId] = useState('kim-loai');
  const [termMonths, setTermMonths] = useState(24);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);

  // Price estimations based on selected method
  const priceMap = {
    'kim-loai': 38000000,
    'tu-dong': 45000000,
    'su-tham-my': 50000000,
    'invisalign': 80000000
  };

  const totalPrice = priceMap[selectedMethodId] || 38000000;
  const downPaymentAmount = Math.round((totalPrice * downPaymentPercent) / 100);
  const remainingAmount = totalPrice - downPaymentAmount;
  const monthlyPayment = Math.round(remainingAmount / termMonths);

  const formatVND = (num) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' đ';
  };

  const selectedMethodObj = BRACES_METHODS.find(m => m.id === selectedMethodId);

  return (
    <section className="teennie-section" style={{ backgroundColor: 'var(--teennie-bg-soft)' }} id="calculator">
      <div className="container">
        <div className="section-title-wrap">
          <div className="teennie-tag">
            <Percent size={16} />
            <span>Tự Do Tài Chính</span>
          </div>
          <h2 className="teennie-title">Bảng Tính Trả Góp 0% Không Qua Ngân Hàng</h2>
          <p className="teennie-desc">
            Không cần thẻ tín dụng, không thẩm định người thân. Trả góp trực tiếp tại quầy Teennie Clinic 
            với thủ tục đơn giản chỉ cần CCCD học sinh, sinh viên.
          </p>
        </div>

        <div className="calculator-wrap">
          <div className="calculator-grid">
            {/* Control Panel */}
            <div>
              <div className="calc-control-group">
                <label>1. Chọn phương pháp niềng răng mong muốn:</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {BRACES_METHODS.map(m => (
                    <button
                      key={m.id}
                      type="button"
                      className={`term-chip ${selectedMethodId === m.id ? 'active' : ''}`}
                      style={{ textAlign: 'left', padding: '12px 16px' }}
                      onClick={() => setSelectedMethodId(m.id)}
                    >
                      <strong style={{ display: 'block', fontSize: '0.88rem' }}>{m.name}</strong>
                      <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>{m.priceSale}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-control-group">
                <label>2. Tỷ lệ thanh toán ban đầu (Trả trước):</label>
                <div className="term-chips-row">
                  {[30, 40, 50].map(percent => (
                    <button
                      key={percent}
                      type="button"
                      className={`term-chip ${downPaymentPercent === percent ? 'active' : ''}`}
                      onClick={() => setDownPaymentPercent(percent)}
                    >
                      Trả trước {percent}% ({formatVND((totalPrice * percent) / 100)})
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-control-group">
                <label>3. Chọn kỳ hạn trả góp 0%:</label>
                <div className="term-chips-row">
                  {[12, 18, 24, 30].map(month => (
                    <button
                      key={month}
                      type="button"
                      className={`term-chip ${termMonths === month ? 'active' : ''}`}
                      onClick={() => setTermMonths(month)}
                    >
                      {month} Tháng
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Result Box */}
            <div className="calc-result-box">
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--teennie-muted)' }}>
                SỐ TIỀN TRẢ GÓP MỖI THÁNG
              </span>
              <div className="result-monthly-amount">
                {formatVND(monthlyPayment)}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 700, display: 'inline-block', marginBottom: '18px' }}>
                ✓ Lãi suất 0% cố định suốt kỳ hạn
              </span>

              <div style={{
                textAlign: 'left',
                backgroundColor: '#f8fafc',
                padding: '16px',
                borderRadius: '10px',
                fontSize: '0.88rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Gói niềng:</span>
                  <strong>{selectedMethodObj?.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Thanh toán ban đầu ({downPaymentPercent}%):</span>
                  <strong style={{ color: 'var(--teennie-blue-dark)' }}>{formatVND(downPaymentAmount)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Số tháng góp:</span>
                  <strong>{termMonths} Tháng</strong>
                </div>
              </div>

              <button 
                type="button" 
                className="btn-teennie btn-coral-glow" 
                style={{ width: '100%' }}
                onClick={() => onSelectPlan({
                  method: selectedMethodObj?.name,
                  downPayment: formatVND(downPaymentAmount),
                  monthly: formatVND(monthlyPayment),
                  term: `${termMonths} tháng`
                })}
              >
                <span>Đăng ký giữ gói trả góp này</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
