import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define TypeScript type for props (Optional, but recommended)
interface Service {
  title: string;
  description: string;
  icon: string | StaticImageData;
  link: string;
}

interface RelatedServicesProps {
  services: Service[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  return (
    <div className="md:mt-16 mt-9">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Related Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 mt-16 lg:gap-8 justify-items-center ">
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
  );
};

export default RelatedServices;
