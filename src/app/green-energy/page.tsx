import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import greenEnergyImage from "../../../public/assets/portfoliopage/greenenergy.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

const GreenEnergy = () => {
  const industrySlug = "green-energy";

  return (
    <>
      {/* Hero section */}
      <HeroSection
      backgroundImage={greenEnergyImage}
      title="Green Energy Software Solutions for Sustainable Future"
      description={
        <>
         With a mission to help usher in the future of innovation in renewable energy, TechCreator Software Company also creates custom software solutions for sustainability and efficiency.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />

      <IndustryRelatedProjects slug={industrySlug} />
    </>
  )
}

export default GreenEnergy

export const metadata = {
  title: "Sustainable Software Solutions for Green Energy | Tech Creator",
  description:
    "Efficient green gadgets and software solutions. Manage renewable energy operations, monitor, and analyze to reduce carbon footprints.",
  alternates: {
    canonical: "https://www.techcreator.co/green-energy",
  },
};
