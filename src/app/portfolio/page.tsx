"use client"

import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import Companies, { CTASection } from "@/components/landingPage/Companies"
import ServicesSection from "@/components/landingPage/ServicesSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurProjectsGrid from "@/components/portfolio/OurProjectsGrid"
import PortfolioSection from "@/components/portfolio/PortfolioSection"
import StatsDisplay from "@/components/portfolio/StatsDisplay"
import useGetAllProjects from "@/hooks/useGetAllProjects"

const Portfolio = () => {
  useGetAllProjects()
  return (
    <div>
      <>
      <HeroSection/>
      <PortfolioSection/>
      <ServicesSection/>
      {/* <StatsDisplay/> */}
      {/* <Companies/> */}
      {/* <CTASection/> */}
      <OurProjectsGrid/>
      <ClientTestimonialsSection/>
      </>
    </div>
  )
}

export default Portfolio