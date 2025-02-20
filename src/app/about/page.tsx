import AboutHeroSection from "@/components/about/AboutHeroSection";
import ExpertTeam from "@/components/about/ExpertTeam";
import OurTeam from "@/components/about/OurTeam";
import Overview from "@/components/about/Overview";
import OverviewSec from "@/components/about/Overview-sec";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import React from "react";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        <Overview />
        <div className="md:mt-16 mt-9">
          <ServicesSection />
        </div>
        <ProjectsCount />
        <OverviewSec />
        <ExpertTeam />
      </div>
    </>
  );
};

export default About;

export const metadata = {
  title: "TechCreator - A Software Company",
  description:
    "TechCreator is a software company offering expert services in web development, app development, DevOps, Graphic Designing, Project Management, and more.",
  alternates: {
    canonical: "https://www.techcreator.co/about",
  },
};
