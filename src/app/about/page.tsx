"use client";
import Head from 'next/head';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import ExpertTeam from '@/components/about/ExpertTeam';
import Overview from '@/components/about/Overview';
import OverviewSec from '@/components/about/Overview-sec';
import ProjectsCount from '@/components/landingPage/ProjectsCount';
import ServicesSection from '@/components/landingPage/ServicesSection';
import React from 'react';

const About = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.techcreator.co/about" />
      </Head>
      <AboutHeroSection/>
      <Overview/>
      <ServicesSection/>
      <ProjectsCount/>
      <OverviewSec/>
      <ExpertTeam/>
    </div>
  );
}

export default About;
