"use client";

import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import webImage from '../../../../public/assets/webImages/fullStack_web_image.svg';
import FeatureSection from '@/components/services/FeatureSection';
import FeaturesList from '@/components/services/FeaturesList';
import DiagonalFeatureSection from '@/components/services/DiagonalFeatureSection';
import FramedFeatureSection from '@/components/services/FramedFeatureSection';
import RecentWorks from '@/components/services/RecentWorks';
import RelatedServices from '@/components/services/RelatedServices';
import Layout from '@/newLayout';

const ServicesDetail: React.FC = () => {
  return (
    <div>
      <ServicesHeroSection
        title="Full stack web development services"
        description="At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects that bring concepts to life and turn ideas into digital realities. Join us in the journey of transforming your vision into cutting-edge technology."
        image={webImage}
        image2={webImage}
      />

      <FeatureSection heading="Heading" description="It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and " image="/assets/fullStackDevelopment/img1.png" />
      <FeaturesList  />
      <DiagonalFeatureSection/>
      <FramedFeatureSection/>
      <RecentWorks/>
      <RelatedServices/>
    </div>
  );
};

export default ServicesDetail;