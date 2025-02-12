import CareerHeroSection from '@/components/Career/CareerHeroSection'
import CoreValues from '@/components/Career/CoreValues'
import DiversitySection from '@/components/Career/DiversitySection'
import JobsCard from '@/components/Career/JobsCard'
import React from 'react'

const Career = () => {
  return (
    <>
      <CareerHeroSection/>

    <div className='max-w-[1450px] mx-auto px-4 md:mt-16'>
      <CoreValues/>
      <JobsCard />
      <DiversitySection/>
      </div>
    </>
  )
}

export default Career


export const metadata = {
  title: "Join Our Team | Exciting Career Opportunities at TechCreator",
  description:
    "Explore rewarding career opportunities at TechCreator. Join a dynamic team of innovators driving excellence in web development, app development, and digital marketing. Discover your next career move with us today",
  alternates: {
    canonical: "https://www.techcreator.co/career",
  },
};