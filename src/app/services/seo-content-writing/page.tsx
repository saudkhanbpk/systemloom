import React from "react";
import SEOImage from "../../../../public/assets/ServiceDetailsImages/seo1.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import seoimage1 from "../../../../public/assets/graphice design images/seoimage1.png";
import seoimage2 from "../../../../public/assets/graphice design images/seoimade2.png";
import seoimage3 from "../../../../public/assets/graphice design images/seoimage3.png";
import seoimage4 from "../../../../public/assets/graphice design images/seoimage4.png";
import seoimage5 from "../../../../public/assets/graphice design images/seoimage5.png";

// image for RecentWorks
import image from "../../../../public/assets/RecentWork/unsplash_IyaNci0CyRk.png";
import image1 from "../../../../public/assets/RecentWork/unsplash_7ZWVnVSaafY.png";
import image2 from "../../../../public/assets/RecentWork/unsplash_qC2n6RQU4Vw.png";
import image3 from "../../../../public/assets/RecentWork/unsplash_m_HRfLhgABo.png";
import { Pencil, Heart } from "lucide-react";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import SeoContentWritingRelatedProjects from "@/components/services/SerContentWritingRelatedProjects";
import Head from "next/head";

const SeoContentWriting = () => {
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating powerful mobile applications that will capture users and enhance your brand.",
      icon: appDesignImage,
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
      <Head>
        <title>
          SEO Content Writing Services | Technical SEO Agency & Consulting
        </title>
        <meta
          name="description"
          content="TechCreator offers expert SEO content writing services and SEO consulting services. Partner with a leading technical SEO agency to boost visibility with a tailored SEO content strategy."
        />
      </Head>
      {/* hero section start */}
      <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-10 md:px-12  mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold">
            SEO Content Writing Services
          </h1>
          <p className="text-base md:text-lg mt-3">
            At TechCreator, we provide professional SEO content writing services
            designed to align with your business goals and improve search engine
            visibility. With a focus on quality and relevance, our content
            engages audiences and supports a comprehensive SEO content strategy
            that drives measurable results.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center md:my-20">
          <Image
            src={SEOImage}
            alt=" Improve search engine results with professional SEO content writing services, which deliver results and engage audiences"
            width={300}
            height={300}
            className="w-[60vw] md:w-[30vw]"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={seoimage1}
              alt="Raise your site's ranking with the help of a trusted technical SEO agency that optimizes content for success in search engines"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                Go-To Technical SEO Agency
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                As a trusted <strong>technical SEO agency,</strong>. we ensure
                every piece of content is optimized for search engine success.
                From metadata to keyword placement, our team blends technical
                expertise with creative writing to help your site rank higher
                and convert better.{" "}
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
            Build a dashboard in <span className="font-bold">2 minutes</span>,
            refresh on demand.
          </p>
        </div>

        <div className="border-r w-[300px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Build a dashboard in <span className="font-bold">2 minutes</span>,
            refresh on demand.
          </p>
        </div>

        <div className="border-r w-[300px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Build a dashboard in <span className="font-bold">2 minutes</span>,
            refresh on demand.
          </p>
        </div>

        <div className=" w-[300px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
            Build a dashboard in <span className="font-bold">2 minutes</span>,
            refresh on demand.
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
            src={seoimage2}
            alt="Achieve better visibility with expert SEO consulting offering strategy, keyword research, and page optimization"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Strategic Consulting for Better Visibility
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Beyond content creation, we offer{" "}
              <strong>SEO consulting services</strong> to help you craft a
              results-driven strategy. Whether you need guidance on keyword
              research or optimizing existing pages, our consultants ensure your
              content aligns with your broader SEO goals.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Optimization For Every Business Niche
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Our <strong>SEO content strategy</strong> focuses on natural
              keyword integration that aligns with search intent. By
              incorporating industry-specific keywords, we help your website
              attract targeted traffic and boost engagement, leading to improved
              rankings and conversions.
            </p>
          </div>
          <Image
            src={seoimage3}
            alt="Drive targeted traffic with every business niche's SEO content-enhanced experiences, driving engagement and conversions"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={seoimage4}
            alt=" Boost authority with technical SEO expertise in delivering content that attracts, retains visitors, and supports long-term growth"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Enhance Authority with Technical SEO Expertise
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Combining <strong>SEO content writing services</strong> with
              technical SEO knowledge, we ensure that your website content not
              only attracts but also retains visitors. From readability
              improvements to optimized linking structures, we deliver content
              that supports long-term growth.
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
              Results That Speak for Themselves
            </h1>
            <p className="text-base md:text-lg text-white webDevtext ">
              In a recent project, we partnered with an e-commerce platform to
              revamp their <strong>SEO content strategy,</strong> resulting in a
              50% increase in organic traffic. Additionally, as a{" "}
              <strong>technical SEO agency,</strong> we helped a tech company
              optimize its blog content, improving keyword rankings and audience
              engagement.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={seoimage5}
              alt="With a 50% increase in organic traffic and other measurable results, expert SEO strategies are producing improved keyword rankings"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <SeoContentWritingRelatedProjects />
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

export default SeoContentWriting;
