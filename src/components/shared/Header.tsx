"use client";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

import {
  FaHome,
  FaInfoCircle,
  FaTags,
  FaBlog,
  FaProjectDiagram,
  FaWrench,
  FaPencilRuler,
  FaBriefcase,
  FaEnvelope,
  FaDesktop,
  FaMobileAlt,
  FaPaintBrush,
  FaCogs,
  FaTasks,
  FaSearch,
  FaCheck,
  FaBullhorn,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import systemLoomLogo from "../../../public/assets/icons/mainlogo.png";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  let timer: NodeJS.Timeout;
  const [scrolling, setScrolling] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navItems = [
    { name: "Home", href: "/", /* icon: <FaHome /> */ },
    { name: "About Us", href: "/about", /* icon: <FaInfoCircle /> */ },
    {
      name: "Services",
      href: "#",
      /* icon: <FaDesktop /> */
      dropdown: [
        {
          name: "Web Development",
          href: "/services/web-development",
          description: "For Creating custom websites and applications."
          /* icon: <FaDesktop /> */
        },
        {
          name: "Mobile App Development",
          href: "/services/mobile-app-development-company",
          description: "Creating custom mobile apps for iOS and Android."
          /* icon: <FaMobileAlt /> */
        },
        {
          name: "IT Recruitment",
          href: "/services/ui-ux-design-agency",
          description: "Solutions that help find the right talent."
          /* icon: <FaPaintBrush /> */
        },
        {
          name: "IT Consulting and Digital Advisory",
          href: "/services/devops",
          description: "Provide expert advice and solutions to businesses."
          /* icon: <FaCogs /> */
        },
        {
          name: "Digital Product Design",
          href: "/services/project-management",
          description: "For creating innovative user experiences."
          /* icon: <FaTasks /> */
        },
        {
          name: "Quality Assurance",
          href: "/services/seo-services-for-small-business",
          description: "Complete and rigorous testing and analysis."
          /* icon: <FaSearch /> */
        },
        {
          name: "IT Outstaffing",
          href: "/services/software-maintenance-services",
          description: "Best IT professionals to complete client requests."
          /* icon: <FaWrench /> */
        },
        {
          name: "End-to-End Development",
          href: "/services/affordable-graphic-design-services",
          description: "Complete project lifecycle from concept to launch."
          /* icon: <FaPencilRuler /> */
        },
        {
          name: "Software Re-engineering And Maintenance",
          href: "/services/web-qa-tester",
          description: "Software for improving performance and maintenance."
          /* icon: <FaCheck /> */
        },
        /* {
          name: "Digital Marketing ",
          href: "/services/digital-marketing-for-software-companies",
          icon: <FaBullhorn /> 
        }, */
      ],
    },
    { name: "Pricing", href: "/pricing", icon: <FaTags /> },
    { name: "Blog", href: "/blog", icon: <FaBlog /> },
    { name: "Portfolio", href: "/portfolio", icon: <FaProjectDiagram /> },
    { name: "Career", href: "/career", icon: <FaBriefcase /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };



  const handleMouseEnter = (name: string) => {
    clearTimeout(timer);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };



  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-2 bg-white backdrop-blur-lg shadow-lg
    }`}>
      <div className="md:px-9 px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}

          className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center">
            <Image
              src={systemLoomLogo}
              alt="systemloom_logo"
              priority
              className="h-50 w-auto object-contain mt-[17px]"
            />
          </Link>


          <div className="flex items-center gap-9 tex-t">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span
                        className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#0891b2] hover:text-white text-black ${pathname === item.href
                          ? "bg-[#0891b2] text-white"
                          : ""
                          }`}
                      >
                        {item.name}
                      </span>
                      {activeDropdown === item.name && (
                        <div className="fixed left-0 top-20 w-screen bg-white text-black shadow-lg z-20">
                          <div className="w-full h-full flex">
                            {/* Left Side - Full Width Services List */}
                            <div className="w-full p-8">
                              <h3 className="text-xl font-bold mb-6 text-[#302f2f]">All Services</h3>
                              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {item.dropdown.map((subItem) => (
                                  <li
                                    key={subItem.name}
                                    className={`px-6 py-4 rounded-lg transition-all duration-200 border-l-4 ${pathname === subItem.href
                                      ? "border-[#0891B2] bg-blue-50"
                                      : "border-transparent hover:border-[#0891B2] hover:bg-gray-50"
                                      }`}
                                  >
                                    <Link
                                      href={subItem.href}
                                      className="flex flex-col"
                                    >
                                      <h2 className="font-bold text-black  text-lg"> {subItem.name} </h2>
                                      <p className="text-sm text-gray-600 mt-2"> {subItem.description} </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#0891b2] hover:text-white text-black ${pathname === item.href ? "bg-[#0891b2] text-white" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="hide-at-1119">
              <p className="flex gap-2 items-center text-base">
                <PhoneCall color="#5de0e6" />
                <span className="text-black">
                  <a href="callto:++13213646803" className="hover:underline">
                    +44 0788 6554875
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="md:hidden block">
            <p className=" flex gap-2 items-center text-sm ">
              <PhoneCall color="#5de0e6" size={15} />
              <span className="text-black">
                <a href="tel:+13213646803" className="hover:underline">
                  +44 0788 6554875
                </a>
              </span>
            </p>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none text-black"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>

          </div>
        </motion.div>

      </div>

      {isOpen && (
        <div className="lg:hidden bg-white z-20 rounded-md mb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  // Dropdown menu for Services
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        setActiveDropdown(item.name === activeDropdown ? null : item.name);
                      }}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200 ${pathname === item.href ? "bg-[#5de0e6] text-white" : ""
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon} {item.name}
                      </span>
                      <span>{activeDropdown === item.name ? "-" : "+"}</span>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-6">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsOpen(false);
                            }}
                            className="flex items-center gap-3 text-wrap px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
                          >
                            {/* {subItem.icon} */} {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular menu items
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200 ${pathname === item.href ? "bg-[#5de0e6] text-white" : ""
                      }`}
                  >
                    {item.icon} {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
};

export default Header;
