"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/assets/icons/Logo.png';
import personIcon from "../../../public/assets/landingPage/Vector.png";
import { CiLogout } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaHome, FaInfoCircle, FaServicestack, FaTags, FaBlog, FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For login state

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    { name: "Pricing", href: "/pricing", icon: <FaTags /> },
    { name: "Blog", href: "/blog", icon: <FaBlog /> },
    { name: "Portfolio", href: "/portfolio", icon: <FaProjectDiagram /> },
    { name: "Career", href: "/career", icon: <FaBriefcase /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="text-white absolute z-10 px-4 py-2 w-full text-nowrap">
      <div className="md:pr-10 md:pl-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex justify-center gap-2 items-center">
            <div>
              <Image src={Logo} alt="logo" width={48} height={50} />
            </div>
            <div>
              <span className="text-[#FFFFFF] text-lg font-semibold">
                Tech <br /> Creator
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base rounded-md font-medium hover:bg-[#9A00FF] text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Person Icon with Dropdown */}
          <div className="hidden md:block relative">
            <Image
              src={personIcon}
              alt="person_image"
              width={32.11}
              height={32.11}
              className="w-[32.11px] h-[32.11px] cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-fit bg-white rounded-md shadow-lg py-2 z-20">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <CiLogout className="text-xl text-[#9A00FF]" /> Logout
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <IoMdLogIn className="text-xl text-[#9A00FF]" /> Login
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <SiGnuprivacyguard className="text-xl text-[#9A00FF]" /> Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#9A00FF] z-20 rounded-md mb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              >
                {item.icon} {item.name}
              </Link>
            ))}
            <button className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700">
              <CiLogout className="text-white " /> Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
