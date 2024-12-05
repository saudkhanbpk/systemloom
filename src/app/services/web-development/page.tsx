"use client";
import React from 'react'
import webDevelopmentImagehero from "../../../../public/assets/graphice design images/webdevelopment.png"
import Image from 'next/image'
import { LayoutDashboard, FileText, Zap, Clock } from 'lucide-react';
import webimage1 from "../../../../public/assets/ServiceDetailsImages/webImage1.png"
import webimage2 from "../../../../public/assets/ServiceDetailsImages/firstheading.webp"
import webimage3 from "../../../../public/assets/ServiceDetailsImages/secondheading.webp"
import webimage4 from "../../../../public/assets/ServiceDetailsImages/thirdHeading.webp"
import webimage5 from "../../../../public/assets/ServiceDetailsImages/webimage5.png"

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import ProjectWork from '@/components/services/ProjectWork';


const WebDevelopment = () => {

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

      {/* hero section start */}
    <div className="bg-black w-full lg:min-h-screen md:pt-36 flex flex-col md:flex-row md:p-4 lg:p-0  justify-around items-center text-white">
  {/* Left Section */}
  <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-0  md:px-12  mt-20">
    <h1 className="text-3xl lg:text-5xl  font-bold">Full stack web development services</h1>
    <p className="text-base lg:text-lg mt-3">
    Techcreator accelerates your business growth by delivering custom web solutions designed to meet your business objectives. With a team of skilled, experienced, and dedicated developers, we provide tailored applications that ensure seamless functionality and innovation. Our comprehensive web development services are structured to align with your business goals, helping you stand out in a competitive digital landscape. 
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-auto flex justify-center">
    <Image
      src={webDevelopmentImagehero}
      alt="heroImage"
      width={300}
      height={300}
      className="w-[50vw] md:w-[25vw] lg:mt-52 "
    />
  </div>
</div>
      {/* hero section end */}



{/* FeatureSection section start */}
<div className='max-w-7xl  mx-auto'>
      <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
  <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
    <Image
      src={webimage1}
      alt="Feature section image"
      width={300} 
      height={450}
      className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
    />
  </div>
  <div className="bg-[#9A00FF] w-full md:w-[750px]   md:h-[450px] p-6 sm:p-10 md:p-10 py-10 md:py-14 mt-8 md:mt-0 ">
    <div className="text-white md:py-4 md:px-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Web Development</h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">Web Development is the ideal approach to crafting solutions that align precisely with your business goals. Be developing a well designed and bespoke web application, you create a direct, personalized connection with your customers, which enhances your business and brand identity. Our team of certified web developers delivers robust, high-performance and secure solutions that seamlessly support to make sure your web platforms provide lasting value and drive business success.  </p>
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
    src={webimage2}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Web Development benefits  </h1>
    <p className="text-base md:text-xl text-gray-700">
    <span className='text-xl font-semibold text-black'>Solutions for your brand  </span> <br/> 
Bespoke software allows you to showcase your brand with a custom design and smooth user experience. It goes beyond generic templates, offering a solution tailored to your unique business needs. 

    </p>

    <p className="text-base md:text-xl text-gray-700 mt-3">
    <span className='text-xl font-semibold text-black'>Improve Online Presence   </span> <br/> 
    Web development boost your brand’s visibility on the internet, making it easier for potential customers to find you, learn about services and engage with your product.  
    </p>

    <p className="text-base md:text-xl text-gray-700 mt-3">
    <span className='text-xl font-semibold text-black'>Scalibility </span> <br/> 
    Web development allows your business to sacle its websites and features as they grow. It also ensures that the site can handle increased traffic, transactions and new functionalities.   
    </p>

    <p className="text-base md:text-xl text-gray-700 mt-3">
    <span className='text-xl font-semibold text-black'>Business automation </span> <br/> 
    Custom web development also allows you to optimize your business workflow and streamline your operations. Whether you need enhanced integration or manage your customer data in-app, bespoke software connects your systems in a single customized organism.  
    </p>
  </div>
</div>

  {/* card 2 */}
  <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Industries we work with</h1>
    <p className="text-base md:text-xl text-gray-700">
    TechCreator specialize in providing custom web development services across a wide range of  
Industries. including <br/>
 <span className='font-semibold '>e-commerce </span> <br/>
 <span className='font-semibold'>Healthcare</span> <br/>
 <span className='font-semibold'>Education</span> <br/>
 <span className='font-semibold'>Finance and Banking</span>  <br/>
 <span className='font-semibold'>real estate </span>
 <span className='font-semibold'>tourism and hospitality</span> <br/>  
 <span className='font-semibold'>entertainment and media</span> <br/>
 <span className='font-semibold'>government and public services</span> . 

    </p>
  </div>
  <Image
    src={webimage3}
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
    src={webimage4}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Our process  </h1>
    <p className="text-base md:text-xl text-gray-700 mt-3">
    <span className='text-xl font-semibold text-black'>Discovery  </span> <br/> 
    TechCreator starts by understanding your business requirements. Our team of business analysts examines your needs and dives into your unique objectives. Based on this, we define a clear vision for your future solutions.    
    </p>

    <p className="text-base md:text-xl text-gray-700 mt-3">
    <span className='text-xl font-semibold text-black'>Development   </span> <br/> 
    Our company moves further to development. Developers transform your business idea into a real solution keeping in view the latest tech updates to make sure your product stands out from the competition.     
    </p>

    <p className="text-base md:text-xl text-gray-700 mt-3">
    <span className='text-xl font-semibold text-black'>Testing    </span> <br/> 
    After development we proceed with thorough testing. Our team remains diligent in identifying and resolving any defects or discrepancies, ensuring the solution aligns perfectly with the predefined goals.     
    </p>
  </div>
</div>

</div>
{/* DiagonalFeatureSection section end */}


{/* FramedFeatureSection section start */}
<div className="md:relative bg-[#9A00FF] md:max-w-6xl mx-auto md:py-32 py-6 md:mt-52 md:mb-52">
  <div className="md:relative px-5 flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Text Content */}
    <div className="relative z-10 md:max-w-[600px] text-wrap text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Deployment and Support </h1>
      <p className="text-base md:text-lg text-white webDevtext ">
      After the application is fully established, we deploy it using reliable process for consistent results. Our developers continuously monitor the new environment to ensure its stability and optimal performance. After that we provide comprehensive support and assistance to ensure your website or web application runs smoothly and remains up to date. 
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
<ProjectWork/>
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

export default WebDevelopment
