import React from 'react'

export default function Services() {
  const services = [
    {
      icon: '🎓',
      title: 'Agricultural Training',
      description: 'Comprehensive workshops and courses on modern farming techniques, crop management, and sustainable practices.'
    },
    {
      icon: '💚',
      title: 'Organic Farming',
      description: 'Guidance and resources for transitioning to organic farming methods with certification support.'
    },
    {
      icon: '💰',
      title: 'Financial Support',
      description: 'Microfinance programs and loans to help farmers invest in seeds, equipment, and infrastructure.'
    },
    {
      icon: '📊',
      title: 'Market Access',
      description: 'Direct connections to buyers and cooperative networks for fair pricing and better market opportunities.'
    },
    {
      icon: '🌾',
      title: 'Crop Insurance',
      description: 'Affordable crop insurance programs to protect farmers against weather and market risks.'
    },
    {
      icon: '👨‍⚕️',
      title: 'Health & Wellness',
      description: 'Health camps, nutritional guidance, and wellness programs for farming communities.'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide comprehensive support across multiple areas to help farmers succeed and build sustainable livelihoods.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
