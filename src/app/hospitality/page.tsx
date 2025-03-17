import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import HospitalityImage from "../../../public/assets/portfoliopage/hospitality.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

const Hospitality = () => {
  const industrySlug = "hospitality";

  return (
    <>
      {/* Hero section */}
      <HeroSection
      backgroundImage={HospitalityImage}
      title="Hospitality Website and App Development Service"
      description={
        <>
         In today’s competitive hospitality and travel industry, having a top-notch mobile app and website is essential for attracting the right audience. With businesses striving to gain clients both offline and online, maintaining a strong digital presence is no longer optional—it’s crucial.<br/><br/>
         We specialize in creating top-performing mobile apps tailored to your needs, from customer engagement and online booking to reservation management. Our approach goes beyond just building apps; we focus on fostering trust and long-term relationships. Creating, developing, customizing, and optimizing your website ensures your business stands out and thrives online.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />

      <IndustryRelatedProjects slug={industrySlug} />
    </>
  )
}

export default Hospitality

export const metadata = {
  title: "Hospitality Website and App Development Service - TechCreator",
  description:
    "Engage customers, automate bookings, and build lasting success with Hospitality App Development Service. It will make your business stand out in the digital world.In today’s competitive hospitality and travel industry, having a top-notch mobile app and website is essential for attracting the right audience. With businesses striving to gain clients both offline and online, maintaining a strong digital presence is no longer optional—it’s crucial.",
  alternates: {
    canonical: "https://www.techcreator.co/hospitality",
  },
};
