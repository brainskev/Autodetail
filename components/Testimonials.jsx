'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'John Smith',
    date: '22 Dec 2024',
    rating: 5,
    text: 'Interior deep clean was amazing! All the stains and pet hair are gone. The car smells so fresh now. Highly recommended.',
  },
  {
    name: 'Jessica Lee',
    date: '22 Dec 2024',
    rating: 4,
    text: 'My car looked brand new after their full detail service. Every inch was spotless! Great attention to detail and friendly staff.',
  },
  {
    name: 'Michael Brown',
    date: '18 Dec 2024',
    rating: 5,
    text: 'Excellent service from start to finish. The paint correction brought my car back to life. Will definitely return.',
  },
  {
    name: 'Amina Yusuf',
    date: '10 Dec 2024',
    rating: 5,
    text: 'Super professional team and top-notch results. The interior detailing was spotless and the scent is amazing.',
  },
  {
    name: 'Carlos Mendes',
    date: '06 Dec 2024',
    rating: 4,
    text: 'Great value and quick turnaround. My wheels and tires look brand new. Highly impressed overall.',
  },
]

export default function Testimonials() {
  const scrollerRef = useRef(null)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [activePage, setActivePage] = useState(0)

  const totalPages = useMemo(
    () => Math.ceil(testimonials.length / cardsPerView),
    [cardsPerView]
  )

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 2 : 1)
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const handleScroll = () => {
      const card = scroller.querySelector('[data-card="true"]')
      if (!card) return
      const styles = window.getComputedStyle(scroller)
      const gap = parseFloat(styles.columnGap || styles.gap || '0')
      const cardWidth = card.getBoundingClientRect().width
      const step = cardWidth + gap
      const page = Math.round(scroller.scrollLeft / step)
      setActivePage(Math.max(0, Math.min(page, totalPages - 1)))
    }

    scroller.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => scroller.removeEventListener('scroll', handleScroll)
  }, [totalPages])

  const scrollToPage = (pageIndex) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector('[data-card="true"]')
    if (!card) return
    const styles = window.getComputedStyle(scroller)
    const gap = parseFloat(styles.columnGap || styles.gap || '0')
    const cardWidth = card.getBoundingClientRect().width
    const step = cardWidth + gap
    scroller.scrollTo({ left: step * pageIndex, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#121212] text-white py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center text-center">
          <div className="lg:col-span-1 w-full">
            <div className="mb-4">
              <div className="inline-block text-[11px] tracking-[0.4em] text-white uppercase">
                <span className="relative">
                  TESTIM
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
                </span>
                <span className="relative">
                  ONIALS
                  <span className="absolute -top-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-medium leading-tight">
              What They Says
            </h2>
          </div>

          <div className="lg:col-span-2 w-full">
            <div
              ref={scrollerRef}
              className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[100%] md:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(50%-16px)] gap-6 md:gap-8 w-full overflow-x-auto snap-x snap-mandatory pb-2"
            >
              {testimonials.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  data-card="true"
                  className="bg-[#2a2a2a] border border-white/5 rounded-2xl p-7 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.4)] min-h-[240px] sm:min-h-[260px] w-full snap-start"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    <img
                      src="/google-icon.svg"
                      alt="Google"
                      className="h-7 w-7"
                    />
                  </div>

                  <div className="flex items-center gap-1 text-[#F4B400] text-sm mb-3 font-bold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className={starIndex < item.rating ? '' : 'text-white/20'}>
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-gray-400 ml-2">{item.rating}</span>
                  </div>

                  <p className="text-[14px] leading-[28px] tracking-normal font-normal font-manrope text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, dotIndex) => (
                <button
                  key={`dot-${dotIndex}`}
                  type="button"
                  aria-label={`Go to testimonials page ${dotIndex + 1}`}
                  onClick={() => scrollToPage(dotIndex)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    dotIndex === activePage ? 'bg-[#ED1C24]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-[#ED1C24]">
        <div className="container mx-auto px-4 lg:px-8 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Want your car to shine like new again?
          </h3>
          <button className="border border-white/50 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-white/10 transition-colors">
            Make Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
