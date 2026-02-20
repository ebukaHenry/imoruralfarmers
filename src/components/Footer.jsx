import React from 'react'
import { Facebook, Twitter, Instagram, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">
                <img 
                    src="/imo rural logo modified.png" 
                    alt="Rural Farmers Logo" 
                    className="h-10 w-10"
                />
              </div>
              <h2 className="text-2xl font-bold">IMO Rural Farmers</h2>
            </div>
            <p className="text-sm opacity-90">
              Empowering farmers and transforming rural communities through sustainable agriculture and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#about" className="hover:text-accent transition">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#involved" className="hover:text-accent transition">Get Involved</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
           <div className="flex gap-4 text-2xl">
  <a 
    href="#" 
    className="hover:text-accent transition transform hover:scale-110" 
    aria-label="Facebook"
  >
    <Facebook className="w-6 h-6" />
  </a>
  <a 
    href="#" 
    className="hover:text-accent transition transform hover:scale-110" 
    aria-label="X (Twitter)"
  >
    <Twitter className="w-6 h-6" />
  </a>
  <a 
    href="#" 
    className="hover:text-accent transition transform hover:scale-110" 
    aria-label="Instagram"
  >
    <Instagram className="w-6 h-6" />
  </a>
  <a 
    href="#" 
    className="hover:text-accent transition transform hover:scale-110" 
    aria-label="TikTok"
  >
    <Video className="w-6 h-6" />
  </a>
</div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              &copy; 2024 Rural Farmers NGO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
              <a href="#" className="hover:text-accent transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
