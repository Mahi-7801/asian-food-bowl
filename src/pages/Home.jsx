import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VistarakuPlate from '../components/VistarakuPlate';

function Home() {
  const [activeCategory, setActiveCategory] = useState('chinese_nonveg_sig');

  return (
    <>
      {/* ═══ ORIGINAL HERO SECTION ═══ */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">Authentic Taste</div>
            <h1 className="hero-title">
              Premium <span>Asian</span><br />
              Cuisine in Vijayawada
            </h1>
            <p className="hero-description">
              Experience the finest selection of handpicked spices and traditional recipes brought straight to your table. A true Asian culinary journey.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn-primary">View Menu</Link>
              <Link to="/contact" className="btn-secondary">Find Us</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-glow" />

            <div className="steam-container">
              <div className="steam-particle"></div>
              <div className="steam-particle"></div>
              <div className="steam-particle"></div>
            </div>

            <img
              src="/images/hero_bowl.png"
              alt="Asian Food Bowl Signature Dish"
              className="hero-dish-img"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60";
              }}
            />

            {/* Accent Floating Images */}
            <img
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&auto=format&fit=crop&q=60"
              alt="Noodles Bowl"
              className="hero-accent-img hero-accent-1"
            />
            <img
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=60"
              alt="Fried Rice"
              className="hero-accent-img hero-accent-2"
            />
          </div>
        </div>
      </section>

      {/* ═══ HERO MENU SECTION — Menu on Home Page like KK Restaurant ═══ */}
      <section className="menu-section">
        {/* Full background overlay */}
        <div className="home-menu-bg-overlay" />



        <div className="container">
          {/* Title */}
          <div className="section-header">
            <h2 className="section-title">
              Feast With Asian Food Bowl
            </h2>
          </div>

          <VistarakuPlate
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* ═══ OUR SPECIALITIES ═══ */}
      <section className="specialities-section">
        <div className="container">
          <div className="section-header">
            <div className="about-badge" style={{ textAlign: 'center', marginBottom: '8px' }}>Our Signature Selection</div>
            <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Our Specialities</h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '15px auto 0', borderRadius: '2px' }} />
          </div>

          <div className="specialities-grid">
            <div className="speciality-card">
              <div className="speciality-img-box">
                <img
                  src="/images/biryani_dish.png"
                  alt="Hyderabadi Dum Biryani"
                  className="speciality-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&auto=format&fit=crop&q=60";
                  }}
                />
              </div>
              <div className="speciality-title-row">
                <h3 className="speciality-title">Hyderabadi Dum Biryani</h3>
                <span className="speciality-price">₹309</span>
              </div>
              <p className="speciality-desc">
                Fragrant basmati rice layered with perfectly spiced marinated chicken, cooked on dum with real saffron and authentic spices.
              </p>
            </div>

            <div className="speciality-card">
              <div className="speciality-img-box">
                <img
                  src="/images/noodles_dish.png"
                  alt="Chilli Garlic Noodles"
                  className="speciality-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=60";
                  }}
                />
              </div>
              <div className="speciality-title-row">
                <h3 className="speciality-title">Chilli Garlic Noodles</h3>
                <span className="speciality-price">₹299</span>
              </div>
              <p className="speciality-desc">
                Fresh wok-tossed noodles sautéed with generous amounts of minced garlic, crunchy fresh bell peppers, and hot red chillies.
              </p>
            </div>

            <div className="speciality-card">
              <div className="speciality-img-box">
                <img
                  src="/images/hero_bowl.png"
                  alt="Apollo Fish"
                  className="speciality-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60";
                  }}
                />
              </div>
              <div className="speciality-title-row">
                <h3 className="speciality-title">Apollo Fish</h3>
                <span className="speciality-price">₹350</span>
              </div>
              <p className="speciality-desc">
                Crispy batter-fried boneless fish chunks tossed in a delicious spicy yogurt, curry leaf, and green chili tempered sauce.
              </p>
            </div>

            {/* Additional Specialities */}
            <div className="speciality-card">
              <div className="speciality-img-box">
                <img src="https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=60" alt="Chicken Manchurian" className="speciality-img" />
              </div>
              <div className="speciality-title-row">
                <h3 className="speciality-title">Chicken Manchurian</h3>
                <span className="speciality-price">₹289</span>
              </div>
              <p className="speciality-desc">
                Crispy chicken tossed in our signature dark soy, ginger, and garlic manchurian sauce with fresh coriander.
              </p>
            </div>

            <div className="speciality-card">
              <div className="speciality-img-box">
                <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=60" alt="Prawns Fried Rice" className="speciality-img" />
              </div>
              <div className="speciality-title-row">
                <h3 className="speciality-title">Prawns Fried Rice</h3>
                <span className="speciality-price">₹319</span>
              </div>
              <p className="speciality-desc">
                Premium jasmine rice stir-fried with juicy prawns, egg, spring onions, and a hint of sesame oil.
              </p>
            </div>

            <div className="speciality-card">
              <div className="speciality-img-box">
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop&q=60" alt="Manchow Soup" className="speciality-img" />
              </div>
              <div className="speciality-title-row">
                <h3 className="speciality-title">Manchow Soup (NV)</h3>
                <span className="speciality-price">₹219</span>
              </div>
              <p className="speciality-desc">
                A dark brown, thick, and hearty soup loaded with chicken, vegetables, soy sauce, and crispy fried noodles.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/specialities" className="btn-primary">
              View All Specialities
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CUSTOMER REVIEWS ═══ */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="about-badge" style={{ textAlign: 'center', marginBottom: '8px' }}>Testimonials</div>
            <h2 className="section-title" style={{ color: 'var(--text-light)' }}>What Our Guests Say</h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '15px auto 0', borderRadius: '2px' }} />
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar">R</div>
                <div>
                  <div className="review-author">rajani kodali</div>
                  <div className="review-time">Local Guide • 3 years ago</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Food is delicious and the ambiance is too good. Multicuisine restaurant with vast menu. Their Mutton biryani is must try and butterfly Prawns are top notch ❤️. Fried Icecream is a must try here."
              </p>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar">S</div>
                <div>
                  <div className="review-author">Syamala</div>
                  <div className="review-time">Local Guide • a year ago</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Nice small restaurant with good ambience. If you want to taste chinese and Thai recipes must visit restaurant. Friendly staff and nice service."
              </p>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar">K</div>
                <div>
                  <div className="review-author">Kalavathi Chirumamilla</div>
                  <div className="review-time">2 years ago</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "The starters are yum. Loved the chicken starter specially. Biryani is flavourful. Fried ice cream is a must try. Drinks are refreshing much. The service is too good. Quiet polite and respectful."
              </p>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar">H</div>
                <div>
                  <div className="review-author">Harshad Jani Shaik</div>
                  <div className="review-time">Local Guide • 3 years ago</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Very pleasant ambience and food served was delicious. Loved the service and quality."
              </p>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar">D</div>
                <div>
                  <div className="review-author">Dasari Nitish</div>
                  <div className="review-time">3 months ago</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "BEST FOOD IN THE WORLD!! I am giving this the greatest review as I loved the food. On my birthday party, My whole family loved it."
              </p>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar">K</div>
                <div>
                  <div className="review-author">krishna kanth</div>
                  <div className="review-time">Local Guide • 7 months ago</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Best place to have food of your choice with best quality and taste. Very speed in making the dishes and serving the items. Its a small place but a must visit restaurant."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCATION & TIMINGS TEASER ═══ */}
      <section className="contact-section" style={{ borderTop: 'none' }}>
        <div className="container">
          <div className="section-header">
            <div className="about-badge" style={{ textAlign: 'center', marginBottom: '8px' }}>Location & Timings</div>
            <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Find Us in Vijayawada</h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '15px auto 0', borderRadius: '2px' }} />
          </div>

          <div className="contact-grid">
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
              <div style={{ marginTop: 'auto' }}>
                <span className="contact-detail-label"><span>💰</span> Average Price Range</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'white', display: 'block', marginTop: '4px' }}>₹200 – ₹400 per person</span>
              </div>
            </div>

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
                    <span className="contact-detail-label">Phone</span>
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
                  Get Directions on Maps →
                </a>
              </div>
            </div>

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
    </>
  );
}

export default Home;
