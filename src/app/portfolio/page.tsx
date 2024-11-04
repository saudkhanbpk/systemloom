"use client"

import Companies from "@/components/landingPage/Companies"
import ServicesSection from "@/components/landingPage/ServicesSection"
import ClientTestimonialsSection from "@/components/landingPage/TestimonialCard"
import HeroSection from "@/components/portfolio/HeroSection"
import OurProjectsGrid from "@/components/portfolio/OurProjectsGrid"
import StatsDisplay from "@/components/portfolio/StatsDisplay"

const Portfolio = () => {
  return (
    <div>
      <>
      <HeroSection/>
      <ServicesSection/>
      <StatsDisplay/>
      <Companies/>
      <OurProjectsGrid/>
      <ClientTestimonialsSection/>
      </>
    </div>
  )
}

export default Portfolio