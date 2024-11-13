import React from 'react';
import Image from 'next/image';
import about1 from '../../../public/assets/aboutImages/about1.png';
import about2 from '../../../public/assets/aboutImages/about2.png';
import about3 from '../../../public/assets/aboutImages/about3.png';

const Overview: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10">
        {/* Images Section */}
        <div className="flex w-full about-page justify-center md:justify-start gap-4 mb-6 md:mb-0">
          <div>
            <Image
              src={about1}
              alt="about"
              className="w-[100px] md:w-[216px] h-auto"
              layout="intrinsic" 
            />
          </div>
          <div>
            <Image
              src={about2}
              alt="about"
              className="w-[100px] md:w-[216px] mt-20 h-auto"
              layout="intrinsic"
            />
          </div>
          <div>
            <Image
              src={about3}
              alt="about"
              className="w-[100px] md:w-[216px] h-auto"
              layout="intrinsic"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full">
          <h1 className="text-[#9A00FF] font-inter text-[28px] md:text-[35px] leading-[40px] md:leading-[55px] font-semibold">
            Overview
          </h1>
          <p className="text-[16px] md:text-[20px] text-justify font-inter font-normal  leading-6 md:leading-9">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
