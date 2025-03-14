import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import webimage1 from "../../../public/assets/servicespages/webImage1.webp";


const FeatureSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center xl:px-0 lg:px-4 lg:mt-12 my-6  relative   ">
    <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px]  lg:h-[300px] z-10 ">
    <Image
  src={webimage1}
  alt="Bespoke Web Development to attract your audience"
  width={400} 
  height={450} 
  quality={90} 
  className="lg:w-[400px]  h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16  xl:top-10 shadow-xl"
      />
    </div>
    <div className="bg-[#9A00FF] w-full  h-auto p-6  mt-3 lg:mt-0 ">
      <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px] ">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3  ">
          Bespoke Web Development Tailored to Your Vision
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed   w-full  text-wrap">
          Stand out from the crowd with{" "}
          <strong>bespoke web development</strong> crafted to meet your
          specific needs. Our team of skilled developers creates custom
          solutions that align with your brand and business goals,
          offering unique designs and functionalities to captivate your
          audience and elevate your online presence.
          From concept to launch, we ensure every detail is perfected to deliver an exceptional <Link href="/services/ui-ux-design-agency" className="cursor-pointer underline">user experience</Link>. Let us transform your vision into a <Link href="/services/digital-marketing-for-software-companies" className="cursor-pointer underline">dynamic digital reality</Link>. 
        </p>
    </div>
  </div>
</div>
  )
}

export default FeatureSection
