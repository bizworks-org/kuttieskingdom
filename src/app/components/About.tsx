export function About() {
  return (
    <section
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: 'var(--cloud-white)' }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'var(--royal-purple)' }}></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'var(--bubblegum-pink)' }}></div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div
              className="inline-block px-4 py-2 rounded-xl"
              style={{
                backgroundColor: 'var(--soft-peach)',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                color: 'var(--royal-purple)',
              }}
            >
              🏰 About Us
            </div>

            <h2
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                color: 'var(--royal-purple)',
                lineHeight: '1.2',
              }}
            >
              A Magical Kingdom Built for Little Adventurers
            </h2>

            <div className="space-y-4" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.125rem' }}>
              <p>
                At Kutties Kingdom, we believe every child deserves a safe, vibrant space to explore, play, and create magical memories. Our soft play zone is designed with love and care, featuring colorful equipment that sparks imagination and encourages active play.
              </p>
              <p>
                Located in the heart of Kodungaiyur, Chennai, we provide a welcoming environment where parents can relax while their little ones embark on exciting adventures. From giant slides to foam castles, every corner is crafted for maximum fun and safety.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: 'white', boxShadow: 'var(--shadow-soft)' }}>
                <span className="text-3xl mb-2">✅</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: 'var(--deep-navy)' }}>
                  Safe Equipment
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: 'white', boxShadow: 'var(--shadow-soft)' }}>
                <span className="text-3xl mb-2">✅</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: 'var(--deep-navy)' }}>
                  Trained Staff
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: 'white', boxShadow: 'var(--shadow-soft)' }}>
                <span className="text-3xl mb-2">✅</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: 'var(--deep-navy)' }}>
                  Sanitised Daily
                </span>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden" style={{ boxShadow: 'var(--shadow-pop)' }}>
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop"
                alt="Children playing at Kutties Kingdom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 text-8xl animate-spin" style={{ animationDuration: '20s' }}>
              🏰
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
