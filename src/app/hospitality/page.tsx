import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import HospitalityImage from "../../../public/assets/portfoliopage/hospitality.webp";
import Image from 'next/image';
import React from 'react'

const Hospitality = () => {
  const industrySlug = "hospitality";

  return (
    <div>
      {/* Hero section */}
            <div className="relative bg-gray-900 text-white h-[500px] md:min-h-screen">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={HospitalityImage}
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
                  Hospitality Website and App Development Service
                  </h1>
                  <p className="md:text-xl">
                  In today’s competitive hospitality and travel industry, having a top-notch mobile app and website is essential for attracting the right audience. With businesses striving to gain clients both offline and online, maintaining a strong digital presence is no longer optional—it’s crucial.
      <br/><br/>
      We specialize in creating top-performing mobile apps tailored to your needs, from customer engagement and online booking to reservation management. Our approach goes beyond just building apps; we focus on fostering trust and long-term relationships. Creating, developing, customizing, and optimizing your website ensures your business stands out and thrives online.
      
                  </p>
                </div>
              </div>
            </div>

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
    canonical: "https://www.techcreator.co/hospitality",
  },
};
