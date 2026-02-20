import React, { useState } from 'react'
import DonationModal from './DonationModal.jsx'

export default function GetInvolved() {
  const [showDonationModal, setShowDonationModal] = useState(false)
  
  const handleButtonClick = (title) => {
    if (title === 'Volunteer' || title === 'Advocate') {
      // Scroll to contact section
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Donate, Partner - open donation modal
      setShowDonationModal(true)
    }
  }
  
  const ways = [
    {
      icon: '💝',
      title: 'Donate',
      description: 'Your contributions directly support farming communities and sustainable projects.'
    },
    {
      icon: '🤝',
      title: 'Volunteer',
      description: 'Join our team on the ground and make a direct impact in farming communities.'
    },
    {
      icon: '📢',
      title: 'Advocate',
      description: 'Help spread awareness about rural farming challenges and our mission.'
    },
    {
      icon: '🏢',
      title: 'Partner',
      description: 'Collaborate with us for corporate social responsibility initiatives.'
    }
  ]

  return (
    <section id="involved" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Get Involved
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          There are many ways to support our mission and help transform rural communities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <div key={index} className="bg-light p-6 rounded-lg text-center hover:shadow-md transition">
              <div className="text-5xl mb-4">{way.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{way.title}</h3>
              <p className="text-gray-600 mb-4">{way.description}</p>
              <button 
                onClick={() => handleButtonClick(way.title)}
                className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition text-sm font-semibold"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="mb-6 text-lg opacity-95">Join thousands of supporters helping farmers build better futures.</p>
          <button
            onClick={() => setShowDonationModal(true)}
            className="bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Start Supporting Today
          </button>
        </div>
        {/* Donation Modal triggered from this section */}
        <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
      </div>
    </section>
  )
}
