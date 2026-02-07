'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'What is car detailing?',
    answer: 'Yes, we recommend that you back up all your data before bringing in your device for repair. While we take utmost care, we cannot guarantee the safety of your data during the repair process.',
  },
  {
    question: 'How often should I get my car detailed?',
    answer: 'We recommend getting your car detailed every 3-6 months depending on your driving habits and environmental conditions. Regular detailing helps maintain your car\'s finish and protects it from damage.',
  },
  {
    question: 'What\'s included in a full detailing service?',
    answer: 'Our full detailing service includes exterior wash, wax, interior deep cleaning, vacuum, leather conditioning, window cleaning, and paint protection. Each service is tailored to your car\'s specific needs.',
  },
  {
    question: 'Will detailing remove scratches and stains?',
    answer: 'Light scratches and swirl marks can often be improved with our paint correction service. Deep scratches may require professional repair. Stains can typically be removed with our interior detailing service.',
  },
  {
    question: 'How long does a detailing session take?',
    answer: 'A typical detailing session takes between 4-8 hours depending on the service level and your vehicle\'s condition. Express detailing can be completed in 2-3 hours.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative bg-[#121212] text-white py-20 sm:py-24 lg:py-28 overflow-visible">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="inline-block text-[11px] tracking-[0.4em] text-white uppercase">
                <span className="relative">
                  EVERYT
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
                </span>
                <span className="relative">
                  HING YOU NEED TO KNOW
                  <span className="absolute -top-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-medium leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 sm:py-5 flex items-center justify-between bg-[#0b0b0b]/50 hover:bg-[#1a1a1a]/50 transition-colors text-left backdrop-blur-sm"
                  >
                    <span className="text-base sm:text-lg font-semibold">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 py-4 sm:py-5 bg-[#1a1a1a]/50 border-t border-white/5 backdrop-blur-sm">
                      <p className="text-[14px] leading-[28px] font-normal font-manrope text-gray-400">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
