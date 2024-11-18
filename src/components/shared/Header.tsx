import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/icons/Logo.png";
import personIcon from "../../../public/assets/landingPage/Vector.png";
import { CiLogout } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaHome, FaInfoCircle, FaServicestack, FaTags, FaBlog, FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { setUser } from "@/redux/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((store: RootState) => store.auth);

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    // { name: "Pricing", href: "/pricing", icon: <FaTags /> },
    { name: "Blog", href: "/blog", icon: <FaBlog /> },
    { name: "Portfolio", href: "/portfolio", icon: <FaProjectDiagram /> },
    { name: "Career", href: "/career", icon: <FaBriefcase /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${backend_url}/api/v1/user/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        router.push("/");
        toast.success(res.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Failed to logout');
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="text-white absolute z-10 px-4 py-2 w-full text-nowrap">
      <div className="lg:pr-10 lg:pl-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex justify-center gap-2 items-center">
            <Image src={Logo} alt="logo" width={48} height={50} />
            <span className="text-[#FFFFFF] text-lg font-semibold">
              TechCreator
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF] text-white
                    ${pathname === item.href ? 'bg-[#9A00FF] text-white' : ''}  
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

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
                {user ? (
                  <>
                    {user.role === "admin" && (
                      <Link
                        href="/admin"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <SiGnuprivacyguard className="text-xl text-[#9A00FF]" /> Admin
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <CiLogout className="text-xl text-[#9A00FF]" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <IoMdLogIn className="text-xl text-[#9A00FF]" /> Login
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <SiGnuprivacyguard className="text-xl text-[#9A00FF]" /> Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

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

      {isOpen && (
        <div className="lg:hidden bg-[#9A00FF] z-20 rounded-md mb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700
                  ${pathname === item.href ? 'bg-[#0c080f] text-white' : ''}  
                `}
              >
                {item.icon} {item.name}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700"
              >
                <CiLogout className="text-white" /> Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700"
                >
                  <IoMdLogIn className="text-white" /> Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700"
                >
                  <SiGnuprivacyguard className="text-white" /> Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
