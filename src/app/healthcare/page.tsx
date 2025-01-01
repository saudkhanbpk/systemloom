import HealthcareProject from '@/components/Industorycategory/HealthCare'
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import React from 'react'

const Healthcare = () => {
  const industrySlug = "healthcare";

  return (
    <div>
      <IndustryRelatedProjects slug={industrySlug} />
    </div>
  )
}

export default Healthcare


export const metadata = {
  title: "Custom HealthCare Software Development Services - TechCreator",
  description:
    "Custom software development for healthcare by TechCreator. With modern technologies like React, Angular, and Node.js, we develop innovative, secure, and scalable solutions.",
  alternates: {
    canonical: "https://www.techcreator.co/healthcare-projects",
  },
};