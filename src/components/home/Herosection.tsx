import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/assets/aboutpage/backgroundImage.webp";
import Link from "next/link";

const Herosection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
    {/* Background Image */}
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        width={1920}
        height={1080}
        priority
        className="opacity-25 w-full h-full object-cover"
      />
    </div>

    {/* Content Wrapper */}
    <div className="relative max-w-4xl text-center">
      {/* Main Headline */}
      <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins leading-tight">
        We Launch Your Website in Just <span className="text-purple-500">58 Hours!</span>
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-300 mt-3 md:mt-4">
        “Connect with Your Customers Online.”
      </p>

      {/* Description */}
      <p className="text-sm sm:text-lg md:text-xl mt-4 md:mt-6 mx-auto text-gray-300 max-w-[90%] md:max-w-3xl">
        Experience a fully mobile-optimized site, whether you need a custom-built solution or CMS development. 
        We stand behind our work with a <span className="font-semibold text-purple-400">100% money-back guarantee</span>: 
        if our work doesn't meet your expectations, you get a full refund.
      </p>

      {/* CTA Button */}
      <Link href="#OurTeam">
        <button className="mt-6 md:mt-8 text-sm sm:text-lg md:text-xl font-semibold bg-purple-600 hover:bg-purple-700 
          text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg md:shadow-xl transition-all duration-300 transform 
          hover:scale-105 hover:shadow-2xl">
          Get Built Your Site
        </button>
      </Link>

      {/* CTA Beneath Short Word */}
      <p className="mt-3 md:mt-4 text-xs sm:text-sm text-gray-400 font-semibold">
        🇺🇸 USA Exclusive: <span className="text-purple-400">10% Off</span>
      </p>
    </div>
  </section>
  );
};

export default Herosection;
