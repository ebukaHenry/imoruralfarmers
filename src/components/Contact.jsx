import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions or want to learn more? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Form</h3>
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
        
<div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        Address
      </h4>
      <a 
        href="https://www.google.com/maps/search/?api=1&query=Enyiogugu+Aboh+Mbaise+L.G.A.+IMO+State+Nigeria" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-primary transition inline-block"
      >
        <p>
          Enyiogugu Aboh Mbaise<br />
          L.G.A., IMO<br />
          State, Nigeria
        </p>
      </a>
    </div>
    
    <div>
      <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
        <Phone className="w-5 h-5 text-primary" />
        Phone
      </h4>
      <p className="text-gray-700">
        <a href="tel:+2347036819867" className="hover:text-primary transition">
          +2347036819867
        </a>
      </p>
    </div>
    
    <div>
      <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
        <Mail className="w-5 h-5 text-primary" />
        Email
      </h4>
      <p className="text-gray-700">
        <a href="mailto:imoruralfarmersdevelopmentfoundation@imoruralfarmers.com" className="hover:text-primary transition break-all">
          Imoruralfarmersdevelopmentfoundation@imoruralfarmers.com
        </a>
      </p>
    </div>
    
    <div>
      <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
        <Clock className="w-5 h-5 text-primary" />
        Hours
      </h4>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Monday - Friday</span>
          <span className="text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Open 9:00 AM - 5:00 PM
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Saturday</span>
          <span className="text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Open 10:00 AM - 2:00 PM
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Sunday</span>
          <span className="text-red-500 font-medium">Closed</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
