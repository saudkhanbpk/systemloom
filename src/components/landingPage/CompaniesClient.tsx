"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CompaniesClient: React.FC<{ companies: any[] }> = ({ companies }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for window object to avoid SSR issues
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 520);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="overflow-x-hidden -mt-12 p-4 border rounded-md relative z-10 bg-white shadow-sm">
      <h2 className="text-center md:text-2xl text-lg font-bold text-purple-600 mt-3">
        The world's leading brands are powered by TechCreator
      </h2>

      {/* Add key to force re-render when isMobile changes */}
      <motion.div
        key={isMobile ? "mobile" : "desktop"}
        initial={{ x: 0 }}
        animate={{
          x: isMobile ? "-500%": "-100%" }}
        transition={{
          duration: isMobile ? 20 : 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex py-12"
      >
        {[...companies, ...companies].map((company, index) => (
          <Image
            src={company}
            alt={`Company ${index + 1}`}
            key={index}
            width={140}
            height={48}
            className="h-auto w-auto pr-20 object-contain"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CompaniesClient;