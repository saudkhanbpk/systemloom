import React from "react";
import Image from "next/image";
import ceoProfile from "../../../public/assets/aboutImages/Rectangle.png";

const OverviewSec: React.FC = () => {
  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="w-full mb-6 md:mb-12">
  <h1 className="text-[#9A00FF] font-inter text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-semibold mb-4">
    Overview
  </h1>
  <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify">
    At TechCreator, our mission is to turn innovative ideas into powerful, scalable digital solutions. We are a passionate team of professionals dedicated to delivering high-quality web and mobile applications that cater to your business needs.
  </p>
  <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify mt-4">
    We leverage the latest technologies with a client-first approach, ensuring every project we undertake drives meaningful results. Whether launching a new app or enhancing your digital presence, we’re here to help you succeed in a rapidly evolving world.
  </p>
  <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify mt-4">
    Thank you for choosing TechCreator as your technology partner. Together, we'll transform your vision into reality.
  </p>
</div>


        {/* Image Section */}
        <div className="flex w-full justify-end items-center">
          <Image
            src="/assets/Teamimages/saudkhan.jpg"
            width={300}
            height={300}
            alt="about"
            className="w-[200px] object-cover md:w-[278px] h-[200px] md:h-[350px] rounded-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewSec;
