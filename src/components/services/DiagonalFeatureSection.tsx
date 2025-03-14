import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import webimage2 from "../../../public/assets/servicespages/webserviceImage1.webp";
import webimage3 from "../../../public/assets/servicespages/webserviceimage2.webp";
import webimage4 from "../../../public/assets/servicespages/webserviceimage3.webp";

const DiagonalFeatureSection = () => {
  return (
    <div className="md:mt-16 mt-9 ">
    {/* card1 */}
    <div className="flex flex-col md:flex-row   items-center  gap-3 md:gap-12">
      {/* Image Section */}
      <Image
        src={webimage2}
        alt="Digital Web Development solution for your business needs"
        width={300}
        height={300}
        className="sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
      />

      {/* Text Section */}
      <div className=" text-center md:text-start">
        <h2 className="text-xl md:text-xl lg:text-3xl xl:text-4xl mb-2 font-bold">
          Custom Web App Development for Dynamic Digital Solutions
        </h2>
        <p className="text-base md:text-base xl:text-lg text-gray-700">
          <strong>
            We love working on fresh concepts, ideas and technologies that
            break industry standards and generate online traction.
          </strong>{" "}
          A solution that goes beyond a traditional website? Our custom web
          app development services deliver feature-rich, interactive
          applications that cater to your business's unique requirements. We
          specialize in building web apps that enhance user engagement and
          streamline your operations.
        </p>
      </div>
    </div>

    {/* card 2 */}
    <div className="flex flex-col-reverse md:flex-row  items-center  gap-3 md:gap-12 md:mt-16 mt-9">
      {/* Image Section */}

      {/* Text Section */}
      <div className=" text-center md:text-left ">
        <h2 className="text-xl md:text-xl lg:text-3xl xl:text-4xl mb-2 font-bold ">
        MERN & MEAN Web Development Services for High Performance
        </h2>
        <p className="text-base md:text-base lg:text-lg text-gray-700">
        Being a specialist in <strong>MERN and MEAN web development services,</strong> we build scalable, secure, and <Link href="/services/web-development" className="cursor-pointer text-blue-600">high-performance websites</Link> based on your business needs. No matter if your need is a <Link href="/blog" className="cursor-pointer text-blue-600">content-heavy website</Link>, a feature-rich <Link href="/e-commerce" className="cursor-pointer text-blue-600">e-commerce platform</Link> , or an advanced web application, our developers harness the power and flexibility of MERN (MongoDB, Express, React, Node.js) and MEAN (MongoDB, Express, Angular, Node.js) to provide exemplary solutions. 
        </p>
      </div>
      <Image
        src={webimage3}
        alt="Execute perfect planing with php web development services "
        width={300}
        height={300}
        className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px] "
      />
    </div>

    {/* card 3 */}
    <div className="flex flex-col md:flex-row items-center px-1 sm:px-4 xl:px-0 gap-3 md:gap-12 md:mt-16 mt-9">
      {/* Image Section */}
      <Image
        src={webimage4}
        alt="progressive web app development company providing its best"
        width={300}
        height={300}
        className=" sm:w-[300px] md:w-[500px] lg:w-[750px] xl:w-[800px] 2xl:w-[1200px]"
      />

      {/* Text Section */}
      <div className="text-center md:text-left ">
        <h2 className="text-xl md:text-xl lg:text-3xl xl:text-4xl mb-2 font-bold ">
        React Native Development Services for Cross-Platform Excellence
        </h2>
        <p className="text-base md:text-base lg:text-lg xl:text-lg text-gray-700 ">
        By means of <strong>React Native development service experts,</strong> we built cross-platform mobile applications that provide native-like experience on iOS and Android. To build high-performing and cost-effective mobile solutions, our developers use the power of React Native for building everything-from feature-rich business applications, dynamic e-commerce solutions to interactive social platforms. 
        </p>
      </div>
    </div>
  </div>
  )
}

export default DiagonalFeatureSection
