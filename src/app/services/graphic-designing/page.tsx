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
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import GraphicDesigningRelatedProjects from "@/components/services/GraphicDesignRelatedProjects";
import Head from "next/head";

const GraphicDesign = () => {
  const services = [
    {
      title: "Product Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: productDesignImage,
    },
    {
      title: "App Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: appDesignImage,
    },
    {
      title: "Web Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: webDesignImage,
    },
    {
      title: "Development",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: developmentDesignImage,
    },
    {
      title: "Illustration",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: illustrationDesignImage,
    },
    {
      title: "Motion",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: motionDesignImage,
    },
  ];

  return (
    <div>
      <Head>
        <title>
          TechCreator offering services in Graphic Designing For Business to
          touch new heights in Digital Landscape
        </title>
        <meta
          name="description"
          content="TechCreator offers services in graphic designing to enhance your brand drive results. From logos and branding to digital ads and packaging, we have expert designers  that craft visuals that take your products to new heights."
        />
      </Head>

      {/* hero section start */}
      <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-0  mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Graphic Design Services
          </h1>
          <p className="text-base md:text-lg mt-3">
            At TechCreator, we craft custom graphic designs tailored to your
            brand’s voice and vision. Whether you are looking for eye-catching
            visuals, professional branding or digital art, our team brings
            creativity and expertise to every business through professional
            visuals.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src={heroimage}
            alt="heroImage"
            width={300}
            height={300}
            className="w-[80vw] md:w-[35vw]"
          />
        </div>
      </div>
      {/* hero section end */}

      {/* FeatureSection section start */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
          <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
            <Image
              src={FeatureImage}
              alt="TechCreator bringing technology innovations through graphic designing"
              width={300}
              height={450}
              className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
            />
          </div>
          <div className="bg-[#7A4AFF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
            <div className="text-white xl:py-20 lg:px-40">
              <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                Custom Logo Design to Define Your Brand Identity{" "}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">
                First impression is the last impression. <br />
                Your logo represents your business and make a lasting impression
                on your audience. <br /> A well-designed logo will be the
                cornerstone of your brand, to make a lasting impression. Concern
                TechCreator for custom logos that perfectly aligns with your
                business goals.
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
            src={graphic1}
            alt="TechCreator designs logo aligning perfectly to your business aims"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Professional Website and Social Media Graphics{" "}
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Want to enhance your business presence online with custom graphics
              and social media designs, look no further, other than TechCreator.
              Our designs are optimized to drive engagement, ensuring your
              brand’s visuals align with your digital marketing strategy. We
              have a team of seasoned members, committed to excellence and
              bringing innovation to digital landscape.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
          {/* Image Section */}

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              Target Audience Focus{" "}
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              Effective graphic design always takes the target audience into
              account. Whether you are designing a corporate logo, a social
              media posts or a website, understanding your audience’s
              preferences, behaviors and expectations is essential for creating
              designs that resonate with them. We are here to do that for you-
              attract audience to your product by portraying your product online
              in an attractive way.
            </p>
          </div>
          <Image
            src={graphic2}
            alt="TechCreator attracts audience to your products graphic designing"
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
            alt="TechCreator offers services in graphic designing for your brand"
            width={300}
            height={300}
            className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
          />

          {/* Text Section */}
          <div className="w-full md:w-[40vw] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">
              {" "}
              We Offer{" "}
            </h1>
            <p className="text-base md:text-xl text-gray-700">
              <strong>Our graphic design services cover:</strong>
              <br />
              <br />
              Brand Identity <br />
              Print Design <br />
              Digital and Social Media Design <br />
              Packaging Design <br />
              Infographic and Illustrations <br />
            </p>
          </div>
        </div>
      </div>
      {/* DiagonalFeatureSection section end */}

      {/* FramedFeatureSection section start */}
      <div className="md:relative bg-[#7A4AFF] md:max-w-6xl mx-auto md:py-16  md:mt-52 md:mb-52">
        <div className="md:relative px-5 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Content */}
          <div className="relative z-10 md:max-w-[600px] text-wrap text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose TechCreator for Graphic Designing{" "}
            </h1>
            <p className="text-base md:text-lg text-white webDevtext ">
              TechCreator create designs that reflect your unique brand identity
              and business goals with the help of our team, composed of
              experience graphic designiners, branding experts and digital
              strategists who work together to deliver high-quality design
              solutions. So get connected to us transform your brand with
              exceptional graphic design. We have the ability to bring your
              vision to life through design.
            </p>
          </div>
          {/* Image */}
          <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
            <Image
              src={FramedFeatureSectionImage}
              alt="Choose TechCreator for graphic designing for your product to thrive in your field"
              width={400}
              height={500}
              className="rounded-lg mx-auto  md:mx-0"
            />
          </div>
        </div>
      </div>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <GraphicDesigningRelatedProjects />
      {/* RecentWorks section end */}

      {/* RelatedServices section start */}
      <div className="mx-auto max-w-6xl px-4 md:px-20 lg:px-0  py-12 sm:py-16  ">
        <h2 className="text-2xl font-semibold text-center mb-12 sm:mb-16 md:mb-20 ">
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

export default GraphicDesign;
