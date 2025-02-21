"use client"; 

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CompaniesClient: React.FC<{ companies: any[] }> = ({ companies }) => {
  return (
    <div className="overflow-x-hidden -mt-12 p-4 border rounded-md relative z-[10] bg-white shadow-sm">  
      <h2 className="text-center md:text-2xl text-lg font-bold text-purple-600 mt-3">
        The world's leading brands are powered by TechCreator
      </h2>
      
      <div className="w-[90vw] relative z-[50]">  
        <div className="flex py-12">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {companies.map((company, index) => (
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

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {companies.map((company, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default CompaniesClient;
