"use client"

import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import ServicesSection from "@/components/landingPage/ServicesSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurImpresiveProject from "@/components/portfolio/OurImpresiveProject"
import PortfolioSection from "@/components/portfolio/PortfolioSection"
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
      <OurImpresiveProject/>
      <ClientTestimonialsSection/>
      </>
    </div>
  )
}

export default Portfolio