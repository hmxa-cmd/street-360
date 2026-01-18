import React, { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Street</span>
          <span className="logo-accent">360</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features">What We Do</a>
          <a href="#menu">Menu</a>
          <a href="#order">Order Now</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
