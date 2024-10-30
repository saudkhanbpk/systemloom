import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/assets/icons/Logo.png'; 
import personIcon from "../../../public/assets/landingPage/Vector.png"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

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
          <div className="hidden md:block">
            <Image
              src={personIcon}
              alt="person_image"
              width={32.11}
              height={32.11}
              className="w-[32.11px] h-[32.11px]"
            />
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
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
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ))}
            <button className="block w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
