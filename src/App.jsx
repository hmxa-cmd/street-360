import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <CTA />
      <Footer />
    </div>
  )
}
