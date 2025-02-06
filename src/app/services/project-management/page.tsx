import React from "react";
import projectManagementImage from "../../../../public/assets/servicespages/projectmanagement.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import projectimage1 from "../../../../public/assets/servicespages/project1.webp";
import projectimage2 from "../../../../public/assets/servicespages/project2.webp";
import projectimage3 from "../../../../public/assets/servicespages/project3.webp";
import projectimage4 from "../../../../public/assets/servicespages/project4.webp";
import projectimage5 from "../../../../public/assets/servicespages/project5.webp";
import webimage3 from "../../../../public/assets/servicespages/webserviceimage2.webp";


// RelatedServices images
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";

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
      link: "/services/software-maintenance-services",
    },
    {
      title: "QA Testing",
      description:
        "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
      icon: illustrationDesignImage,
      link: "/services/web-qa-tester",
    },
  ];


  const projectManagementFaqs = [
    { question: "What project management methodologies do you follow?", answer: "🔹 We use Agile, Scrum, and Kanban for efficient project delivery." },
    { question: "How do you track project progress?", answer: "🔹 We use tools like Jira, Trello, and Asana for real-time tracking." },
    { question: "How do you handle delays and risks in projects?", answer: "🔹 We conduct risk assessments and set buffer timelines to handle challenges." },
    { question: "Do you offer remote project management?", answer: "🔹 Yes! We manage projects remotely with effective communication tools." },
    { question: "Can you help manage a large-scale IT project?", answer: "🔹 Yes, we specialize in enterprise-level project management and execution." },
  ];

  return (
    <div>
     
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Efficient Project Management Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
          <Link href="/" className="cursor-pointer text-blue-600">TechCreator</Link> offers reliable project management services designed to streamline workflows and ensure timely delivery of projects. Our team focuses on aligning project objectives with your business goals, providing clarity, structure, and seamless execution.
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
                src={projectimage1}
                alt="Bespoke Web Development to attract your audience"
                width={300}
                height={450}
                className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
              />
            </div>
            <div className="bg-[#9A00FF] w-full  h-auto p-6  mt-8 lg:mt-0 ">
              <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
                Efficient Project Management Services
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
                <Link href="/" className="cursor-pointer underline">TechCreator</Link> offers reliable <strong>project management services</strong> designed to streamline workflows and ensure timely delivery of projects. Our team focuses on aligning project objectives with your business goals, providing clarity, structure, and seamless execution.With a keen focus on communication and collaboration, projects are delivered on time and within budget. Our approach minimizes risks and maximizes project success, driving growth and efficiency. 
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
            Manage projects with precision using advanced tracking and analytics tools.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Ensure timely delivery with streamlined workflows and resource allocation.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Drive collaboration across teams for successful project execution.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Monitor progress in real-time to achieve project goals efficiently.
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
              src={projectimage2}
              alt="We handel every matter professionally and precisely"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-2">
              Custom Solutions for Every Challenge
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Every project is unique, and so are our solutions. We specialize in creating tailored project management strategies that address your specific needs, ensuring smooth coordination, accountability, and optimal resource utilization.
              By understanding your objectives, we provide flexible solutions that adapt as <Link href="/" className="cursor-pointer text-blue-600">your project evolves</Link> . Our proactive approach ensures potential challenges are identified and addressed early, keeping your project on track for success. 
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              Streamline Operations with Agile Project Management
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Our expertise in Agile project management empowers businesses to adapt to change, enhance team collaboration, and deliver value quickly. By implementing Agile methodologies, we ensure flexibility without compromising on quality or deadlines.Through continuous feedback and iterative development, we improve project outcomes and align with evolving business needs. This approach fosters a culture of innovation and efficiency, helping your team stay focused and motivated throughout the project lifecycle. 
              </p>
            </div>
            <Image
              src={webimage3}
              alt="Project Management Services by TechCreator "
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={projectimage4}
              alt="Best Project Management boost efficiency"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              Efficiency with End-to-End Project Oversight
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              From planning to execution, we provide comprehensive oversight to ensure every stage of your project runs smoothly. Our focus on communication, timeline adherence, and quality ensures that your projects achieve their desired outcomes with minimal disruptions.We proactively address challenges, ensuring that adjustments are made swiftly to maintain progress. With a dedicated team overseeing every aspect, your project remains aligned with your goals, leading to a successful and timely delivery. 
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
              Comprehensive Web Development Services with Ongoing Support
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              Our commitment doesn’t end with the launch of your website or app. We provide comprehensive web development services, from concept to deployment, with continuous support to ensure your platform evolves with your business. Trust us to deliver innovation, functionality, and unmatched quality in every project.With regular updates and maintenance, your platform stays ahead of the competition.
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={projectimage5}
                alt="Feature illustration"
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
        <div>
        <ClientTestimonialsSection />
<FaqSection title="Frequently Asked Questions" faqs={projectManagementFaqs} />
</div>
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

export default projectManagement;



export const metadata = {
  title: " Project Management Services | Expert Project Management Consultants",
  description:
    "TechCreator offers professional project management services with expert consultants. Streamline workflows, implement Agile methodologies, and achieve business success.",
  alternates: {
    canonical: "https://www.techcreator.co/services/project-management",
  },
};
