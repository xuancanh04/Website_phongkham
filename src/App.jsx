import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LookupModal from './components/LookupModal';
import OmniSearchModal from './components/OmniSearchModal';
import ScrollToTop from './components/ScrollToTop';

// Multi-page Views
import HomePage from './pages/HomePage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import DoctorsPage from './pages/DoctorsPage';
import PricingPage from './pages/PricingPage';
import NewsPage from './pages/NewsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

import './App.css';

export default function App() {
  const [bookingDraft, setBookingDraft] = useState(null);
  const [lookupOpen, setLookupOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleQuickBooking = (criteria) => {
    setBookingDraft({
      specialtyId: criteria.specialtyId,
      doctorId: criteria.doctorId,
      date: criteria.date
    });
  };

  const handleSelectSpecialty = (spec) => {
    setBookingDraft({
      specialtyId: spec.id
    });
  };

  const handleSelectDoctor = (doctor) => {
    setBookingDraft({
      specialtyId: doctor.specialtyId,
      doctorId: doctor.id
    });
  };

  const handleSelectPackage = (pkg) => {
    setBookingDraft({
      symptoms: `Đăng ký gói khám: ${pkg.name} (${pkg.price})`
    });
  };

  return (
    <BrowserRouter>
      {/* Scroll window to top whenever route changes */}
      <ScrollToTop />

      <div className="hosp-site-app">
        {/* Persistent Portal Header */}
        <Header 
          onOpenLookup={() => setLookupOpen(true)} 
          onOpenSearch={() => setSearchOpen(true)}
        />

        {/* Dynamic Route View Switching */}
        <main className="portal-main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onSelectSpecialty={handleSelectSpecialty}
                  onSelectDoctor={handleSelectDoctor}
                  onSelectPackage={handleSelectPackage}
                  onQuickBooking={handleQuickBooking}
                  bookingDraft={bookingDraft}
                />
              } 
            />
            <Route 
              path="/chuyen-khoa" 
              element={
                <SpecialtiesPage 
                  onSelectSpecialty={handleSelectSpecialty} 
                />
              } 
            />
            <Route 
              path="/bac-si" 
              element={
                <DoctorsPage 
                  onSelectDoctor={handleSelectDoctor} 
                />
              } 
            />
            <Route 
              path="/bang-gia" 
              element={
                <PricingPage 
                  onSelectPackage={handleSelectPackage} 
                />
              } 
            />
            <Route 
              path="/tin-tuc" 
              element={<NewsPage />} 
            />
            <Route 
              path="/dat-lich" 
              element={
                <BookingPage 
                  bookingDraft={bookingDraft} 
                />
              } 
            />
            <Route 
              path="/lien-he" 
              element={<ContactPage />} 
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Portal Footer */}
        <Footer />

        {/* Floating Quick Action Bar */}
        <FloatingActions />

        {/* Appointment Lookup Modal */}
        <LookupModal 
          isOpen={lookupOpen} 
          onClose={() => setLookupOpen(false)} 
        />

        {/* Global Medical Omni-Search Modal */}
        <OmniSearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
