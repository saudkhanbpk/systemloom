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
import Link from "next/link";
import Image from "next/image";

const Companies = () => {
  const companies = [company1, company2, company3, company4, company5, company6, company7];

  return (
    <div className="overflow-x-hidden -mt-12   p-4 border rounded-md relative z-[10] bg-white shadow-sm">  
      <h2 className="text-center md:text-2xl text-lg font-bold text-purple-600 mt-3">
        The world's leading brands are powered by TECHCREATOR
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





export const CTASection = () => {
  return (
    <section className="md:mb-32 md:mt-16 mt-7">
      <div className="h-auto md:h-[300px]">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="mb-8 md:mb-0 leading-10">
            <h2 className="text-2xl font-inter md:text-2xl font-semibold mb-4 leading-10 text-center md:text-left">
              "Looking for top developers and designers? Let's build something
              great together. Get in touch today!"
            </h2>
            <div className="text-center md:text-left">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9A00FF] text-white shadow-[0_4px_16px_-4px_#3b71ca] font-semibold p-2 rounded-[5px] w-[220px] mt-5 mx-auto md:mx-0"
                >
                  Hire Top Developers
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <Image
              src={company8}
              alt="Team working together"
              width={300}
              height={280}
              className="w-full hide-at-936 rounded-lg shadow-lg h-[280px] md:h-[330px] md:w-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

