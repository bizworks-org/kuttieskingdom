import { useState } from 'react';

interface Package {
  name: string;
  price: string;
  duration: string;
  highlight: string;
  emoji: string;
  isPopular?: boolean;
}

const packages: Package[] = [
  {
    name: 'Kuttie Explorer',
    price: '₹199',
    duration: '1 Hour',
    highlight: 'Best for first-timers',
    emoji: '🎈',
  },
  {
    name: 'Kuttie Champion',
    price: '₹349',
    duration: '2 Hours',
    highlight: 'Most Popular',
    emoji: '🔥',
    isPopular: true,
  },
  {
    name: 'Kuttie Royal',
    price: '₹599',
    duration: 'Full Day',
    highlight: 'Best Value',
    emoji: '👑',
  },
];

export function Packages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="packages"
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: 'white' }}
    >
      {/* Rainbow Gradient Strip */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background: 'linear-gradient(90deg, #EF4444, #F97316, #FBBF24, #84CC16, #38BDF8, #818CF8, #F472B6)',
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--royal-purple)',
              marginBottom: '1rem',
            }}
          >
            🎟️ Choose Your Adventure
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.25rem',
              color: 'var(--deep-navy)',
            }}
          >
            Pick the perfect package for your little ones!
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 transition-all duration-300 relative"
              style={{
                backgroundColor: pkg.isPopular ? 'var(--royal-purple)' : 'white',
                color: pkg.isPopular ? 'white' : 'var(--deep-navy)',
                boxShadow: hoveredIndex === index ? 'var(--shadow-pop)' : 'var(--shadow-card)',
                transform: pkg.isPopular ? 'scale(1.05)' : hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                border: pkg.isPopular ? 'none' : '2px solid #E5E7EB',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div
                  className="absolute -top-4 right-8 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'var(--sunshine-yellow)',
                    color: 'var(--deep-navy)',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.875rem',
                  }}
                >
                  {pkg.emoji} {pkg.highlight}
                </div>
              )}

              {/* Package Emoji */}
              <div className="text-6xl mb-4">{pkg.emoji}</div>

              {/* Package Name */}
              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: '1.75rem',
                }}
              >
                {pkg.name}
              </h3>

              {/* Duration */}
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '1.125rem',
                  opacity: 0.9,
                }}
              >
                {pkg.duration}
              </p>

              {/* Price */}
              <div
                className="mb-6"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: '3rem',
                }}
              >
                {pkg.price}
              </div>

              {/* Highlight (for non-popular) */}
              {!pkg.isPopular && (
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--royal-purple)',
                  }}
                >
                  {pkg.emoji} {pkg.highlight}
                </p>
              )}

              {/* CTA Button */}
              <button
                onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-full transition-all hover:-translate-y-1 active:translate-y-1"
                style={{
                  backgroundColor: pkg.isPopular ? 'var(--lime-green)' : 'var(--lime-green)',
                  color: 'white',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.125rem',
                }}
              >
                Book This
              </button>
            </div>
          ))}
        </div>

        {/* Birthday Party Note */}
        <div
          className="text-center p-6 rounded-3xl"
          style={{
            backgroundColor: 'var(--soft-peach)',
            fontFamily: "'Nunito', sans-serif",
            fontSize: '1.125rem',
          }}
        >
          <span className="text-2xl mr-2">🎂</span>
          <span className="font-semibold">Birthday party packages available — call to enquire!</span>
        </div>
      </div>
    </section>
  );
}
