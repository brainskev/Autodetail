import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import LogoSlider from '@/components/LogoSlider'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/Testimonials'
import WhyChooseUsFAQSection from '@/components/WhyChooseUsFAQSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <LogoSlider />
            <AboutUs />
            <Testimonials />
            <WhyChooseUsFAQSection />
            <Footer />
            <WhatsAppButton />
        </main>
    )
}
