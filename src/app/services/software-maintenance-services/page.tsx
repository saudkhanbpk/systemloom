import React from "react";
import heroimage from "../../../../public/assets/servicespages/softwareMaintenece.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import softwareImage1 from "../../../../public/assets/servicespages/softImage1.webp";
import softwareImage2 from "../../../../public/assets/servicespages/softimage2.webp";
import softwareImage3 from "../../../../public/assets/servicespages/softImage3.webp";
import softwareImage4 from "../../../../public/assets/servicespages/softImage4.webp";
import softwareImage5 from "../../../../public/assets/servicespages/softimage5.webp";

// RelatedServices images
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";

const SoftwareMaintenance = () => {
  const categorySlug = "software-maintenance-services";
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
      title: "QA Testing",
      description:
        "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
      icon: motionDesignImage,
      link: "/services/web-qa-tester",
    },
  ];


  const softwaremaintenanceFaqs = [
    { question: "What type of software maintenance do you provide?", answer: " We offer bug fixes, updates, performance optimization, and security patches." },
    { question: "Can you maintain software built by another company?", answer: " Yes, we take over legacy software and improve its efficiency." },
    { question: "How often should software be updated?", answer: " Regular updates every 3-6 months help improve security and speed." },
    { question: "Do you provide 24/7 support for critical systems?", answer: " Yes, we offer emergency support for mission-critical applications." },
    { question: "Can you migrate old software to new technologies?", answer: " Yes, we modernize outdated software into scalable, cloud-based solutions." },
  ];


  return (
    <div>
     
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Reliable Software Maintenance Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
          At <Link href="/" className="cursor-pointer text-blue-600">TechCreator</Link>, our software maintenance services are designed to keep your applications running smoothly. From <Link href="/services/web-qa-tester" className="cursor-pointer text-blue-600">bug fixes</Link> to performance optimization, we ensure your software stays updated, secure, and aligned with your evolving business needs.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={heroimage}
            alt="Boost stability and growth with software solutions that improve tracking efficiency and reduce disruptions"
            width={300}
            height={300}
            className=" "
          />
        </div>
      </div>
      {/* hero section end */}

      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9 ">
        {/* FeatureSection section start */}
        <div className=" ">
        <div className="flex flex-col lg:flex-row items-center xl:px-0 lg:px-4 px-3    lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[300px] z-10 ">
            <Image
              src={softwareImage1}
              alt="Bespoke Web Development to attract your audience"
              width={300}
              height={450}
              className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full  h-auto p-6  mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
              Specialized Maintenance and Support Services
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
              Our comprehensive software maintenance and support services include troubleshooting, upgrades, and feature enhancements. With a dedicated team of experts, we provide consistent support to minimize downtime and maximize operational efficiency.Our support system is much robust that any issue arises, it is our duty to ensure seamless functionality and upgradation of your systems. We come with one goal of growing your business and flawless functionality.
 
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
            Keep your software running smoothly with regular updates and maintenance.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Identify and resolve issues to enhance software performance and reliability.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Implement upgrades to align with the latest technologies and trends.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Provide comprehensive support to address all your software maintenance needs.
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
              src={softwareImage2}
              alt="Streamlined construction equipment maintenance software for tracking, scheduling, and monitoring performance"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-7">
              Enhance Operations with Construction
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              For industries relying on heavy machinery, our construction equipment maintenance software ensures streamlined tracking and management of equipment. From scheduling maintenance to monitoring performance, we deliver tailored solutions that enhance reliability and reduce costs.We provide you with the option of automatic maintenance and let you know the performance of your software also preventing costly downtime. To operate well and meet your need, we have got solutions for you by improving efficiency and long lasting lifespan of your equipment.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-7">
              Proactive Solutions for Long-Term Software Success
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Our proactive approach to software maintenance services focuses on identifying potential issues before they occur. By implementing <Link href="/services/project-management" className="cursor-pointer text-blue-600" >regular updates and monitoring</Link>, we ensure your software remains secure, efficient, and ready for future challenges.Techcreator adapt such approaches to avoid disruptions and keep your software running without any interruption. Our constant support system keeps you ahead of the trends and ensures better performance.  
              </p>
            </div>
            <Image
              src={softwareImage3}
              alt="Take advantage of enhanced security, efficiency, and longevity with proactive maintenance solutions "
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={softwareImage4}
              alt="Software maintenance plans developed to cater to unique business needs and the peculiarities of distinct industries"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-7">
              Custom Maintenance Plans for Business Needs
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700 mt-3">
              Every business is unique, and so are its software requirements. At <Link href="/" className="cursor-pointer text-blue-600">TechCreator</Link>, we craft maintenance plans tailored to your goals, whether you need ongoing software maintenance and support services or assistance with industry-specific tools like construction equipment maintenance software.Before execution or practical work, we go through a proper plan in order to understand your needs that align perfectly to your business. We have expertise that analyze the basic needs and ensure your software always meet your core business objectives.  
              </p>
            </div>
          </div>
        </div>
        {/* DiagonalFeatureSection section end */}

        {/* FramedFeatureSection section start */}
        <div className="lg:relative bg-[#9A00FF] sm:mt-0 mt-2 lg:h-[450px]  mx-auto md:py-4 md:mt-28 lg:mb-32 md:mb-6">
          <div className="lg:relative px-5 flex flex-col lg:flex-row  items-center lg:items-start gap-10">
            {/* Text Content */}
            <div className="lg:relative webDevtext z-10 lg:max-w-[600px] xl:max-w-[800px]  lg:p-5  text-wrap text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl mt-2 font-bold text-white mb-4">
              Ensuring Stability and Growth
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              We recently helped a construction company implement construction equipment maintenance software, improving their tracking efficiency by 40%. Additionally, our software maintenance services have enabled businesses across industries to reduce operational disruptions and enhance performance.Our clients have already noted improvements in their workflow and have credited us for our hardwrok. Positive feedback reflects our dedication to digital solutions. We are ambitious about your ease and stability to your business with our constant support system. 
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={softwareImage5}
                alt="Permit stability and growth through software solutions for improved tracking efficiency while ensuring mere minimal disruption"
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
        
<FaqSection title="Frequently Asked Questions" faqs={softwaremaintenanceFaqs} />

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

        <div className=" bg-purple-600  md:mb-16 mb-9">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
      </div>
    </div>
  );
};

export default SoftwareMaintenance;



export const metadata = {
  title: "Software Maintenance Services | Maintenance & Support Solutions",
  description:
    "TechCreator offers expert software maintenance services, including construction equipment maintenance software and support. Ensure seamless performance with our maintenance solutions.",
  alternates: {
    canonical: "https://www.techcreator.co/services/software-maintenance-services",
  },
};