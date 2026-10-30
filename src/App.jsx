import { useTheme } from './hooks/useTheme.js'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppFloatButton from './components/layout/WhatsAppFloatButton.jsx'
import Hero from './components/sections/Hero.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import ProductsSection from './components/sections/ProductsSection.jsx'
import QualitySection from './components/sections/QualitySection.jsx'
import ProcessSection from './components/sections/ProcessSection.jsx'
import EventsSection from './components/sections/EventsSection.jsx'
import ClientsSection from './components/sections/ClientsSection.jsx'
import QuoteSection from './components/sections/QuoteSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <ProcessSection />
        <EventsSection />
        <ClientsSection />
        <QuoteSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
