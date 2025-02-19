import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import ecommerceImage from "../../../public/assets/portfoliopage/eccommerce.webp";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Ecommerce = () => {
  const industrySlug = "e-commerce";

  return (
    <div>
       {/* Hero section */}
       <div className="relative bg-black text-white h-auto md:min-h-screen xl:h-0">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={ecommerceImage}
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
            E-Commerce Website and Mobile App Development Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6">
            E-commerce is booming right now, and at the heart of this growth are apps for online shopping. We are here to help you take full advantage of this trend by aligning your mobile and web solutions in both functionality and design. If you don't yet have a web solution, we're ready to develop one for you. Digitize your business today and experience up to 10X conversions with our expert E-commerce application development services.
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

export default Ecommerce


export const metadata = {
  title: " Get the Epic E-Commerce Website and Mobile App Development Services",
  description:
    " Improve your sales and conversion rate with the best e-commerce mobile app development services. Get your buyer persona on one hand and boost sales on the other.",
  alternates: {
    canonical: "https://www.techcreator.co/e-commerce",
  },
};