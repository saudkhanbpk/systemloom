"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import AppointmentSection from "../shared/AppointmentSection";

const Footer = () => {
  return (
    <footer className="bg-black text-white  px-6 md:px-14 md:mt-16 mt-9">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-col justify-between items-center gap-8 border-t border-gray-700 pt-8">
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-4">
          {[
            { href: "https://www.facebook.com/techcreatorfb/", icon: faFacebookF, bg: "bg-blue-600" },
            { href: "https://www.linkedin.com/company/techcreator", icon: faLinkedinIn, bg: "bg-blue-700" },
            { href: "https://www.youtube.com/@techcreator9512", icon: faYoutube, bg: "bg-red-600" },
            { href: "https://www.instagram.com/techcreatorco/", icon: faInstagram, bg: "bg-pink-600" },
          ].map(({ href, icon, bg }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} transition duration-300 hover:scale-110 shadow-lg`}
              aria-label="Social Media"
            >
              <FontAwesomeIcon icon={icon} className="text-white text-xl" />
            </Link>
          ))}
        </div>

        {/* Contact Section */}
     
          <div className="space-y-4 flex md:flex-row flex-col md:items-center items-start md:gap-8 gap-2 text-gray-400">
            
            {/* Email */}
            <div className="flex items-center mt-3 gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600">
                <AiOutlineMail size={22} className="text-white" />
              </div>
              <Link href="mailto:contact@techcreator.co" className="hover:text-white transition">
                contact@techcreator.co
              </Link>
            </div>

            {/* WhatsApp */}
            <Link href="https://wa.me/13214073272" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600">
                <FaWhatsapp size={22} className="text-white" />
              </div>
              <span>+1 (321) 407-3272</span>
            </Link>

            {/* Phone Call */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600">
                <PhoneCall size={22} className="text-white" />
              </div>
              <a href="tel:+13214073272" className="hover:text-white transition">
                +1 (321) 407-3272
              </a>
            </div>
          </div>

          {/* Appointment Section */}
          <div className="md:mt-3 md:mb-0 mb-6">
            <AppointmentSection />
          </div>
          <p className="text-base border-t p-3 text-gray-400 ">
            © 2025 <span className="text-[#9A00FF]">TechCreator</span>. All
            rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
