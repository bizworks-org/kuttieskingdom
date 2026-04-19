import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'h-14 shadow-lg' : 'h-20'
        }`}
        style={{ backgroundColor: 'var(--royal-purple)', backdropFilter: 'blur(10px)' }}
      >
        <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kutties Kingdom"
              className="h-12 md:h-14 object-contain"
              style={{ filter: isScrolled ? 'brightness(0.95)' : 'none' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:underline decoration-2 underline-offset-4 transition-all"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="text-white hover:underline decoration-2 underline-offset-4 transition-all"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:underline decoration-2 underline-offset-4 transition-all"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-white hover:underline decoration-2 underline-offset-4 transition-all"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection('book')}
              className="px-6 py-2 rounded-full transition-all hover:-translate-y-1 active:translate-y-1"
              style={{
                backgroundColor: 'var(--sunshine-yellow)',
                color: 'var(--deep-navy)',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
              }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-20 left-0 right-0 z-40 p-6 flex flex-col gap-4"
          style={{
            backgroundColor: 'var(--royal-purple)',
            background: 'linear-gradient(180deg, var(--royal-purple) 0%, var(--bubblegum-pink) 100%)',
          }}
        >
          <button
            onClick={() => scrollToSection('home')}
            className="text-white py-2"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('activities')}
            className="text-white py-2"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Activities
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-white py-2"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('packages')}
            className="text-white py-2"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Packages
          </button>
          <button
            onClick={() => scrollToSection('book')}
            className="px-6 py-3 rounded-full mt-2"
            style={{
              backgroundColor: 'var(--sunshine-yellow)',
              color: 'var(--deep-navy)',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
}
