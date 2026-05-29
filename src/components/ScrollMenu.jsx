import React, { useRef } from 'react';
import { menuData } from '../data/menu';

export const categories = [
  { id: 'soups', name: 'Soups' },
  { id: 'veg_starters', name: 'Veg Starters' },
  { id: 'fish_prawns', name: 'Fish / Prawns' },
  { id: 'veg_curries', name: 'Veg Curries' },
  { id: 'non_veg_curries', name: 'Non-Veg Curries' },
  { id: 'fried_rice_noodles_veg', name: 'Veg Rice/Noodles' },
  { id: 'fried_rice_noodles_nonveg', name: 'NV Rice/Noodles' },
  { id: 'veg_biryanis', name: 'Veg Biryanis' },
  { id: 'non_veg_biryanis', name: 'Non-Veg Biryanis' },
  { id: 'chinese_veg_sig', name: 'Chinese Veg (Sig)' },
  { id: 'chinese_nonveg_sig', name: 'Chinese NV (Sig)' },
  { id: 'beverages_desserts', name: 'Beverages/Desserts' },
  { id: 'mocktails', name: 'Mocktails' }
];

function ScrollMenu({ activeCategory, onCategoryChange }) {
  const menuScrollRef = useRef(null);

  const handleCategoryChange = (categoryId) => {
    onCategoryChange(categoryId);
    if (menuScrollRef.current) {
      menuScrollRef.current.scrollTop = 0;
    }
  };

  const activeItems = menuData[activeCategory]?.items || [];

  return (
    <div className="scroll-menu-container">
      {/* Category Tabs */}
      <div className="scroll-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`scroll-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Parchment Scroll Paper */}
      <div className="scroll-paper-wrapper">
        <div className="scroll-roller-top"></div>
        <div className="scroll-paper-body">
          <div
            ref={menuScrollRef}
            className="scroll-content"
          >
            {activeItems.length > 0 ? (
              activeItems.map((item, index) => (
                <div key={index} className="scroll-item-row">
                  <span className="scroll-item-name">
                    {item.name}
                  </span>
                  <span className="scroll-item-dot-leader" />
                  <span className="scroll-item-price">
                    ₹{item.price}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#5a4634', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                No items available in this category.
              </div>
            )}
          </div>
        </div>
        <div className="scroll-roller-bottom"></div>
      </div>
    </div>
  );
}

export default ScrollMenu;
