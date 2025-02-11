"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  style: boolean;
  altText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  altText,
}) => {
  return (
    <div className="h-[400px] p-8 rounded-2xl transition-all duration-500 ease-out border border-purple-100 hover:border-purple-300 cursor-pointer bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex flex-col">
      <div className="flex items-center justify-center h-20 mb-6">
        <div className="relative w-16 h-16">
          <Image
            src={icon}
            alt={altText}
            fill
            className="object-contain"
            sizes="(max-width: 64px) 100vw, 64px"
          />
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed line-clamp-4">{description}</p>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:shadow-lg"
      >
        Learn More →
      </motion.button>
    </div>
  );
};

export default ServiceCard;