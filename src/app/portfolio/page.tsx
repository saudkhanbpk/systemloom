"use client"

import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import ServicesSection from "@/components/landingPage/ServicesSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurImpresiveProject from "@/components/portfolio/OurImpresiveProject"
import PortfolioSection from "@/components/portfolio/PortfolioSection"
import Head from "next/head"

const Portfolio = () => {
  return (
    <>
       <Head>
       <title>Our Portfolio | Explore TechCreator’s Success Stories</title>
        <meta
          name="description"
          content="Discover TechCreator’s portfolio showcasing web development, app creation, UI/UX design, and digital marketing projects. Explore our innovative and impactful solutions today."
        />

        <link rel="canonical" href="https://www.techcreator.co/portfolio" />
      </Head>
      <>
      <HeroSection/>
      <PortfolioSection/>
      {/* <ServicesSection/> */}
      <OurImpresiveProject/>
      <ClientTestimonialsSection/>
      </>
    </>
  )
}

export default Portfolio