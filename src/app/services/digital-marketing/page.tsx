import React from "react";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import digitalMarketingHeroImage from "../../../../public/assets/graphice design images/digitalmarketionHeroImage.png";
import marketingImage1 from "../../../../public/assets/graphice design images/digitalmarketing1.png";
import marketingImage2 from "../../../../public/assets/graphice design images/digitalmarketing2.png";
import marketingImage3 from "../../../../public/assets/graphice design images/digitalmarketing3.png";
import marketingImage4 from "../../../../public/assets/graphice design images/digitalmarketing4.png";
import marketingImage5 from "../../../../public/assets/graphice design images/digitalmarketing5.png";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import MarketingRelatedProjects from "@/components/services/MarketingRelatedProjects";
import Head from "next/head";

const DigitalMarketing = () => {
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
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
      icon: webDesignImage,
    },
  ];

  return (
    <div>
 
      {/* hero section start */}
      <div className="bg-black w-full lg:min-h-screen md:pt-36 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-0  md:px-12  mt-20">
          <h1 className="text-3xl lg:text-5xl  font-bold">
            Digital Marketing Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
            At TechCreator, we combine creativity and strategy to offer tailored{" "}
            <strong>digital marketing services</strong> that meet your unique
            business goals. From effective <strong>branding</strong> to
            result-driven campaigns, our team’s expertise ensures your online
            success.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={digitalMarketingHeroImage}
            alt="Bespoke internet marketing services for branding and online success"
            width={300}
            height={300}
            className="w-[50vw] md:w-[35vw] lg:mt-30 "
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={marketingImage1}
              alt="Custom social media marketing to create real connections and to grow the audience"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[700px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-32">
              <h1 className="text-2xl sm:text-3xl md:w-[440px] font-bold mb-3 ">
                Social Media Marketing: Your Audience, Engaged
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                Our personalized approach to{" "}
                <strong>social media marketing</strong> helps brands foster
                authentic connections. With a deep understanding of platform
                algorithms, we craft compelling content and manage campaigns on
                Instagram, Facebook, and beyond to captivate and grow your
                audience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
      <div className='my-16 mt-28 flex flex-wrap justify-center gap-7 border-b  "'>
        <div className="border-r  w-[300px] p-3">
          <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Grow your online presence with targeted digital marketing campaigns.
          </p>
        </div>

        <div className="border-r w-[300px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Boost engagement with creative social media strategies and analytics.
          </p>
        </div>

        <div className="border-r w-[300px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Leverage data to drive traffic and convert leads effectively.
          </p>
        </div>

        <div className=" w-[300px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Achieve consistent results with data-driven and time-tested techniques.
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
            src={marketingImage2}
            alt=" PPC campaigns designed for traffic and conversion maximization"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              PPC Campaigns Designed for Maximum ROI
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              As specialists in <strong>PPC,</strong> we design campaigns that
              deliver high-impact results. Our team analyzes your business needs
              and targets the right audience with precision, ensuring your
              ads—whether Google or <strong>Meta Ads</strong>—generate maximum
              traffic and conversions.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Insta and FB Ads That Deliver Impact
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Our expertise in <strong>Insta and FB ads</strong> guarantees
              attention-grabbing campaigns that drive engagement and sales. We
              combine creativity with advanced analytics to craft ads that
              resonate with your audience and achieve your goals.
            </p>
          </div>
          <Image
            src={marketingImage3}
            alt="Engaging Insta and FB ads that drive sales with creativity and analytics"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={marketingImage4}
            alt=" Branding that defines you and leaves a lasting impression"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Strategic Branding For Your Business
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Branding is more than a logo—it’s how the world perceives your
              business. Our experts take the time to understand your vision and
              values, delivering branding solutions that define your identity
              and leave a lasting impression on your audience.
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h1>
            <p className="text-base md:text-lg text-white webDevtext ">
              With experience across multiple sectors, we bring personalized
              expertise to every project. For a retail client, our strategic{" "}
              <strong>Meta Ads</strong> increase conversions by 60%. For
              startups, our targeted <strong>social media marketing </strong>
              campaigns have driven audience growth and brand loyalty.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={marketingImage5}
              alt="Bespoke solutions show 60% increase in conversion and audience growth"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <MarketingRelatedProjects />
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

export default DigitalMarketing;



export const metadata = {
  title: "Digital Marketing Experts | Social Media Marketing & PPC Services",
  description:
    "TechCreator offers expert digital marketing services, including social media marketing, branding, and PPC campaigns. Experience personalized solutions for measurable results.",
  alternates: {
    canonical: "https://www.techcreator.co/services/digital-marketing",
  },
};
