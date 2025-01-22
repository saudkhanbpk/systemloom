import React from "react";
import Image from "next/image";
import about1 from "../../../public/assets/aboutpage/about1.webp";
import about2 from "../../../public/assets/aboutpage/about2.webp";
import about3 from "../../../public/assets/aboutpage/about3.webp";
import Link from "next/link";

const Overview: React.FC = () => {
  return (
    <div className="md:py-10 py-6 px-2 md:px-10">
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
        <div className="w-full py- md:py-16 px-2">
          <h2 className="text-[#9A00FF] font-inter text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-semibold mb-6">
            About TechCreator
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8">
            TechCreator is a <Link href="/" className="cursor-pointer text-blue-600">software company</Link>, passionate about crafting
            innovative solutions that help businesses thrive in an ever-evolving
            technological landscape. Our team of expertise is dedicated to
            deliver high-quality, scalable and user-friendly solutions that meet
            unique needs of your business.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
            You are launching startup or scaling an enterprise, TechCreator is
            here to boost your business online by serving you in <Link href="/services/web-development" className="cursor-pointer text-blue-600">web development</Link>, <Link href="/services/mobile-app-development-company" className="cursor-pointer text-blue-600">app development</Link> , <Link href="/services/devops" className="cursor-pointer text-blue-600">Devops</Link> and <Link href="/services/affordable-graphic-design-services " className="cursor-pointer text-blue-600">graphic design</Link>. We provide
            end-to-end services that bring your ideas to life. We have a team
            focusing on innovative solutions, customized approach and commitment
            to quality.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
            Bless us with the opportunity to serve and build the future
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
