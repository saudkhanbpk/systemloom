"use client"
import CareerHeroSection from '@/components/Career/CareerHeroSection'
import CoreValues from '@/components/Career/CoreValues'
import DiversitySection from '@/components/Career/DiversitySection'
import JobsCard from '@/components/Career/JobsCard'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import Head from 'next/head'
import React from 'react'

const Career = () => {
  useGetAllJobs()
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.techcreator.co/career" />
      </Head>
      <>
      <CareerHeroSection/>
      <CoreValues/>
      <JobsCard />
      <DiversitySection/>
      </>
    </>
  )
}

export default Career