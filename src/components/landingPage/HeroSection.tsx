"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="relative bg-gray-900 text-white md:pt-5 pt-16">
    {/* Video Background */}
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" 
        className="object-cover w-full h-full opacity-25"
      >
        <source src="/assets/homepage/backgroundVideo01.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  
    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative max-w-[1440px] mx-auto md:px-4 sm:px-6 lg:px-8 px-2 py-16 md:pt-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
        className="text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
          className="font-semibold text-3xl md:text-[57px] leading-tight md:leading-[65px] mb-6 text-center"
        >
          Develop your{" "}
          <motion.span
            whileHover={{ scale: 1.1, color: "#C700FF" }}
            className="text-[#9A00FF]"
          >
            Business
          </motion.span>
          <br className="hidden md:inline" />
          <span> to Accelerate Growth</span>
        </motion.h1>
  
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeInOut" }}
          className="font-normal text-base md:text-xl max-w-lg md:max-w-3xl mx-auto mb-6 md:mb-10 leading-7 md:leading-9 text-gray-300"
        >
          We're inspired by new technology and have dedicated our careers to
          exploring and harnessing it. We are in the business of solving problems.
          Entrepreneurs empower us to turn ideas into lightning-fast solutions that
          revolutionize industries.
        </motion.p>
  
        {/* Call-to-Action Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            style={{ background: "rgba(255, 255, 255, 0.24)" }}
            className="text-white font-bold md:py-4 md:px-8 px-2 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Automate your Business &nbsp;&nbsp;→
          </motion.button>
        </Link>
  
        {/* Animated Arrow */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          }}
          className="mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="rgb(139, 92, 246)"
            className="w-8 h-8 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m0 0l6-6m-6 6l-6-6"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  </main>
  
  );
}

export default HeroSection;
