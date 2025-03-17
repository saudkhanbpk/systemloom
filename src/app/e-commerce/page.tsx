import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import ecommerceImage from "../../../public/assets/portfoliopage/eccommerce.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

const Ecommerce = () => {
  const industrySlug = "e-commerce";

  return (
    <>
       {/* Hero section */}
       <HeroSection
      backgroundImage={ecommerceImage}
      title="E-Commerce Website and Mobile App Development Services"
      description={
        <>
          E-commerce is booming right now, and at the heart of this growth are apps for online shopping. We are here to help you take full advantage of this trend by aligning your mobile and web solutions in both functionality and design. If you don't yet have a web solution, we're ready to develop one for you. Digitize your business today and experience up to 10X conversions with our expert E-commerce application development services.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />

      <IndustryRelatedProjects slug={industrySlug} />
    </>
  )
}

export default Ecommerce


export const metadata = {
  title: " Get the Epic E-Commerce Website and Mobile App Development Services",
  description:
    " Improve your sales and conversion rate with the best e-commerce mobile app development services. Get your buyer persona on one hand and boost sales on the other.",
  alternates: {
    canonical: "https://www.techcreator.co/e-commerce",
  },
};