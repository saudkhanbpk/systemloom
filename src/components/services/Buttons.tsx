"use client";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai'; 
import { FaWhatsapp } from "react-icons/fa";
import ContactDialog from './ContactDialog';

const Buttons = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog state
  const router = useRouter();

  // Open the dialog
  const handleContactUsClick = () => {
    setIsDialogOpen(true);
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  // Open the strategy link in a new tab
  const handleStrategyClick = () => {
    window.open("https://calendly.com/contact-techcreator/30min", "_blank");
  }

  // Open the WhatsApp link in a new tab
  const handleWhatsappClick = () => {
    window.open("https://wa.me/+447511801699", "_blank");
  }

  // Close dialog if click is outside of the dialog
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dialog = document.getElementById('contact-dialog');
      if (dialog && !dialog.contains(event.target as Node)) {
        setIsDialogOpen(false);
      }
    };

    // Add event listener
    if (isDialogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDialogOpen]);

  return (
    <div className='flex gap-4 mt-6 md:px-0 px-3 mb-4'>
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#7E22CE" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-purple-700 p-2 rounded-full text-white'
        onClick={handleStrategyClick}>
        <AiOutlineCalendar size={30}/>
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#10B981" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-green-600 p-2 rounded-full text-white'
        onClick={handleWhatsappClick}>
        <FaWhatsapp size={30}/>
      </motion.button>

      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: "#FF5722" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-orange-500 p-2 rounded-full text-white'
        onClick={handleContactUsClick}>
        <AiOutlineMail size={30}/>
      </motion.button>

      {/* Conditionally render the dialog */}
      {isDialogOpen && (
        <div className="absolute inset-0 flex justify-center items-center z-50">
          <div className=" w-full max-w-lg p-6" id="contact-dialog">
            {/* Contact Dialog Component */}
            <ContactDialog />

            {/* Close Button */}
           
          </div>
        </div>
      )}
    </div>
  )
}

export default Buttons;
