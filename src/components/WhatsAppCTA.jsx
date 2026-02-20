import React from 'react'

export default function WhatsAppCTA() {
  // Use Vite env var VITE_WHATSAPP_NUMBER (international format, no +), e.g. 2348012345678
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '2349014988585'
  const message = encodeURIComponent('Hello — I would like to learn more about Rural Farmers NGO.')
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <div className="fixed z-50 right-4 bottom-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rural Farmers NGO on WhatsApp"
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg"
      >
        <span className="text-2xl">💬</span>
        <span className="hidden sm:inline font-semibold">Contact Us</span>
      </a>
    </div>
  )
}
