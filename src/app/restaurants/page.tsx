import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import restaurantImage from "../../../public/assets/portfoliopage/restaurant.webp";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Restaurant = () => {
  const industrySlug = "restaurants";

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-black text-white h-auto md:min-h-screen xl:h-0">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={restaurantImage}
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
            Restaurant Mobile App Development Company
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6">
            From customized point-of-sale systems to table reservation platforms and online food delivery apps, we design software that simplifies your operations and enhances customer experiences.
              <br /><br />
              Whether you’re managing a single location or a chain of restaurants, our tailored tools help you operate efficiently, offer seamless services, and boost revenue—all in one integrated system.
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

      <IndustryRelatedProjects slug={industrySlug}/>
    </div>
  )
}

export default Restaurant


export const metadata = {
  title: "Streamlined Software Solutions for Restaurant Success",
  description:
    "Customized POS systems, table reservation platforms, and online food delivery apps from TechCreator. Simplify operations, enhance customer service, and boost revenue with solutions for single or multi-location restaurants.At TechCreator Software Company, we specialize in creating solutions that align perfectly with your restaurant business needs",
  alternates: {
    canonical: "https://www.techcreator.co/restaurants",
  },
};