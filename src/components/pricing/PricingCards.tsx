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
    const targetPosition = pricingFormRef.current.offsetTop; // Get the target position
    const startPosition = window.scrollY; // Get the current position
    const distance = targetPosition - startPosition; // Calculate the distance
    const duration = 1000; // Duration of the scroll (in milliseconds)

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Calculate the progress (0 to 1)

      window.scrollTo(0, startPosition + distance * progress); // Scroll to the position
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll); // Continue the animation
      }
    };

    requestAnimationFrame(animateScroll); // Start the animation
  }
};

  return (
    <>
    <div className="relative text-white h-screen px-4">
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
            className="bg-purple-600 text-lg  text-white p-4 rounded-md mt-4 hover:bg-purple-500 transition flex gap-1 items-center"
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
      
      <div className="flex flex-col md:flex-row justify-around  gap-6 py-10 md:py-20 px-6 lg:px-20 ">
        <div className="mt-6 md:mt-10 space-y-5 md:w-[600px]">
          <h1 className=" font-inter font-medium text-3xl md:text-[45.25px]">
            Innovation Unleashed
          </h1>
          <p className=" font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
          At TechCreator, we turn your digital dreams into reality. From custom software development to tailored hardware solutions, our innovative products and services are designed to elevate your business.

With a focus on scalability, security, and cutting-edge technology, we deliver solutions that drive success. Partner with us to build the future today.
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


      <div className='flex flex-col md:flex-row justify-around gap-6 py-10 md:py-20 px-6 lg:px-20 '>
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
          <h1 className='text-3xl font-normal'>Affordability Redefined</h1>
          <p className='text-xl mt-4'>At TechCreator, we believe that cutting-edge technology should be accessible to all. Our affordable solutions—from custom software development to advanced hardware integrations—are designed to fuel your business growth without compromising on quality.

We blend innovation with cost-effectiveness, delivering scalable, secure, and high-performance products tailored to your needs. Let’s build the future together, without breaking the bank.</p>
        </div>
      </div>
{/* Pricing form */}
<div ref={pricingFormRef}>
      <PricingForm/>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-6 py-10 md:py-20 px-6 lg:px-20">
        <div className="mt-6 md:mt-10 space-y-5 md:w-[600px]">
          <h1 className=" font-inter font-medium text-3xl md:text-[45.25px]">
          Seamless Integration
          </h1>
          <p className=" font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
          At TechCreator, we specialize in seamless integration that ensures your technology ecosystem works flawlessly. Whether it’s connecting new systems with legacy infrastructure or developing custom APIs, our solutions are designed for smooth transitions and optimal performance, helping your business stay ahead in a fast-evolving digital world.
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
