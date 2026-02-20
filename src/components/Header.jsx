import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">
                <img 
                    src="/imo rural logo modified.png" 
                    alt="Rural Farmers NGO Logo - empowering farmers with sustainable agriculture" 
                    className="h-10 w-10"
                />
            </div>
            <h1 className="text-xl font-bold hidden sm:block">IMO Rural Farmers</h1>
            <h1 className="text-lg font-bold sm:hidden">RF NGO</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#services" className="hover:text-accent transition">Services</a>
            <a href="#involved" className="hover:text-accent transition">Get Involved</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <a href="#about" className="hover:text-accent transition block py-2">About</a>
            <a href="#services" className="hover:text-accent transition block py-2">Services</a>
            <a href="#involved" className="hover:text-accent transition block py-2">Get Involved</a>
            <a href="#contact" className="hover:text-accent transition block py-2">Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}
