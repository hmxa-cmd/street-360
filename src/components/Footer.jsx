import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Street 360</h3>
          <p>Faisalabad's premier late-night food destination.</p>
          <p className="tagline">Food Without Curfew</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">What We Do</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#order">Order Now</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <p>10 PM - 4 AM</p>
          <p>Every Night</p>
          <p className="no-curfew">No Curfew Zone 🌙</p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Street 360. Respect is earned, not asked for.</p>
        <div className="footer-accent"></div>
      </div>
    </footer>
  )
}
