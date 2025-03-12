import { Button } from "@/components/ui/button"
import PricingPlans from "./components/ui/components/PricingPlans"
import WhoAreWe from "./components/ui/components/WhoAreWe"
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./components/ui/components/ContactForm";

function App() {
  return (
    <Router>
      <WhoAreWe />
      <PricingPlans />
      <ContactForm />
      </Router>
  )
}

export default App
