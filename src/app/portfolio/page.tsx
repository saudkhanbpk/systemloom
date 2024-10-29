"use client"

import Companies from "@/components/landingPage/Companies"
import ServicesSection from "@/components/landingPage/ServicesSection"
import ClientTestimonialsSection from "@/components/landingPage/TestimonialCard"
import HeroSection from "@/components/portfolio/HeroSection"
import OurProjectsGrid from "@/components/portfolio/OurProjectsGrid"
import StatsDisplay from "@/components/portfolio/StatsDisplay"
import Layout from "@/newLayout"

const Portfolio = () => {
  return (
    <div>
      <Layout>
      <HeroSection/>
      <ServicesSection/>
      <StatsDisplay/>
      <Companies/>
      <OurProjectsGrid/>
      <ClientTestimonialsSection/>
      </Layout>
    </div>
  )
}

export default Portfolio