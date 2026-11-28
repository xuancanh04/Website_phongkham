import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Stethoscope, User, CreditCard, ChevronRight, Sparkles } from 'lucide-react';
import { SPECIALTIES, DOCTORS, PRICING_PACKAGES } from '../data/clinicData';

export default function OmniSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ specialties: [], doctors: [], packages: [] });
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal via parent
          const searchBtn = document.querySelector('.btn-portal-lookup-search');
          if (searchBtn) searchBtn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults({ specialties: [], doctors: [], packages: [] });
      return;
    }

    const matchedSpecs = SPECIALTIES.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.lead.toLowerCase().includes(q) ||
      s.procedures.some(p => p.toLowerCase().includes(q))
    ).slice(0, 4);

    const matchedDocs = DOCTORS.filter(d => 
      d.name.toLowerCase().includes(q) ||
      d.specialtyName.toLowerCase().includes(q) ||
      d.degree.toLowerCase().includes(q) ||
      d.workHistory.toLowerCase().includes(q)
    ).slice(0, 4);

    const matchedPkgs = PRICING_PACKAGES.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    ).slice(0, 3);

    setResults({
      specialties: matchedSpecs,
      doctors: matchedDocs,
      packages: matchedPkgs
    });
  }, [query]);

  if (!isOpen) return null;

  const totalResults = results.specialties.length + results.doctors.length + results.packages.length;

  const handleSelect = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="omni-search-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Tìm kiếm nhanh cổng thông tin y tế">
      <div className="omni-search-container" onClick={e => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="omni-search-header">
          <Search size={20} className="omni-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="omni-search-input"
            placeholder="Tìm chuyên khoa, bác sĩ Quân y, kỹ thuật MRI/CT, giá khám BHYT..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Nhập từ khóa tìm kiếm"
          />
          {query && (
            <button 
              type="button" 
              className="omni-clear-btn" 
              onClick={() => setQuery('')}
              aria-label="Xóa từ khóa"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="omni-kbd-hint">ESC</kbd>
        </div>

        {/* Quick Suggestion Tags when empty */}
        {!query && (
          <div className="omni-quick-tags">
            <span className="omni-tags-title">Gợi ý tìm kiếm phổ biến:</span>
            <div className="omni-tag-chips">
              {['Khám cột sống', 'Bác sĩ Lê Quang Trí', 'Khoa Phụ sản An Đông', 'Chụp MRI 1.5T', 'Lọc máu Thận', 'Tạo hình thẩm mỹ', 'BHYT thông tuyến'].map(tag => (
                <button 
                  key={tag}
                  type="button" 
                  className="omni-tag-chip"
                  onClick={() => setQuery(tag)}
                >
                  <Sparkles size={12} />
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Body */}
        <div className="omni-results-body">
          {query && totalResults === 0 && (
            <div className="omni-empty-state">
              <p className="omni-empty-title">Không tìm thấy kết quả phù hợp với <strong>"{query}"</strong></p>
              <p className="omni-empty-desc">
                Thử tìm với các từ khóa thông dụng như: <em>xương khớp, phụ sản, MRI, BHYT, bác sĩ Trí</em> hoặc liên hệ tổng đài bệnh viện <strong>(028) 38366789</strong>.
              </p>
            </div>
          )}

          {results.doctors.length > 0 && (
            <div className="omni-group">
              <div className="omni-group-title">
                <User size={14} />
                <span>Bác sĩ Quân Y ({results.doctors.length})</span>
              </div>
              <div className="omni-items-list">
                {results.doctors.map(doc => (
                  <button 
                    key={doc.id}
                    type="button" 
                    className="omni-item-row"
                    onClick={() => handleSelect('/bac-si')}
                  >
                    <img src={doc.avatar} alt={doc.name} className="omni-doc-avatar" />
                    <div className="omni-item-info">
                      <div className="omni-item-name">{doc.name}</div>
                      <div className="omni-item-meta">{doc.title} • {doc.specialtyName}</div>
                    </div>
                    <ChevronRight size={16} className="omni-item-arrow" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.specialties.length > 0 && (
            <div className="omni-group">
              <div className="omni-group-title">
                <Stethoscope size={14} />
                <span>Chuyên khoa ({results.specialties.length})</span>
              </div>
              <div className="omni-items-list">
                {results.specialties.map(spec => (
                  <button 
                    key={spec.id}
                    type="button" 
                    className="omni-item-row"
                    onClick={() => handleSelect('/chuyen-khoa')}
                  >
                    <div className="omni-spec-icon-badge">
                      <Stethoscope size={16} />
                    </div>
                    <div className="omni-item-info">
                      <div className="omni-item-name">{spec.name}</div>
                      <div className="omni-item-meta">Trưởng khoa: {spec.lead} • {spec.tag}</div>
                    </div>
                    <ChevronRight size={16} className="omni-item-arrow" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.packages.length > 0 && (
            <div className="omni-group">
              <div className="omni-group-title">
                <CreditCard size={14} />
                <span>Gói khám & BHYT ({results.packages.length})</span>
              </div>
              <div className="omni-items-list">
                {results.packages.map(pkg => (
                  <button 
                    key={pkg.id}
                    type="button" 
                    className="omni-item-row"
                    onClick={() => handleSelect('/bang-gia')}
                  >
                    <div className="omni-pkg-icon-badge">
                      <CreditCard size={16} />
                    </div>
                    <div className="omni-item-info">
                      <div className="omni-item-name">{pkg.name}</div>
                      <div className="omni-item-meta">{pkg.price} • {pkg.subtitle}</div>
                    </div>
                    <ChevronRight size={16} className="omni-item-arrow" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="omni-search-footer">
          <span>Nhấn <strong>Enter</strong> để chọn</span>
          <span>Nhấn <strong>ESC</strong> để đóng</span>
          <span>Bệnh Viện Quân Y 7A - Cục Hậu Cần Quân Khu 7</span>
        </div>
      </div>
    </div>
  );
}
