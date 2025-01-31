import React from "react";
import UIUXDesignImage from "../../../../public/assets/servicespages/UIDesign.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import uxdesignimage1 from "../../../../public/assets/servicespages/uxdesign1.webp";
import uxdesignimage2 from "../../../../public/assets/servicespages/uxdesign2.webp";
import uxdesignimage3 from "../../../../public/assets/servicespages/uxdesign3.webp";
import uxdesignimage4 from "../../../../public/assets/servicespages/uxdesign4.webp";
import uxdesignimage5 from "../../../../public/assets/servicespages/uxeesign5.webp";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";

const UIUXDesign = () => {
  const categorySlug = "ui-ux-design-agency";
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating powerful mobile applications that will capture users and enhance your brand.",
      icon: appDesignImage,
      link: "/services/mobile-app-development-company",
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: motionDesignImage,
      link: "/services/affordable-graphic-design-services",
    },
    
  ];

  return (
    <div>
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Exceptional Digital Experiences: UI/UX Design Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
          At TechCreator, our UI/UX design is built around delivering intuitive and visually engaging interfaces. We focus on creating user journeys that enhance interaction and improve satisfaction, ensuring your platform stands out in a competitive digital landscape.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={UIUXDesignImage}
            alt="The TechCreator will design intuitive and engaging user interfaces and enhance UI and UX to create greater satisfaction for the user"
            width={300}
            height={300}
            className=" "
          />
        </div>
      </div>
      {/* hero section end */}

      <div className="max-w-full xl:px-16 md:px-8 sm:px-3 px-2 mx-auto ">
        {/* FeatureSection section start */}
        <div className=" ">
        <div className="flex flex-col lg:flex-row items-center xl:px-0 lg:px-4 px-3    lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[300px] z-10 ">
            <Image
              src={uxdesignimage1}
              alt="Bespoke Web Development to attract your audience"
              width={300}
              height={450}
              className=" lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full  h-auto p-6  mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
              Your Partner as a Top UI/UX Design Agency
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
              Recognized as a top UI/UX design agency, we collaborate closely with clients to craft designs that resonate with their audience. From wireframes to final designs, we prioritize functionality and creativity to reflect your brand’s identity and drive user engagement.Our designs are optimized for performance, ensuring seamless navigation and an exceptional user experience. Let’s work together to elevate your <Link href="/services/seo-services-for-small-business" className="cursor-pointer underline">online presence</Link> and enhance user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* FeatureSection section end */}

        {/* FeaturesList section start */}
        <h2 className="text-center text-3xl font-bold md:mt-28">
          Why Choose Us
        </h2>

        <div className="my-16 md:mt-20 flex md:flex-row flex-col xl:px-0 sm:px-3 px-1  gap-7 ">
          <div className="border-r  xl:pr-3">
            <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
            Design intuitive interfaces that enhance user experience across platforms.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Simplify navigation with creative and responsive UI designs.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Incorporate user feedback to deliver tailored designs that engage and delight.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Ensure every design aligns with your brand and user expectations.
            </p>
          </div>
        </div>
        {/* FeaturesList section end */}

        {/* DiagonalFeatureSection section start */}
        <div className="mb-16 ">
          {/* card1 */}
          <div className="flex flex-col md:flex-row   items-center px-1 sm:px-4 xl:px-0  md:gap-12">
            {/* Image Section */}
            <Image
              src={uxdesignimage2}
              alt="Mobile UI/UX design from TechCreator comes with sleek, responsive, and intuitive interfaces for maximum engaging on-the-go experience"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-2">
              Mobile UI/UX Design for On-the-Go Excellence
              </h2>
              <p className="text-base md:text-base lg:text-lg xl:text-lg text-gray-700">
              In a mobile-first world, our expertise in <strong>mobile UI/UX design</strong> ensures your applications are optimized for smaller screens without compromising user experience. We design sleek, responsive, and intuitive interfaces that captivate users across all devices.
Our focus on simplicity and accessibility ensures a seamless experience for users on the go. We create mobile interfaces that engage users and keep them coming back for more. 
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              End-to-End UI/UX Solutions for Your Business Needs
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              We provide comprehensive <strong>UI/UX design services,</strong> covering every step from ideation to implementation. Our goal is to deliver designs that not only look great but also solve real user challenges, driving results for your business.Designs are crafted with user behavior in mind, ensuring a seamless experience that leads to higher engagement. Tailored to your business goals, the result is a user-friendly interface that fuels growth and satisfaction. 
              </p>
            </div>
            <Image
              src={uxdesignimage3}
              alt="Comprehensive UI/UX solutions by TechCreator, solving user challenges and driving business results from ideation to implementation"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={uxdesignimage4}
              alt="The UI/UX design is formulated for the individual industries to exceed expectations for apps and digital platforms"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-2">
              Customized UI/UX for Every Industry
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              From startups to enterprises, our design solutions cater to diverse industries. Whether you need a mobile UI/UX design for <Link href="/services/mobile-app-development-company" className="cursor-pointer text-blue-600">an app or a complete overhaul</Link>  of your digital presence, we ensure the final product exceeds your expectations.Each design is tailored to your industry’s specific needs, ensuring maximum impact. The goal is to create intuitive, engaging experiences that drive user loyalty and business growth. 

              </p>
            </div>
          </div>
        </div>
        {/* DiagonalFeatureSection section end */}

        {/* FramedFeatureSection section start */}
        <div className="lg:relative bg-[#9A00FF] sm:mt-0 mt-2 lg:h-[450px]  mx-auto md:py-4 md:mt-28 lg:mb-32 md:mb-6">
          <div className="lg:relative px-5 flex flex-col lg:flex-row  items-center lg:items-start gap-10">
            {/* Text Content */}
            <div className="lg:relative webDevtext z-10 lg:max-w-[600px] xl:max-w-[800px] lg:p-5  text-wrap text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl mt-2 font-bold text-white mb-4">
              Recent Work: Turning Ideas into Impactful Designs
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              Recently, we partnered with a healthcare startup to deliver a user-friendly mobile UI/UX design that improved patient engagement. Additionally, our work with an e-commerce platform as a top UI/UX design agency enhanced their customer journey, leading to increased conversions and user satisfaction.These projects highlight our ability to create designs that solve real problems while driving business success. 
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={uxdesignimage5}
                alt=" Featuring great designs: Healthcare UI/UX that drives engagement and eCommerce design that boosts conversions"
                width={400}
                height={500}
                className="rounded-lg mx-auto mb-2 md:mx-0"
              />
            </div>
          </div>
        </div>

        {/* FramedFeatureSection section end */}

        {/* RecentWorks section start */}
        <ServicesRelatedProjects slug={categorySlug} />
        {/* RecentWorks section end */}

        {/* RelatedServices section start */}
        <div className=" px-3 xl:px-0 py-12 sm:py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 sm:mb-16 md:mb-20">
            Related Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5   lg:gap-8 justify-items-center">
            {services.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="relative p-6 bg-white w-full h-[240px] rounded-tr-[48px] border-[2px] border-[#6D6D6D] hover:shadow-lg transition-shadow duration-300"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;



export const metadata = {
  title: "UI/UX Design Service | Top UI/UX Design Agency for Mobile Solutions",
  description:
    "Expert UI/UX design services at TechCreator. As a top UI/UX design agency, we specialize in mobile & Desktop UI/UX design and creating user-centric digital experiences.",
  alternates: {
    canonical: "https://www.techcreator.co/services/ui-ux-design-agency",
  },
};