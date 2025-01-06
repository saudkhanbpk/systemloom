import React from "react";
import projectManagementImage from "../../../../public/assets/servicespages/projectmanagement.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import projectimage1 from "../../../../public/assets/servicespages/project1.webp";
import projectimage2 from "../../../../public/assets/servicespages/project2.webp";
import projectimage3 from "../../../../public/assets/servicespages/project3.webp";
import projectimage4 from "../../../../public/assets/servicespages/project4.webp";
import projectimage5 from "../../../../public/assets/servicespages/project5.webp";

// RelatedServices images
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";

const projectManagement = () => {
  const categorySlug = "project-management";

  const services = [
    {
      title: "DevOps",
      description:
        "Streamlining your development pipeline for guided efficiency with automation to allow for automated daily deployment.",
      icon: developmentDesignImage,
      link: "/services/devops",
    },
    {
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: motionDesignImage,
      link: "/services/software-maintenance",
    },
    {
      title: "QA Testing",
      description:
        "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
      icon: illustrationDesignImage,
      link: "/services/qa-testing",
    },
  ];

  return (
    <div>
     
      {/* hero section start */}
      <div className="bg-black w-full  pt-24 md:pt-36 lg:pt-28 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Efficient Project Management Services
          </h1>
          <p className="text-base md:text-lg mt-3">
            TechCreator offers reliable project management services designed to
            streamline workflows and ensure timely delivery of projects. Our
            team focuses on aligning project objectives with your business
            goals, providing clarity, structure, and seamless execution.
          </p>
          <Buttons/>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={projectManagementImage}
            alt="Project Management Services by TechCreator"
            width={300}
            height={300}
            className="w-[60vw] md:w-[30vw]"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto  ">
        <div className="flex flex-col lg:flex-row items-center  lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[350px] z-10">
            <Image
              src={projectimage1}
              alt="Bespoke Web Development to attract your audience"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute  lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px] lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-52  ">
              <h2 className="text-xl sm:text-3xl font-bold mb-3 lg:w-[500px]  ">
              Partner with Expert Consultants
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
              As trusted <strong>project management consultants,</strong> we bring a wealth of experience to guide your projects from initiation to completion. Whether it's resource allocation, risk assessment, or task prioritization, our consultants deliver strategies that drive measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
      <h2 className="text-center text-3xl font-bold md:mt-28">Why Choose Us</h2>
      <div className='my-16 md:mt-20 flex flex-wrap justify-center gap-7 border-b  "'>
        <div className="border-r  w-[280px] p-3">
          <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Manage projects with precision using advanced tracking and analytics tools.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure timely delivery with streamlined workflows and resource allocation.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Drive collaboration across teams for successful project execution.
          </p>
        </div>

        <div className=" w-[280px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Monitor progress in real-time to achieve project goals efficiently.
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
            src={projectimage2}
            alt="We handel every matter professionally and precisely "
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Custom Solutions for Every Challenge
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Every project is unique, and so are our solutions. We specialize
              in creating tailored project management strategies that address
              your specific needs, ensuring smooth coordination, accountability,
              and optimal resource utilization.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Streamline Operations with Agile Project Management
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Our expertise in Agile project management empowers businesses to
              adapt to change, enhance team collaboration, and deliver value
              quickly. By implementing Agile methodologies, we ensure
              flexibility without compromising on quality or deadlines.
            </p>
          </div>
          <Image
            src={projectimage3}
            alt="Project Management Services by TechCreator"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={projectimage4}
            alt="Best Project Management boost efficiency "
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Efficiency with End-to-End Project Oversight
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              From planning to execution, we provide comprehensive oversight to
              ensure every stage of your project runs smoothly. Our focus on
              communication, timeline adherence, and quality ensures that your
              projects achieve their desired outcomes with minimal disruptions.
            </p>
          </div>
        </div>
      </div>
      {/* DiagonalFeatureSection section end */}

      {/* FramedFeatureSection section start */}
      <div className="md:relative bg-[#9A00FF] md:max-w-6xl mx-auto md:py-16  md:mt-28 md:mb-28">
        <div className="md:relative px-5 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Content */}
          <div className="relative webDevtext z-10 md:max-w-[600px] text-wrap text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Web Development Services with Ongoing Support
            </h2>
            <p className="text-base md:text-lg text-white  ">
              Our commitment doesn’t end with the launch of your website or app.
              We provide comprehensive{" "}
              <strong>web development services,</strong> from concept to
              deployment, with continuous support to ensure your platform
              evolves with your business. Trust us to deliver innovation,
              functionality, and unmatched quality in every project.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={projectimage5}
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
      <ServicesRelatedProjects  slug={categorySlug} />
      {/* RecentWorks section end */}

      {/* RelatedServices section start */}
      <div className="mx-auto max-w-6xl px-4 md:px-20 lg:px-0 py-12 sm:py-16">
  <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 sm:mb-16 md:mb-20">
    Related Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 justify-items-center">
    {services.map((service, index) => (
      <Link 
        href={service.link} 
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
      </Link>
    ))}
  </div>
</div>
      {/* RelatedServices section end */}
    </div>
  );
};

export default projectManagement;



export const metadata = {
  title: " Project Management Services | Expert Project Management Consultants",
  description:
    "TechCreator offers professional project management services with expert consultants. Streamline workflows, implement Agile methodologies, and achieve business success.",
  alternates: {
    canonical: "https://www.techcreator.co/services/project-management",
  },
};
