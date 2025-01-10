import React from "react";
import heroappdevelopmentImage from "../../../../public/assets/servicespages/appimage.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import appImage1 from "../../../../public/assets/servicespages/appimage1.webp";
import appImage2 from "../../../../public/assets/servicespages/appImage2.webp";
import appImage3 from "../../../../public/assets/servicespages/appImage3.webp";
import appImage4 from "../../../../public/assets/servicespages/appImag4.webp";
import appImage from "../../../../public/assets/servicespages/MobileAppDevelopment.webp";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";

const MobileAppDevelopment = () => {
  const categorySlug = "app-development";
  const services = [
    {
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: productDesignImage,
      link: "/services/software-maintenance",
    },

    {
      title: "Ui & Ux Design",
      description:
        "Building intuitive interfaces that provide a seamless promised user experience.",
      icon: webDesignImage,
      link: "/services/ui-ux-design",
    },

    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: motionDesignImage,
      link: "/services/graphic-designing",
    },
  ];

  return (
    <div>
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Empower your business with custom web development
          </h1>
          <p className="text-base lg:text-lg mt-3">
          Techcreator accelerates your business growth by delivering custom web solutions designed to meet your business objectives. With a team of skilled, experienced, and dedicated developers, we provide tailored websites for industries like Healthcare, Real Estates, Restaurants, E-Commerce stores- that ensure seamless functionality and innovation.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={heroappdevelopmentImage}
            alt="Mobile App Design and development for your business"
            width={400}
            height={300}
            className=" "
          />
        </div>
      </div>
      {/* hero section end */}

      <div className="max-w-full xl:px-16 md:px-8 sm:px-3 px-2 mx-auto ">
        {/* FeatureSection section start */}
        <div className="flex flex-col lg:flex-row items-center xl:px-0 lg:px-4 px-3    lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[300px] z-10 ">
            <Image
              src={appImage}
              alt="Bespoke Web Development to attract your audience"
              width={300}
              height={450}
              className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full  h-auto p-6 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
              Healthcare Mobile App Development Transforming Industries
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
              As a trusted healthcare mobile app development company, we craft innovative solutions that enhance patient care and streamline medical workflows. Our services include secure data management, user-friendly interfaces, and tailored features to meet the unique needs of healthcare providers and patients. We bridge the gap between technology and healthcare for better outcomes and improved efficiency.
              </p>
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
              Design and develop robust mobile applications for iOS and Android.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
              Create user-friendly apps with seamless navigation and stunning
              interfaces.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
              Incorporate cutting-edge technologies for faster and smoother
              performance.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
              Ensure on-time delivery with a focus on quality and user
              satisfaction.
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
              src={appImage1}
              alt="Flutter Mobile App Development: Enjoy the process"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-2">
                Flutter Mobile App Development for High-Performance Solutions
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
                Our expertise in <strong>Flutter mobile app development</strong>{" "}
                enables us to deliver fast, reliable, and visually consistent
                apps for both iOS and Android platforms. Leveraging this
                inventive framework, we create apps that provide smooth
                performance, enhanced flexibility, and a unified codebase,
                saving time and resources.
                From startups to enterprises, we craft solutions tailored to diverse business needs. With Flutter, we ensure a seamless user experience and quick time-to-market for your app. Our focus on modern design and robust functionality guarantees apps that stand out in the competitive mobile market. 
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
                Your Choice for Multi-Device Reach
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
                Our cross-platform{" "}
                <strong>mobile app development services</strong> enable
                businesses to reach a wider audience with a single solution. We
                ensure your app functions seamlessly across multiple devices and
                operating systems, offering a consistent experience to all users
                while optimizing development efficiency.
                By using a unified codebase, we reduce costs and speed up the development process. This approach allows your business to stay agile and adapt quickly to market changes.
              </p>
            </div>
            <Image
              src={appImage2}
              alt="cross-platform mobile app development services"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={appImage3}
              alt="Enterprise mobile app development company"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
                Enhancing Efficiency while Optimizing Functionality
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
                Enterprise <strong>mobile app development company</strong>{" "}
                specializes in enhancing productivity and streamlining
                operations. We develop secure, scalable apps that empower
                businesses to manage workflows, collaborate effectively, and
                achieve organizational goals.
                Our solutions are tailored to meet the unique needs of your business, ensuring seamless integration with existing systems. With a focus on user-friendly interfaces, we deliver apps that improve performance and drive business growth. 
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
                Recent Work: Redefining Mobile Solutions
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
                We recently collaborated with a leading startup to deliver a
                cross-platform mobile app development project, enabling them to
                reach users across iOS and Android seamlessly. Additionally, we
                developed a specialized healthcare app for a clinic, integrating
                appointment scheduling, patient records, and secure
                communication features, transforming their service delivery.   
                Choose TechCreator to turn your mobile app ideas into reality
                with innovative solutions designed to meet your business
                objectives.
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={appImage4}
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

export default MobileAppDevelopment;

export const metadata = {
  title: "Cross-Platform Mobile App Design and Development | TechCreator",
  description:
    "Explore expert mobile app design and development services at TechCreator. Specializing in Flutter, cross-platform, healthcare, and enterprise app solutions tailored to meet your business needs.",
  alternates: {
    canonical: "https://www.techcreator.co/services/app-development",
  },
};
