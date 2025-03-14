import { Button } from "@/components/ui/button"
import PricingPlans from "./components/ui/components/PricingPlans"
import WhoAreWe from "./components/ui/components/WhoAreWe"
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./components/ui/components/ContactForm";
import WhyChooseUs from "./components/ui/components/WhyChooseUs";
import CTA from "./components/ui/components/CTA";
import Hero from "./components/ui/components/Hero";
import AppBadges from "./components/ui/components/AppBadges";

function App() {
  return (
    <Router>
      <Hero />  
      <AppBadges />
      <WhoAreWe />
      <WhyChooseUs />
      <PricingPlans />
      <ContactForm />
      < CTA />
      </Router>
  )
}

export default App
