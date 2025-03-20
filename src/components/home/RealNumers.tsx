"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon, RocketLaunchIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

const RealNumbers = () => {
  const stats = [
    { 
      value: "90+", 
      label: "Satisfied Clients Worldwide",
      icon: <FaceSmileIcon className="h-12 w-12" />,
      color: "from-green-500 to-teal-400"
    },
    { 
      value: "70+", 
      label: "Global Market Coverage",
      icon: <GlobeAltIcon className="h-12 w-12" />,
      color: "from-indigo-500 to-blue-400"
    },
    { 
      value: "35+", 
      label: "Successful Product Launches",
      icon: <RocketLaunchIcon className="h-12 w-12" />,
      color: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <div className="md:-mt-20  overflow-hidden md:px-0 px-2 mt-9">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: index * 0.2
            }}
          >
            <div className="group relative h-full flex items-center justify-center flex-col bg-purple-600 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:bg-purple-700">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 ${stat.color} rounded-3xl transition-opacity duration-300`} />
              
              {/* Icon */}
<div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
  <motion.div whileHover={{ scale: 1.1 }} className="text-white">
    {stat.icon}
  </motion.div>
</div>


              {/* Content */}
              <div className="relative">
                <motion.h2 
                  className="text-6xl font-bold text-white text-center  bg-clip-text text-transparent bg-gradient-to-br "
                  style={{ backgroundImage: `linear-gradient(to right, ${stat.color.replace('from-', '#').replace('to-', ', #')})` }}
                  whileInView={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  {stat.value}
                </motion.h2>
                <p className="text-xl font-bold text-center text-gray-300 leading-relaxed">
                  {stat.label}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-4/5 group-hover:transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RealNumbers;