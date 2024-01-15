import React from 'react'
import SimulatorSection from './sections/SimulatorSection'
import RequirementsSection from './sections/RequirementsSection'
import BenefitsSection from './sections/BenefitsSection'
import Footer from '../Main/components/Footer';
import InterestsComparisonSection from './sections/InterestsComparisonSection';


const SimulateCredits = () => {
  return (
    <div>
        {/* Sections */}
      <SimulatorSection />
      <RequirementsSection />
      <BenefitsSection />
      <InterestsComparisonSection />
      <Footer />
    </div>
  )
}

export default SimulateCredits