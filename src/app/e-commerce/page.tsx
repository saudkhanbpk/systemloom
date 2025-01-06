import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import ecommerceImage from "../../../public/assets/portfoliopage/eccommerce.webp";
import Image from 'next/image';
import React from 'react'

const Ecommerce = () => {
  const industrySlug = "e-commerce";

  return (
    <div>
       {/* Hero section */}
            <div className="relative bg-gray-900 text-white h-[500px] md:min-h-screen">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={ecommerceImage}
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
                  E-Commerce Website and Mobile App Development Services 
                  </h1>
                  <p className="md:text-xl">
                  E-commerce is booming right now, and at the heart of this growth are apps for online shopping. We are here to help you take full advantage of this trend by aligning your mobile and web solutions in both functionality and design. If you don't yet have a web solution, we're ready to develop one for you. Digitize your business today and experience up to 10X conversions with our expert E-commerce application development services.
                  </p>
                </div>
              </div>
            </div>
      <IndustryRelatedProjects slug={industrySlug} />
    </div>
  )
}

export default Ecommerce


export const metadata = {
  title: " Get the Epic E-Commerce Website and Mobile App Development Services",
  description:
    " Improve your sales and conversion rate with the best e-commerce mobile app development services. Get your buyer persona on one hand and boost sales on the other.",
  alternates: {
    canonical: "https://www.techcreator.co/e-commerce",
  },
};