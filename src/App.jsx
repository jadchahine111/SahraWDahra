import { Button } from "@/components/ui/button"
import PricingPlans from "./components/ui/components/PricingPlans"
import WhoAreWe from "./components/ui/components/WhoAreWe"
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./components/ui/components/ContactForm";
import WhyChooseUs from "./components/ui/components/WhyChooseUs";
import CTA from "./components/ui/components/CTA";
import Hero from "./components/ui/components/Hero";
import AppBadges from "./components/ui/components/AppBadges";
import Footer from "./components/ui/components/Footer";

function App() {
  return (
    <Router>
        <Hero />  
          <AppBadges />
        <section id="about">
        <WhoAreWe />
        </section>
        <section id="why-choose-us">
        <WhyChooseUs />
        </section>
        <section id="pricing">
        <PricingPlans />
        </section>
        <section id="contact">
        <ContactForm />
        </section>
        < CTA />
        <Footer />
      </Router>
  )
}

export default App
