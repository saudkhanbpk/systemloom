import React from "react";
import UIUXDesignImage from "../../../../public/assets/graphice design images/UIDesign.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import uxdesignimage1 from "../../../../public/assets/graphice design images/uxdesign1.png";
import uxdesignimage2 from "../../../../public/assets/graphice design images/uxdesign2.png";
import uxdesignimage3 from "../../../../public/assets/graphice design images/uxdesign3.png";
import uxdesignimage4 from "../../../../public/assets/graphice design images/uxdesign4.png";
import uxdesignimage5 from "../../../../public/assets/graphice design images/uxeesign5.png";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Head from "next/head";
import UiUxDesigningRelatedProjects from "@/components/services/UiUxDesignRelatedProjects";
import Buttons from "@/components/services/Buttons";

const UIUXDesign = () => {
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating powerful mobile applications that will capture users and enhance your brand.",
      icon: appDesignImage,
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: motionDesignImage,
    },
    
  ];

  return (
    <div>
      {/* hero section start */}
      <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-0 md:px-12 mt-20">
          <h1 className="text-xl lg:text-4xl font-bold">
            Exceptional Digital Experiences: UI/UX Design Services
          </h1>
          <p className="text-base md:text-lg mt-3">
            At TechCreator, our UI/UX design is built around delivering
            intuitive and visually engaging interfaces. We focus on creating
            user journeys that enhance interaction and improve satisfaction,
            ensuring your platform stands out in a competitive digital
            landscape.
          </p>
          <Buttons/>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center md:mt-20">
          <Image
            src={UIUXDesignImage}
            alt="The TechCreator will design intuitive and engaging user interfaces and enhance UI and UX to create greater satisfaction for the user"
            width={300}
            height={300}
            className="w-[60vw] md:w-[25vw] "
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={uxdesignimage1}
              alt=" A top U/I X/UI design agency offers service to create functional and creative designs to reflect your brand and engage users"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h2 className="text-xl sm:text-3xl font-bold mb-3">
                Your Partner as a Top UI/UX Design Agency
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                Recognized as a top UI/UX design agency, we collaborate closely
                with clients to craft designs that resonate with their audience.
                From wireframes to final designs, we prioritize functionality
                and creativity to reflect your brand’s identity and drive user
                engagement.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
      <h2 className="text-center text-3xl font-bold md:mt-52">Why Choose Us</h2>
      <div className='my-16 md:mt-20 flex flex-wrap justify-center gap-7 border-b  "'>
        <div className="border-r  w-[280px] p-3">
          <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Design intuitive interfaces that enhance user experience across platforms.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Simplify navigation with creative and responsive UI designs.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Incorporate user feedback to deliver tailored designs that engage and delight.
          </p>
        </div>

        <div className=" w-[280px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure every design aligns with your brand and user expectations.
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
            src={uxdesignimage2}
            alt="Mobile UI/UX design from TechCreator comes with sleek, responsive, and intuitive interfaces for maximum engaging on-the-go experience"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Mobile UI/UX Design for On-the-Go Excellence
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              In a mobile-first world, our expertise in mobile UI/UX design
              ensures your applications are optimized for smaller screens
              without compromising user experience. We design sleek, responsive,
              and intuitive interfaces that captivate users across all devices.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              End-to-End UI/UX Solutions for Your Business Needs{" "}
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              We provide comprehensive UI/UX design services, covering every
              step from ideation to implementation. Our goal is to deliver
              designs that not only look great but also solve real user
              challenges, driving results for your business.
            </p>
          </div>
          <Image
            src={uxdesignimage3}
            alt="Comprehensive UI/UX solutions by TechCreator, solving user challenges and driving business results from ideation to implementation"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={uxdesignimage4}
            alt=" The UI/UX design is formulated for the individual industries to exceed expectations for apps and digital platforms"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Customized UI/UX for Every Industry
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              From startups to enterprises, our design solutions cater to
              diverse industries. Whether you need a mobile UI/UX design for an
              app or a complete overhaul of your digital presence, we ensure the
              final product exceeds your expectations.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Work: Turning Ideas into Impactful Designs
            </h2>
            <p className="text-base md:text-lg text-white webDevtext ">
              Recently, we partnered with a healthcare startup to deliver a
              user-friendly mobile UI/UX design that improved patient
              engagement. Additionally, our work with an e-commerce platform as
              a <strong>top UI/UX design agency</strong> enhanced their customer
              journey, leading to increased conversions and user satisfaction.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={uxdesignimage5}
              alt=" Featuring great designs: Healthcare UI/UX that drives engagement and eCommerce design that boosts conversions"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <UiUxDesigningRelatedProjects />
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

export default UIUXDesign;



export const metadata = {
  title: "UI/UX Design Service | Top UI/UX Design Agency for Mobile Solutions",
  description:
    "Expert UI/UX design services at TechCreator. As a top UI/UX design agency, we specialize in mobile & Desktop UI/UX design and creating user-centric digital experiences.",
  alternates: {
    canonical: "https://www.techcreator.co/services/ui-ux-designing",
  },
};