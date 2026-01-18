import React, { useState } from 'react'
import '../styles/Menu.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('burgers')

  const menuItems = {
    burgers: [
      { name: 'The Midnight Beast', price: '₨550', spicy: true },
      { name: 'Urban Fusion', price: '₨450', spicy: false },
      { name: 'Electric Heat', price: '₨600', spicy: true },
      { name: 'Classic Crisp', price: '₨400', spicy: false }
    ],
    desi: [
      { name: 'Biryani Supreme', price: '₨550', spicy: true },
      { name: 'Karahi Fiesta', price: '₨500', spicy: true },
      { name: 'Nihari Express', price: '₨450', spicy: false },
      { name: 'Samosa Station', price: '₨150', spicy: true }
    ],
    sides: [
      { name: 'Crunch Fries', price: '₨200', spicy: false },
      { name: 'Loaded Nachos', price: '₨350', spicy: true },
      { name: 'Garlic Naan', price: '₨80', spicy: false },
      { name: 'Chaat Mix', price: '₨250', spicy: true }
    ],
    drinks: [
      { name: 'Neon Lime Shake', price: '₨250', spicy: false },
      { name: 'Berry Blast', price: '₨280', spicy: false },
      { name: 'Energy Surge', price: '₨200', spicy: false },
      { name: 'Cool Down Cola', price: '₨150', spicy: false }
    ]
  }

  const categories = ['burgers', 'desi', 'sides', 'drinks']

  return (
    <section id="menu" className="menu">
      <div className="menu-header">
        <h2>The 360 Menu</h2>
        <p>Bite hard. Feel the flavor.</p>
      </div>

      <div className="menu-categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-header">
              <h4>{item.name}</h4>
              {item.spicy && <span className="spicy-badge">🌶️ FIRE</span>}
            </div>
            <p className="item-price">{item.price}</p>
            <div className="item-drip"></div>
          </div>
        ))}
      </div>

      <div className="menu-decoration">
        <div className="starburst-menu"></div>
      </div>
    </section>
  )
}
