import React, { useState } from 'react';
import VistarakuPlate from '../components/VistarakuPlate';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('chinese_nonveg_sig');

  return (
    <section id="menu-section" className="menu-section">


      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Feast With Asian Food Bowl
          </h2>
          <p className="section-subtitle">
            Select a category on the left to unroll our specialities and signature delicacies.
          </p>
        </div>

        <VistarakuPlate
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
    </section>
  );
}

export default Menu;
