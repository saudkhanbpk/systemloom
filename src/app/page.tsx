"use client";
import AboutSection from '@/components/landingPage/AboutSection';
import ClientTestimonialsSection from '@/components/landingPage/ClientTestimonialsSection';
import Companies, { CTASection } from '@/components/landingPage/Companies';
import HeroSection from '@/components/landingPage/HeroSection';
import ProjectsCount from '@/components/landingPage/ProjectsCount';
import ServicesSection from '@/components/landingPage/ServicesSection';
import TeamScalingSection from '@/components/landingPage/TeamScalingSection';
import React from 'react';

const Page = () => {
  return (
      <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamScalingSection />
      <ClientTestimonialsSection />
      <ProjectsCount />
      <Companies />
      <CTASection />
      </>
  );
};

export default Page;
