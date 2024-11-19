import React from 'react'
import webImage from "../../../public/assets/ServiceDetailsImages/webdev.png"
import appImage from "../../../public/assets/ServiceDetailsImages/appdev.png"
import graphicImage from "../../../public/assets/ServiceDetailsImages/Designer_working_with_pen_display_Illustration-removebg-preview 1.png"
import seoImage from "../../../public/assets/ServiceDetailsImages/seo1.png"
import projectManagementImage from "../../../public/assets/ServiceDetailsImages/management.png"
import uidesignImage from "../../../public/assets/ServiceDetailsImages/Saly-13.png"
import softwareMantenance from "../../../public/assets/ServiceDetailsImages/soft.png"
import devopsImage from "../../../public/assets/ServiceDetailsImages/QA.png"
import qatestingImage from "../../../public/assets/ServiceDetailsImages/qaTesting.png"
import webdev1 from "../../../public/assets/ServiceDetailsImages/webdev1.png"
import appdev1 from "../../../public/assets/ServiceDetailsImages/appdev1.png"
import appdev2 from "../../../public/assets/ServiceDetailsImages/appdev2.png"

import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = () => {
  return (
    <div className='max-w-7xl  flex flex-col gap-6  mx-auto my-16'>
      {/* web development */}
     <Link href="/services/web-development">
     <div className='flex justify-between md:flex-row flex-col  items-center bg-[#91B9A4AB] px-4 cursor-pointer rounded-md'>
  <div>
    <h1 className='text-3xl font-bold mb-4'>Web Development</h1>
    <p className='text-xl text-gray-700 md:w-[40vw]'>
      TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.
      TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.
    </p>
  </div>
  <div className='relative'>
    <Image
      src={webImage}
      alt="web_Image"
      width={300}
      height={300}
      className='w-[35vw] h-[300px] object-contain'
    />
    <Image
      src={webdev1}
      alt="web_Image"
      width={300}
      height={300}
      className='w-[35vw] h-[300px] object-contain absolute top-0 right-20'
    />
  </div>
</div>
     </Link>


      {/* App development */}
<div className='flex justify-between md:flex-row flex-col relative items-center bg-[#E5DFACAB] px-4 p-9 cursor-pointer rounded-md'>
  <div>
    <h1 className='text-3xl font-bold mb-4 '>App Development</h1>
    <p className='text-xl text-gray-700 md:w-[40vw]'>
      TechCreator offers top-tier mobile app development services, creating innovative and user-friendly apps for both Android and iOS. 
      We work closely with clients to ensure each app is tailored to their needs, using the latest technologies to build secure, scalable, and intuitive solutions. 
      Whether simple or complex, we’re dedicated to delivering apps that exceed expectations.
    </p>
  </div>
  <div className='  border '>
    <Image
      src={appImage}
      alt="app_Image"
      width={300}
      height={300}
      className='w-[25vw] h-[210px] object-cover -mt-20  '
    />
    <Image
      src={appdev1}
      alt="appdev1_Image"
      width={300}
      height={300}
      className='w-[30vw] h-[300px] object-cover absolute top-2 right-36'
    />
    <Image
      src={appdev2}
      alt="appdev2_Image"
      width={300}
      height={300}
      className='w-[25vw] h-[210px] object-cover absolute top-20 right-20' // Adjusted left position
    />
  </div>
</div>


{/* UI/UX Designing */}
      <div className='flex justify-between md:flex-row flex-col items-center bg-[#E5C2ACAB] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>UI/UX Designing</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator specializes in UI/UX design to create visually appealing and user-friendly interfaces. We focus on understanding user needs and behavior to design intuitive, responsive, and engaging experiences. Our team ensures seamless interaction and aesthetic appeal across all devices, providing designs that enhance usability and drive user satisfaction.</p>
        </div>
        <div>
          <Image src={uidesignImage} alt="design_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

{/* Devops */}
<div className='flex justify-between md:flex-row flex-col items-center bg-[#A1D9D3] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>Devops</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator offers comprehensive DevOps services to streamline your development and operations workflows. We focus on automating processes, improving collaboration, and enhancing system reliability to ensure faster, more efficient delivery of software. Our DevOps solutions help you achieve continuous integration, continuous deployment, and scalability, optimizing your infrastructure for high performance and security.</p>
        </div>
        <div>
          <Image src={devopsImage} alt="design_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

{/* Graphic Designing */}
<div className='flex justify-between md:flex-row flex-col items-center bg-[#D4A5A5] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>Graphic Designing</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator offers creative graphic design services to bring your brand to life. We specialize in crafting visually stunning designs for logos, brochures, websites, social media, and more. Our designs are tailored to effectively communicate your brand identity and engage your audience.</p>
        </div>
        <div>
          <Image src={graphicImage} alt="design_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

      {/* Project Management */}
      <div className='flex justify-between md:flex-row flex-col items-center bg-[#F5D6A1] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>Project Management</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator offers project management services to ensure that your projects are delivered on time, within budget, and according to your specifications. Our experienced project managers use proven methodologies to plan, execute, and monitor projects efficiently, ensuring smooth collaboration and successful outcomes.</p>
        </div>
        <div>
          <Image src={projectManagementImage} alt="projectmanagement_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

      {/* SEO & Content Writing */}
      <div className='flex justify-between md:flex-row flex-col items-center bg-[#B3D9C9] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>SEO & Content Writing</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator provides expert SEO and content writing services to help your business rank higher on search engines and attract organic traffic. We create compelling, keyword-optimized content that resonates with your audience and enhances your online visibility.</p>
        </div>
        <div>
          <Image src={seoImage} alt="seo_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

      {/* Software Maintenance */}
      <div className='flex justify-between md:flex-row flex-col items-center bg-[#C1B2E3] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>Software Maintenance</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator offers reliable software maintenance services to ensure your systems remain up-to-date, secure, and functional. We provide regular updates, performance monitoring, and bug fixes, helping you maintain a seamless user experience and long-term software success.</p>
        </div>
        <div>
          <Image src={softwareMantenance} alt="design_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

      {/* QA Testing */}
      <div className='flex justify-between md:flex-row flex-col items-center bg-[#FFB8B8] px-4 cursor-pointer rounded-md'>
        <div>
        <h1 className='text-3xl font-bold mb-4'>QA Testing</h1>
        <p className='text-xl text-gray-700 md:w-[40vw]'>TechCreator provides comprehensive QA testing services to ensure the quality, functionality, and performance of your software. Our team conducts rigorous testing to identify bugs and improve usability, ensuring that your applications meet the highest standards before launch.</p>
        </div>
        <div>
          <Image src={qatestingImage} alt="design_Image" width={300} height={300} className='w-[35vw] h-[300px] object-contain' />
        </div>
      </div>

    </div>
  )
}

export default ServiceCard