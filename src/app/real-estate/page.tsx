import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import realstateImage from "../../../public/assets/portfoliopage/realstate.webp";
import Image from 'next/image';
import React from 'react'

const RealEstate = () => {
  const industrySlug = "real-estate";

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-gray-900 text-white h-[500px] md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={realstateImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-25"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative md:max-w-[1440px] w-full mx-auto md:pt-0 pt-24 md:pb-0 pb-10 px-2 sm:px-6 md:px-8 h-full flex items-center">
          <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-5 md:mx-auto">
            <h1 className="font-semibold text-[22px] sm:text-[48px] md:text-[48px] font-poppins leading-[1.2] mb-0">
            Real Estate Web and App development company
            </h1>
            <p className="md:text-xl">
            At TechCreator, we go beyond app creation by offering comprehensive maintenance services to keep your app updated and running smoothly. From resolving bugs to implementing version updates, our experts ensure your app stays reliable and efficient.
 <br/><br/>
Our mobile apps come packed with features like price insights, location details, property age, and more—delivering the tools your audience needs to make informed decisions.

            </p>
          </div>
        </div>
      </div>

      <IndustryRelatedProjects slug={industrySlug} />
    </div>
  )
}

export default RealEstate


export const metadata = {
  title: "Effortless Real Estate Management with TechCreator’s Android App Solutions",
  description:
    " Mobile apps dominate the real estate market, with 83% of house hunters using them during their search. Take advantage of this trend with a powerful real estate app that helps you manage property listings, track transactions, and enable seamless communication between buyers, sellers, and agents.",
  alternates: {
    canonical: "https://www.techcreator.co/real-estate",
  },
};