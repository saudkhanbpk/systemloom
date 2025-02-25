
import ClientReviews from "@/components/landingPage/ClientReviews"
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurImpresiveProject from "@/components/portfolio/OurImpresiveProject"
import PortfolioSection from "@/components/portfolio/PortfolioSection"

const Portfolio = () => {
  return (
    <>
      <HeroSection/>

    <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
    {/* <PortfolioSection/> */}
      <OurImpresiveProject/>
      <div className=" bg-purple-600 md:mt-16 mt-9 md:mb-16 mb-9 ">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
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