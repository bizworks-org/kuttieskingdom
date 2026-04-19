import { useEffect, useState } from 'react';

export function BookingSection() {
  const [confetti, setConfetti] = useState<Array<{ left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setConfetti(particles);
  }, []);

  const phoneNumbers = [
    { number: '7829807717', display: '📞 7829807717' },
    { number: '7200007717', display: '📞 7200007717' },
    { number: '7904479774', display: '📞 7904479774' },
  ];

  return (
    <section
      id="book"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--candy-red)' }}
    >
      {/* Confetti Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((particle, i) => (
          <div
            key={i}
            className="confetti absolute w-2 h-2 rounded-full"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              backgroundColor: ['#FBBF24', '#F472B6', '#38BDF8', '#84CC16', '#818CF8'][i % 5],
            }}
          />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <h2
          className="mb-4"
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: 'white',
          }}
        >
          Ready for the Fun?
        </h2>

        <p
          className="mb-8"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '1.5rem',
            color: 'white',
            fontWeight: 600,
          }}
        >
          Book your session now — weekends fill up fast!
        </p>

        {/* Phone Numbers */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:+91${phone.number}`}
              className="px-6 py-3 rounded-full transition-all hover:scale-105 hover:animate-wiggle"
              style={{
                backgroundColor: 'white',
                color: 'var(--candy-red)',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: '1.125rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              {phone.display}
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/917829807717?text=Hi!%20I%20would%20like%20to%20book%20a%20session%20at%20Kutties%20Kingdom"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:-translate-y-2 hover:scale-105"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: '1.25rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          }}
        >
          <span>💬</span>
          Chat on WhatsApp
        </a>
      </div>

      <style>{`
        .confetti {
          animation: fall linear infinite;
          top: -10%;
        }

        @keyframes fall {
          to {
            transform: translateY(110vh) rotate(360deg);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .hover\\:animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
