import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import HospitalityImage from "../../../public/assets/portfoliopage/hospitality.webp";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Hospitality = () => {
  const industrySlug = "hospitality";

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-black text-white h-auto md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HospitalityImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-20"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative md:max-w-[1440px] w-full mx-auto pt-32 md:pb-0 pb-10 px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center">
          <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-6 md:mx-auto">
            <h1 style={{lineHeight:1.2}} className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Hospitality Website and App Development Service
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
            In today’s competitive hospitality and travel industry, having a top-notch mobile app and website is essential for attracting the right audience. With businesses striving to gain clients both offline and online, maintaining a strong digital presence is no longer optional—it’s crucial.
              <br /><br />
              We specialize in creating top-performing mobile apps tailored to your needs, from customer engagement and online booking to reservation management. Our approach goes beyond just building apps; we focus on fostering trust and long-term relationships. Creating, developing, customizing, and optimizing your website ensures your business stands out and thrives online.
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

export default Hospitality

export const metadata = {
  title: "Hospitality Website and App Development Service - TechCreator",
  description:
    "Engage customers, automate bookings, and build lasting success with Hospitality App Development Service. It will make your business stand out in the digital world.In today’s competitive hospitality and travel industry, having a top-notch mobile app and website is essential for attracting the right audience. With businesses striving to gain clients both offline and online, maintaining a strong digital presence is no longer optional—it’s crucial.",
  alternates: {
    canonical: "https://www.techcreator.co/hospitality",
  },
};
