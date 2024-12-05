import React from 'react';
import Image from 'next/image';
import about1 from '../../../public/assets/aboutImages/about1.png';
import about2 from '../../../public/assets/aboutImages/about2.png';
import about3 from '../../../public/assets/aboutImages/about3.png';

const Overview: React.FC = () => {
  return (
    <div className="py-10  md:px-10">
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
        <div className="w-full py-12 md:py-16 px-6">
  <h1 className="text-[#9A00FF] font-inter text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-semibold mb-6">
    About TechCreator
  </h1>
  <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8">
    At TechCreator, we specialize in crafting innovative digital solutions that empower businesses to thrive in an ever-evolving technological landscape. Our expert team designs and develops custom web and mobile applications, all tailored to meet your unique business needs.
  </p>
  <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
    Driven by a passion for technology and a commitment to excellence, we blend creativity with the latest industry trends to deliver scalable, secure, and user-friendly solutions. Whether you're launching a startup or scaling an enterprise, TechCreator is your trusted partner in turning ideas into impactful realities.
  </p>
  <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
    Let’s build the future together.
  </p>
</div>

      </div>
    </div>
  );
};

export default Overview;
