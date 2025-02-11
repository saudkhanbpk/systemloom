"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useGetAllTestimonial from "@/hooks/useGetAllTestimonial";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  testimonial: string;
  reviewScreenshot: string; 
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  testimonial,
  reviewScreenshot,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="p-6 text-center relative"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-20 h-20"
        />
      </div>
      <h3 className="font-bold text-xl mb-2 text-center text-white ">{name}</h3>
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="font-normal leading-6 text-base mb-2 text-center text-white">{`"${testimonial}"`}</p>

      {isHovered && reviewScreenshot && (
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-105 flex justify-center items-center">
          <img
            src={reviewScreenshot}
            alt="Testimonial Screenshot"
            className="object-cover max-w-[400px] max-h-[400px]"
          />
        </div>
      )}
    </motion.div>
  );
};

const ClientTestimonialsSection: React.FC = () => {
  useGetAllTestimonial();
  const { testimonials } = useSelector(
    (state: RootState) => state.testimonials
  );

  // Carousel settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    smallTablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="md:py-10 "
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="">
        {/* <motion.h2
          className="text-[35px] font-bold text-center text-[#9A00FF] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          CLIENT TESTIMONIALS
        </motion.h2>
        <motion.p
          className="text-2xl text-center font-medium mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          What they say about us
        </motion.p> */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Carousel
            responsive={responsive}
            autoPlay
            infinite
            removeArrowOnDeviceType={["mobile", "tablet"]}
            arrows={false}
            showDots
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial._id}
                name={testimonial.clientName}
                image={testimonial.profilePicture || "/default-profile.png"}
                rating={testimonial.rating}
                testimonial={testimonial.review}
                reviewScreenshot={
                  testimonial.reviewScreenshot || "/default-screenshot.png"
                }
              />
            ))}
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientTestimonialsSection;
