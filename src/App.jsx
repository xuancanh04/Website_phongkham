import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import BookingSection from './components/BookingSection';
import Pricing from './components/Pricing';
import EquipmentSection from './components/EquipmentSection';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import HealthNews from './components/HealthNews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LookupModal from './components/LookupModal';
import './App.css';

export default function App() {
  const [bookingDraft, setBookingDraft] = useState(null);
  const [lookupOpen, setLookupOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickBooking = (criteria) => {
    setBookingDraft({
      specialtyId: criteria.specialtyId,
      doctorId: criteria.doctorId,
      date: criteria.date
    });
    scrollToBooking();
  };

  const handleSelectSpecialty = (spec) => {
    setBookingDraft({
      specialtyId: spec.id
    });
    scrollToBooking();
  };

  const handleSelectDoctor = (doctor) => {
    setBookingDraft({
      specialtyId: doctor.specialtyId,
      doctorId: doctor.id
    });
    scrollToBooking();
  };

  const handleSelectPackage = (pkg) => {
    setBookingDraft({
      symptoms: `Đăng ký gói khám: ${pkg.name} (${pkg.price})`
    });
    scrollToBooking();
  };

  return (
    <div className="hosp-site-app">
      {/* 1. Header with Topbar & Standard Nav Menu */}
      <Header 
        onOpenBooking={scrollToBooking} 
        onOpenLookup={() => setLookupOpen(true)} 
      />

      {/* 2. Hero Section with Quick Services Dashboard & Search Bar */}
      <Hero onQuickSelectBooking={handleQuickBooking} />

      {/* 3. Core Military Hospital Strengths */}
      <Advantages />

      {/* 4. Clinical & High-Tech Specialties */}
      <Specialties onSelectSpecialty={handleSelectSpecialty} />

      {/* 5. Military Doctor Specialist Team */}
      <Doctors onSelectDoctor={handleSelectDoctor} />

      {/* 6. Online Booking Console */}
      <BookingSection 
        bookingDraft={bookingDraft}
        onBookingSuccess={() => {}}
      />

      {/* 7. Health Checkup Packages & Transparent Pricing */}
      <Pricing onSelectPackage={handleSelectPackage} />

      {/* 8. Diagnostic Equipment Showcase */}
      <EquipmentSection />

      {/* 9. 4-Step Standard Examination Process */}
      <Process />

      {/* 10. Patient Letters of Appreciation (Thư Cảm Ơn) */}
      <Testimonials />

      {/* 11. Frequently Asked Questions (BHYT & Hospital Guidelines) */}
      <FaqSection />

      {/* 12. Medical Activities & Scientific Reports */}
      <HealthNews />

      {/* 13. Contact & Direct Consultation Form */}
      <ContactSection />

      {/* 14. Standard Hospital Footer */}
      <Footer />

      {/* 15. Emergency & Booking Floating Action Cockpit */}
      <FloatingActions onOpenBooking={scrollToBooking} />

      {/* 16. Appointment Lookup Modal */}
      <LookupModal 
        isOpen={lookupOpen} 
        onClose={() => setLookupOpen(false)} 
      />
    </div>
  );
}
