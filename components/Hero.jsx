import Image from 'next/image'
import CalendlyTrigger from './CalendlyTrigger'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobackground.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-[600px] lg:min-h-screen flex flex-col justify-center pb-12 pt-28 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8\">
            {/* Main Heading */}
            <h1 className="text-white font-heading font-medium text-[32px] leading-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up uppercase tracking-wide">
              Where Every Detail<br />Truly Matters
            </h1>

            {/* Description */}
            <p className="font-manrope text-gray-300 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in">
              AutoDetail offers efficient, reliable detailing that restores shine and preserves your vehicle.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center animate-slide-up pt-2">
              <CalendlyTrigger className="bg-[#ED1C24] hover:bg-[#d91920] text-white px-8 py-3 text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 rounded-md">
                Make Appointment
              </CalendlyTrigger>
            </div>
          </div>

          {/* Car Image */}
          <div className="relative w-full max-w-6xl mx-auto mt-8 lg:mt-12 h-[200px] sm:h-[300px] lg:h-[400px]\">
            <Image
              src="/herocar.webp"
              alt="Luxury Car"
              fill
              className="object-contain object-bottom"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
