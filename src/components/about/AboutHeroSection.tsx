import React from 'react';
import Image from 'next/image';
import backgroundImage from "../../../public/assets/aboutImages/backgroundImage.jpeg"

const AboutHeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white h-[500px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background"
          className="w-full opacity-25"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 md:pb-12">
        <div className="w-full text-center">
          <h1 className="font-semibold text-[32px] sm:text-[48px] md:text-[58px] font-poppins leading-[1.2] mb-0">
            Together, We Drive Your Success
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
