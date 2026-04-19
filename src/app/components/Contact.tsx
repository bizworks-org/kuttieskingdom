export function Contact() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--deep-navy)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: "3px solid var(--sunshine-yellow)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.6372260151572!2d80.24181271589309!3d13.132977897450727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526505f48db40b%3A0xf0736980e44076a4!2sNO%3A%2072%2F128%2C%20Kamarajar%20Salai%2C%20Gandhi%20Nagar%2C%20Kodungaiyur%2C%20Chennai%2C%20Tamil%20Nadu%20600118%2C%20India!5e0!3m2!1sen!2sus!4v1776574920996!5m2!1sen!2sus"
              width="580"
              height="570"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kutties Kingdom Location"
            ></iframe>

          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-center">
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "2rem",
                color: "var(--royal-purple)",
              }}
            >
              📍 Visit Us
            </h3>

            <div
              className="space-y-6"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {/* Address */}
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--royal-purple)",
                  }}
                >
                  Address
                </div>
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  No. 72/128, 1st Floor, Kamarajar Salai,
                  <br />
                  Gandhi Nagar, Kodungaiyur,
                  <br />
                  Chennai – 600 118
                </p>
              </div>

              {/* Phone Numbers */}
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--royal-purple)",
                  }}
                >
                  Call Us
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:+917829807717"
                    className="block hover:underline"
                    style={{ fontSize: "1rem" }}
                  >
                    📞 7829807717
                  </a>
                  <a
                    href="tel:+917200007717"
                    className="block hover:underline"
                    style={{ fontSize: "1rem" }}
                  >
                    📞 7200007717
                  </a>
                  <a
                    href="tel:+917904479774"
                    className="block hover:underline"
                    style={{ fontSize: "1rem" }}
                  >
                    📞 7904479774
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--royal-purple)",
                  }}
                >
                  Opening Hours
                </div>
                <p style={{ fontSize: "1rem" }}>
                  Mon–Fri: 11AM – 8PM
                  <br />
                  Sat–Sun: 11AM – 9PM
                </p>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.google.com/?q=No.+72/128,+1st+Floor,+Kamarajar+Salai,+Gandhi+Nagar,+Kodungaiyur,+Chennai+118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--royal-purple)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
