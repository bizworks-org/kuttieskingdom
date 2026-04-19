export function Marquee() {
  return (
    <div
      className="py-4 overflow-hidden"
      style={{ backgroundColor: 'var(--royal-purple)' }}
    >
      <div className="marquee-content whitespace-nowrap">
        <span
          className="inline-block text-white px-8"
          style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
        >
          ⭐ SOCKS MANDATORY · 🎠 AGES 2–12 YEARS · 📞 CALL TO BOOK · 🕐 OPEN DAILY · ⭐ SOCKS MANDATORY · 🎠 AGES 2–12 YEARS · 📞 CALL TO BOOK · 🕐 OPEN DAILY · ⭐ SOCKS MANDATORY · 🎠 AGES 2–12 YEARS · 📞 CALL TO BOOK · 🕐 OPEN DAILY ·
        </span>
      </div>

      <style>{`
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
