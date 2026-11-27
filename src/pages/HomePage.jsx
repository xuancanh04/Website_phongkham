import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Specialties from '../components/Specialties';
import Doctors from '../components/Doctors';
import BookingSection from '../components/BookingSection';
import Pricing from '../components/Pricing';
import EquipmentSection from '../components/EquipmentSection';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import HealthNews from '../components/HealthNews';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import { ArrowRight, Users, Stethoscope } from 'lucide-react';

export default function HomePage({ onSelectSpecialty, onSelectDoctor, onSelectPackage, onQuickBooking, bookingDraft }) {
  return (
    <div className="portal-homepage">
      {/* 1. Hero Section with Quick Services Dashboard & Search Bar */}
      <Hero onQuickSelectBooking={onQuickBooking} />

      {/* 2. Core Strengths & Advantages */}
      <Advantages />

      {/* 3. Clinical Specialties Preview with dedicated page link */}
      <div className="portal-section-wrapper">
        <Specialties onSelectSpecialty={onSelectSpecialty} />
        <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '50px' }}>
          <Link to="/chuyen-khoa" className="btn-portal-view-more">
            <Stethoscope size={16} />
            <span>XEM TẤT CẢ CHUYÊN KHOA & DỊCH VỤ</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* 4. Doctor Specialist Team Preview with dedicated page link */}
      <div className="portal-section-wrapper bg-surface">
        <Doctors onSelectDoctor={onSelectDoctor} />
        <div style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '50px' }}>
          <Link to="/bac-si" className="btn-portal-view-more">
            <Users size={16} />
            <span>XEM ĐẦY ĐỦ ĐỘI NGŨ BÁC SĨ QUÂN Y 7A</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* 5. Online Booking Console */}
      <div id="booking-section-home">
        <BookingSection 
          bookingDraft={bookingDraft}
          onBookingSuccess={() => {}}
        />
      </div>

      {/* 6. Pricing Packages & BHYT */}
      <Pricing onSelectPackage={onSelectPackage} />

      {/* 7. Diagnostic Equipment Showcase */}
      <EquipmentSection />

      {/* 8. Standard 4-Step Process */}
      <Process />

      {/* 9. Patient Letters of Appreciation */}
      <Testimonials />

      {/* 10. Medical News & Hospital Activities */}
      <HealthNews />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Contact & Geographic Location */}
      <ContactSection />
    </div>
  );
}
