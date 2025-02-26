import React from "react";
import heroimage from "../../../../public/assets/servicespages/graphichero.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import graphic1 from "../../../../public/assets/servicespages/graphi1.webp";
import graphic2 from "../../../../public/assets/servicespages/graphic2.webp";
import graphic3 from "../../../../public/assets/servicespages/graphic3.webp";
import FramedFeatureSectionImage from "../../../../public/assets/servicespages/FramedFeatureSection.webp";
import FeatureImage from "../../../../public/assets/servicespages/featureimage.webp";

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

const GraphicDesign = () => {
  const categorySlug = "affordable-graphic-design-services";
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
      title: "SEO & Content Writing",
      description:
        "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
      icon: motionDesignImage,
      link: "/services/seo-services-for-small-business",
    },
  ];

  const graphicDesigningFaqs = [
    { question: "What graphic design services do you offer?", answer: " We create logos, branding, UI designs, illustrations, and social media graphics." },
    { question: "Which design tools do you use?", answer: " We work with Adobe Photoshop, Illustrator, Figma, and Canva." },
    { question: "How long does a graphic design project take?", answer: " Simple designs take 2-5 days, while branding projects take 1-4 weeks." },
    { question: "Do you provide custom branding packages?", answer: " Yes! We offer logo, brand identity, and social media design." },
    { question: "Can you create designs for both digital and print?", answer: " Absolutely! We design business cards, posters, and social media graphics." },
  ];

  return (
    <div>
     
      {/* hero section start */}
      <div className="bg-black w-full px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left ">
          <h1 style={{lineHeight:1.2}} className=" text-2xl sm:text-3xl  lg:text-5xl font-bold">
          Unique Styles for Your Business
          </h1>
          <p className="text-base lg:text-lg mt-3">
          TechCreator is your go-to agency for graphic design, offering creative solutions that bring your ideas to life. From logos to <Link href="/services/digital-marketing-for-software-companies" className="text-blue-600 cursor-pointer"> marketing materials</Link>, our designs are crafted to communicate your brand's message effectively and captivate your audience.
          </p>
          <Buttons/>
          
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
  <Image
    src={heroimage}
    alt="TechCreator bringing technology innovations through graphic designing"
    width={300}
    height={300}
    priority
    quality={75}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
    className="rounded-lg shadow-md object-cover"
  />
</div>

      </div>
      {/* hero section end */}

      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        {/* FeatureSection section start */}
        <div className=" ">
          <div className="flex flex-col lg:flex-row items-center relative   ">
            <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[350px] z-10">
              <Image
                src={FramedFeatureSectionImage}
                alt="Bespoke Web Development to attract your audience"
                width={300}
                height={450}
                className=" lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-10 shadow-xl "
              />
            </div>
            <div className="bg-[#9A00FF] w-full  h-auto p-6  mt-3 lg:mt-0 ">
              <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
                Partner with One of the Top Graphic Design Companies
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
                As one of the leading graphic design companies, we provide professional services that enhance your brand’s identity. Our team of skilled designers specializes in creating high-impact visuals that drive engagement and leave a lasting impression.Our designs reflect your brand personality and attracts your targeted audience. We ensure quality, whether it is logo or other marketing materials. Being creative and innovative is our identity.   
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FeatureSection section end */}

        {/* FeaturesList section start */}
        <h2 className="text-center text-3xl font-bold mt-9 md:mt-16">
          Why Choose Us
        </h2>

        <div className="flex md:flex-row flex-col gap-3 md:gap-7 mt-6">
          <div className="border-r  xl:pr-3">
            <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
            Create eye-catching designs that represent your brand effectively.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Deliver creative solutions for logos, banners, brochures, and more.
            </p>
          </div>

          <div className="border-r  xl:pr-3">
            <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Focus on innovation to create stunning visuals that captivate your audience.
            </p>
          </div>

          <div className="  xl:pr-3">
            <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
            Ensure timely delivery of designs without compromising on quality.
            </p>
          </div>
        </div>
        {/* FeaturesList section end */}

        {/* DiagonalFeatureSection section start */}
        <div className="mt-9 md:mt-16">
          {/* card1 */}
          <div className="flex flex-col md:flex-row items-center  gap-3  md:gap-12">
            {/* Image Section */}
            <Image
              src={graphic1}
              alt="TechCreator attracts audience to your products graphic designing"
              width={300}
              height={300}
              className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />

            {/* Text Section */}
            <div className=" text-center md:text-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 font-bold">
              Agency for Graphic Design Tailored to Your Brand
              </h2>
              <p className="text-base md:text-base  lg:text-lg text-gray-700">
              At <Link href="/" className="text-blue-600 cursor-pointer">TechCreator</Link>, we understand the importance of design diversity. Our expertise spans various graphic design styles, ensuring we can create the perfect visual identity for your business, whether it’s modern, minimalistic, or vibrant and bold.We work closely and understand the needs of your business and then translating them into audience-oriented designs. We deal in different categories such as digital assets, print materials or full brand overhauls. Our designs will always resonate with your target market. 
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-12 mt-9 md:mt-16">
            {/* Image Section */}

            {/* Text Section */}
            <div className=" text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 font-bold">
              Custom Designs for Every Need
              </h2>
              <p className="text-base md:text-base lg:text-lg text-gray-700">
              We offer a wide range of services, including branding, infographics, and <Link href="/services/digital-marketing-for-software-companies" className="text-blue-600 cursor-pointer"> digital marketing assets</Link>. With our agency for graphic design, you’ll receive personalized solutions designed to stand out in today’s competitive market.Our team of experts make sure that every element in design reflect your unique identity of your brand. Along with attention-grabbing logos to engaging social media visuals we guarantee designs that not only look great but also driven results and elevate your <Link href="/services/seo-services-for-small-business" className="text-blue-600 cursor-pointer">brand’s online presence</Link>. 
              </p>
            </div>
            <Image
              src={graphic2}
              alt="TechCreator offers services in graphic designing for your brand "
              width={300}
              height={300}
              className="  sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
            />
          </div>

          {/* card 3 */}
          <div className="flex flex-col md:flex-row items-center  gap-3 md:gap-12 mt-9 md:mt-16">
            {/* Image Section */}
            <Image
              src={graphic3}
              alt="Strategic design to boost brand visibility and industry leadership."
              width={300}
              height={300}
              className="  sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
            />

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 font-bold">
              Brand with Strategic Visuals
              </h2>
              <p className="text-base md:text-base  lg:text-lg text-gray-700 ">
              Effective design goes beyond aesthetics. Our designs are strategically crafted to enhance your brand’s visibility and connect with your target audience, positioning your business as a leader in its industry.Our every designs convey a full story of your business and its core message. Each design is purposeful that speaks directly to your customer and build your brand recognition.  These aesthetic and self-speaking will ultimately drive customer loyalty and growth. 
              </p>
            </div>
          </div>
        </div>
        {/* DiagonalFeatureSection section end */}

        {/* FramedFeatureSection section start */}
        <div className="lg:relative bg-[#9A00FF] lg:h-[450px]  mx-auto md:py-4 mt-9 md:mt-16">
          <div className="lg:relative md:px-5 px-2 flex flex-col lg:flex-row  items-center lg:items-start gap-10">
            {/* Text Content */}
            <div className="lg:relative webDevtext z-10 lg:max-w-[600px] xl:max-w-[800px] lg:p-5  text-wrap text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl mt-2 font-bold text-white mb-4">
              Recent Work: Redefining Mobile Solutions
              </h2>
              <p className="text-base md:text-lg xl:text-lg text-white">
              Our recent projects include branding for a <Link href="/healthcare" className="underline cursor-pointer"> healthcare startup</Link> and social media graphics for a retail business. As one of the top graphic design companies, we’ve helped clients amplify their brand presence and achieve measurable success with unique graphic design styles.Our designs have already helped our clients engage their audiences and communicate their business purpose online effectively. From eye-catching logos to impactful visuals, our designs have improved businesses and they are still on their way to achieve new heights. 
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
              <Image
                src={FeatureImage}
                alt="TechCreator graphic design for brand growth and success"
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
        
<FaqSection title="Frequently Asked Questions" faqs={graphicDesigningFaqs} />

        {/* RelatedServices section start */}
        <div className="mt-9 md:mt-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            Related Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 mt-9  lg:gap-8 justify-items-center">
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

        <div className=" bg-purple-600 mt-9 md:mt-16 md:mb-16 mb-9">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
      </div>
    </div>
  );
};

export default GraphicDesign;


export const metadata = {
  title: "Agency for Graphic Design | Expert Graphic Design Companies",
  description:
    "TechCreator is a top agency for graphic design offering diverse graphic design styles. Partner with one of the leading graphic design companies to elevate your brand.",
  alternates: {
    canonical: "https://www.techcreator.co/services/affordable-graphic-design-services",
  },
};
