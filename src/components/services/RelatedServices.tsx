import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import webDesignImage from "../../../public/assets/relatedServices/Frame 7 (2).png";
import illustrationDesignImage from "../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../public/assets/relatedServices/Frame 7 (5).png";



const RelatedServices = () => {
   const services = [
      {
        title: "Ui & Ux Design",
        description:
          "Building intuitive interfaces that provide a seamless promised user experience.",
        icon: webDesignImage,
        link: "/services/ui-ux-design-agency",
      },
      {
        title: "SEO & Content Writing",
        description:
          "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
        icon: motionDesignImage,
        link: "/services/seo-services-for-small-business",
      },
      {
        title: "Graphic Designing",
        description:
          "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
        icon: illustrationDesignImage,
        link: "/services/affordable-graphic-design-services",
      },
    ];


  return (
    <div className=" md:mt-16 mt-9">
  <h2 className="text-2xl md:text-4xl font-semibold text-center ">
    Related Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 mt-9  lg:gap-8 justify-items-center">
    {services.map((service, index) => (
      <Link 
        href={service.link} 
        key={index} 
        className="relative p-6 bg-white w-full h-[240px] rounded-tr-[48px] border-[2px] border-[#6D6D6D] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="absolute -top-10 left-6 p-3 rounded-lg">
          <Image
            src={service.icon}
            alt={service.title}
            width={70}
            height={70}
            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
          />
        </div>
        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      </Link>
    ))}
  </div>
</div>

  )
}

export default RelatedServices
