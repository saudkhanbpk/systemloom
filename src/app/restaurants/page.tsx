import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import restaurantImage from "../../../public/assets/portfolioImages/restaurant.png";
import Image from 'next/image';
import React from 'react'

const Restaurant = () => {
  const industrySlug = "restaurants";

  return (
    <div>
       {/* Hero section */}
            <div className="relative bg-gray-900 text-white h-[500px] md:min-h-screen">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={restaurantImage}
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
                  Restaurant Mobile App Development Company
                  </h1>
                  <p className="md:text-xl">
                  From customized point-of-sale systems to table reservation platforms and online food delivery apps, we design software that simplifies your operations and enhances customer experiences.
      <br/><br/>
      Whether you’re managing a single location or a chain of restaurants, our tailored tools help you operate efficiently, offer seamless services, and boost revenue—all in one integrated system.
      
                  </p>
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