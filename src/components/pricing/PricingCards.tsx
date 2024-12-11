// components/PricingCards.tsx
import Image from 'next/image';
import backgroundImage from "../../../public/assets/pricingPage/backgroundImage.jpeg"
import React, { useRef } from 'react';
import frontImage from '../../../public/assets/pricing_images/List → Listitem.png';
import pricing2 from "../../../public/assets/pricing_images/pricing1 (2).png"
import pricing1 from "../../../public/assets/pricing_images/pricing1 (1).png"
import PricingForm from './PricingForm';
import { FaArrowDown } from 'react-icons/fa';

interface Plan {
  name: string;
  price: number;
  features: string[];
}

const PricingCards: React.FC = () => {
  const pricingFormRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    

  if (pricingFormRef.current) {
    const targetPosition = pricingFormRef.current.offsetTop; 
    const startPosition = window.scrollY; 
    const distance = targetPosition - startPosition; 
    const duration = 1000; 

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress); 
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll); 
      }
    };

    requestAnimationFrame(animateScroll); 
  }
};

  return (
    <>
    <div className="relative text-white h-screen md:px-4 px-2">
    {/* Background Image */}
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        className="w-full h-full object-cover animate-fade-in"
      />
    </div>
  
    {/* Content */}
    <div className="relative flex flex-col items-center justify-center h-full max-w-[1440px] mx-auto container">
      <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center animate-slide-down">
        PRICING
      </h1>
      <p className="text-lg md:text-xl font-normal mb-8 text-center animate-fade-in">
        TechCreator is easy to use. Whether you need a simple mobile app or a
        complex web application, TechCreator has the expertise to deliver
        high-quality solutions that excel in web and mobile app development
        services.
      </p>
      <button
            onClick={scrollToForm}
            className=" bg-[#7A4AFF] text-lg  text-white p-4 rounded-md mt-4 hover:bg-[#734bdf] transition flex gap-1 items-center"
          >
            Share Your Requirements
            <FaArrowDown
      className="transition-transform duration-300 group-hover:translate-y-2"
      size={15} 
    />
          </button>
  </div>
</div>


 
<div>
      <div className="  p-4 md:p-8">
        <div className="max-w-7xl mx-auto"></div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-around  gap-6 py-10 md:py-20 px-2 lg:px-20 ">
        <div className="mt-6 md:mt-10 space-y-5 md:w-[600px]">
          <h1 className=" font-inter font-medium text-3xl md:text-[45.25px]">
          Find The Perfect Plan Today 
          </h1>
          <p className=" font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
          Discover the ideal TechCreator pricing plan that’s right for your business to establish and grow your presence online. Whether you are just looking for advanced solutions, our plans range from basic to premium to meet your unique business needs. So, look no further other than us, to empower you with affordable, transparent and flexible solutions that drive success. Our plans are designed for every vision. 
          </p>
        </div>
        <div className="relative sm:w-[400px] w-full h-[300px] md:w-[480px]  md:h-[449.42px] mx-auto md:mx-0">
          <div className="relative z-10 w-full h-full">
            <Image
              src={frontImage}
              alt="Foreground"
              className="absolute inset-0 rounded-2xl w-[600px]"
              layout="fill" 
              objectFit="cover " 
            />
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row justify-around gap-6 py-10 md:py-20 px-2 lg:px-20 '>
      <div className="relative sm:w-[400px] w-full h-[300px] md:w-[480px]  md:h-[449.42px]  mx-auto md:mx-0">
          <div className="relative z-10 w-full h-full">
            <Image
              src={pricing2}
              alt="Foreground"
              className="absolute inset-0 rounded-2xl w-[600px]"
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>
        <div className='md:w-[600px]  '>
        <h1 className='font-inter font-medium text-3xl md:text-[45.25px] leading-[1.2]'>
  Seamless Scalability for Growing Businesses
</h1>
          <p className='text-xl mt-4'>Our priority is to grow your businesses by providing you with our affordable and flexible price plans. Everything evolves so as your business, adjust your plan to match your expanding needs. Upgrade, customize, or add features anytime- it’s all about ensuring you have what you need to stay ahead in your industries. </p>
        </div>
      </div>
{/* Pricing form */}
<div ref={pricingFormRef}>
      <PricingForm/>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-6 py-10 md:py-20 px-2 lg:px-20">
        <div className="mt-6 md:mt-10 space-y-5 md:w-[600px]">
          <h1 className=" font-inter font-medium text-3xl md:text-[45.25px] leading-[1.2]">
          Innovative Technology Solutions with Quality at the Core 
          </h1>
          <p className=" font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
          TechCreator focus on driving technological innovation and delivering top-tier quality to empower your business. We aim to provide unmatched performance, reliable support and cutting-edge features- all at affordable, user-friendly prices. We focus on cloud-based tools and custom software development to ensure your business stays ahead in todays’s competitive digital landscape.
          </p>
        </div>

        


        <div className="relative sm:w-[400px] w-full h-[300px] md:w-[480px]  md:h-[449.42px]  mx-auto md:mx-0">
          <div className="relative z-10 w-full h-full">
            <Image
              src={pricing1}
              alt="Foreground"
              className="absolute inset-0 rounded-2xl w-[600px]"
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default PricingCards;
