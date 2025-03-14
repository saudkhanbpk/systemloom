import Image from 'next/image'
import React from 'react'
import webimage5 from "../../../public/assets/servicespages/webimage5.webp";


const FramedFeatureSection = () => {
  return (
    <div className="lg:relative bg-[#9A00FF] lg:h-[450px] mx-auto md:mt-16 mt-9">
  <div className="lg:relative px-5 flex flex-col lg:flex-row  items-center lg:items-start gap-3 md:gap-10">
    {/* Text Content */}
    <div className="lg:relative webDevtext z-10 lg:max-w-[600px] xl:max-w-[800px] xl:p-10  text-wrap text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl mt-2 font-bold text-white mb-4">
        Comprehensive Web Development Services with Ongoing Support
      </h2>
      <p className="text-base md:text-lg xl:text-lg text-white">
        Our commitment doesn’t end with the launch of your website or app.
        We provide comprehensive{" "}
        <strong>web development services,</strong> from concept to
        deployment, with continuous support to ensure your platform
        evolves with your business. Trust us to deliver innovation,
        functionality, and unmatched quality in every project.
        Whether you need updates, maintenance, or new features, we’re here every step of the way. Our team values collaboration and ensures your vision remains at the forefront. With us, your digital presence is always in expert hands.
      </p>
    </div>
    {/* Image */}
    <div className="relative lg:absolute lg:top-52 image-height xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
      <Image
        src={webimage5}
        alt="Feature illustration"
        width={400}
        height={500}
        className="rounded-lg mx-auto mb-2 md:mx-0"
      />
    </div>
  </div>
</div>
  )
}

export default FramedFeatureSection
