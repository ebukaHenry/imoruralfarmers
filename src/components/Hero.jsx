import React, { useState } from 'react'
import DonationModal from './DonationModal.jsx'

export default function Hero() {
  const [showDonationModal, setShowDonationModal] = useState(false)

  const handleLearnMore = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  const handleDonateNow = () => {
    setShowDonationModal(true)
  }

  return (
    <>
      <section className="bg-gradient-to-b from-primary to-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Empowering Farmers, Transforming Communities
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Dedicated to providing sustainable agricultural solutions, training, and support to rural farmers in underserved communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleLearnMore}
              className="bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 cursor-pointer"
            >
              Learn More
            </button>
            <button 
              onClick={handleDonateNow}
              className="border-2 border-accent text-accent font-bold py-3 px-8 rounded-lg hover:bg-accent hover:text-primary transition cursor-pointer"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={showDonationModal} 
        onClose={() => setShowDonationModal(false)} 
      />
    </>
  )
}
