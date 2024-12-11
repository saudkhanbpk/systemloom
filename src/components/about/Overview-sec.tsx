import React from "react";
import Image from "next/image";

const OverviewSec: React.FC = () => {
  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
        {/* Text Section */}
        <div className="w-full mb-6 md:mb-12">
  <h1 className="text-[#9A00FF] font-inter text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-semibold mb-4">
  Saud Khan CEO Of Tech Creator
  </h1>
  <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify">
  My name is <strong>Saud Khan,</strong> CEO of TecCreator based in Pakistan. 
  </p>
  <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify mt-4">
  As the world rapidly transforming into global village through digitalization, people are becoming more interconnected than ever before. It forms our vision to deliver innovative IT solutions that are agile, AI driven and designed to adapt to the ever-changing digital landscape. 
  </p>
  <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify mt-4">
  I believe, we are not just creating digital assets but are fostering long-term partnership built on trust, collaboration and a shared vision for success.  In this era digital landscape, we are committed to provide our agile services to clients across the globe. We, TechCreator, are here to drive our head towards a future where innovation meets the demands of the people of future. 
  </p>
</div>


        {/* Image Section */}
        <div className="flex w-full justify-end items-center  object-contain md:w-[478px] h-[200px] md:h-[410px] rounded-[15px]">
          <Image
            src="/assets/Teamimages/ceoimage2.jpg"
            width={300}
            height={300}
            alt="about"
            className="rounded-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewSec;
