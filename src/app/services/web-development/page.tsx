import React from "react";
import webDevelopmentImagehero from "../../../../public/assets/graphice design images/webdevelopment.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import webimage1 from "../../../../public/assets/ServiceDetailsImages/webImage1.png";
import webimage2 from "../../../../public/assets/ServiceDetailsImages/webserviceImage1.png";
import webimage3 from "../../../../public/assets/ServiceDetailsImages/webserviceimage2.png";
import webimage4 from "../../../../public/assets/ServiceDetailsImages/webserviceimage3.png";
import webimage5 from "../../../../public/assets/ServiceDetailsImages/webimage5.png";

// RelatedServices images
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Head from "next/head";
import WebDevRelatedProjects from "@/components/services/WebDevRelatedProjects";

const WebDevelopment = () => {
  // const services = [
  //   {
  //     title: "Product Design",
  //     description:
  //       "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  //     icon: productDesignImage,
  //   },
  //   {
  //     title: "App Design",
  //     description:
  //       "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  //     icon: appDesignImage,
  //   },
  //   {
  //     title: "Web Design",
  //     description:
  //       "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  //     icon: webDesignImage,
  //   },
  //   {
  //     title: "Development",
  //     description:
  //       "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  //     icon: developmentDesignImage,
  //   },
  //   {
  //     title: "Illustration",
  //     description:
  //       "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  //     icon: illustrationDesignImage,
  //   },
  //   {
  //     title: "Motion",
  //     description:
  //       "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
  //     icon: motionDesignImage,
  //   },
  // ];

  const services = [
    {
      title: "Ui & Ux Design",
      description:
        "Building intuitive interfaces that provide a seamless promised user experience.",
      icon: webDesignImage,
    },
    {
      title: "SEO & Content Writing",
      description:
        "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
      icon: motionDesignImage,
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: illustrationDesignImage,
    },
  ];

  return (
    <div>

      {/* hero section start */}
      <div className="bg-black w-full lg:min-h-screen md:pt-36 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-0  md:px-12  mt-20">
          <h1 className="text-3xl lg:text-5xl  font-bold">
          Empower your business with custom web development
          </h1>
          <p className="text-base lg:text-lg mt-3">
          Techcreator accelerates your business growth by delivering custom web solutions designed to meet your business objectives. With a team of skilled, experienced, and dedicated developers, we provide tailored websites for industries like Healthcare, Real Estates, Restaurants, E-Commerce stores- that ensure seamless functionality and innovation.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={webDevelopmentImagehero}
            alt="Custom Web Development and Design"
            width={300}
            height={300}
            className="w-[50vw] md:w-[25vw] lg:mt-52 "
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={webimage1}
              alt="Bespoke Web Development to attract your audience"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h2 className="text-xl sm:text-3xl font-bold mb-3">
                Bespoke Web Development Tailored to Your Vision
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                Stand out from the crowd with{" "}
                <strong>bespoke web development</strong> crafted to meet your
                specific needs. Our team of skilled developers creates custom
                solutions that align with your brand and business goals,
                offering unique designs and functionalities to captivate your
                audience and elevate your online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
      <h2 className="text-center text-3xl font-bold mt-52">Why Choose Us</h2>
      <div className='my-16 mt-20 flex flex-wrap justify-center  gap-7 border-b  "'>
        <div className="border-r  w-[280px] p-3">
          <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Build scalable websites with modern technologies tailored to your business goals.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure seamless performance and intuitive user experience with our web solutions.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Integrate powerful features and tools to enhance your website’s functionality.
          </p>
        </div>

        <div className=" w-[280px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Deliver projects on time with precision and a focus on quality.
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
            src={webimage2}
            alt="Digital Web Development solution for your business needs"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Custom Web App Development for Dynamic Digital Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              <strong>
                We love working on fresh concepts, ideas and technologies that
                break industry standards and generate online traction.
              </strong>{" "}
              A solution that goes beyond a traditional website? Our custom web
              app development services deliver feature-rich, interactive
              applications that cater to your business's unique requirements. We
              specialize in building web apps that enhance user engagement and
              streamline your operations.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              PHP Web Development Services for Robust Performance
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              As experts in <strong>PHP web development services,</strong> we
              build scalable and secure websites that deliver exceptional
              performance. Whether you need a content-rich website, an
              e-commerce platform, or a web application, our developers leverage
              the flexibility of PHP to meet your demands.
            </p>
          </div>
          <Image
            src={webimage3}
            alt="Execute perfect planing with php web development services "
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={webimage4}
            alt="progressive web app development company providing its best"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-7">
              Progressive Web App Development Company: Innovation at Its Best
            </h2>
            <p className="text-base md:text-lg text-gray-700 mt-3">
              <strong>Taste</strong> the future of web technology with our
              expertise as a{" "}
              <strong>progressive web app development company.</strong> We
              create applications that combine the best of web and mobile
              experiences, ensuring fast loading times, offline functionality,
              and seamless user interaction across all devices.
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
              Comprehensive Web Development Services with Ongoing Support
            </h2>
            <p className="text-base md:text-lg text-white webDevtext ">
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
              src={webimage5}
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
      <WebDevRelatedProjects />
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

export default WebDevelopment;



export const metadata = {
  title: "Progressive Web App Development Company | TechCreator",
  description:
    "TechCreator provides full-fledged Progressive Web App development Services for your business online needs. Get a more attractive and customized solution here.",
  alternates: {
    canonical: "https://www.techcreator.co/services/web-development",
  },
};