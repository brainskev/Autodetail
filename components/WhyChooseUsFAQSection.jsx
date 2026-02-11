'use client'

import { useState } from 'react'

const whyChooseUsItems = [
  {
    title: 'Expert Technicians',
    description: 'Our detailers are skilled professionals with years of experience in car care.',
  },
  {
    title: 'Tailored Packages',
    description: "Detailing options customized to your car's condition and your preferences.",
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees – quality service that fits your budget.',
  },
  {
    title: 'Aftercare Support',
    description: 'We provide post-service tips and care advice to keep your car looking sharp.',
  },
]

const faqItems = [
  {
    question: 'What is car detailing?',
    answer: 'Yes, we recommend that you back up all your data before bringing in your device for repair. While we take utmost care, we cannot guarantee the safety of your data during the repair process.',
  },
  {
    question: 'How often should I get my car detailed?',
    answer: "We recommend getting your car detailed every 3-6 months depending on your driving habits and environmental conditions. Regular detailing helps maintain your car's finish and protects it from damage.",
  },
  {
    question: "What's included in a full detailing service?",
    answer: "Our full detailing service includes exterior wash, wax, interior deep cleaning, vacuum, leather conditioning, window cleaning, and paint protection. Each service is tailored to your car's specific needs.",
  },
  {
    question: 'Will detailing remove scratches and stains?',
    answer: 'Light scratches and swirl marks can often be improved with our paint correction service. Deep scratches may require professional repair. Stains can typically be removed with our interior detailing service.',
  },
  {
    question: 'How long does a detailing session take?',
    answer: "A typical detailing session takes between 4-8 hours depending on the service level and your vehicle's condition. Express detailing can be completed in 2-3 hours.",
  },
]

export default function WhyChooseUsFAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="relative">
      <section className="bg-[#121212] text-white py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-6 md:mb-8 lg:mb-10 text-center">
            <div className="inline-block text-[11px] tracking-[0.4em] text-white uppercase mb-3 font-manrope">
              <span className="relative">
                TRUSTED
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
              </span>
              <span className="relative">
                & AFFORDABLE
                <span className="absolute -top-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
              </span>
            </div>
          </div>

          <div className="max-w-3xl lg:max-w-4xl mb-4 text-center mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-4">
              Why Choose Our Car Detailing?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-manrope">
              From deep interior cleaning to long-lasting ceramic coating, we restore and protect your vehicle with precision, care, and a commitment to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {whyChooseUsItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5 sm:p-6 md:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.4)] min-h-[180px] md:min-h-[190px] lg:min-h-[200px]"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-3 font-manrope">
                  {item.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[26px] md:leading-[28px] tracking-normal font-normal font-manrope text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed background window between sections */}
      <div className="relative h-[240px] sm:h-[300px] md:h-[380px] lg:h-[460px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/why-choose-us.webp')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b]" />
      </div>

      <section className="bg-[#0b0b0b] text-white py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[480px_1fr] gap-8 md:gap-10 lg:gap-16 items-start">
            <div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div>
              <div className="space-y-3 md:space-y-4 max-h-[280px] sm:max-h-[300px] md:max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg overflow-hidden bg-[#0b0b0b]/40 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 sm:py-5 flex items-center justify-between bg-transparent hover:bg-white/5 transition-colors text-left"
                    >
                      <span className="text-base sm:text-lg font-manrope font-medium text-white/90">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform text-white/70 ${
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
                      <div className="px-6 py-4 sm:py-5 bg-[#1a1a1a]/40 border-t border-white/5">
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
    </div>
  )
}
