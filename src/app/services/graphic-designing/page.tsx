import React from "react";
import heroimage from "../../../../public/assets/ServiceDetailsImages/Designer_working_with_pen_display_Illustration-removebg-preview 1.png";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import graphic1 from "../../../../public/assets/graphice design images/graphi1.png";
import graphic2 from "../../../../public/assets/graphice design images/graphic2.png";
import graphic3 from "../../../../public/assets/graphice design images/graphic3.png";
import FramedFeatureSectionImage from "../../../../public/assets/graphice design images/FramedFeatureSection.png";
import FeatureImage from "../../../../public/assets/graphice design images/featureimage.png";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";

const GraphicDesign = () => {
  const categorySlug = "graphic-designing";
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
      link: "/services/mobile-app-development",
    },
    {
      title: "SEO & Content Writing",
      description:
        "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
      icon: motionDesignImage,
      link: "/services/seo-content-writing",
    },
  ];

  return (
    <div>
     
      {/* hero section start */}
      <div className="bg-black w-full  pt-24 md:pt-36 lg:pt-20 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
        {/* Left Section */}
        <div className="w-full md:w-[50vw]  text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Unique Styles for Your Business
          </h1>
          <p className="text-base md:text-lg mt-3">
            TechCreator is your go-to{" "}
            <strong>agency for graphic design,</strong> offering creative
            solutions that bring your ideas to life. From logos to marketing
            materials, our designs are crafted to communicate your brand's
            message effectively and captivate your audience.
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
            className="w-[80vw] md:w-[35vw]"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto  ">
        <div className="flex flex-col lg:flex-row items-center  lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[350px] z-10">
            <Image
              src={FeatureImage}
              alt="Bespoke Web Development to attract your audience"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute  lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#9A00FF] w-full md:w-[800px] lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-52  ">
              <h2 className="text-xl sm:text-3xl font-bold mb-3 lg:w-[500px]  ">
              Partner with One of the Top Graphic Design Companies
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
              As one of the leading <strong>graphic design companies,</strong> we provide professional services that enhance your brand’s identity. Our team of skilled designers specializes in creating high-impact visuals that drive engagement and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
      <h2 className="text-center text-3xl font-bold md:mt-28">Why Choose Us</h2>
      <div className='my-16 md:mt-20 flex flex-wrap justify-center gap-7 border-b  "'>
        <div className="border-r  w-[280px] p-3">
          <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Create eye-catching designs that represent your brand effectively.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Deliver creative solutions for logos, banners, brochures, and more.
          </p>
        </div>

        <div className="border-r w-[280px] p-3">
          <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Focus on innovation to create stunning visuals that captivate your audience.
          </p>
        </div>

        <div className=" w-[280px] p-3">
          <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

          {/* Text */}
          <p className="text-gray-700 text-sm md:text-base mt-2">
          Ensure timely delivery of designs without compromising on quality.
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
            src={graphic1}
            alt="TechCreator attracts audience to your products graphic designing"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Agency for Graphic Design Tailored to Your Brand
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              At TechCreator, we understand the importance of design diversity.
              Our expertise spans various{" "}
              <strong>graphic design styles,</strong> ensuring we can create the
              perfect visual identity for your business, whether it’s modern,
              minimalistic, or vibrant and bold.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Custom Designs for Every Need
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              We offer a wide range of services, including branding,
              infographics, and digital marketing assets. With our{" "}
              <strong>agency for graphic design,</strong> you’ll receive
              personalized solutions designed to stand out in today’s
              competitive market.
            </p>
          </div>
          <Image
            src={graphic2}
            alt="TechCreator offers services in graphic designing for your brand"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />
        </div>

        {/* card 3 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}
          <Image
            src={graphic3}
            alt="Strategic design to boost brand visibility and industry leadership."
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Brand with Strategic Visuals
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Effective design goes beyond aesthetics. Our designs are
              strategically crafted to enhance your brand’s visibility and
              connect with your target audience, positioning your business as a
              leader in its industry.
            </p>
          </div>
        </div>
      </div>
      {/* DiagonalFeatureSection section end */}

      {/* FramedFeatureSection section start */}
      <div className="md:relative bg-[#9A00FF] md:max-w-6xl mx-auto md:py-16  md:mt-28 md:mb-28">
        <div className="md:relative px-5 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Content */}
          <div className="relative webDevtext z-10 md:max-w-[600px] text-wrap text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Work: Redefining Mobile Solutions
            </h2>
            <p className="text-base md:text-lg text-white  ">
              Our recent projects include branding for a healthcare startup and
              social media graphics for a retail business. As one of the top{" "}
              <strong>graphic design companies,</strong> we’ve helped clients
              amplify their brand presence and achieve measurable success with
              unique <strong>graphic design styles</strong>.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={FramedFeatureSectionImage}
              alt="TechCreator graphic design for brand growth and success"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <ServicesRelatedProjects slug={categorySlug} />
      {/* RecentWorks section end */}

      {/* RelatedServices section start */}
      <div className="mx-auto max-w-6xl px-4 md:px-20 lg:px-0 py-12 sm:py-16">
  <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 sm:mb-16 md:mb-20">
    Related Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 justify-items-center">
    {services.map((service, index) => (
      <Link 
        href={service.link} 
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
      </Link>
    ))}
  </div>
</div>
      {/* RelatedServices section end */}
    </div>
  );
};

export default GraphicDesign;


export const metadata = {
  title: "Agency for Graphic Design | Expert Graphic Design Companies",
  description:
    "TechCreator is a top agency for graphic design offering diverse graphic design styles. Partner with one of the leading graphic design companies to elevate your brand.",
  alternates: {
    canonical: "https://www.techcreator.co/services/digital-marketing",
  },
};
