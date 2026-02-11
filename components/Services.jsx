import Image from 'next/image'

const services = [
  {
    number: '01',
    title: 'Exterior Hand Wash & Wax',
    image: '/our-services/exterior.webp',
  },
  {
    number: '02',
    title: 'Interior Deep Cleaning',
    image: '/our-services/interior.webp',
  },
  {
    number: '03',
    title: 'Paint Correction',
    image: '/our-services/paint.webp',
  },
  {
    number: '04',
    title: 'Ceramic Coating Protection',
    image: '/our-services/ceramic.webp',
  },
  {
    number: '05',
    title: 'Engine Bay Detailing',
    image: '/our-services/enigine.webp',
  },
  {
    number: '06',
    title: 'Headlight Restoration',
    image: '/our-services/Headlight.webp',
  },
]

export default function Services() {
  return (
    <section className="bg-[#121212] text-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-4 flex justify-center">
            <div className="inline-block text-[11px] tracking-[0.4em] text-white uppercase">
              <span className="relative">
                WELCOME TO  
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
              </span>
              <span className="relative">
                &nbsp;AUTODETAIL
                <span className="absolute -top-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
              </span>
            </div>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-medium uppercase">
            Premium Car Detailing
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed font-manrope">
            From deep interior cleaning to long-lasting ceramic coating, we restore and protect your
            vehicle with precision, care, and a commitment to perfection.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative overflow-hidden rounded-2xl bg-black/40 border border-white/5"
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  priority={service.number === '01'}
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-7 lg:p-8 min-h-[160px] sm:min-h-[180px] md:min-h-[170px] lg:min-h-[200px] flex items-center">
                <div className="flex items-center gap-5 md:gap-6">
                  <span className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white/90">
                    {service.number}
                  </span>
                  <span className="text-sm md:text-[15px] lg:text-base font-manrope font-semibold tracking-wide">
                    {service.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
