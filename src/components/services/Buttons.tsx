"use client"
import React from 'react'
import { motion } from "framer-motion"
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaWhatsapp } from "react-icons/fa";


const Buttons = () => {
  const handleStrategyClick = () => {
    window.open("https://calendly.com/contact-techcreator/30min", "_blank");
  }

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+447511801699", "_blank");
  }

  return (
    <div className='flex gap-4 mt-6'>
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-purple-700 p-2  rounded-full text-white'
        onClick={handleStrategyClick}>
        <AiOutlineCalendar size={30}/>
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#10B981" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-green-600 p-2  rounded-full text-white'
        onClick={handleWhatsappClick}>
        <FaWhatsapp size={30}/>
      </motion.button>
    </div>
  )
}

export default Buttons
