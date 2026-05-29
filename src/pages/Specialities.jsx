import React from 'react';

function Specialities() {
  return (
    <section id="specialities" className="specialities-section">
      <div className="container">
        <div className="section-header">
          <div className="about-badge" style={{ textAlign: 'center', marginBottom: '8px' }}>Our Signature Selection</div>
          <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Our Specialities</h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '15px auto 0', borderRadius: '2px' }} />
        </div>

        <div className="specialities-grid">
          {/* Speciality Card 1 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="/images/biryani_dish.png" alt="Hyderabadi Dum Biryani" className="speciality-img" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&auto=format&fit=crop&q=60"; }} />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Hyderabadi Dum Biryani</h3>
              <span className="speciality-price">₹309</span>
            </div>
            <p className="speciality-desc">Our slow-cooked masterpiece. Fragrant basmati rice layered with perfectly spiced marinated chicken, cooked on dum with real saffron and authentic spices.</p>
          </div>

          {/* Speciality Card 2 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="/images/noodles_dish.png" alt="Chilli Garlic Noodles" className="speciality-img" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=60"; }} />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Chilli Garlic Noodles</h3>
              <span className="speciality-price">₹299</span>
            </div>
            <p className="speciality-desc">Fresh wok-tossed noodles sautéed with generous amounts of minced garlic, crunchy fresh bell peppers, shredded vegetables, and hot red chillies.</p>
          </div>

          {/* Speciality Card 3 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="/images/hero_bowl.png" alt="Apollo Fish" className="speciality-img" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60"; }} />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Apollo Fish</h3>
              <span className="speciality-price">₹350</span>
            </div>
            <p className="speciality-desc">Crispy batter-fried boneless fish chunks tossed in a delicious spicy yogurt, curry leaf, and green chili tempered sauce. A true local favorite starter.</p>
          </div>

          {/* Speciality Card 4 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=60" alt="Chicken Manchurian" className="speciality-img" />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Chicken Manchurian</h3>
              <span className="speciality-price">₹289</span>
            </div>
            <p className="speciality-desc">Crispy chicken tossed in our signature dark soy, ginger, and garlic manchurian sauce with fresh coriander.</p>
          </div>

          {/* Speciality Card 5 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=60" alt="Prawns Fried Rice" className="speciality-img" />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Prawns Fried Rice</h3>
              <span className="speciality-price">₹319</span>
            </div>
            <p className="speciality-desc">Premium jasmine rice stir-fried with juicy prawns, egg, spring onions, and a hint of sesame oil.</p>
          </div>

          {/* Speciality Card 6 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop&q=60" alt="Manchow Soup" className="speciality-img" />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Manchow Soup (NV)</h3>
              <span className="speciality-price">₹219</span>
            </div>
            <p className="speciality-desc">A dark brown, thick, and hearty soup loaded with chicken, vegetables, soy sauce, and crispy fried noodles.</p>
          </div>

          {/* Speciality Card 7 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&auto=format&fit=crop&q=60" alt="Dragon Chicken" className="speciality-img" />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Dragon Chicken</h3>
              <span className="speciality-price">₹320</span>
            </div>
            <p className="speciality-desc">Long strips of chicken breast, stir-fried with cashew nuts, dried red chillies, and bell peppers in a fiery red sauce.</p>
          </div>

          {/* Speciality Card 8 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&auto=format&fit=crop&q=60" alt="Veg Spring Rolls" className="speciality-img" />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Veg Spring Rolls</h3>
              <span className="speciality-price">₹189</span>
            </div>
            <p className="speciality-desc">Golden crispy rolls stuffed with a savory mixture of crunchy cabbage, carrots, and glass noodles, served with sweet chili dip.</p>
          </div>

          {/* Speciality Card 9 */}
          <div className="speciality-card">
            <div className="speciality-img-box">
              <img src="https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop&q=60" alt="Hakka Noodles" className="speciality-img" />
            </div>
            <div className="speciality-title-row">
              <h3 className="speciality-title">Veg Hakka Noodles</h3>
              <span className="speciality-price">₹229</span>
            </div>
            <p className="speciality-desc">Classic street-style boiled noodles wok-tossed with julienned vegetables, light soy sauce, and white pepper.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialities;
