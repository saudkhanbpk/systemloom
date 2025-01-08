"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai'; 
import { FaWhatsapp } from "react-icons/fa";

const Buttons = () => {
  const router = useRouter();

  // Open the strategy link in the same tab
  const handleStrategyClick = () => {
    window.location.href = "https://calendly.com/contact-techcreator/30min";
  };

  // Open the WhatsApp link in the same tab
  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/+447511801699";
  };

  // Navigate to the contact page
  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <div className='flex gap-4 mt-6 md:px-0 px-3 mb-4 justify-center sm:justify-start'>
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-purple-700 p-2 rounded-full text-white'
        onClick={handleStrategyClick}
      >
        <AiOutlineCalendar size={30} />
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#10B981" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-green-600 p-2 rounded-full text-white'
        onClick={handleWhatsappClick}
      >
        <FaWhatsapp size={30} />
      </motion.button>

      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#FF5722" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-orange-500 p-2 rounded-full text-white'
        onClick={handleContactClick}
      >
        <AiOutlineMail size={30} />
      </motion.button>
    </div>
  );
};

export default Buttons;
