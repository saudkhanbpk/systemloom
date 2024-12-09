import React from 'react'
import heroimage from "../../../../public/assets/ServiceDetailsImages/soft.png"
import Image from 'next/image'
import { LayoutDashboard, FileText, Zap, Clock } from 'lucide-react';
import softwareImage1 from "../../../../public/assets/graphice design images/softImage1.png"
import softwareImage2 from "../../../../public/assets/graphice design images/softimage2.png"
import softwareImage3 from "../../../../public/assets/graphice design images/softImage3.png"
import softwareImage4 from "../../../../public/assets/graphice design images/softImage4.png"
import softwareImage5 from "../../../../public/assets/graphice design images/softimage5.png"


// image for RecentWorks
import image from '../../../../public/assets/RecentWork/unsplash_IyaNci0CyRk.png';
import image1 from '../../../../public/assets/RecentWork/unsplash_7ZWVnVSaafY.png';
import image2 from '../../../../public/assets/RecentWork/unsplash_qC2n6RQU4Vw.png';
import image3 from '../../../../public/assets/RecentWork/unsplash_m_HRfLhgABo.png';
import { Pencil, Heart } from 'lucide-react';

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import SoftwareMaintenanceRelatedProjects from '@/components/services/SoftwareMaintenanceRelatedProjects';
import Head from 'next/head';


const SoftwareMaintenance = () => {

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
    <div >
<Head>
    <title>Software Maintenance Services | Maintenance & Support Solutions</title>
    <meta
      name="description"
      content="TechCreator offers expert software maintenance services, including construction equipment maintenance software and support. Ensure seamless performance with our maintenance solutions."
    />
  </Head>
      {/* hero section start */}
    <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
  {/* Left Section */}
  <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-10 md:px-12  mt-20">
    <h1 className="text-3xl lg:text-5xl font-bold">Reliable Software Maintenance Services</h1>
    <p className="text-base md:text-lg mt-3">
    At TechCreator, our software maintenance services are designed to keep your applications running smoothly. From bug fixes to performance optimization, we ensure your software stays updated, secure, and aligned with your evolving business needs.
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
<div className='max-w-7xl  mx-auto'>
      <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
  <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
    <Image
      src={softwareImage1}
      alt="Feature section image"
      width={300} 
      height={450}
      className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
    />
  </div>
  <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
    <div className="text-white xl:py-20 lg:px-40">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Specialized Maintenance and Support Services</h1>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">Our comprehensive software maintenance and support services include troubleshooting, upgrades, and feature enhancements. With a dedicated team of experts, we provide consistent support to minimize downtime and maximize operational efficiency.</p>
    </div>
  </div>
</div>
      </div>
{/* FeatureSection section end */}


{/* FeaturesList section start */}
<div className='my-16 mt-28 flex flex-wrap justify-center gap-7 border-b  "'>
  <div className='border-r  w-[300px] p-3'>
  <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />

{/* Text */}
<p className="text-gray-700 text-sm md:text-base mt-2">
  Build a dashboard in <span className="font-bold">2 minutes</span>, refresh on demand.
</p>
  </div>

  <div className='border-r w-[300px] p-3'>
  <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />

{/* Text */}
<p className="text-gray-700 text-sm md:text-base mt-2">
  Build a dashboard in <span className="font-bold">2 minutes</span>, refresh on demand.
</p>
  </div>

  <div className='border-r w-[300px] p-3'>
  <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />

{/* Text */}
<p className="text-gray-700 text-sm md:text-base mt-2">
  Build a dashboard in <span className="font-bold">2 minutes</span>, refresh on demand.
</p>
  </div>

  <div className=' w-[300px] p-3'>
  <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />

{/* Text */}
<p className="text-gray-700 text-sm md:text-base mt-2">
  Build a dashboard in <span className="font-bold">2 minutes</span>, refresh on demand.
</p>
  </div>
</div>
{/* FeaturesList section end */}


{/* DiagonalFeatureSection section start */}
<div className='max-w-7xl mx-auto mb-16'>
  {/* card1 */}
<div className="flex flex-col md:flex-row justify-around items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  <Image
    src={softwareImage2}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Enhance Operations with Construction</h1>
    <p className="text-base md:text-xl text-gray-700">
    For industries relying on heavy machinery, our construction equipment maintenance software ensures streamlined tracking and management of equipment. From scheduling maintenance to monitoring performance, we deliver tailored solutions that enhance reliability and reduce costs.
    </p>
  </div>
</div>

  {/* card 2 */}
  <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Proactive Solutions for Long-Term Software Success</h1>
    <p className="text-base md:text-xl text-gray-700">
    Our proactive approach to software maintenance services focuses on identifying potential issues before they occur. By implementing regular updates and monitoring, we ensure your software remains secure, efficient, and ready for future challenges.
    </p>
  </div>
  <Image
    src={softwareImage3}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />
</div>

  {/* card 3 */}
<div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  <Image
    src={softwareImage4}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Custom Maintenance Plans for Business Needs</h1>
    <p className="text-base md:text-xl text-gray-700">
    Every business is unique, and so are its software requirements. At TechCreator, we craft maintenance plans tailored to your goals, whether you need ongoing software maintenance and support services or assistance with industry-specific tools like construction equipment maintenance software.
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
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ensuring Stability and Growth</h1>
      <p className="text-base md:text-lg text-white webDevtext ">
      We recently helped a construction company implement construction equipment maintenance software, improving their tracking efficiency by 40%. Additionally, our software maintenance services have enabled businesses across industries to reduce operational disruptions and enhance performance.
      </p>
    </div>
    {/* Image */}
    <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
      <Image
        src={softwareImage5}
        alt="Project Management Portfolio  by TechCreator"
        width={400}
        height={500}
        className="rounded-lg mx-auto  md:mx-0"
      />
    </div>
  </div>
</div>
{/* FramedFeatureSection section end */}

{/* RecentWorks section start */}
<SoftwareMaintenanceRelatedProjects/>
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
  )
}

export default SoftwareMaintenance
