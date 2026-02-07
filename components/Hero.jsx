import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
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

      {/* Car Image - Positioned at center bottom */}
      <div className="absolute bottom-24 sm:bottom-16 lg:bottom-28 left-1/2 -translate-x-1/2 w-full px-4 max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl h-[28%] sm:h-[36%] md:h-[45%] lg:h-[50%] z-10">
        <div className="relative w-full h-full">
          <Image
            src="/herocar.webp"
            alt="Luxury Car"
            fill
            className="object-contain object-bottom"
            priority
            quality={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 -mt-40 sm:-mt-32 lg:-mt-72">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-white font-heading font-medium text-[32px] leading-[1.2] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] lg:leading-[1.15] mb-4 md:mb-6 animate-slide-up uppercase tracking-wide">
            Where Every Detail<br />Truly Matters
          </h1>

          {/* Description */}
          <p className="font-manrope font-normal text-gray-300 text-[16px] leading-[28px] tracking-normal mb-6 md:mb-10 max-w-2xl mx-auto animate-fade-in">
            AutoDetail offers efficient, reliable detailing that restores shine<br className="hidden md:block" /> and preserves your vehicle.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-slide-up">
            <a
              href="#contact"
              className="inline-block bg-[#ED1C24] hover:bg-[#d91920] text-white px-7 py-3 md:px-8 md:py-3.5 text-[12px] md:text-[13px] font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 rounded-md"
            >
              Make Appointment
            </a>
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
