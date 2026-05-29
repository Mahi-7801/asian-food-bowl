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

function VistarakuPlate({ activeCategory, onCategoryChange }) {
  const menuScrollRef = useRef(null);

  const handleCategoryChange = (categoryId) => {
    onCategoryChange(categoryId);
    if (menuScrollRef.current) {
      menuScrollRef.current.scrollTop = 0;
    }
  };

  const activeItems = menuData[activeCategory]?.items || [];
  const activeTitle = menuData[activeCategory]?.title || '';

  return (
    <div className="menu-layout">
      {/* Left Category Sidebar */}
      <div className="category-sidebar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Right Vistaraku Leaf Plate */}
      <div className="vistaraku-plate">
        <div className="vistaraku-stem" />
        <div className="vistaraku-body">
          <div className="vistaraku-seams">
            <div className="vistaraku-seam-h1" />
            <div className="vistaraku-seam-h2" />
            <div className="vistaraku-seam-v1" />
            <div className="vistaraku-stitch-pin" style={{ top: '33%', left: '48%', transform: 'rotate(45deg)' }} />
            <div className="vistaraku-stitch-pin" style={{ top: '33%', right: '10%', transform: 'rotate(-30deg)' }} />
            <div className="vistaraku-stitch-pin" style={{ top: '66%', left: '48%', transform: 'rotate(-45deg)' }} />
            <div className="vistaraku-stitch-pin" style={{ top: '66%', right: '10%', transform: 'rotate(30deg)' }} />
            <div className="vistaraku-stitch-pin" style={{ top: '10%', left: '49%', transform: 'rotate(90deg)' }} />
            <div className="vistaraku-stitch-pin" style={{ bottom: '10%', left: '49%', transform: 'rotate(90deg)' }} />
          </div>

          <div className="vistaraku-header">
            <h3 className="vistaraku-title">
              🍃 {activeTitle}
            </h3>
            <div className="vistaraku-subtitle">
              Asian Food Bowl Restaurant
            </div>
          </div>

          <div
            ref={menuScrollRef}
            className="vistaraku-scroll-container"
          >
            {activeItems.length > 0 ? (
              activeItems.map((item, index) => (
                <div key={index} className="vistaraku-item-row">
                  <span className="vistaraku-item-name">
                    {item.name}
                  </span>
                  <span className="vistaraku-item-dot-leader" />
                  <span className="vistaraku-item-price">
                    ₹{item.price}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#a3b18a', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                No items available in this category.
              </div>
            )}
          </div>

          <div className="vistaraku-seal">
            <div className="vistaraku-seal-text">
              Premium<br />Quality
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistarakuPlate;
