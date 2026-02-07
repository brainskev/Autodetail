const logos = [
  { name: 'Volkswagen', src: '/carbrands/vw.webp' },
  { name: 'Volvo', src: '/carbrands/Volvo.webp' },
  { name: 'Honda', src: '/carbrands/honda.webp' },
  { name: 'Lexus', src: '/carbrands/lexus.webp' },
  { name: 'Mazda', src: '/carbrands/mazda.webp' },
  { name: 'Mercedes', src: '/carbrands/mercedes.webp' },
  { name: 'Mitsubishi', src: '/carbrands/mitsubishi.webp' },
  { name: 'Peugeot', src: '/carbrands/peugeot.webp' },
  { name: 'Renault', src: '/carbrands/renault.webp' },
  { name: 'Suzuki', src: '/carbrands/suzuki.webp' },
]

export default function LogoSlider() {
  return (
    <section className="bg-[#121212] py-10 sm:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-10 sm:gap-14 lg:gap-20 animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-14 sm:max-h-16 lg:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
        </div>
      </div>
    </section>
  )
}
