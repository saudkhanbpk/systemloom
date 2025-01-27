import React from "react";
import qatestinImage from "../../../../public/assets/servicespages/qatesting.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import qaimage1 from "../../../../public/assets/servicespages/qaimage1.webp";
import qaimage2 from "../../../../public/assets/servicespages/qaimage2.webp";
import qaimage3 from "../../../../public/assets/servicespages/qaimage3.webp";
import qaimage4 from "../../../../public/assets/servicespages/qaimage4.webp";
import qaimage5 from "../../../../public/assets/servicespages/qaimage5.webp";

// RelatedServices images
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";

const QATesting = () => {
  const categorySlug = "web-qa-tester";
  const services = [
    {
      title: "DevOps",
      description:
        "Streamlining your development pipeline for guided efficiency with automation to allow for automated daily deployment.",
      icon: developmentDesignImage,
      link: "/services/devops",
    },
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
      link: "/services/software-maintenance-services",
    },
  ];

  return (
    <div>

      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          QA Testing Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
          At TechCreator, Expert QA testing services ensure your software is flawless and reliable. From <Link href="/services/web-development" className="text-blue-600 cursor-pointer">identifying bugs</Link> to improving functionality, we help businesses deliver top-quality applications that meet user expectations.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={qatestinImage}
            alt="Assured quality through expert software testing QA testing"
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
            <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[350px] z-10">
              <Image
                src={qaimage1}
                alt="Bespoke Web Development to attract your audience"
                width={300}
                height={450}
                className=" lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
              />
            </div>
            <div className="bg-[#9A00FF] w-full  h-auto p-6 mt-8 lg:mt-0 ">
              <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
                Comprehensive Quality Assurance Testing
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
                Our quality assurance process covers every aspect of your software, from performance and usability to security. With meticulous testing techniques, we ensure that your <Link href="/services/mobile-app-development-company" className="text-blue-600 cursor-pointer">applications function</Link> seamlessly across all platforms.Our work of nature is to identify potential issues at early stages. This helps us in reducing risks and ensure to provide easy to-go platform to users. Going through thorough testing in real-world scenarios to make sure your software is ready to make impact online, delivering high performance and seamless functionality.  
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
            Conduct rigorous testing to ensure bug-free and reliable applications.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Perform detailed testing for performance, security, and compatibility.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Deliver reports with actionable insights to enhance application quality.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Ensure seamless user experience with comprehensive quality assurance.
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
              src={qaimage2}
              alt="Customized QA solutions for different sectors toward achieving error-free working"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-7">
              Specialized For Diverse Industries
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              No matter your industry, <Link href="/" className="text-blue-600 cursor-pointer">TechCreator</Link> offers tailored QA solutions. From <Link href="/e-commerce" className="text-blue-600 cursor-pointer">e-commerce</Link> to <Link href="/healthcare" className="text-blue-600 cursor-pointer">healthcare</Link> and beyond, our testing services are designed to meet the specific challenges of your domain, ensuring error-free performance.
              We have councilors to understand the unique requirements of each industry and make sure our testing methods align with your business end goals. Whether it's compliance for healthcare or scalability for e-commerce, we ensure your software meets the expectations you desire and get you to your targeted audience and results that support your business growth.  
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-7">
              Accelerate Time-to-Market with Agile QA Services
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Our Agile QA approach integrates testing throughout the development cycle. By detecting and resolving issues early, we help you speed up delivery timelines without compromising on quality or user experience.
              This continuous feedbacks loop makes sure that we are aware of the vulnerabilities of the system and allow us for faster and on <Link href="/services/project-management" className="text-blue-600 cursor-pointer">time development</Link>. With the help our experienced and hardworking team we assist you in launching your product faster and ensure reliability.
              </p>
            </div>
            <Image
              src={qaimage3}
              alt="Agile QA continues to be an invaluable way of ensuring faster delivery with impeccable quality "
              width={300}
              height={300}
              className="  sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={qaimage4}
              alt="Manual and automated testing for total security and protection of software"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-7">
              Automation and Manual Testing
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700 mt-3">
              We combine manual and automated testing methods to provide comprehensive coverage and efficient results. Our team leverages the latest tools and technologies to identify and fix vulnerabilities, ensuring your software is robust and secure.
              This dual approach allows us to address complex scenarios manually while automating repetitive tasks for faster outcomes. By striking the perfect balance between human insight and technological precision, we deliver thorough testing that guarantees seamless performance across all platforms.  
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
              Recent Work: Delivering Quality You Can Trust
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              In a recent project, our QA testing services helped a <Link href="https://patronworks.com" className="text-blue-600 cursor-pointer">SaaS company</Link> improve their application’s stability by 40%. Our comprehensive testing approach enabled the client to deliver a seamless user experience and gain higher customer satisfaction.We already have worked with e-commerce platforms when shopping online was at its peak. We enhanced their website’s load performance along with zero downtime. This level of dedication of our team has consistently helped business to build trust and do great in competitive markets. 
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={qaimage5}
                alt="QA testing increases SaaS app stability by 40%, thus enabling optimal user experience"
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
