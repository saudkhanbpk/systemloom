import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import realstateImage from "../../../public/assets/portfoliopage/realstate.webp";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const RealEstate = () => {
  const industrySlug = "real-estate";

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-black text-white h-auto md:min-h-screen xl:h-0">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={realstateImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-20"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative md:max-w-[1440px] w-full mx-auto pt-32  md:pb-0 pb-10 px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center">
          <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-6 md:mx-auto">
            <h1 style={{lineHeight:1.2}} className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Real Estate Web and App development company
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6">
            At TechCreator, we go beyond app creation by offering comprehensive maintenance services to keep your app updated and running smoothly. From resolving bugs to implementing version updates, our experts ensure your app stays reliable and efficient.
              <br /><br />
              Our mobile apps come packed with features like price insights, location details, property age, and more—delivering the tools your audience needs to make informed decisions.
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

export default RealEstate


export const metadata = {
  title: "Effortless Real Estate Management with TechCreator’s Android App Solutions",
  description:
    " Mobile apps dominate the real estate market, with 83% of house hunters using them during their search. Take advantage of this trend with a powerful real estate app that helps you manage property listings, track transactions, and enable seamless communication between buyers, sellers, and agents.",
  alternates: {
    canonical: "https://www.techcreator.co/real-estate",
  },
};