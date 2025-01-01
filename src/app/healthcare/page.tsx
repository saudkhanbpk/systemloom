import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import healthcareImage from "../../../public/assets/portfolioImages/healthcare.png";
import Image from 'next/image';
import React from 'react'

const Healthcare = () => {
  const industrySlug = "healthcare";

  return (
    <div>
       {/* Hero section */}
            <div className="relative bg-gray-900 text-white h-auto md:min-h-screen">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={healthcareImage}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="opacity-15"
                />
              </div>
      
              {/* Content Wrapper */}
              <div className="relative md:max-w-[1440px] w-full mx-auto pt-32 md:pb-0 pb-10 px-2 sm:px-6 md:px-8 h-full flex items-center">
                <div className="w-full text-center md:max-w-4xl flex flex-col  justify-center gap-5 md:mx-auto ">
                  <h1 className="font-semibold text-[22px] sm:text-[48px] md:text-[48px] font-poppins leading-[1.2] mb-0">
                    Custom HealthCare Software Development Solutions & Services 
                  </h1>
                  <p className="md:text-xl">
                  At TechCreator, we don’t just develop software—we build lasting relationships by bridging the bio and tech fields. With over Five years of experience in the medical and tech industries, we understand the unique challenges healthcare organizations face.<br/><br/>
      That’s why we deliver tailored solutions that seamlessly improve patient care, enhance reporting and analytics, strengthen data security, and boost efficiency—all under one roof. Using advanced approaches like IoMT, Blockchain, and AI, we combine expertise and innovation to meet your needs and drive meaningful results.
      
                  </p>
                </div>
              </div>
            </div>

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
    canonical: "https://www.techcreator.co/healthcare",
  },
};