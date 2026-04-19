export function HoursAndRules() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--royal-purple)' }}>
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-pulse">⭐</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-10 right-1/3 text-4xl animate-pulse" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hours Card */}
          <div
            className="bg-white rounded-3xl p-8"
            style={{ boxShadow: 'var(--shadow-pop)' }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '2rem',
                color: 'var(--royal-purple)',
              }}
            >
              🕐 Opening Hours
            </h3>

            <div className="space-y-4" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.125rem' }}>
              <div className="flex justify-between items-center py-3 border-b-2 border-gray-100">
                <span className="font-semibold">Monday – Friday</span>
                <span className="font-bold">11AM – 8PM</span>
              </div>
              <div
                className="flex justify-between items-center py-3 px-4 rounded-xl"
                style={{ backgroundColor: 'var(--sunshine-yellow)' }}
              >
                <span className="font-semibold">Saturday – Sunday</span>
                <span className="font-bold">11AM – 9PM</span>
              </div>

              <div
                className="inline-block px-6 py-3 rounded-full mt-4"
                style={{
                  backgroundColor: 'var(--lime-green)',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                OPEN DAILY
              </div>
            </div>
          </div>

          {/* Rules Card */}
          <div
            className="bg-white rounded-3xl p-8"
            style={{ boxShadow: 'var(--shadow-pop)' }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '2rem',
                color: 'var(--royal-purple)',
              }}
            >
              📋 Good to Know
            </h3>

            <ul className="space-y-4" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.125rem' }}>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🧦</span>
                <span>Socks are mandatory for all children</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👶</span>
                <span>Age group: 2-12 years only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🍎</span>
                <span>No outside food allowed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👨‍👩‍👧</span>
                <span>Adult supervision required at all times</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🧴</span>
                <span>Sanitiser stations available throughout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
