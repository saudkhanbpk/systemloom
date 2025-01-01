import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import GreenEnergyProject from '@/components/Industorycategory/industoryRelatedProject'
import greenEnergyImage from "../../../public/assets/portfolioImages/greenenergy.png";

import React from 'react'
import Image from 'next/image';

const GreenEnergy = () => {
  const industrySlug = "green-energy";

  return (
    <div>
      {/* Hero section */}
            <div className="relative bg-gray-900 text-white h-[500px] md:min-h-screen">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={greenEnergyImage}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="opacity-25"
                />
              </div>
              <div className="relative md:max-w-[1440px] w-full mx-auto md:pt-0 pt-24 md:pb-0 pb-10 px-2 sm:px-6 md:px-8 h-full flex items-center">
                <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-5 md:mx-auto">
                  <h1 className="font-semibold text-[22px] sm:text-[48px] md:text-[48px] font-poppins leading-[1.2] mb-0">
                    Green Energy Software Solutions for Sustainable Future
                  </h1>
                  <p className="md:text-xl">
                    With a mission to help usher in the future of innovation in renewable energy, TechCreator Software Company also creates custom software solutions for sustainability and efficiency.
                  </p>
                </div>
              </div>
            </div>

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
    canonical: "https://www.techcreator.co/green-energy",
  },
};
