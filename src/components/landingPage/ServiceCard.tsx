"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  altText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, altText }) => {
  return (
    <article className="h-[400px] p-8 rounded-2xl border border-purple-100 hover:border-purple-300 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer flex flex-col">
      
      {/* Icon */}
      <Image src={icon} alt={altText} width={64} height={64} className="object-contain mx-auto h-20" />

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed line-clamp-4 text-center">{description}</p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl hover:from-purple-700 hover:to-purple-900 transition duration-300"
      >
        Learn More →
      </motion.button>
      
    </article>
  );
};

export default ServiceCard;
