import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Food</span>
            <span className="title-line accent">Without</span>
            <span className="title-line">Curfew</span>
          </h1>
          <p className="hero-subtitle">360° Circle of Flavors</p>
          <p className="hero-description">
            Faisalabad's premier late-night food destination. Bold. Urban. Unstoppable.
          </p>
          <button className="cta-button primary">
            Order Now
            <span className="button-cursor">→</span>
          </button>
        </div>

        <div className="hero-visual">
          <div className="image-container">
            <img src="/street-360.jpeg" alt="Street 360 Food" className="hero-image" />
            <div className="image-frame"></div>
            <div className="sauce-drip drip-1"></div>
            <div className="sauce-drip drip-2"></div>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="starburst"></div>
        <div className="sparkles">
          <div className="sparkle spark-1"></div>
          <div className="sparkle spark-2"></div>
          <div className="sparkle spark-3"></div>
        </div>
      </div>
    </section>
  )
}
