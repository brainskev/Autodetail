import Image from 'next/image'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor">
        <path d="M8 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2h4V6zm2 0v2h4V6h-4z" />
        <path d="M2 12h8v2H2v-2zm12 0h8v2h-8v-2zm-2 4h2a2 2 0 0 0 2-2v-1H8v1a2 2 0 0 0 2 2h2z" />
      </svg>
    ),
    number: '65250+',
    label: 'Hours of Works',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor">
        <path d="M2 10h4v10H2V10zm6 0h6.6l.9-4.2a2 2 0 0 1 2-1.6h.5a2 2 0 0 1 2 2v3.8h2a2 2 0 0 1 2 2v1.2a8 8 0 0 1-6.1 7.8l-4.9 1H8V10z" />
      </svg>
    ),
    number: '23160+',
    label: 'Happy Customers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor">
        <path d="M16 11a4 4 0 1 0-3.999-4A4 4 0 0 0 16 11zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm8 2c-3.314 0-6 1.79-6 4v3h12v-3c0-2.21-2.686-4-6-4zM8 13c-3.314 0-6 1.79-6 4v3h6v-3c0-1.058.31-2.045.86-2.88A6.97 6.97 0 0 0 8 13z" />
      </svg>
    ),
    number: '1500+',
    label: 'Experienced Workers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor">
        <path d="M12 2 4 5v6c0 5.25 3.5 9.6 8 10 4.5-.4 8-4.75 8-10V5l-8-3zm0 4.2 4.2 1.6v3.7c0 3.4-1.9 6.4-4.2 7.1-2.3-.7-4.2-3.7-4.2-7.1V7.8L12 6.2z" />
        <path d="M12 8.9 13 11h2.2l-1.8 1.3.7 2.1-2.1-1.3-2.1 1.3.7-2.1L8.8 11H11l1-2.1z" />
      </svg>
    ),
    number: '20+',
    label: 'Years of Experience',
  },
]

export default function AboutUs() {
  return (
    <section className="bg-[#2a2a2a] text-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 items-center">
          {/* Left side - Images */}
          <div className="flex gap-4 md:gap-5 lg:gap-6">
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-lg sm:rounded-2xl h-64 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src="/about-us/p1-759x1024.webp"
                  alt="Car detailing service"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 100vw"
                />
              </div>
            </div>
            <div className="flex-1 sm:translate-y-4 md:translate-y-5 lg:translate-y-6">
              <div className="relative overflow-hidden rounded-lg sm:rounded-2xl h-64 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src="/about-us/p2-759x1024.webp"
                  alt="Car detailing service"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-4">
              <div className="inline-block text-[11px] tracking-[0.4em] text-white uppercase">
                <span className="relative">
                  ABOU
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
                </span>
                <span className="relative">
                  T US
                  <span className="absolute -top-2 left-0 h-0.5 w-full bg-[#ED1C24]"></span>
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl font-heading font-medium mb-5 md:mb-6 leading-tight">
              Restoring Lasting Shine, Inside and Out
            </h2>

            <p className="text-gray-400 text-sm md:text-[15px] lg:text-base leading-relaxed mb-6 md:mb-8">
              At AutoDetail, we're passionate about making every vehicle look its absolute best – inside and out. From restoring showroom-level gloss to deep-cleaning interiors, our expert team delivers flawless results with care and precision.
            </p>

            <button className="bg-[#ED1C24] hover:bg-[#c71620] text-white font-semibold px-6 md:px-7 lg:px-8 py-2.5 md:py-3 rounded text-sm transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-14 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#ED1C24] mb-3 md:mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-2 font-oxanium">
                {stat.number}
              </div>
              <p className="text-gray-400 text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
