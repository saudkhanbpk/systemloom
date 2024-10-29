"use client"
import AboutHeroSection from '@/components/about/AboutHeroSection'
import ExpertTeam from '@/components/about/ExpertTeam'
import Overview from '@/components/about/Overview'
import OverviewSec from '@/components/about/Overview-sec'
import ProjectsCount from '@/components/landingPage/ProjectsCount'
import ServicesSection from '@/components/landingPage/ServicesSection'
import Layout from '@/newLayout'
import React from 'react'

const About = () => {
  return (
    <div>
      <Layout>
      <AboutHeroSection/>
      <Overview/>
      <ServicesSection/>
      <ProjectsCount/>
      <OverviewSec/>
      <ExpertTeam/>
      </Layout>
    </div>
  )
}

export default About