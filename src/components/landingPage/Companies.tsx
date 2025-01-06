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
    <div className=" overflow-x-hidden   bg-[#9A00FF]">
      <div className="  mx-auto">
        <div className=" mx-auto max-w-6xl flex py-4 ">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
    <section className="mb-32 mt-16 ">
      <div className=" mx-auto w-[95%] h-auto md:h-[300px]">
        <div className="flex flex-col    md:flex-row justify-around">
          <div className="md:w-1/2 mb-8 md:mb-0 px-6 py-16 leading-10">
            <h2 className="text-2xl font-inter md:text-2xl font-semibold mb-4 leading-10 text-center md:text-left">
              "Looking for top developers and designers? Let's build something
              great together. Get in touch today!"
            </h2>
            <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#9A00FF] text-white font-semibold p-2 rounded-[5px] w-[220px] mt-5"
            >
              Hire Top Developers
            </motion.button>
            </Link>
          </div>
          <div className=" ">
            <Image
              src={company8}
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
