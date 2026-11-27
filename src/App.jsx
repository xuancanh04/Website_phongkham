import React, { useState } from 'react';
import TeennieHeader from './components/TeennieHeader';
import TeennieHero from './components/TeennieHero';
import DentalProblems from './components/DentalProblems';
import BracesMethods from './components/BracesMethods';
import InstallmentCalculator from './components/InstallmentCalculator';
import BeforeAfterShowcase from './components/BeforeAfterShowcase';
import WhyTeennie from './components/WhyTeennie';
import TeennieDoctors from './components/TeennieDoctors';
import TeennieBooking from './components/TeennieBooking';
import TeennieFaq from './components/TeennieFaq';
import TeennieFooter from './components/TeennieFooter';
import TeennieFloating from './components/TeennieFloating';
import './App.css';

export default function App() {
  const [bookingDraft, setBookingDraft] = useState(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProblem = (problem) => {
    setBookingDraft({ problem: problem.title });
    scrollToBooking();
  };

  const handleSelectMethod = (method) => {
    setBookingDraft({ method: method.name });
    scrollToBooking();
  };

  const handleSelectPlan = (plan) => {
    setBookingDraft({ 
      method: plan.method, 
      note: `Gói trả góp: ${plan.monthly}/tháng trong ${plan.term}` 
    });
    scrollToBooking();
  };

  return (
    <div className="teennie-site-app">
      {/* 1. Topbar & Header */}
      <TeennieHeader onOpenBooking={scrollToBooking} />

      {/* 2. Hero Section with Promos & Ngô Kiến Huy co-founder badge */}
      <TeennieHero onOpenBooking={scrollToBooking} />

      {/* 3. Dental Problems Selector ("Răng của bạn/con đang gặp vấn đề gì?") */}
      <DentalProblems onSelectProblem={handleSelectProblem} />

      {/* 4. Braces Methods ("Các phương pháp niềng răng tại Teennie") */}
      <BracesMethods onSelectMethod={handleSelectMethod} />

      {/* 5. 0% Installment Calculator ("Bảng tính trả góp 0% tại phòng khám") */}
      <InstallmentCalculator onSelectPlan={handleSelectPlan} />

      {/* 6. Real Before / After Transformations ("Nụ cười thay đổi sau niềng răng") */}
      <BeforeAfterShowcase onOpenBooking={scrollToBooking} />

      {/* 7. 5 Reasons to Choose Teennie ("5 lý do nên chọn niềng răng tại Teennie") */}
      <WhyTeennie />

      {/* 8. Doctor Specialist Team ("Đội ngũ bác sĩ chỉnh nha Teennie Clinic") */}
      <TeennieDoctors onOpenBooking={scrollToBooking} />

      {/* 9. Free 10-Step Consultation Booking ("Đăng ký thăm khám 0đ & Nhận voucher 5 triệu") */}
      <TeennieBooking bookingDraft={bookingDraft} />

      {/* 10. FAQs ("Ba mẹ và các bạn hay hỏi") */}
      <TeennieFaq />

      {/* 11. Footer */}
      <TeennieFooter />

      {/* 12. Floating Action Speed Dial */}
      <TeennieFloating onOpenBooking={scrollToBooking} />
    </div>
  );
}
