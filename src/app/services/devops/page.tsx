import React from "react";
import heroimage from "../../../../public/assets/ServiceDetailsImages/QA.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import devopimage1 from "../../../../public/assets/graphice design images/devopimag1.png";
import devopimage2 from "../../../../public/assets/graphice design images/devopimage2.png";
import devopimage3 from "../../../../public/assets/graphice design images/devopimage3.png";
import devopimage4 from "../../../../public/assets/graphice design images/devopimage4.png";
import devopimage5 from "../../../../public/assets/graphice design images/devopimage5.png";

// RelatedServices images
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import DevopsRelatedProjects from "@/components/services/DevopsRelatedProjects";
import Head from "next/head";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";

const Devops = () => {
  const services = [
    {
      title: "Project Management",
      description:
        "Executing precise project management potentially geared to step-out on time; it facilitates efficient collaboration by leading the project stakeholders.",
      icon: illustrationDesignImage,
      link: "/services/project-management",
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
      icon: developmentDesignImage,
      link: "/services/qa-testing",
    },
  ];

  return (
    <>
      {/* hero section start */}
      <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-10 md:px-12  mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Expert DevOps Consulting
          </h1>
          <p className="text-base md:text-lg mt-3">
            TechCreator provides professional DevOps consulting services to help
            businesses optimize their development and operations workflows. Our
            experienced DevOps consultants assess your current processes and
            implement tailored solutions to enhance efficiency, scalability, and
            collaboration across teams.
          </p>
          <Buttons/>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={heroimage}
            alt="TechCreator will help you with professional DevOps consulting services to improve workflows in efficiency, scalability, and team collaboration"
            width={300}
            height={300}
            className="w-[80vw] md:w-[35vw]"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={devopimage1}
              alt="Reliable DevOps company providing cutting-edge and modified solutions for faster and reliable software delivery"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Partner with One of the Leading DevOps Companies
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                As one of the trusted DevOps companies, we deliver innovative
                solutions designed to meet your business needs. From
                infrastructure management to process automation, our team
                ensures seamless integration of development and IT operations
                for faster and more reliable software delivery.{" "}
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
          Automate development and operations processes with powerful DevOps tools.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Optimize workflows with CI/CD pipelines and real-time monitoring.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Enhance collaboration between teams for seamless development cycles.
          </p>
        </div>

        <div className=" w-[280px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure smooth and efficient deployments with scalable DevOps solutions.
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
            src={devopimage2}
            alt="Speed up your workflows while reducing errors through DevOps automation with shorter and more accurate outputs"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Transform Processes with DevOps Automation
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Our DevOps automation services eliminate manual tasks and
              streamline workflows, reducing errors and deployment times. We
              utilize advanced tools to automate testing, integration, and
              delivery, empowering your business to operate with greater agility
              and precision.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Empowering Growth with Business{" "}
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Our business DevOps solutions are designed to align development
              practices with organizational goals. By enhancing collaboration
              between teams, we help businesses reduce time-to-market, improve
              quality, and achieve consistent performance.
            </p>
          </div>
          <Image
            src={devopimage3}
            alt="Aligning development with business goals for quicker time-to-market, better quality, and better performance"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={devopimage4}
            alt="Get personalized DevOps support for cloud migration, CI/CD pipelines, and workflow optimization"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Get a Tailored Support
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Work with a dedicated DevOps consultant to implement strategies
              that cater to your unique challenges. Whether you need help with
              cloud migration, CI/CD pipelines, or workflow optimization, our
              consultants deliver results-driven guidance and ongoing support.
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
              Driving Efficiency with DevOps Automation
            </h2>
            <p className="text-base md:text-lg text-white webDevtext ">
              We recently partnered with a tech startup to implement DevOps
              automation, reducing their deployment time by 60%. Additionally,
              our DevOps consulting services helped an enterprise migrate to a
              cloud-based infrastructure, enabling seamless scalability and
              enhanced security.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={devopimage5}
              alt="Improved efficiency through DevOps automation cuts down time to deploy by 60% and seamless cloud migration through seamless CI/CD deployments"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <DevopsRelatedProjects />
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
    </>
  );
};

export default Devops;




export const metadata = {
  title: "DevOps Consulting | Expert DevOps Automation & Business Solutions",
  description:
    "Discover professional DevOps consulting services at TechCreator. Our expert DevOps consultants deliver tailored business DevOps solutions, automation, and process optimization.",
  alternates: {
    canonical: "https://www.techcreator.co/services/devops",
  },
};
