"use client";

import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import Header from '@/components/shared/Header';
import React from 'react';
import Image from 'next/image';
import webImage from '../../../../public/assets/webImages/fullStack_web_image.svg';
import FeatureSection from '@/components/services/FeatureSection';
import FeaturesList from '@/components/services/FeaturesList';
import DiagonalFeatureSection from '@/components/services/DiagonalFeatureSection';
import FramedFeatureSection from '@/components/services/FramedFeatureSection';
import RecentWorks from '@/components/services/RecentWorks';
import RelatedServices from '@/components/services/RelatedServices';
import Footer from '@/components/shared/Footer';
import Layout from '@/newLayout';

const ServicesDetail: React.FC = () => {
  return (
    <div>
      <Layout>
      <ServicesHeroSection
        title="Full stack web development services"
        description="At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects that bring concepts to life and turn ideas into digital realities. Join us in the journey of transforming your vision into cutting-edge technology."
        image={webImage}
        image2={webImage}
      />

      <FeatureSection/>
      <FeaturesList/>
      <DiagonalFeatureSection/>
      <FramedFeatureSection/>
      <RecentWorks/>
      <RelatedServices/>
      </Layout>
    </div>
  );
};

export default ServicesDetail;
