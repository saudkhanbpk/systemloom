import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import healthcareImage from "../../../public/assets/portfoliopage/healthcare.webp";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Healthcare = () => {
  const industrySlug = "healthcare";

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-black text-white h-auto md:min-h-screen xl:h-0">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={healthcareImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-20"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative md:max-w-[1440px] w-full mx-auto pt-32  md:pb-0 pb-10 px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center items-center">
          <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-6 md:mx-auto">
            <h1 style={{lineHeight:1.2}} className="font-semibold text-3xl sm:text-4xl md:text-5xl">
              Custom HealthCare Software Development Solutions & Services
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
              At TechCreator, we don’t just develop software—we build lasting relationships by bridging the bio and tech fields. With over Five years of experience in the medical and tech industries, we understand the unique challenges healthcare organizations face. 
              <br /><br />
              That’s why we deliver tailored solutions that seamlessly improve patient care, enhance reporting and analytics, strengthen data security, and boost efficiency—all under one roof. Using advanced approaches like IoMT, Blockchain, and AI, we combine expertise and innovation to meet your needs and drive meaningful results.
            </p>
            {/* CTA Button (Optional) */}
            <Link
              href="/contact"
              className="px-6 py-3 w-fit mx-auto bg-[#9A00FF] text-white rounded-md text-lg font-medium transition-all duration-300 hover:bg-[#6f00b5] focus:outline-none mb-4"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Related Industry Projects */}
      <IndustryRelatedProjects slug={industrySlug} />
    </div>
  );
}

export default Healthcare;



export const metadata = {
  title: "Custom HealthCare Software Development Services - TechCreator",
  description:
    "Custom software development for healthcare by TechCreator. With modern technologies like React, Angular, and Node.js, we develop innovative, secure, and scalable solutions.",
  alternates: {
    canonical: "https://www.techcreator.co/healthcare",
  },
};