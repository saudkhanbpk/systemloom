"use client"
import CareerHeroSection from '@/components/Career/CareerHeroSection'
import CoreValues from '@/components/Career/CoreValues'
import DiversitySection from '@/components/Career/DiversitySection'
import JobsCard from '@/components/Career/JobsCard'
import Layout from '@/newLayout'
import React from 'react'

const Career = () => {
  return (
    <div>
      <Layout>
      <CareerHeroSection/>
      <CoreValues/>
      <JobsCard/>
      <DiversitySection/>
      </Layout>
    </div>
  )
}

export default Career