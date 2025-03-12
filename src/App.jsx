import { Button } from "@/components/ui/button"
import PricingPlans from "./components/ui/components/PricingPlans"
import WhoAreWe from "./components/ui/components/WhoAreWe"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <WhoAreWe />
      <PricingPlans />
      </Router>
  )
}

export default App
