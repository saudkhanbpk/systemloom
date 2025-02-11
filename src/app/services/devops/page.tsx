import React from "react";
import heroimage from "../../../../public/assets/servicespages/devops.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import devopimage1 from "../../../../public/assets/servicespages/devopimag1.webp";
import devopimage2 from "../../../../public/assets/servicespages/devopimage2.webp";
import devopimage3 from "../../../../public/assets/servicespages/devopimage3.webp";
import devopimage4 from "../../../../public/assets/servicespages/devopimage4.webp";
import devopimage5 from "../../../../public/assets/servicespages/devopimage5.webp";

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

const Devops = () => {
  const categorySlug = "app-development";

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
      link: "/services/software-maintenance-services",
    },
    {
      title: "QA Testing",
      description:
        "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
      icon: developmentDesignImage,
      link: "/services/web-qa-tester",
    },
  ];


  const devopsFaqs = [
    { question: "What DevOps tools do you use?", answer: "🔹 We use Docker, Kubernetes, Jenkins, Terraform, AWS, and Azure DevOps." },
    { question: "How does DevOps improve software development?", answer: "🔹 DevOps automates deployment, enhances security, and speeds up releases." },
    { question: "Do you offer CI/CD pipeline setup?", answer: "🔹 Yes, we set up automated CI/CD pipelines for faster, error-free deployments." },
    { question: "How do you ensure infrastructure security?", answer: "🔹 We use firewalls, encryption, and vulnerability scanning to protect your system." },
    { question: "Can you migrate existing infrastructure to the cloud?", answer: "🔹 Absolutely! We handle AWS, Google Cloud, and Azure cloud migrations." },
  ];


  return (
    <>
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Expert DevOps Consulting
          </h1>
          <p className="text-base lg:text-lg mt-3">
          TechCreator provides professional DevOps consulting services to help businesses optimize their development and operations workflows. Our experienced DevOps consultants assess your current processes and implement tailored solutions to enhance efficiency, scalability, and collaboration across teams.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={heroimage}
            alt="TechCreator will help you with professional DevOps consulting services to improve workflows in efficiency, scalability, and team collaboration"
            width={400}
            height={300}
            className=" "
          />
        </div>
      </div>
      {/* hero section end */}

      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        {/* FeatureSection section start */}
        <div className=" ">
          <div className="flex flex-col lg:flex-row items-center xl:px-0 lg:px-4 px-3    lg:mt-12 my-6  relative   ">
            <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[350px] z-10">
              <Image
                src={devopimage1}
                alt="Bespoke Web Development to attract your audience"
                width={300}
                height={450}
                className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
              />
            </div>
            <div className="bg-[#9A00FF] w-full  h-auto p-6 mt-8 lg:mt-0 ">
              <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3">
                Partner with One of the Leading DevOps Companies
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed w-full text-wrap">
                As one of the trusted DevOps companies, we deliver innovative solutions designed to meet your business needs. From infrastructure management to process automation, our team ensures seamless integration of <Link href="/services/web-development" className="cursor-pointer underline"> development and IT operations</Link> for faster and more reliable software delivery.Enhancing collaboration, efficiency, and scalability across operations drives continuous improvement. Accelerate product releases and stay ahead in the competitive market with optimized DevOps practices.
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
            Automate development and operations processes with powerful DevOps tools.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Optimize workflows with CI/CD pipelines and real-time monitoring.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Enhance collaboration between teams for seamless development cycles.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Ensure smooth and efficient deployments with scalable DevOps solutions.
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
              src={devopimage2}
              alt="Speed up your workflows while reducing errors through DevOps automation with shorter and more accurate outputs"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-2">
              Transform Processes with DevOps Automation
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Our DevOps automation services eliminate manual tasks and streamline workflows, reducing <Link href="/services/web-qa-tester" className="cursor-pointer text-blue-600"> errors and deployment times</Link>. We utilize advanced tools to automate testing, integration, and delivery, empowering your business to operate with greater agility and precision.Automation drives consistency and accelerates time-to-market, enabling faster innovation. With optimized workflows, businesses can focus on strategic growth and customer satisfaction. 
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              Empowering Growth with Business
              </h2>
              <p className="text-base md:text-lg lg:text-lg text-gray-700">
              Our business DevOps solutions are designed to align development practices with organizational goals. By enhancing collaboration between teams, we help businesses reduce time-to-market, improve quality, and achieve consistent performance.These solutions foster a culture of continuous improvement, ensuring agility and efficiency across every stage of the <Link href="/" className="cursor-pointer text-blue-600">development lifecycle</Link>. With streamlined processes, your business can adapt to changes faster and drive long-term success.
              </p>
            </div>
            <Image
              src={devopimage3}
              alt="Aligning development with business goals for quicker time-to-market, better quality, and better performance "
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={devopimage4}
              alt="Get personalized DevOps support for cloud migration, CI/CD pipelines, and workflow optimization"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              Get a Tailored Support
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Work with a dedicated DevOps consultant to implement strategies that cater to your unique challenges. Whether you need help with cloud migration, CI/CD pipelines, or workflow optimization, our consultants deliver results-driven guidance and <Link href="/services/seo-services-for-small-business" className="cursor-pointer text-blue-600">ongoing support</Link>. With expert advice and personalized solutions, businesses can streamline operations and enhance performance. Continuous support ensures that your DevOps strategy evolves as your business grows and technology advances. 
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
              Driving Efficiency with DevOps Automation
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              We recently partnered with a tech startup to implement DevOps automation, reducing their deployment time by 60%. Additionally, our DevOps consulting services helped an enterprise migrate to a cloud-based infrastructure, enabling seamless scalability and enhanced security.These successful partnerships showcase the power of automation in driving efficiency and improving operational performance. By optimizing workflows and leveraging cloud solutions, businesses can achieve faster time-to-market and maintain a competitive edge.
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={devopimage5}
                alt="Improved efficiency through DevOps automation cuts down time to deploy by 60% and seamless cloud migration through seamless CI/CD deployments"
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
        
<FaqSection title="Frequently Asked Questions" faqs={devopsFaqs} />

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

        <div className=" bg-purple-600 md:mt-16 mt-6 md:mb-16 mb-9">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
      </div>
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
