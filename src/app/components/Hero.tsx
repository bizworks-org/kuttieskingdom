import { useEffect, useRef, useState } from 'react';

const VIDEOS = [
  '/20338164-hd_1920_1080_60fps.mp4',
  '/7106307-uhd_3840_2160_30fps.mp4',
  '/8538613-uhd_4096_2160_25fps.mp4',
  '/14973097_3840_2160_30fps.mp4',
];

const CROSSFADE_DURATION = 1500; // ms

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  // "active" slot: which of the two video elements is currently visible (0 or 1)
  const [activeSlot, setActiveSlot] = useState(0);
  // which video file each slot is showing
  const [slots, setSlots] = useState([0, 1]);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    setIsLoaded(true);
    videoRefs[0].current?.play().catch(() => {});
  }, []);

  const handleVideoEnded = (slot: number) => {
    if (slot !== activeSlot) return; // stale event, ignore

    const nextVideoIdx = (slots[slot] + 2) % VIDEOS.length; // next after the inactive slot
    const nextSlot = slot === 0 ? 1 : 0;

    // Preload the next video in the inactive slot
    setSlots((prev) => {
      const updated = [...prev];
      updated[nextSlot] = nextVideoIdx;
      return updated;
    });

    // After state flush, play the inactive slot and crossfade
    setTimeout(() => {
      const nextVid = videoRefs[nextSlot].current;
      if (nextVid) {
        nextVid.currentTime = 0;
        nextVid.play().catch(() => {});
      }
      setActiveSlot(nextSlot);
    }, 50);
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
      style={{ background: '#1a0533' }}
    >
      {/* Background Videos — dual-slot crossfade */}
      {!prefersReducedMotion && [0, 1].map((slot) => (
        <video
          key={slot}
          ref={videoRefs[slot]}
          src={VIDEOS[slots[slot]]}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 0,
            opacity: activeSlot === slot ? 1 : 0,
            transition: `opacity ${CROSSFADE_DURATION}ms ease-in-out`,
          }}
          autoPlay={slot === 0}
          muted
          playsInline
          onEnded={() => handleVideoEnded(slot)}
        />
      ))}

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(90,33,182,0.55) 0%, rgba(26,5,51,0.70) 100%)',
        }}
      />
      {/* Animated Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="cloud cloud-1 absolute top-20 left-0 text-6xl opacity-80">☁️</div>
        <div className="cloud cloud-2 absolute top-40 right-0 text-5xl opacity-70">☁️</div>
        <div className="cloud cloud-3 absolute top-60 left-1/4 text-7xl opacity-60">☁️</div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="star absolute top-32 left-10 text-3xl animate-pulse">⭐</div>
        <div className="star absolute top-48 right-20 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="star absolute bottom-32 left-1/3 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
      </div>

      {/* Floating Balloons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="balloon absolute bottom-0 left-20 text-5xl">🎈</div>
        <div className="balloon absolute bottom-0 right-32 text-5xl" style={{ animationDelay: '2s' }}>🎈</div>
      </div>

      {/* Main Content */}
      <div className={`relative max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ zIndex: 3 }}>
        {/* Badge */}
        <div
          className="inline-block px-6 py-2 rounded-full mb-6"
          style={{
            backgroundColor: 'var(--sunshine-yellow)',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
          }}
        >
          <span className="mr-2">👑</span>
          Chennai's Favourite Soft Play Zone
        </div>

        {/* Main Heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
            lineHeight: '1.2',
          }}
        >
          <span style={{ background: 'linear-gradient(90deg,#FF5AA5,#FFB03B)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Welcome to<br/></span>
          <span style={{ marginLeft: '0.5rem', background: 'linear-gradient(90deg,#4ADE80,#60A5FA)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Kutties Kingdom</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-8 text-lg md:text-2xl"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            color: '#ffffff',
            textShadow: '0 1px 6px rgba(0,0,0,0.5)',
          }}
        >
          Where Every Day is Playday — Ages 2 to 12 Years
        </p>

        {/* Hours Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div
            className="px-6 py-3 rounded-full"
            style={{
              backgroundColor: 'white',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              boxShadow: 'var(--shadow-card)',
            }}
          >
            Mon–Fri: 11AM–8PM
          </div>
          <div
            className="px-6 py-3 rounded-full"
            style={{
              backgroundColor: 'white',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              boxShadow: 'var(--shadow-card)',
            }}
          >
            Sat–Sun: 11AM–9PM
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full transition-all hover:-translate-y-2 hover:shadow-2xl active:translate-y-1 animate-bounce"
            style={{
              backgroundColor: 'var(--lime-green)',
              color: 'white',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: '1.125rem',
              boxShadow: 'var(--shadow-button)',
              animationDuration: '2s',
            }}
          >
            🎉 Book Your Adventure
          </button>
          <a
            href="https://maps.google.com/?q=No.+72/128,+1st+Floor,+Kamarajar+Salai,+Gandhi+Nagar,+Kodungaiyur,+Chennai+118"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-4 transition-all hover:-translate-y-1"
            style={{
              borderColor: 'var(--royal-purple)',
              color: 'var(--royal-purple)',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              backgroundColor: 'white',
            }}
          >
            📍 Find Us in Kodungaiyur
          </a>
        </div>

        {/* Decorative Characters */}
        <div className="hidden lg:block absolute -left-32 bottom-20 text-9xl animate-bounce" style={{ animationDuration: '3s' }}>
          🧸
        </div>
        <div className="hidden lg:block absolute -right-32 bottom-20 text-9xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
          🎠
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 3 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#5B21B6"
          />
        </svg>
      </div>

      <style>{`
        .cloud {
          animation: float-cloud 20s infinite linear;
        }
        .cloud-1 {
          animation-duration: 25s;
        }
        .cloud-2 {
          animation-duration: 30s;
          animation-delay: 5s;
        }
        .cloud-3 {
          animation-duration: 35s;
          animation-delay: 10s;
        }

        @keyframes float-cloud {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        .balloon {
          animation: float-balloon 6s infinite ease-in-out;
        }

        @keyframes float-balloon {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100vh) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
}
