import { useState } from 'react';

interface Activity {
  icon: string;
  name: string;
  description: string;
  color: string;
}

const activities: Activity[] = [
  {
    icon: '🛝',
    name: 'Giant Slides',
    description: 'Thrilling slides that bring smiles! Perfect for adventurous kuttis who love speed.',
    color: '#EF4444',
  },
  {
    icon: '🎳',
    name: 'Ball Pit',
    description: 'Dive into a sea of colorful balls and splash around in pure joy!',
    color: '#F97316',
  },
  {
    icon: '🧱',
    name: 'Foam Block Building',
    description: 'Build castles, towers, and anything your imagination dreams up.',
    color: '#FBBF24',
  },
  {
    icon: '🚀',
    name: 'Astronaut Tunnel',
    description: 'Crawl through space-themed tunnels and explore like a real astronaut!',
    color: '#84CC16',
  },
  {
    icon: '🏰',
    name: 'Soft Castle Climb',
    description: 'Climb the royal castle and feel like a prince or princess for the day.',
    color: '#38BDF8',
  },
  {
    icon: '🎨',
    name: 'Art Corner',
    description: 'Express creativity with colors, crafts, and imaginative drawing.',
    color: '#818CF8',
  },
  {
    icon: '🚗',
    name: 'Ride-Ons',
    description: 'Zoom around on fun ride-on toys and race with friends!',
    color: '#F472B6',
  },
  {
    icon: '🎪',
    name: 'Trampoline Zone',
    description: 'Bounce high and feel like you\'re flying in the sky!',
    color: '#EC4899',
  },
];

export function Activities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="activities"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--soft-peach)' }}
    >
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
            🎪 What's Inside the Kingdom?
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.25rem',
              color: 'var(--deep-navy)',
            }}
          >
            Endless adventures await your little ones!
          </p>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: hoveredIndex === index ? 'var(--shadow-pop)' : 'var(--shadow-card)',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                borderTop: `6px solid ${activity.color}`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div
                className="text-7xl mb-4 transition-transform duration-300"
                style={{
                  transform: hoveredIndex === index ? 'scale(1.1) translateY(-8px)' : 'scale(1)',
                }}
              >
                {activity.icon}
              </div>

              {/* Activity Name */}
              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--deep-navy)',
                }}
              >
                {activity.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.95rem',
                  color: '#4B5563',
                  lineHeight: '1.6',
                }}
              >
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
