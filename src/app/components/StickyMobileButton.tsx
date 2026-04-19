export function StickyMobileButton() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <button
        onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full py-4 rounded-full transition-all hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'var(--candy-red)',
          color: 'white',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 800,
          fontSize: '1.125rem',
          boxShadow: '0 8px 32px rgba(239, 68, 68, 0.5)',
        }}
      >
        📞 Book Now
      </button>
    </div>
  );
}
