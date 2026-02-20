import React from 'react'

export default function Statistics() {
  const stats = [
    {
      number: '15,000+',
      label: 'Farmers Supported'
    },
    {
      number: '50+',
      label: 'Villages Reached'
    },
    {
      number: '1,000+',
      label: 'Acres Certified Organic'
    },
    {
      number: '$5M+',
      label: 'Economic Impact'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-accent">
                {stat.number}
              </div>
              <p className="text-lg opacity-95">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
