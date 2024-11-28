import React from 'react'
import projectManagementImage from "../../../../public/assets/graphice design images/projectmanagement.png"
import Image from 'next/image'
import { LayoutDashboard, FileText, Zap, Clock } from 'lucide-react';
import projectimage1 from "../../../../public/assets/graphice design images/project1.png"
import projectimage2 from "../../../../public/assets/graphice design images/project2.png"
import projectimage3 from "../../../../public/assets/graphice design images/project3.png"
import projectimage4 from "../../../../public/assets/graphice design images/project4.png"
import projectimage5 from "../../../../public/assets/graphice design images/project5.png"


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


const projectManagement = () => {

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
    <div className="bg-black w-full min-h-screen flex flex-col md:flex-row   justify-around items-center text-white p-4">
  {/* Left Section */}
  <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-10  md:px-12   mt-20">
    <h1 className="text-3xl lg:text-5xl font-bold">Project Management Services</h1>
    <p className="text-base md:text-lg mt-3">
      At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. 
      Our portfolio showcases a range of successful projects that have turned ideas into impactful digital realities. 
      Join us in the journey of transforming your vision into cutting-edge technology.
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-auto flex justify-center">
    <Image
      src={projectManagementImage}
      alt="heroImage"
      width={300}
      height={300}
      className="w-[60vw] md:w-[30vw]"
    />
  </div>
</div>
      {/* hero section end */}



{/* FeatureSection section start */}
<div className='max-w-7xl  mx-auto'>
      <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
  <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
    <Image
      src={projectimage1}
      alt="Feature section image"
      width={300} 
      height={450}
      className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
    />
  </div>
  <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
    <div className="text-white xl:py-20 lg:px-40">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Heading</h1>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and </p>
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
    src={projectimage2}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Heading</h1>
    <p className="text-base md:text-xl text-gray-700">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and 
    </p>
  </div>
</div>

  {/* card 2 */}
  <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Heading</h1>
    <p className="text-base md:text-xl text-gray-700">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and 
    </p>
  </div>
  <Image
    src={projectimage3}
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
    src={projectimage4}
    alt="heroImage"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Heading</h1>
    <p className="text-base md:text-xl text-gray-700">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and 
    </p>
  </div>
</div>

</div>
{/* DiagonalFeatureSection section end */}


{/* FramedFeatureSection section start */}
<div className="w-full mx-auto bg-white rounded-lg  overflow-hidden mb-10 max-w-6xl px-4 sm:px-6 lg:px-4">
  <div className="flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="w-full  bg-[#9A00FF] p-6 md:p-12 text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
        Heading
      </h2>
      <p className="text-base w-full md:text-lg text-wrap leading-relaxed md:w-[400px]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
      </p>
    </div>

    {/* Image Section */}
  
      <div className="relative bg-gray-100">
        <Image
          src={projectimage5}
          alt="Feature illustration"
          width={300}
          height={300}
          className='w-[500px] md:h-[500px] h-[300px] object-cover'
        />
      
    </div>
  </div>
</div>
{/* FramedFeatureSection section end */}

{/* RecentWorks section start */}
<div className='max-w-7xl mx-auto'>
<div className=" py-16 px-4 ml-2 sm:ml-0">
      <div className="md:w-[92%] mx-auto ">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Works</h2>
          <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.</p>
        </div>

        {/* Works Section */}
        <div className="w-full  flex flex-col md:flex-row gap-6">
          {/* Main Feature Image */}
          <div className="rounded-2xl md:w-[30%] w-full overflow-hidden">
            <Image
              src={image}
              alt="Orange book design"
              className="w-full h-64 md:h-[600px] object-cover bg-yellow-400"
            />
          </div>

          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 w-full md:w-[70%] gap-4">
            {/* Logo Design with Icons */}
            <div className="relative col-span-2 md:col-span-1 overflow-hidden rounded-2xl">
              <div className="w-full h-72 bg-blue-600 flex flex-col items-center justify-center text-white rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Logo</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Pencil className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image 1 */}
            <div className=" overflow-hidden">
              <Image
                src={image1}
                alt="Laptop on table"
                className="w-full h-[280px] object-cover rounded-2xl"
              />
            </div>

            {/* Secondary Image 2 */}
            <div className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src={image2}
                alt="Development setup"
                className="w-full h-[280px] object-cover"
              />
            </div>

            {/* Secondary Image 3 */}
            <div className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src={image3}
                alt="Design planning"
                className="w-full h-[280px] object-cover"
              />
            </div>
          </div>
        </div>


        {/* View All Button */}
        <div className="text-center mt-12">
          {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            View All
          </button> */}
        </div>
      </div>
    </div>
</div>
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

export default projectManagement
