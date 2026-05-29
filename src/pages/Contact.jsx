import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="about-badge" style={{ textAlign: 'center', marginBottom: '8px' }}>Find Us & Reach Out</div>
          <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Location & Timings</h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '15px auto 0', borderRadius: '2px' }} />
        </div>

        <div className="contact-grid">
          {/* Timings Card */}
          <div className="contact-card">
            <div>
              <h3 className="contact-card-title">
                <span>🕒</span> Opening Hours
              </h3>
              <div className="hours-table">
                <div className="hours-row">
                  <span className="hours-day">Thursday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Friday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Monday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Tuesday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Wednesday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid rgba(255, 215, 0, 0.05)' }}>
              <span className="contact-detail-label"><span>💰</span> Average Price Range</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'white', display: 'block', marginTop: '4px' }}>₹200 – ₹400 per person</span>
            </div>
          </div>

          {/* Address & Phone */}
          <div className="contact-card">
            <div>
              <h3 className="contact-card-title">
                <span>📍</span> Contact Details
              </h3>
              <div className="contact-details-box">
                <div>
                  <span className="contact-detail-label">Our Address</span>
                  <p className="contact-detail-text">
                    Back to Ushodaya super market, to, NAC Hall, opp. Kaviraju Tripuraneni Ramaswamy Road, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520007
                  </p>
                </div>
                <div>
                  <span className="contact-detail-label">Telephone</span>
                  <a href="tel:09494233488" className="contact-phone-link">
                    09494233488
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid rgba(255, 215, 0, 0.05)' }}>
              <a
                href="https://maps.app.goo.gl/WZRXWdw5TM66ZEh8A"
                target="_blank"
                rel="noopener noreferrer"
                className="card-footer-link"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="map-card">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4919023409675!2d80.6681672!3d16.501245900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbc671dcc931%3A0xf0b2da0fff627d06!2sAsian%20Food%20Bowl%20Restaurant!5e0!3m2!1sen!2sin!4v1779978973076!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
