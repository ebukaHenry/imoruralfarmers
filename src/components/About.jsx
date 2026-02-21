import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          About Our Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="text-5xl text-center md:text-left">🌱</div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              IMO Rural Farmers NGO is a non-profit organization committed to improving the lives of farmers in rural areas. We work directly with farming communities to address challenges and unlock opportunities for sustainable agricultural growth.
            </p>
            <p className="text-gray-700">
              Through education, resources, and advocacy, we empower farmers to adopt modern techniques while preserving traditional knowledge.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              We envision a future where all rural farmers have access to quality education, sustainable farming practices, and fair market opportunities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Sustainable & organic farming initiatives</li>
              <li>✓ Agricultural training programs</li>
              <li>✓ Market access and fair pricing</li>
              <li>✓ Community development</li>
            </ul>
          </div>
          <div className="text-5xl text-center md:text-right">🤝</div>
        </div>
      </div>
    </section>
  )
}
