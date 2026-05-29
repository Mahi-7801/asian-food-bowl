import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-img-box">
          <div className="hero-glow" />
          <img
            src="/images/hero_bowl.png"
            alt="Fresh Culinary Masterpieces"
            className="about-img"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60";
            }}
          />
        </div>
        <div className="about-content">
          <div className="about-badge">Our Culinary Philosophy</div>
          <h2 className="about-title">About Asian Food Bowl</h2>
          <p className="about-text">
            Nestled in the heart of Vijayawada, Asian Food Bowl Restaurant is a destination for food enthusiasts seeking premium, authentic taste. We combine centuries-old recipes with contemporary cooking techniques to bring the true essence of Asian street food and royal delicacies to your table.
          </p>
          <p className="about-text">
            Our journey began with a simple passion: to recreate the bold, unforgettable flavors of traditional wok cooking. Every dish is crafted using handpicked spices, premium high-quality oils, and the freshest produce from local markets. Our masterful chefs meticulously balance sweet, sour, spicy, and umami profiles.
          </p>
          <p className="about-text" style={{ fontStyle: 'italic', color: 'var(--primary-color)' }}>
            "We believe that great food is an experience that brings people together. That's why we never compromise on quality, ensuring every bowl tells a delicious story."
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Fresh Spices & Herbs</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Authentic</div>
              <div className="stat-label">Wok Hei Flavors</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Premium</div>
              <div className="stat-label">Culinary Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ AMENITIES & FEATURES ═══ */}
      <div className="container">
        <section className="amenities-section">
          <div className="section-header" style={{ marginBottom: '20px' }}>
            <h2 className="section-title" style={{ color: 'var(--text-light)', textAlign: 'center' }}>Restaurant Features & Details</h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '15px auto 0', borderRadius: '2px' }} />
          </div>

          <div className="amenities-grid">
            <div className="amenity-group">
              <h3>🕒 Timings & Pricing</h3>
              <ul className="amenity-list">
                <li className="amenity-item">Opening Hours: Monday - Sunday</li>
                <li className="amenity-item">11:00 AM - 11:00 PM</li>
                <li className="amenity-item">Average Price: ₹200 – ₹400 per person</li>
              </ul>
            </div>

            <div className="amenity-group">
              <h3>🍽️ Service Options</h3>
              <ul className="amenity-list">
                <li className="amenity-item">Dine-in & Takeaway</li>
                <li className="amenity-item">Delivery & No-contact delivery</li>
                <li className="amenity-item">Breakfast, Brunch, Lunch & Dinner</li>
                <li className="amenity-item">Catering available</li>
              </ul>
            </div>

            <div className="amenity-group">
              <h3>✨ Highlights & Offerings</h3>
              <ul className="amenity-list">
                <li className="amenity-item">Great desserts & Small plates</li>
                <li className="amenity-item">Vegan & Vegetarian options</li>
                <li className="amenity-item">All you can eat & Happy-hour food</li>
                <li className="amenity-item">Coffee & Quick bites</li>
              </ul>
            </div>

            <div className="amenity-group">
              <h3>♿ Accessibility & Parking</h3>
              <ul className="amenity-list">
                <li className="amenity-item">Wheelchair-accessible seating & entrance</li>
                <li className="amenity-item">Wheelchair-accessible car park</li>
                <li className="amenity-item">Free parking lot & street parking</li>
                <li className="amenity-item">Plenty of parking available</li>
              </ul>
            </div>

            <div className="amenity-group">
              <h3>💫 Atmosphere</h3>
              <ul className="amenity-list">
                <li className="amenity-item">Casual, Cozy & Quiet</li>
                <li className="amenity-item">Trendy & Upmarket</li>
                <li className="amenity-item">Family friendly (Good for kids & parties)</li>
                <li className="amenity-item">Kids' menu available</li>
              </ul>
            </div>

            <div className="amenity-group">
              <h3>💳 Payments & Amenities</h3>
              <ul className="amenity-list">
                <li className="amenity-item">Credit & Debit cards accepted</li>
                <li className="amenity-item">Google Pay & NFC mobile payments</li>
                <li className="amenity-item">Gender-neutral toilets & Restroom</li>
                <li className="amenity-item">Dogs allowed outside</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
