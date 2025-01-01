import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import GreenEnergyProject from '@/components/Industorycategory/industoryRelatedProject'
import React from 'react'

const GreenEnergy = () => {
  const industrySlug = "green-energy";
  return (
    <div>
      <IndustryRelatedProjects slug={industrySlug} />
    </div>
  )
}

export default GreenEnergy

export const metadata = {
  title: "Sustainable Software Solutions for Green Energy | Tech Creator",
  description:
    "Efficient green gadgets and software solutions. Manage renewable energy operations, monitor, and analyze to reduce carbon footprints.",
  alternates: {
    canonical: "https://www.techcreator.co/green-energy-projects",
  },
};
