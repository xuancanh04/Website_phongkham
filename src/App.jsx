import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import BookingSection from './components/BookingSection';
import Pricing from './components/Pricing';
import EquipmentSection from './components/EquipmentSection';
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
  const [isLookupOpen, setIsLookupOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickSelectBooking = (draft) => {
    setBookingDraft(draft);
    scrollToBooking();
  };

  const handleSelectSpecialty = (specialtyId) => {
    setBookingDraft(prev => ({ ...prev, specialtyId, doctorId: '' }));
    scrollToBooking();
  };

  const handleSelectDoctor = (doctor) => {
    setBookingDraft(prev => ({
      ...prev,
      specialtyId: doctor.specialtyId,
      doctorId: doctor.id
    }));
    scrollToBooking();
  };

  const handleSelectPackage = (pkg) => {
    setBookingDraft(prev => ({
      ...prev,
      symptoms: `Đăng ký gói khám: ${pkg.name} (${pkg.price})`
    }));
    scrollToBooking();
  };

  return (
    <div className="clinic-app-root">
      {/* 1. Header with live status & sticky glass navbar */}
      <Header 
        onOpenBooking={scrollToBooking} 
        onOpenLookup={() => setIsLookupOpen(true)} 
      />

      {/* 2. Hero with credibility metrics, live doctor badges & quick search widget */}
      <Hero 
        onQuickSelectBooking={handleQuickSelectBooking} 
      />

      {/* 3. Core Advantages (JCI, Top specialists, Technology, Insurance) */}
      <Advantages />

      {/* 4. Specialties Section */}
      <Specialties 
        onSelectSpecialty={handleSelectSpecialty} 
      />

      {/* 5. Doctor Faculty Showcase */}
      <Doctors 
        onSelectDoctor={handleSelectDoctor} 
      />

      {/* 6. Online Clinical Appointment Booking Console with Live Ticket Preview */}
      <BookingSection 
        bookingDraft={bookingDraft}
      />

      {/* 7. Comprehensive Health Packages Pricing */}
      <Pricing 
        onSelectPackage={handleSelectPackage} 
      />

      {/* 8. Medical Technology & Equipment Gallery */}
      <EquipmentSection />

      {/* 9. Verified Patient Testimonials */}
      <Testimonials />

      {/* 10. Patient FAQs */}
      <FaqSection />

      {/* 11. Health Knowledge & Advice Articles */}
      <HealthNews />

      {/* 12. Contact, Map & Direct Doctor Consultation Form */}
      <ContactSection />

      {/* 13. Luxury Clinical Footer */}
      <Footer />

      {/* 14. Floating Speed Dial (Emergency 24/7 & Quick Booking) */}
      <FloatingActions 
        onOpenBooking={scrollToBooking} 
      />

      {/* 15. Lookup Appointment Modal */}
      <LookupModal 
        isOpen={isLookupOpen} 
        onClose={() => setIsLookupOpen(false)} 
      />
    </div>
  );
}
