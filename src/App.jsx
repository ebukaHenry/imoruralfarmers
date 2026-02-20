import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Statistics from './components/Statistics.jsx'
import GetInvolved from './components/GetInvolved.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppCTA from './components/WhatsAppCTA.jsx'
import SEO from './components/SEO.jsx'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <SEO />
      <Header />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <GetInvolved />
      <Contact />
      <Footer />
      <WhatsAppCTA />
    </div>
  )
}

export default App
