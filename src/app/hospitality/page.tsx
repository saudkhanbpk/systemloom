import HospitalityProject from '@/components/Industorycategory/Hospitility'
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import React from 'react'

const Hospitality = () => {
  const industrySlug = "hospitality";

  return (
    <div>
      <IndustryRelatedProjects slug={industrySlug} />
    </div>
  )
}

export default Hospitality

export const metadata = {
  title: "Hospitality Website and App Development Service - TechCreator",
  description:
    "Engage customers, automate bookings, and build lasting success with Hospitality App Development Service. It will make your business stand out in the digital world.In today’s competitive hospitality and travel industry, having a top-notch mobile app and website is essential for attracting the right audience. With businesses striving to gain clients both offline and online, maintaining a strong digital presence is no longer optional—it’s crucial.",
  alternates: {
    canonical: "https://www.techcreator.co/hospitality-projects",
  },
};
