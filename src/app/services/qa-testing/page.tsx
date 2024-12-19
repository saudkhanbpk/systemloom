import React from "react";
import qatestinImage from "../../../../public/assets/graphice design images/qatesting.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import qaimage1 from "../../../../public/assets/graphice design images/qaimage1.png";
import qaimage2 from "../../../../public/assets/graphice design images/qaimage2.png";
import qaimage3 from "../../../../public/assets/graphice design images/qaimage3.png";
import qaimage4 from "../../../../public/assets/graphice design images/qaimage4.png";
import qaimage5 from "../../../../public/assets/graphice design images/qaimage5.png";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import QaTestingRelatedProjects from "@/components/services/QATestingRelatedProjects";
import Head from "next/head";

const QATesting = () => {
  const services = [
    {
      title: "DevOps",
      description:
        "Streamlining your development pipeline for guided efficiency with automation to allow for automated daily deployment.",
      icon: developmentDesignImage,
    },
    {
      title: "Project Management",
      description:
        "Executing precise project management potentially geared to step-out on time; it facilitates efficient collaboration by leading the project stakeholders.",
      icon: illustrationDesignImage,
    },
    {
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: motionDesignImage,
    },
  ];

  return (
    <div>

      {/* hero section start */}
      <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-10 md:px-12   mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold">
            QA Testing Services
          </h1>
          <p className="text-base md:text-lg mt-3">
            At TechCreator, Expert <strong>QA testing services</strong> ensure
            your software is flawless and reliable. From identifying bugs to
            improving functionality, we help businesses deliver top-quality
            applications that meet user expectations.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={qatestinImage}
            alt="Assured quality through expert software testing QA testing."
            width={300}
            height={300}
            className="w-[60vw] md:w-[35vw]"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={qaimage1}
              alt="A thorough QA testing strategy aiming for an integrated, secure, and well-performing application."
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                Comprehensive Quality Assurance Testing
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                Our quality assurance process covers every aspect of your
                software, from performance and usability to security. With
                meticulous testing techniques, we ensure that your applications
                function seamlessly across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
      <div className='my-16 mt-28 flex flex-wrap justify-center gap-7 border-b  "'>
        <div className="border-r  w-[300px] p-3">
          <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Conduct rigorous testing to ensure bug-free and reliable applications.
          </p>
        </div>

        <div className="border-r w-[300px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Perform detailed testing for performance, security, and compatibility.
          </p>
        </div>

        <div className="border-r w-[300px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Deliver reports with actionable insights to enhance application quality.
          </p>
        </div>

        <div className=" w-[300px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure seamless user experience with comprehensive quality assurance.
          </p>
        </div>
      </div>
      {/* FeaturesList section end */}

      {/* DiagonalFeatureSection section start */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* card1 */}
        <div className="flex flex-col md:flex-row justify-around items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={qaimage2}
            alt="Customized QA solutions for different sectors toward achieving error-free working  "
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Specialized For Diverse Industries
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              No matter your industry, TechCreator offers tailored QA solutions.
              From e-commerce to healthcare and beyond, our testing services are
              designed to meet the specific challenges of your domain, ensuring
              error-free performance.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Accelerate Time-to-Market with Agile QA Services
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Our Agile QA approach integrates testing throughout the
              development cycle. By detecting and resolving issues early, we
              help you speed up delivery timelines without compromising on
              quality or user experience.
            </p>
          </div>
          <Image
            src={qaimage3}
            alt="Agile QA continues to be an invaluable way of ensuring faster delivery with impeccable quality"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={qaimage4}
            alt="Manual and automated testing for total security and protection of software"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Automation and Manual Testing
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              We combine manual and automated testing methods to provide
              comprehensive coverage and efficient results. Our team leverages
              the latest tools and technologies to identify and fix
              vulnerabilities, ensuring your software is robust and secure.
            </p>
          </div>
        </div>
      </div>
      {/* DiagonalFeatureSection section end */}

      {/* FramedFeatureSection section start */}
      <div className="md:relative bg-[#9A00FF] md:max-w-6xl mx-auto md:py-16  md:mt-52 md:mb-52">
        <div className="md:relative px-5 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Content */}
          <div className="relative z-10 md:max-w-[600px] text-wrap text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Work: Delivering Quality You Can Trust
            </h1>
            <p className="text-base md:text-lg text-white webDevtext ">
              In a recent project, our <strong>QA testing services</strong>{" "}
              helped a SaaS company improve their application’s stability by
              40%. Our comprehensive testing approach enabled the client to
              deliver a seamless user experience and gain higher customer
              satisfaction.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={qaimage5}
              alt="QA testing increases SaaS app stability by 40%, thus enabling optimal user experience"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <QaTestingRelatedProjects />
      {/* RecentWorks section end */}

      {/* RelatedServices section start */}
      <div className="mx-auto max-w-6xl px-4 md:px-20 lg:px-0  py-12 sm:py-16  ">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 sm:mb-16 md:mb-20 ">
          Related Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white w-full max-w-[350px] h-[240px] rounded-tr-[48px] border-[2px] border-[#6D6D6D] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-10 left-6 p-3 rounded-lg">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
                />
              </div>
              <div className="mt-8 sm:mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* RelatedServices section end */}
    </div>
  );
};

export default QATesting;


export const metadata = {
  title: "QA Testing Services | Comprehensive Quality Assurance Solutions",
  description:
    "TechCreator offers professional QA testing services to ensure software quality. Enhance reliability with tailored quality assurance testing for seamless performance.",
  alternates: {
    canonical: "https://www.techcreator.co/services/qa-testing",
  },
};
