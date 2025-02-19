import React from "react";
import SEOImage from "../../../../public/assets/servicespages/seoheroimage.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import seoimage1 from "../../../../public/assets/servicespages/seoimage1.webp";
import seoimage2 from "../../../../public/assets/servicespages/seoimade2.webp";
import seoimage3 from "../../../../public/assets/servicespages/seoimage3.webp";
import seoimage4 from "../../../../public/assets/servicespages/seoimage4.webp";
import seoimage5 from "../../../../public/assets/servicespages/seoimage5.webp";


// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";

const SeoContentWriting = () => {
  const categorySlug = "seo-services-for-small-business";
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating powerful mobile applications that will capture users and enhance your brand.",
      icon: appDesignImage,
      link: "/services/mobile-app-development-company",
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: motionDesignImage,
      link: "/services/affordable-graphic-design-services",
    },
  ];

  const seoFaqs = [
    { question: "What is included in your SEO services?", answer: " We offer keyword research, on-page SEO, backlinks, and content optimization." },
    { question: "How long does it take to see SEO results?", answer: " SEO results typically take 3-6 months, depending on competition." },
    { question: "Do you provide blog writing and content marketing?", answer: " Yes! We create SEO-friendly blogs, articles, and website content." },
    { question: "Can SEO help my local business?", answer: " Yes, our Local SEO strategies improve Google rankings in your area." },
    { question: "How do you track SEO performance?", answer: " We provide monthly reports and real-time analytics dashboards." },
  ];

  return (
    <div>
      
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 style={{lineHeight:1.2}} className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          SEO Content Writing Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
          At TechCreator, we provide professional SEO content writing services designed to align with your business goals and improve search engine visibility. With a focus on quality and relevance, our content engages audiences and supports a comprehensive SEO content strategy that drives measurable results.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={SEOImage}
            alt="Improve search engine results with professional SEO content writing services, which deliver results and engage audiences"
            width={300}
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
                src={seoimage1}
                alt="Bespoke Web Development to attract your audience"
                width={300}
                height={450}
                className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
              />
            </div>
            <div className="bg-[#9A00FF] w-full  h-auto p-6  mt-8 lg:mt-0 ">
              <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
                Go-To Technical SEO Agency
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
                As a trusted technical SEO agency, we ensure every piece of content is optimized for search engine success. From metadata to keyword placement, our team blends technical expertise with creative writing to help your site rank higher and convert better.We conduct thorough audits to identify and fix any SEO issues, ensuring your website performs at its best. By focusing on on-page optimization, site speed, and mobile responsiveness, we drive organic traffic and improve user engagement. 
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
            Improve your search engine rankings with optimized and engaging content.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Craft compelling content tailored to your audience and business goals.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Implement effective strategies to drive traffic and boost online visibility.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Deliver consistent and high-quality content on time to meet your needs.
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
              src={seoimage2}
              alt="Achieve better visibility with expert SEO consulting offering strategy, keyword research, and page optimization"
              width={300}
              height={300}
              className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-2">
              Strategic Consulting for Better Visibility
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Beyond content creation, we offer SEO consulting services to help you craft a results-driven strategy. Whether you need guidance on keyword research or optimizing existing pages, our consultants ensure your content aligns with your broader SEO goals.We focus on actionable insights that improve search rankings and drive targeted traffic. With continuous monitoring and adjustments, we help your business stay competitive in ever-evolving search engine algorithms.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              Optimization For Every Business Niche
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Our SEO content strategy focuses on natural keyword integration that aligns with search intent. By incorporating industry-specific keywords, we help your website attract targeted traffic and boost engagement, leading to improved rankings and conversions.We create customized content plans tailored to your business's unique needs, ensuring that your message resonates with the right audience. This approach not only increases visibility but also builds long-term trust with your customers. 
              </p>
            </div>
            <Image
              src={seoimage3}
              alt="Drive targeted traffic with every business niche's SEO content-enhanced experiences, driving engagement and conversions "
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={seoimage4}
              alt="Boost authority with technical SEO expertise in delivering content that attracts, retains visitors, and supports long-term growth"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-2">
              Enhance Authority with Technical SEO Expertise
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              Combining SEO content writing services with technical SEO knowledge, we ensure that your website content not only attracts but also retains visitors. From readability improvements to optimized linking structures, we deliver content that supports long-term growth.Our approach strengthens your site’s authority in search engines, driving higher rankings and sustained traffic. By addressing technical issues, we improve user experience and ensure that your content reaches its full potential.
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
              Results That Speak for Themselves
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              In a recent project, we partnered with an e-commerce platform to revamp their SEO content strategy, resulting in a 50% increase in organic traffic. Additionally, as a technical SEO agency, we helped a tech company optimize its blog content, improving keyword rankings and audience engagement.These successes showcase our ability to drive measurable improvements and deliver lasting results. By aligning strategies with business objectives, we ensure that every optimization contributes to overall growth and visibility.
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={seoimage5}
                alt="With a 50% increase in organic traffic and other measurable results, expert SEO strategies are producing improved keyword rankings"
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
     
<FaqSection title="Frequently Asked Questions" faqs={seoFaqs} />

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

export default SeoContentWriting;



export const metadata = {
  title: "SEO Content Writing Services | Technical SEO Agency & Consulting",
  description:
    "TechCreator offers expert SEO content writing services and SEO consulting services. Partner with a leading technical SEO agency to boost visibility with a tailored SEO content strategy.",
  alternates: {
    canonical: "https://www.techcreator.co/services/seo-services-for-small-business",
  },
};
