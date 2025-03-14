import { Button } from "@/components/ui/button"
import PricingPlans from "./components/ui/components/PricingPlans"
import WhoAreWe from "./components/ui/components/WhoAreWe"
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./components/ui/components/ContactForm";
import WhyChooseUs from "./components/ui/components/WhyChooseUs";
import CTA from "./components/ui/components/CTA";

function App() {
  return (
    <Router>
      <WhoAreWe />
      <WhyChooseUs />
      <PricingPlans />
      <ContactForm />
      < CTA />
      </Router>
  )
}

export default App
