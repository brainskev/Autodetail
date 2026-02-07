import Image from 'next/image'

const whyChooseUsItems = [
  {
    title: 'Expert Technicians',
    description: 'Our detailers are skilled professionals with years of experience in car care.',
  },
  {
    title: 'Tailored Packages',
    description: 'Detailing options customized to your car\'s condition and your preferences.',
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

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#121212] text-white py-20 sm:py-24 lg:py-28 overflow-visible">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-16">
          <div className="inline-block text-[11px] tracking-[0.4em] text-white uppercase mb-4">
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

        <div className="max-w-4xl mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-6">
            Why Choose Our Car Detailing?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            From deep interior cleaning to long-lasting ceramic coating, we restore and protect your vehicle with precision, care, and a commitment to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseUsItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.4)] min-h-[200px]"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[28px] tracking-normal font-normal font-manrope text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
