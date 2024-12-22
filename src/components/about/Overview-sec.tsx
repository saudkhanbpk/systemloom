"use client"
import React from "react";
import Image from "next/image";
import Linkedin from "../../../public/assets/icons/Vector.png";

const OverviewSec: React.FC = () => {
  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
        {/* Text Section */}
        <div className="w-full mb-6 mt-10 md:mb-12">
          <h2 className="text-[#9A00FF] font-inter text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-semibold mb-4">
            CEO Message
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify">
            My name is <strong>Saud Khan,</strong> CEO of TecCreator.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify mt-4">
            As the world rapidly transforming into global village through
            digitalization, people are becoming more interconnected than ever
            before. It forms our vision to deliver innovative IT solutions that
            are agile, AI driven and designed to adapt to the ever-changing
            digital landscape.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-7 md:leading-8 text-justify mt-4">
            I believe, we are not just creating digital assets but are fostering
            long-term partnership built on trust, collaboration and a shared
            vision for success. In this era digital landscape, we are committed
            to provide our agile services to clients across the globe. We,
            TechCreator, are here to drive our head towards a future where
            innovation meets the demands of the people of future.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex w-full justify-end items-center   md:w-[478px] h-[400px] md:h-[380px] rounded-[15px] group  max-w-xs mx-auto  overflow-hidden">
          {/* Image with opacity on hover */}
          <Image
            src="/assets/Teamimages/ceoimage2.jpg"
            width={330}
            height={300}
            alt="ceo_image"
            className="rounded-[15px] group-hover:opacity-50 object-contain transition-opacity duration-300 "
          />

          {/* LinkedIn Icon appears when the image is hovered */}
          <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://www.linkedin.com/in/saudkhan39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl cursor-pointer"
              aria-label="Visit Saud Khan's LinkedIn profile"
            >
              <Image src={Linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSec;
