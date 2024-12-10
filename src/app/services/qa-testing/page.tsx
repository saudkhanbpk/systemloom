import React from 'react'
import qatestinImage from "../../../../public/assets/graphice design images/qatesting.png"
import Image from 'next/image'
import { LayoutDashboard, FileText, Zap, Clock } from 'lucide-react';
import qaimage1 from "../../../../public/assets/graphice design images/qaimage1.png"
import qaimage2 from "../../../../public/assets/graphice design images/qaimage2.png"
import qaimage3 from "../../../../public/assets/graphice design images/qaimage3.png"
import qaimage4 from "../../../../public/assets/graphice design images/qaimage4.png"
import qaimage5 from "../../../../public/assets/graphice design images/qaimage5.png"



// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import QaTestingRelatedProjects from '@/components/services/QATestingRelatedProjects';


const QATesting = () => {

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
  <div className="w-full md:w-[50vw] text-center md:text-left mb-6 md:mb-0 md:mt-10 md:px-12   mt-20">
    <h1 className="text-3xl lg:text-5xl font-bold">QA Testing Services & Solutions</h1>
    <p className="text-base md:text-lg mt-3">
    TechCreator is here to ensure to ensure the quality, functionality and reliability of software or system you are using for your business. We help in evaluating different aspects of software performance, usability, security and compatibility to ensure your product meets the specific requirements. 
    </p>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-auto flex justify-center">
    <Image
      src={qatestinImage}
      alt="heroImage"
      width={300}
      height={300}
      className="w-[60vw] md:w-[35vw]"
    />
  </div>
</div>
      {/* hero section end */}



{/* FeatureSection section start */}
<div className='max-w-7xl  mx-auto'>
      <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center lg:mt-12 my-6  relative   ">
  <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
    <Image
      src={qaimage1}
      alt="TechCreator providing services in QA Testing"
      width={300} 
      height={450}
      className=" lg:w-[400px] lg:h-[450px] h-auto sm:w-[400px]   mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
    />
  </div>
  <div className="bg-[#9A00FF] w-full md:w-[800px]   lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 ">
    <div className="text-white xl:py-20 lg:px-40">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Importance of QA Testing  </h1>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] w-full  text-wrap">QA testing helps in ensuring that the software is of high quality by detecting and fixing bugs issues early in the development process. It makes sure that the final product meets the desired the functionality and performance standards. We are here to serve you all the way to have a software in your hands which is flawless and getting you to your desired goals.</p>
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
    src={qaimage2}
    alt="TechCreator helping you to reduce your cost from early stage "
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Reduce Costs</h1>
    <p className="text-base md:text-xl text-gray-700">
    Finding and fixing defects early in the development process is better than addressing them later. Doing it in initial stages is less expensive and also ensures efficiency and productivity with fewer bugs and performance issues. In short QA testing helps prevent costly post-launch fixes, as it identifies potential problems before they affect the user.  
    </p>
  </div>
</div>

  {/* card 2 */}
  <div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">What we test for Quality Assurance </h1>
    <p className="text-base md:text-xl text-gray-700">
    <strong>Functional Testing:</strong> Verifying that software functions according to its specifications. <br/>
<strong>Performance Testing:</strong> Ensuring the software performs well under different loads and conditions. <br/>
<strong>Security Testing:</strong> Checking for vulnerabilities and ensuring that software is secure.  <br/>
<strong>Usability: </strong>Assessing how easy is it to use 

    </p>
  </div>
  <Image
    src={qaimage3}
    alt="TechCreator helping your software function flawlessly and protected"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />
</div>

  {/* card 3 */}
<div className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-8 gap-8 md:gap-12">
  {/* Image Section */}
  <Image
    src={qaimage4}
    alt="TechCreator responsible for your business to go automatic"
    width={300}
    height={300}
    className="w-[80vw]  sm:w-[55vw] md:w-[25vw] flex-shrink-0"
  />

  {/* Text Section */}
  <div className="w-full md:w-[40vw] text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-7">Automation for Scalability and Speed</h1>
    <p className="text-base md:text-xl text-gray-700">
    TechCreator helps your business to go automatic by integrating automation into the testing process.  Automated testing speeds up repetitive tasks, such as regression tests, allowing team to focus more critical aspects of software. With that we also comes with user-centric testing as QA testing has expanded beyond functional requirements to focus on the end-user experience.  
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
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Overview</h1>
      <p className="text-base md:text-lg text-white webDevtext ">
      QA Testing is no longer about finding bugs but it’s about improving overall product quality, boosting user satisfaction and ensuring business success. By investing in comprehensive, early-stage QA testing, business can deliver better and ultimately drive long-term success in a competitive market. <br/> <br />
Your investment doesn’t go wasted then invest on us in early stages. 

      </p>
    </div>
    {/* Image */}
    <div className="relative md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2">
      <Image
        src={qaimage5}
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
<QaTestingRelatedProjects/>
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

export default QATesting
