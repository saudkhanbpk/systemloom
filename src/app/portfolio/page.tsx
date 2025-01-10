
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import ServicesSection from "@/components/landingPage/ServicesSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurImpresiveProject from "@/components/portfolio/OurImpresiveProject"
import PortfolioSection from "@/components/portfolio/PortfolioSection"
import Head from "next/head"

const Portfolio = () => {
  return (
    <>
      <HeroSection/>

    <div className="">
    <PortfolioSection/>
      <OurImpresiveProject/>
      <ClientTestimonialsSection/>
    </div>
     
    </>
  )
}

export default Portfolio


export const metadata = {
  title: "Our Portfolio | Explore TechCreator’s Success Stories",
  description:
    "Discover TechCreator’s portfolio showcasing web development, app creation, UI/UX design, and digital marketing projects. Explore our innovative and impactful solutions today.",
  alternates: {
    canonical: "https://www.techcreator.co/portfolio",
  },
};