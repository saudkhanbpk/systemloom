"use client";
import React, { useState, useEffect } from "react";
import tclogo from "../../../public/assets/icons/Tclogo1.png";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src={tclogo} 
          alt="Techcreator Logo" 
          width={100} 
          height={40} 
          className="md:w-[150px] md:h-[60px] w-[100px] h-[40px]"
        />
      </div>

      {/* Contact Info */}
      <div className="flex items-center md:gap-3 gap-2 bg-[#9A00FF] text-white md:px-4 px-2 py-2 rounded-full shadow-lg hover:bg-[#7a00cc] transition">
        <PhoneCall size={18} />
        <a href="tel:+13214073272" className="text-sm font-medium text-nowrap">
          +1 (321) 407-3272
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
