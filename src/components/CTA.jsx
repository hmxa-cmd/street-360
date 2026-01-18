import React from 'react'
import '../styles/CTA.css'

export default function CTA() {
  return (
    <section id="order" className="cta-section">
      <div className="cta-content">
        <h2>Ready for the Night?</h2>
        <p className="cta-tagline">Zor se kaato, aur maza mehsoos karo</p>
        <p className="cta-description">
          Order now and get your food delivered when the night is young.
          Street 360: Where hunger meets attitude.
        </p>

        <div className="cta-buttons">
          <button className="cta-button primary large">
            Order on App
            <span className="button-cursor">→</span>
          </button>
          <button className="cta-button secondary large">
            Call Us
            <span className="button-cursor">→</span>
          </button>
        </div>

        <p className="cta-hours">
          Open 10 PM - 4 AM | Every Night | No Curfew Zone
        </p>
      </div>

      <div className="cta-decoration">
        <div className="pulse-ring"></div>
        <div className="sauce-drip drip-large"></div>
      </div>
    </section>
  )
}
