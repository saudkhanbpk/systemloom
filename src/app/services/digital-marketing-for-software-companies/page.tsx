import React from "react";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import digitalMarketingHeroImage from "../../../../public/assets/servicespages/digitalmarketionHeroImage.webp";
import marketingImage1 from "../../../../public/assets/servicespages/digitalmarketing1.webp";
import marketingImage2 from "../../../../public/assets/servicespages/digitalmarketing2.webp";
import marketingImage3 from "../../../../public/assets/servicespages/digitalmarketing3.webp";
import marketingImage4 from "../../../../public/assets/servicespages/digitalmarketing4.webp";
import marketingImage5 from "../../../../public/assets/servicespages/digitalmarketing5.webp";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";

const DigitalMarketing = () => {
  const categorySlug = "digital-marketing-for-software-companies";
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
      link: "/services/web-development",
    },
    {
      title: "SEO & Content Writing",
      description:
        "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
      icon: motionDesignImage,
      link: "/services/seo-services-for-small-business",
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: webDesignImage,
      link: "/services/affordable-graphic-design-services",
    },
  ];

  const digitalMarketingFaqs = [
    { question: "What services are included in digital marketing?", answer: " We offer social media marketing, PPC ads, email marketing, and SEO." },
    { question: "Do you manage social media accounts?", answer: " Yes, we handle Facebook, Instagram, LinkedIn, and Twitter marketing." },
    { question: "How do you track ad campaign performance?", answer: " We provide real-time analytics and conversion tracking." },
    { question: "Can you run paid ad campaigns?", answer: " Yes! We manage Google Ads, Facebook Ads, and LinkedIn Ads." },
    { question: "How long does it take to see digital marketing results?", answer: " Organic marketing takes 3-6 months, while paid ads show results instantly." },
  ];

  return (
    <div>
 
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 style={{lineHeight:1.2}} className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Digital Marketing Services
          </h1>
          <p className="text-base lg:text-lg mt-3">
          At TechCreator, we combine creativity and strategy to offer tailored <strong>digital marketing services</strong> that meet your unique business goals. From effective branding to result-driven campaigns, our team’s expertise ensures your online success.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={digitalMarketingHeroImage}
            alt="Bespoke internet marketing services for branding and online success"
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
                src={marketingImage1}
                alt="Bespoke Web Development to attract your audience"
                width={300}
                height={450}
                className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-20 shadow-xl"
              />
            </div>
            <div className="bg-[#9A00FF] w-full  h-auto p-6 mt-8 lg:mt-0 ">
              <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
                Social Media Marketing: Your Audience, Engaged
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
                Our personalized approach to <Link href="https://www.linkedin.com/company/techcreator" className="text-blue-600 cursor-pointer">social media</Link> marketing  helps brands foster authentic connections. With a deep understanding of platform algorithms, we craft compelling content and manage campaigns on <Link href="https://www.instagram.com/techcreatorco" className="text-blue-600 cursor-pointer">Instagram</Link>, <Link href="https://www.facebook.com/techcreatorfb" className="text-blue-600 cursor-pointer">Facebook</Link>, and beyond to captivate and grow your audience.We promote your business digitally through engaging posts and targeted ads. We ensure your brand gets a spotlights online among your competitors. Our experts in marketing department analyze insights and adapt strategies which maximizes reach and hunt targeted audience which then turn into loyal customers.  
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
            Grow your online presence with targeted digital marketing campaigns.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Boost engagement with creative <Link href="https://www.linkedin.com/company/techcreator" className="text-blue-600 cursor-pointer">social media</Link> strategies and analytics.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Leverage data to drive traffic and convert leads effectively.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Achieve consistent results with data-driven and time-tested techniques.
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
              src={marketingImage2}
              alt="PPC campaigns designed for traffic and conversion maximization"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-bold mb-4 md:mt-0 mt-4 md:mb-7">
              PPC Campaigns Designed for Maximum ROI
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-gray-700">
              As specialists in PPC, we design campaigns that deliver high-impact results. Our team analyzes your business needs and targets the right audience with precision, ensuring your ads—whether Google or Meta Ads—generate maximum traffic and conversions.We go through a deep keyword research and competitor analysis to come up with the strategies that are data-driven and tailored to your goals. We thoroughly monitor and <Link href="/services/seo-services-for-small-business" className="text-blue-600 cursor-pointer">optimize your campaigns</Link> to ensure you stay ahead in a competitive market. 
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-3xl xl:text-4xl font-bold mb-4 md:mb-7">
              Insta and FB Ads That Deliver Impact
              </h2>
              <p className="text-base md:text-lg lg:text-lg text-gray-700">
              Our expertise in Insta and FB ads guarantees attention-grabbing campaigns that drive engagement and sales. We combine creativity with advanced analytics to craft ads that resonate with your audience and achieve your goals.We ensure your brand’s online presence through eye catching visuals and compelling ad copy. Our strategies are tailored to target the right audience to maximize the ROI. We also constantly monitor and optimize with time to time to keep your campaigns go along  with the trends. Let’s work together and grab the right audience for your business.  

              </p>
            </div>
            <Image
              src={marketingImage3}
              alt="Engaging Insta and FB ads that drive sales with creativity and analytics"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row  mt-20 items-center px-1 sm:px-4 xl:px-0 gap-8 md:gap-12">
            {/* Image Section */}
            <Image
              src={marketingImage4}
              alt="Branding that defines you and leaves a lasting impression"
              width={300}
              height={300}
              className="  sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-7">
              Strategic Branding For Your Business
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-gray-700 mt-3">
              Branding is more than <Link href="/services/affordable-graphic-design-services" className="text-blue-600 cursor-pointer">a logo</Link>—it’s how the world perceives your business. Our experts take the time to understand your vision and values, delivering branding solutions that define your identity and leave a lasting impression on your audience.Every element of our strategy align with your business, whether it is visual aesthetics or messaging tone. We aim to connect you to your audience emotionally and your brand stand out by combining our creativity and our market research. Our strategies will make your brand trustworthy that inspires trust, loyalty and recognition across all touch points. 
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
              Proven Results Across Industries
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              With experience across multiple sectors, we bring personalized expertise to <Link href="/services/project-management" className="text-blue-600 cursor-pointer">every project</Link>. For a retail client, our strategic Meta Ads increase conversions by 60%. For startups, our targeted social media marketing campaigns have driven audience growth and brand loyalty.Our diverse portfolio shows our excellence and the values we bring to industries such as technology, healthcare, real estate and e-commerce. Our past excellency push us to deliver more and come with the solutions for your business that not only exceed expectations but to bring dignity.
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={marketingImage5}
                alt="Bespoke solutions show 60% increase in conversion and audience growth"
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
        
<FaqSection title="Frequently Asked Questions" faqs={digitalMarketingFaqs} />

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
        {/* RelatedServices section end */}
        <div className=" bg-purple-600  md:mb-16 mb-9">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
      </div>
      
    </div>
  );
};

export default DigitalMarketing;



export const metadata = {
  title: "Digital Marketing Experts | Social Media Marketing & PPC Services",
  description:
    "TechCreator offers expert digital marketing services, including social media marketing, branding, and PPC campaigns. Experience personalized solutions for measurable results.",
  alternates: {
    canonical: "https://www.techcreator.co/services/digital-marketing-for-software-companies",
  },
};
