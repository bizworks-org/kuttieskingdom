import { useState } from 'react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop', caption: 'Colorful ball pit fun' },
  { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop', caption: 'Giant slides adventure' },
  { url: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop', caption: 'Creative art corner' },
  { url: 'https://images.unsplash.com/photo-1503516459261-40c66117780a?w=400&h=450&fit=crop', caption: 'Foam castle climbing' },
  { url: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=400&h=400&fit=crop', caption: 'Trampoline zone' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=350&fit=crop', caption: 'Birthday celebrations' },
  { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=500&fit=crop', caption: 'Happy kids playing' },
  { url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=400&fit=crop', caption: 'Ride-on toys' },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--cloud-white)' }}
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
            📸 Peek Inside the Kingdom
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.25rem',
              color: 'var(--deep-navy)',
            }}
          >
            See where the magic happens!
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative overflow-hidden rounded-[32px] transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: hoveredIndex === index ? 'var(--shadow-pop)' : 'var(--shadow-card)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full transition-all duration-300"
                style={{
                  filter: hoveredIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                }}
              />

              {/* Overlay */}
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(91, 33, 182, 0.7)',
                  }}
                >
                  <div className="text-white text-center p-4">
                    <div className="text-4xl mb-2">▶️</div>
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                      {image.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/kuttieskingdom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--bubblegum-pink)',
              color: 'white',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: '1.125rem',
              boxShadow: 'var(--shadow-button)',
            }}
          >
            <span>📱</span>
            See More on Instagram → @KuttiesKingdom
          </a>
        </div>
      </div>
    </section>
  );
}
