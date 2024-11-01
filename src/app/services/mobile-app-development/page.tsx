"use client"
import DiagonalFeatureSection from '@/components/services/DiagonalFeatureSection'
import FeatureSection from '@/components/services/FeatureSection'
import FeaturesList from '@/components/services/FeaturesList'
import FramedFeatureSection from '@/components/services/FramedFeatureSection'
import RecentWorks from '@/components/services/RecentWorks'
import RelatedServices from '@/components/services/RelatedServices'
import Layout from '@/newLayout'
import React from 'react'
import webImage from "../../../../public/assets/ui&ux-designing/heroSection.png";
import ServicesHeroSection from '@/components/services/ServicesHeroSection'


const MobileAppDevelopment = () => {
  return (
    <Layout>
        <ServicesHeroSection title="Mobile app Development"
        description="At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects that bring concepts to life and turn ideas into digital realities. Join us in the journey of transforming your vision into cutting-edge technology."
        image={webImage}/>

      <FeatureSection heading="Mobile app development services"
      description='At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects that bring concepts to life and turn ideas into digital realities. Join us in the journey of transforming your vision into cutting-edge technology.'
      image="/assets/ui&ux-designing/image1.png"
       />


<FeaturesList  />
      <DiagonalFeatureSection/>
      <FramedFeatureSection/>
      <RecentWorks/>
      <RelatedServices/>

      </Layout>
  )
}

export default MobileAppDevelopment