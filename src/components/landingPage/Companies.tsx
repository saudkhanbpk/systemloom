"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import default styles
import company1 from "../../../public/assets/companies/petronworklogo.png";
import company2 from "../../../public/assets/companies/GeekshubLogo.png";
import company3 from "../../../public/assets/companies/bnblogo.png";
import company4 from "../../../public/assets/companies/musafirLogo.svg";
import company5 from "../../../public/assets/companies/PatronPal logo.png";
import company7 from "../../../public/assets/companies/Rectangle 21848.png";
import Link from "next/link";
import CommonButton from "../common/Button";

const Companies = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative bg-[#9A00FF] py-5 px-4 md:px-10 md:mb-0 mb-8">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
          aria-hidden="true"
          poster="/assets/vecteezy_video-placeholder.jpg"
        >
          <source
            src="/assets/vecteezy_digital-waves-motion-background-video-animation_3006226.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Carousel Section */}
      <div className="relative z-10 ">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={800}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
          containerClass="carousel-container"
          centerMode={true}
          swipeable={true}
          draggable={true}
          customTransition="transform 0.8s ease-in-out"
          dotListClass="custom-dot-list-style"
        >
          <div className="flex justify-center  items-center mb-2  mt-11 sm:mx-0 mx-3">
            <Image src={company1} alt="Company 1" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mb-2 mx-3 sm:mx-0">
            <Image src={company2} alt="Company 2" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mt-9 mb-2 mx-3 sm:mx-0">
            <Image src={company4} alt="Company 4" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mb-2 mx-3 sm:mx-0">
            <Image src={company3} alt="Company 3" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mt-10 mb-2 mx-3 sm:mx-0">
            <Image src={company5} alt="Company 5" width={140} height={45} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Companies;

export const CTASection = () => {
  return (
    <section className="mb-32 mt-16 ">
      <div className=" mx-auto w-[95%] h-auto md:h-[300px]">
        <div className="flex flex-col    md:flex-row justify-around">
          <div className="md:w-1/2 mb-8 md:mb-0 px-6 py-16 leading-10">
            <h2 className="text-2xl font-inter md:text-2xl font-semibold mb-4 leading-10 text-center md:text-left">
              "Looking for top developers and designers? Let's build something
              great together. Get in touch today!"
            </h2>
            <Link href="/contact">
              <CommonButton
                title="Hire Top Developers"
                className="bg-[#9A00FF] text-white font-semibold p-2 rounded-[5px] w-[220px] mt-5"
                handleClick={() => console.log("")}
              />
            </Link>
          </div>
          <div className=" ">
            <Image
              src={company7}
              alt="Team working together"
              width={300}
              height={280}
              className="w-full hide-at-936 rounded-lg shadow-lg h-[280px] md:h-[330px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
