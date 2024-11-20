import React from 'react';
import Image from 'next/image';
import portfolioImage from "../../../public/assets/portfolioImages/portfolioImage.png";

const PortfolioSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:space-y-3 justify-between max-w-7xl mx-auto bg-white gap-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={portfolioImage}
          alt="Portfolio Image"
          width={500}
          height={500}
          className="object-cover w-full md:-mt-20"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Our Portfolio
        </h1>
        <p className="text-gray-700 text-lg leading-8">
          At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs.
          Our portfolio showcases a range of successful projects, from intuitive mobile apps to dynamic web platforms. 
          With a talented team dedicated to quality and innovation, we're your partner in turning ideas into impactful realities.
          Join us in the journey of transforming your vision into cutting-edge technology.
          <span className="block ">• Cutting-edge technology.</span>
          <span className="block">• Seamless user experiences.</span>
          <span className="block ">• Scalable and secure solutions.</span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioSection;
