import Image from 'next/image'
import CalendlyTrigger from './CalendlyTrigger'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-screen lg:max-h-screen overflow-hidden">
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
      <div className="relative z-20 min-h-[600px] md:min-h-[700px] lg:h-screen lg:max-h-screen flex flex-col justify-center pb-12 pt-40 md:pt-32 lg:pt-24 lg:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center space-y-4 md:space-y-5 lg:space-y-5 xl:space-y-6">
            {/* Main Heading */}
            <h1 className="text-white font-heading font-medium text-[32px] leading-tight sm:text-5xl md:text-[3.5rem] lg:text-[3.25rem] xl:text-6xl 2xl:text-7xl animate-slide-up uppercase tracking-wide">
              Where Every Detail<br />Truly Matters
            </h1>

            {/* Description */}
            <p className="font-manrope text-gray-300 text-base md:text-lg lg:text-base xl:text-lg max-w-xl md:max-w-2xl lg:max-w-xl xl:max-w-2xl mx-auto animate-fade-in">
              AutoDetail offers efficient, reliable detailing that restores shine <br className="hidden md:inline" /> and preserves your vehicle.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center animate-slide-up pt-1 lg:pt-2">
              <CalendlyTrigger className="bg-[#ED1C24] hover:bg-[#d91920] text-white px-6 md:px-8 lg:px-6 xl:px-8 py-2.5 lg:py-2.5 xl:py-3 text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 rounded-md">
                Make Appointment
              </CalendlyTrigger>
            </div>
          </div>

          {/* Car Image */}
          <div className="relative w-full max-w-4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mt-2 md:mt-6 lg:mt-6 xl:mt-8 h-[250px] sm:h-[300px] md:h-[320px] lg:h-[280px] xl:h-[340px] 2xl:h-[400px]">
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
      <div className="absolute bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center gap-1.5 lg:gap-2 text-white">
          <span className="text-[10px] lg:text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
