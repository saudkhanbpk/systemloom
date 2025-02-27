"use client"; 

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CompaniesClient: React.FC<{ companies: any[] }> = ({ companies }) => {
  return (
    <section className="overflow-x-hidden -mt-12 p-4 border rounded-md relative z-10 bg-white shadow-sm">
      <h2 className="text-center md:text-2xl text-lg font-bold text-purple-600 mt-3">
        The world's leading brands are powered by TechCreator
      </h2>

      {/* ✅ Removed Extra Wrappers & Simplified Motion */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
