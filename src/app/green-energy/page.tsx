import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import greenEnergyImage from "../../../public/assets/portfoliopage/greenenergy.webp";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const GreenEnergy = () => {
  const industrySlug = "green-energy";

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-black text-white h-auto md:min-h-screen xl:h-0">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={greenEnergyImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className=" opacity-20"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative md:max-w-[1440px] w-full mx-auto pt-32  md:pb-0 pb-10 px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center">
          <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-6 md:mx-auto">
            <h1 style={{lineHeight:1.2}} className="font-semibold text-3xl sm:text-4xl md:text-5xl ">
            Green Energy Software Solutions for Sustainable Future
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6">
            With a mission to help usher in the future of innovation in renewable energy, TechCreator Software Company also creates custom software solutions for sustainability and efficiency.
            </p>
            {/* CTA Button (Optional) */}
            <Link
              href="/contact"
              className="px-6 py-3 w-fit mx-auto bg-[#9A00FF] text-white rounded-md text-lg font-medium transition-all duration-300 hover:bg-[#6f00b5] focus:outline-none mb-4"
            >
              Get Started Today
            </Link>
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
