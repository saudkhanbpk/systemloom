"use client"
import CareerHeroSection from '@/components/Career/CareerHeroSection'
import CoreValues from '@/components/Career/CoreValues'
import DiversitySection from '@/components/Career/DiversitySection'
import JobsCard from '@/components/Career/JobsCard'
import React from 'react'

const Career = () => {
  return (
    <div>
      <>
      <CareerHeroSection/>
      <CoreValues/>
      <JobsCard />
      <DiversitySection/>
      </>
    </div>
  )
}

export default Career