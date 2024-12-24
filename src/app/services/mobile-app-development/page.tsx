import React from "react";
import heroappdevelopmentImage from "../../../../public/assets/ServiceDetailsImages/appimg.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import appImage1 from "../../../../public/assets/graphice design images/appimage1.png";
import appImage2 from "../../../../public/assets/graphice design images/appImage2.png";
import appImage3 from "../../../../public/assets/graphice design images/appImage3.png";
import appImage4 from "../../../../public/assets/graphice design images/appImag4.png";
import appImage from "../../../../public/assets/graphice design images/MobileAppDevelopment.png";


// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Head from "next/head";
import AppDevRelatedProjects from "@/components/services/AppDevRelatedProjects";

const MobileAppDevelopment = () => {
  const services = [
    {
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: productDesignImage,
    },
   
    {
      title: "Ui & Ux Design",
      description:
        "Building intuitive interfaces that provide a seamless promised user experience.",
      icon: webDesignImage,
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
        <div className="w-full md:w-[50vw] text-center md:text-left md:px-12 mb-6 md:mb-0 md:mt-0  mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Mobile App Design and Development Services
          </h1>
          <p className="text-base md:text-lg mt-3">
            From concept to deployment, we ensure every detail is meticulously
            crafted just according to your business needs. At TechCreator, we
            specialize in mobile app development that prioritizes functionality
            and user engagement. Our team creates intuitive and visually
            appealing apps that meet your customer complex needs while
            delivering exceptional user experiences.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto lg:mt-32 flex justify-center">
          <Image
            src={heroappdevelopmentImage}
            alt="Mobile App Design and development for your business"
            width={300}
            height={300}
            className="w-[70vw] md:w-[45vw]  object-cover"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={appImage}
              alt="Feature section image"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h2 className="text-xl sm:text-3xl font-bold mb-3">
                Healthcare Mobile App Development Transforming Industries
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                As a trusted healthcare{" "}
                <strong>mobile app development company,</strong> we design
                solutions that improve patient care and streamline medical
                processes. Our{" "}
                <strong>healthcare mobile app development</strong> services
                include secure data handling, user-friendly interfaces, and
                features tailored to meet the demands of healthcare providers
                and patients alike.
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
          Design and develop robust mobile applications for iOS and Android..
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Create user-friendly apps with seamless navigation and stunning interfaces.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Incorporate cutting-edge technologies for faster and smoother performance.
          </p>
        </div>

        <div className=" w-[280px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure on-time delivery with a focus on quality and user satisfaction.
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
            src={appImage1}
            alt="Flutter Mobile App Development: Enjoy the process"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Flutter Mobile App Development for High-Performance Solutions
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Our expertise in Flutter mobile app development enables us to
              deliver fast, reliable, and visually consistent apps for both iOS
              and Android platforms. Leveraging this inventive framework, we
              create apps that provide smooth performance, enhanced flexibility,
              and a unified codebase, saving time and resources.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Your Choice for Multi-Device Reach
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Our cross-platform mobile app development services enable
              businesses to reach a wider audience with a single solution. We
              ensure your app functions seamlessly across multiple devices and
              operating systems, offering a consistent experience to all users
              while optimizing development efficiency.
            </p>
          </div>
          <Image
            src={appImage2}
            alt="cross-platform mobile app development services"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={appImage3}
            alt="Enterprise mobile app development company "
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Enhancing Efficiency while Optimizing Functionality
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Enterprise mobile app development company specializes in enhancing
              productivity and streamlining operations. We develop secure,
              scalable apps that empower businesses to manage workflows,
              collaborate effectively, and achieve organizational goals.
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
              Recent Work: Redefining Mobile Solutions
            </h2>
            <p className="text-base md:text-lg text-white webDevtext ">
              We recently collaborated with a leading startup to deliver a
              cross-platform mobile app development project, enabling them to
              reach users across iOS and Android seamlessly. Additionally, we
              developed a specialized healthcare app for a clinic, integrating
              appointment scheduling, patient records, and secure communication
              features, transforming their service delivery.
              <br /> <br />
              Choose TechCreator to turn your mobile app ideas into reality with
              innovative solutions designed to meet your business objectives.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={appImage4}
              alt="Feature illustration"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <AppDevRelatedProjects />
      {/* RecentWorks section end */}

      {/* RelatedServices section start */}
      <div className="mx-auto max-w-6xl px-4 md:px-20 lg:px-0  py-12 sm:py-16  ">
        <h2 className="text-2xl font-semibold text-center mb-12 sm:mb-16 md:mb-20 ">
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

export default MobileAppDevelopment;


export const metadata = {
  title: "Cross-Platform Mobile App Design and Development | TechCreator",
  description:
    "Explore expert mobile app design and development services at TechCreator. Specializing in Flutter, cross-platform, healthcare, and enterprise app solutions tailored to meet your business needs.",
  alternates: {
    canonical: "https://www.techcreator.co/services/mobile-app-development",
  },
};
