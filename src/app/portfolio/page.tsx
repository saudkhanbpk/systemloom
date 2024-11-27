"use client"

import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import Companies, { CTASection } from "@/components/landingPage/Companies"
import ServicesSection from "@/components/landingPage/ServicesSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurProjects from "@/components/portfolio/OurProjects"
import OurProjectsGrid from "@/components/portfolio/OurProjectsGrid"
import PortfolioSection from "@/components/portfolio/PortfolioSection"
import StatsDisplay from "@/components/portfolio/StatsDisplay"
import useGetAllProjects from "@/hooks/useGetAllProjects"
import Head from "next/head"

const Portfolio = () => {
  useGetAllProjects()
  return (
    <div>
       <Head>
        <link rel="canonical" href="https://www.techcreator.co/portfolio" />
      </Head>
      <>
      <HeroSection/>
      <PortfolioSection/>
      <ServicesSection/>
      {/* <StatsDisplay/> */}
      {/* <Companies/> */}
      {/* <CTASection/> */}
      {/* <OurProjectsGrid/> */}
      <OurProjects/>
      <ClientTestimonialsSection/>
      </>
    </div>
  )
}

export default Portfolio