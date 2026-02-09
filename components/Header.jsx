'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import CalendlyTrigger from './CalendlyTrigger'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Pages', href: '#pages', hasDropdown: true },
    { name: 'Shop', href: '#shop', hasDropdown: true },
    { name: 'Gallery', href: '#gallery', hasDropdown: true },
    { name: 'Blog', href: '#blog' },
    { name: 'Workshop', href: '#workshop', hasDropdown: true },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-dark text-white py-2.5 text-xs border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span>Get 50% Discount for AutoDetail New Member</span>
          </div>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="tel:+18009876654" className="hover:text-white transition-colors flex items-center gap-1">
              <span>📞</span> Call us: +1 800 987 6654
            </a>
            <a href="mailto:support@autodetail.com" className="hover:text-white transition-colors hidden sm:flex items-center gap-1">
              <span>✉️</span> Message us: support@autodetail.com
            </a>
          </div>
        </div>
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10\">
          <div className="flex items-center justify-between h-[80px] lg:h-[95px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="block relative w-40 h-16 sm:w-44 sm:h-16 lg:w-52 lg:h-20">
                <Image
                  src="/logo-white.webp"
                  alt="Auto Detail"
                  fill
                  className="object-contain"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-9 xl:space-x-11" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-[15px] font-normal hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </nav>

            {/* Right Side - CTA Button */}
            <div className="hidden lg:flex items-center">
              <CalendlyTrigger className="bg-[#ED1C24] hover:bg-[#d91920] text-white px-7 py-3 text-[12px] font-semibold uppercase tracking-wide transition-all duration-300 rounded-md">
                Make Appointment
              </CalendlyTrigger>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-dark z-40 lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-medium uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <CalendlyTrigger
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#ED1C24] hover:bg-[#d91920] text-white px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide transition-all duration-300 mt-4 rounded-md"
          >
            Make Appointment
          </CalendlyTrigger>
        </div>
      </div>
    </>
  )
}
