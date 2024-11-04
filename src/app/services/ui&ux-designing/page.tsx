"use client"

import HeroSection from '@/components/services/ui&ux-designing/HeroSection'
import React from 'react'
import webImage from "../../../../public/assets/ui&ux-designing/heroSection.png";
import FeatureSection from '@/components/services/FeatureSection';
import image1 from "../../../../public/assets/ui&ux-designing/image1.png"
import FeaturesList from '@/components/services/FeaturesList';
import DiagonalFeatureSection from '@/components/services/DiagonalFeatureSection';
import FramedFeatureSection from '@/components/services/FramedFeatureSection';
import RecentWorks from '@/components/services/RecentWorks';
import RelatedServices from '@/components/services/RelatedServices';


const page = () => {
  return (
    <div>
        <HeroSection title="Full stack web development services"
        description="At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects that bring concepts to life and turn ideas into digital realities. Join us in the journey of transforming your vision into cutting-edge technology."
        image={webImage}/>

      <FeatureSection heading="Full stack web development services"
      description='At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects that bring concepts to life and turn ideas into digital realities. Join us in the journey of transforming your vision into cutting-edge technology.'
      image="/assets/ui&ux-designing/image1.png"
       />


<FeaturesList  />
      <DiagonalFeatureSection/>
      <FramedFeatureSection/>
      <RecentWorks/>
      <RelatedServices/>

    </div>
  )
}

export default page