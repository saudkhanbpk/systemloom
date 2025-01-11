"use client";
import Image from "next/image";
import backgroundImage from "../../../public/assets/pricingpage/backgroundImage .webp";
import React, { useRef } from "react";
import frontImage from "../../../public/assets/pricingpage/List → Listitem.webp";
import pricing2 from "../../../public/assets/pricingpage/pricing1 (1).webp";
import pricing1 from "../../../public/assets/pricingpage/pricing1 (2).webp";
import PricingForm from "./PricingForm";
import { FaArrowDown } from "react-icons/fa";

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
      <div className="relative text-white md:py-44 py-28 md:px-4 px-2">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Competitive pricing allows you to maximize value without compromising quality"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full max-w-[1440px] mx-auto container">
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center animate-slide-down">
            Pricing to Your Success
          </h1>
          <p className="text-lg md:text-xl font-normal mb-8 text-center animate-fade-in">
            At TechCreator, we believe in providing clear and competitive
            pricing for all our services. Whether you’re a startup or an
            established business, our packages are designed to deliver maximum
            value without compromising on quality.
          </p>
          <button
            onClick={scrollToForm}
            className=" bg-[#9A00FF] text-lg  text-white p-4 rounded-md mt-4 hover:bg-[#734bdf] transition flex gap-1 items-center"
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
       

        <div className="flex flex-col md:flex-row justify-between  gap-16 py-10 md:py-10  md:px-8 px-3 lg:px-16 ">
          <div className="md:w-[1900px] ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 ">
              Affordable Solutions Without Sacrificing Quality
            </h2>
            <p className=" text-base md:text-lg lg:text-xl  mt-4 md:mt-0">
              Our pricing is structured to suit diverse business needs. From
              basic plans to premium solutions, we ensure that every client gets
              high-quality service, whether it's web development, digital
              marketing, or app development.We know every business has different and unique requirements, which provoke us to offer flexible options that cater to different budgets.We have a team of expertise committed to deliver exceptional results and add values to your investment. 
            </p>
          </div>
          <div className="relative sm:w-[400px] w-full h-[300px] md:w-[900px]  md:h-[349.42px] mx-auto md:mx-0">
            <div className="relative z-10 w-full h-full">
              <Image
                src={frontImage}
                alt="Flexible pricing for high-quality web, marketing, and app development services"
                className="absolute inset-0 rounded-2xl lg:w-[600px]"
                  layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        

        <div className="flex flex-col md:flex-row justify-between  gap-16 py-10 md:py-10  md:px-8 px-3 lg:px-16 ">
          <div className="relative sm:w-[400px] w-full h-[300px] md:w-[900px]  md:h-[349.42px] mx-auto md:mx-0">
            <div className="relative z-10 w-full h-full">
              <Image
                src={pricing2}
                alt="Custom pricing that works around your business growth"
                className="absolute inset-0 rounded-2xl lg:w-[600px]"
                  layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-[1900px] ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 ">
            Flexible Packages for All Businesses
            </h2>
            <p className=" text-base md:text-lg lg:text-xl  mt-4 md:mt-0">
            We offer customizable pricing plans to align with your goals. Whether you need comprehensive solutions or specific services, our packages are built to scale with your business as it grows.Our different packages ensure you pay for what you need, also providing with the option of upgradation or adjustment as we all know requirements evolve as time passes. We have a range of options that is suitable to any budget or project size. 
Our pricing is transparent and there is no hidden fees.
            </p>
          </div>
          
        </div>
        {/* Pricing form */}
        <div ref={pricingFormRef}>
          <PricingForm />
        </div>

        

       <div className="flex flex-col md:flex-row justify-between  gap-16 py-10 md:py-10  md:px-8 px-3 lg:px-16 ">
          <div className="md:w-[1900px] ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 ">
            Why Choose TechCreator for Your Next Project?
            </h2>
            <p className=" text-base md:text-lg lg:text-xl  mt-4 md:mt-0">
With TechCreator, you get more than just a service—you get a partner committed to your success. Our pricing reflects our dedication to delivering the best results while staying within your budget.Understanding the market and business requirements make you to do something great. This is where TechCreator excels. We first understand your business goals and then deliver solution to tackle the challenges that come your way. We bring expertise and innovation to every project whether it is web development or app development.
            </p>
          </div>
          <div className="relative sm:w-[400px] w-full h-[300px] md:w-[900px]  md:h-[349.42px] mx-auto md:mx-0">
            <div className="relative z-10 w-full h-full">
              <Image
                src={pricing1}
                alt="TechCreator: A partner focused on your success with affordable pricing"
                className="absolute inset-0 rounded-2xl lg:w-[600px]"
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
