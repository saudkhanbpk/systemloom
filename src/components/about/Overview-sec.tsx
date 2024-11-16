import React from 'react';
import Image from 'next/image';
import ceoProfile from '../../../public/assets/aboutImages/Rectangle.png';

const OverviewSec: React.FC = () => {
  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="w-full mb-6 md:mb-0">
          <h1 className="text-[#9A00FF] font-inter text-[28px] md:text-[35px] leading-[40px] md:leading-[55px] font-semibold">
            Overview
          </h1>
          <p className="text-[16px] md:text-[20px] text-justify font-inter font-normal  leading-6 md:leading-9">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
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
