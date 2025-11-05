import React from 'react'
import Hero from '../Hero'                 // Landing Page
import Feature from '../Feature/Feature'   // Our Services/Features
import Stats from '../Stats'               // Stats
import Feedback from '../Feedback'         // Testimonials/Feedback
import Pricing from '../Pricing/Pricing'   // Pricing Plans
import Faq from '../Faq'                   // FAQs
import Interest from '../EndSection/Interest' // Final CTA

const Homepage = () => {
  return (
    <div>
      {/* 1. Hero Section - Landing Page */}
      <Hero />
      
      {/* 2. Features/Services */}
      <Feature />
      
      {/* 3. Stats/Results */}
      <Stats />
      
      {/* 4. Testimonials/Feedback */}
      <Feedback />
      
      {/* 5. Pricing Plans */}
      <Pricing />
      
      {/* 6. Frequently Asked Questions */}
      <Faq />
      
      {/* 7. Final Call-to-Action */}
      <Interest />
    </div>
  )
}

export default Homepage
