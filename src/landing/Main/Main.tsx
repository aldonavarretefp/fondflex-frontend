import React from 'react'
import { HeroSection } from './components/HeroSection'
import { OurMissionSection } from './components/OurMissionSection'
import HighlightsSection from './components/HighlightsSection'
import ValidationSection from './components/ValidationSection'
import QuestionsSection from './components/QuestionsSection'
import Footer from './components/Footer'

const Main = () => {
  return (
    <>
        {/* Sections */}
      <HeroSection />
      <OurMissionSection />
      <HighlightsSection />
      <ValidationSection />
      <QuestionsSection />
      <Footer/>
    </>
  )
}

export default Main