"use client"
import Link from "next/link";
import { motion } from "framer-motion"

function HeroSection() {
  return (
    <main className="relative bg-gray-900 text-white md:pt-5 pt-16">
      {/* Preload the background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto" 
          className="object-cover w-full h-full opacity-25"
        >
          <source
            src="/assets/homepage/backgroundVideo.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative max-w-[1440px] mx-auto md:px-4 sm:px-6 lg:px-8 py-16 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="font-semibold text-3xl md:text-[57px] leading-tight md:leading-[65px] mb-6 md:mb-8"
            style={{ transition: "opacity 1s ease-in-out, transform 1s ease-in-out" }} // Ensure smooth transitions
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
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
            className="font-normal text-base md:text-xl max-w-lg md:max-w-3xl mx-auto mb-6 md:mb-10 leading-7 md:leading-9 text-gray-300"
          >
            We're inspired by new technology and have dedicated our careers to
            exploring and harnessing it. We are in the business of solving problems.
            Entrepreneurs empower us to turn ideas into lightning-fast solutions that
            revolutionize industries.
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: "rgba(255, 255, 255, 0.24)" }}
              className="text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Automate your Business &nbsp;&nbsp;→
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default HeroSection;
