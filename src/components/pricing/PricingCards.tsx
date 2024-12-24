"use client";
import Image from "next/image";
import backgroundImage from "../../../public/assets/pricingPage/backgroundImage.jpeg";
import React, { useRef } from "react";
import frontImage from "../../../public/assets/pricing_images/List → Listitem.png";
import pricing2 from "../../../public/assets/pricing_images/pricing1 (2).png";
import pricing1 from "../../../public/assets/pricing_images/pricing1 (1).png";
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
      <div className="relative text-white h-screen md:px-4 px-2">
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
        <div className="  p-4 md:p-8">
          <div className="max-w-7xl mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-around  gap-6 py-10 md:py-20 px-2 lg:px-20 ">
          <div className="mt-6 md:mt-10 space-y-5 md:w-[600px]">
            <h2 className=" font-inter font-medium text-3xl md:text-[45.25px] leading-[1.2]">
              Affordable Solutions Without Sacrificing Quality
            </h2>
            <p className=" font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
              Our pricing is structured to suit diverse business needs. From
              basic plans to premium solutions, we ensure that every client gets
              high-quality service, whether it's web development, digital
              marketing, or app development.
            </p>
          </div>
          <div className="relative sm:w-[400px] w-full h-[300px] md:w-[480px]  md:h-[449.42px] mx-auto md:mx-0">
            <div className="relative z-10 w-full h-full">
              <Image
                src={frontImage}
                alt="Flexible pricing for high-quality web, marketing, and app development services"
                className="absolute inset-0 rounded-2xl w-[600px]"
                layout="fill"
                objectFit="cover "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-6 py-10 md:py-20 px-2 lg:px-20 ">
          <div className="relative sm:w-[400px] w-full h-[300px] md:w-[480px]  md:h-[449.42px]  mx-auto md:mx-0">
            <div className="relative z-10 w-full h-full">
              <Image
                src={pricing2}
                alt="Custom pricing that works around your business growth"
                className="absolute inset-0 rounded-2xl w-[600px]"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-[600px]  ">
            <h2 className="font-inter font-medium text-3xl md:text-[45.25px] leading-[1.2]">
              Flexible Packages for All Businesses
            </h2>
            <p className="text-xl mt-4">
              We offer customizable pricing plans to align with your goals.
              Whether you need comprehensive solutions or specific services, our
              packages are built to scale with your business as it grows.{" "}
            </p>
          </div>
        </div>
        {/* Pricing form */}
        <div ref={pricingFormRef}>
          <PricingForm />
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-6 py-10 md:py-20 px-2 lg:px-20">
          <div className="mt-6 md:mt-10 space-y-5 md:w-[600px]">
            <h2 className=" font-inter font-medium text-3xl md:text-[45.25px] leading-[1.2]">
              Why Choose TechCreator for Your Next Project?
            </h2>
            <p className=" font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
              With TechCreator, you get more than just a service—you get a
              partner committed to your success. Our pricing reflects our
              dedication to delivering the best results while staying within
              your budget.
            </p>
          </div>

          <div className="relative sm:w-[400px] w-full h-[300px] md:w-[480px]  md:h-[449.42px]  mx-auto md:mx-0">
            <div className="relative z-10 w-full h-full">
              <Image
                src={pricing1}
                alt="TechCreator: A partner focused on your success with affordable pricing"
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
