"use client";
import React from "react";
import { motion } from "framer-motion";
import company1 from "../../../public/assets/homepage/image 149.webp";
import company2 from "../../../public/assets/homepage/image 150.webp";
import company3 from "../../../public/assets/homepage/bnblogo.webp";
import company4 from "../../../public/assets/homepage/image 152.webp";
import company5 from "../../../public/assets/homepage/PatronPal logo.webp";
import company6 from "../../../public/assets/homepage/image 181.webp";
import company7 from "../../../public/assets/homepage/image 182.webp";
import company8 from "../../../public/assets/homepage/hiredeveloper.webp";
import Image from "next/image";

const Companies = () => {
  const companies = [company1, company2, company3, company4, company5, company6, company7];

  return (
    <div className="overflow-x-hidden -mt-12   p-4 border rounded-md relative z-[10] bg-white shadow-sm">  
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
                className="h-12 w-56 pr-20 object-contain"
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
                className="h-12 w-56 pr-20 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;