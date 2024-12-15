import AboutHeroSection from '@/components/about/AboutHeroSection';
import ExpertTeam from '@/components/about/ExpertTeam';
import Overview from '@/components/about/Overview';
import OverviewSec from '@/components/about/Overview-sec';
import ProjectsCount from '@/components/landingPage/ProjectsCount';
import ServicesSection from '@/components/landingPage/ServicesSection';
import React from 'react';

const About = () => {
  return (
    <>
      <AboutHeroSection/>
      <Overview/>
      <ServicesSection/>
      <ProjectsCount/>
      <OverviewSec/>
      <ExpertTeam/>
     
    </>
  );
}

export default About;


export const metadata = {
  title: "TechCreator - A Software Company",
  description:
    "TechCreator is a software company offering expert services in web development, app development, DevOps, Graphic Designing, Project Management, and more.",
  alternates: {
    canonical: "https://www.techcreator.co/about",
  },
};