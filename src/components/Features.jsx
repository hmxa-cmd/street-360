import React from 'react'
import '../styles/Features.css'

export default function Features() {
  const features = [
    {
      icon: '🌙',
      title: 'Late Night',
      description: 'Open when everyone else closes. Your midnight cravings deserve respect.'
    },
    {
      icon: '🔄',
      title: '360° Flavors',
      description: 'From crispy fast food to authentic desi favorites. Full circle of taste.'
    },
    {
      icon: '⚡',
      title: 'Pure Energy',
      description: 'Zor se kaato, aur maza mehsoos karo. Bite hard, feel the fun.'
    },
    {
      icon: '🔥',
      title: 'Street Vibes',
      description: 'Bold, energetic, and unapologetically urban. No compromises, just fire.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-header">
        <h2>Why Street 360?</h2>
        <p>Because respect is earned, not asked for.</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="card-accent"></div>
          </div>
        ))}
      </div>

      <div className="features-decoration">
        <div className="accent-blob blob-1"></div>
        <div className="accent-blob blob-2"></div>
      </div>
    </section>
  )
}
