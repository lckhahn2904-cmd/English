import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BenefitsSection from '../components/BenefitsSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
