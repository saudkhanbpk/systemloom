import React from 'react';
import Image from 'next/image';
import portfolioImage from "../../../public/assets/portfolioImages/portfolioImage.png";

const PortfolioSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  max-w-7xl mx-auto   gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={portfolioImage}
          alt="Portfolio Image"
          width={300}
          height={300}
          className="object-cover w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center lg:mt-24 mt-6 space-y-6 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-[#9A00FF]">Portfolio</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful projects, from intuitive mobile apps to dynamic web platforms. With a talented team dedicated to quality and innovation, we're your partner in turning ideas into impactful realities.
        </p>
        <ul className="text-gray-700 text-lg space-y-2">
          <li>• Cutting-edge technology</li>
          <li>• Seamless user experiences</li>
          <li>• Scalable and secure solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioSection;
