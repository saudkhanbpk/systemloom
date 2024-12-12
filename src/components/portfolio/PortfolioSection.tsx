import React from "react";
import Image from "next/image";
import portfolioImage from "../../../public/assets/portfolioImages/portfolioImage.png";

const PortfolioSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  max-w-7xl mx-auto   gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={portfolioImage}
          alt="TechCreator storing your vision into impactful and scalable secured solutions"
          width={300}
          height={300}
          className="object-cover w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center lg:mt-24 mt-6 space-y-6 px-6">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
        With TechCreator, Make a lasting impression of your Brand
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
        Ready to take your business to the next level? Join the list of satisfied clients showcased in our portfolio. Contact TechCreator today and let’s turn your vision into reality. From intuitive mobile apps to dynamic web platforms, our portfolio showcases a wide range of successful projects. In transforming ideas into impactful realities, we are your partner with a talented team dedicated to quality and innovation.
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
