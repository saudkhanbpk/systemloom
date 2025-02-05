"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // React Icons for Arrows

// Video Sources
const videoSources = [
  {
    src: "/assets/homepage/backgroundVideo01.webm",
    title: "Innovate Your",
    highlight: "Business",
    subtitle:
      "We're inspired by new technology and have dedicated our careers to exploring and harnessing it. We are in the business of solving problems. Entrepreneurs empower us to turn ideas into lightning-fast solutions that revolutionize industries.",
  },
  {
    src: "/assets/homepage/backgroundVideo02.mp4",
    title: "Grow Your",
    highlight: "Startup",
    subtitle: "Build, scale, and automate with smart AI-driven strategies.",
  },
  {
    src: "/assets/homepage/backgroundVideo03.mp4",
    title: "Empower Your",
    highlight: "Company",
    subtitle: "Utilizing automation to accelerate success and efficiency.",
  },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  // Auto change video every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle Next
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  // Handle Previous
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
    );
  };

  // Animation Variants for Sliding Effect
  const videoVariants = {
    enter: (direction:any) => ({
      x: direction === 1 ? "100%" : "-100%", 
      opacity: 0,
    }),
    center: {
      x: 0, // Move to center
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: (direction:any) => ({
      x: direction === 1 ? "-100%" : "100%", 
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    }),
  };

  return (
    <main className="relative flex items-center justify-center h-screen w-full">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <AnimatePresence custom={direction} mode="wait">
          <motion.video
            key={videoSources[currentIndex].src}
            src={videoSources[currentIndex].src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            variants={videoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
          />
        </AnimatePresence>

        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Centered */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative z-10 text-center text-white px-6 sm:px-12"
      >
      

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="text-3xl md:text-[57px] font-semibold leading-tight md:leading-[65px] mb-6"
        >
          {videoSources[currentIndex].title}{" "}
          <motion.span
            whileHover={{ scale: 1.1, color: "#C700FF" }}
            className="text-[#9A00FF]"
          >
            {videoSources[currentIndex].highlight}
          </motion.span>
        </motion.h1>

          {/* Subtitle */}
          <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
          className="text-lg md:text-xl max-w-3xl font-medium text-gray-300 mb-2"
        >
          {videoSources[currentIndex].subtitle}
        </motion.p>

        {/* Call-to-Action Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-bold mt-6 py-3 px-6 rounded-full bg-purple-500 transition duration-300 ease-in-out shadow-lg"
          >
            Automate your Business →
          </motion.button>
        </Link>
      </motion.div>

      {/* Arrows for Next/Previous (Centered) */}
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="text-white bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <FaArrowLeft size={24} />
        </button>
      </div>

      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="text-white bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </main>
  );
}

export default HeroSection;