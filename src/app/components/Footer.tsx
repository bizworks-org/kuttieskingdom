export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--deep-navy)' }}>
      {/* Rainbow Strip */}
      <div
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #EF4444, #F97316, #FBBF24, #84CC16, #38BDF8, #818CF8, #F472B6)',
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">👑</span>
              <span
                className="text-white"
                style={{ fontFamily: "'Fredoka One', cursive", fontSize: '1.5rem' }}
              >
                Kutties Kingdom
              </span>
            </div>
            <p
              className="text-gray-300"
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.95rem' }}
            >
              Where Every Day is Playday!<br />
              Chennai's favourite soft play zone for ages 2-12.
            </p>
            <div className="flex gap-4 mt-4 text-3xl">
              <span>🎠</span>
              <span>🌈</span>
              <span>⭐</span>
              <span>👑</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '1.125rem' }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'Activities', 'Gallery', 'Packages', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '1.125rem' }}
            >
              Get in Touch
            </h4>
            <div className="space-y-3 text-gray-300" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.95rem' }}>
              <p>
                📍 No. 72/128, 1st Floor,<br />
                Kamarajar Salai, Gandhi Nagar,<br />
                Kodungaiyur, Chennai – 600 118
              </p>
              <div>
                <p>📞 7829807717</p>
                <p>📞 7200007717</p>
                <p>📞 7904479774</p>
              </div>
              <p>🕐 Open Daily: 11AM onwards</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-gray-700 text-center text-gray-400"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.875rem' }}
        >
          <p>© 2026 Kutties Kingdom · Made with ❤️ in Chennai</p>
        </div>
      </div>
    </footer>
  );
}
