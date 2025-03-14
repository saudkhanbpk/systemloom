import React from 'react'
import Buttons from './Buttons'
import Image from 'next/image'
import webDevelopmentImagehero from "../../../public/assets/servicespages/webdevelopment.webp";
import Link from 'next/link';


const Herosection = () => {
  return (
    <div>
       {/* hero section start */}
       <div className="bg-black w-full md:px-0 px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0 justify-around items-center text-white">
  {/* Left Section */}
  <div className="w-full md:w-[50vw] text-center md:text-left">
    <h1 style={{lineHeight:1.2}} className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
      Empower your business with custom web development
    </h1>
    <p className="text-base lg:text-lg mt-3 leading-relaxed">
      Techcreator accelerates your business growth by delivering custom web solutions designed to meet your business objectives. With a team of skilled, experienced, and dedicated developers, we provide tailored websites for industries like <Link href="/healthcare" className="cursor-pointer text-blue-600">Healthcare</Link>, <Link href="/real-estate" className="cursor-pointer text-blue-600"> Real Estates</Link>, <Link href="/restaurants" className="cursor-pointer text-blue-600">Restaurants</Link> , <Link href="/e-commerce" className="cursor-pointer text-blue-600">E-Commerce</Link> stores—that ensure seamless functionality and innovation.
    </p>
    <Buttons />
  </div>

  {/* Right Section */}
  <div className="w-full md:w-auto flex justify-center">
  <Image
  src={webDevelopmentImagehero}
  alt="Web Development and Design"
  width={300}
  height={200}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px" // ✅ Responsive sizes
  className="rounded-lg shadow-md object-cover"
/>
</div>
</div>
    </div>
  )
}

export default Herosection
